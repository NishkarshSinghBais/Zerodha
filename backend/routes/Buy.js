const { userVerification } = require("../middlewares/AuthMiddleware");
const Holding = require("../models/HoldingsModel");
const Order = require("../models/OrderModel");
const Position = require("../models/PositionsModel");

const router = require("express").Router();

router.post("/buy", userVerification, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const userId = req.user.id;
    const newOrder = new Order({ userId, name, qty, price, mode });
    await newOrder.save();
    let existingHolding = await Holding.findOne({ userId, name });
    if (existingHolding) {
      const totalQty = existingHolding.qty + qty;
      const newAvg =
        (existingHolding.avg * existingHolding.qty + price * qty) / totalQty;
      existingHolding.qty = totalQty;
      existingHolding.avg = parseFloat(newAvg.toFixed(2));
      existingHolding.price = price;
      await existingHolding.save();
    } else {
      const newHolding = new Holding({
        userId,
        name,
        qty,
        avg: price,
        price,
        net: "0%",
        day: "0%",
      });
      await newHolding.save();
    }
    let position = await Position.findOne({ userId, name });
    if (position) {
      position.qty += qty;
      position.avg =
        (position.avg * position.qty + price * qty) / (position.qty + qty);
      position.price = price;
      await position.save();
    } else {
      const newPosition = new Position({
        userId,
        product: "CNC",
        name,
        qty,
        avg: price,
        price,
        net: "0%",
        day: "0%",
        isLoss: false,
      });
      await newPosition.save();
    }
    res.json({ message: "Stock purchased successfully", order: newOrder });
  } catch (error) {
    console.error("Buy Error:", error);
    res.status(500).json({ error: "Error processing buy order" });
  }
});
module.exports = router;
