import { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // reuse same styles

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loading, setLoading] = useState(false);

  const handleSellClick = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:3002/trade/sell",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "SELL",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      console.log(res.data);
      alert("Stock sold successfully!");
      closeSellWindow();
    } catch (err) {
      console.error("Sell failed:", err.response?.data || err.message);
      alert(
        err.response?.data?.message ||
          "Failed to sell stock. See console for details."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button
            className="btn btn-red"
            onClick={handleSellClick}
            disabled={loading}
          >
            {loading ? "Selling..." : "Sell"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
