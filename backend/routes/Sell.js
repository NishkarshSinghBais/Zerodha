const { userVerification } = require("../middlewares/AuthMiddleware");
const Holding = require("../models/HoldingsModel");
const Order = require("../models/OrderModel");
const Position = require("../models/PositionsModel");

const router = require("express").Router();

router.post("/sell", userVerification, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const userId = req.user.id;

    const existingHolding = await Holding.findOne({ userId, name });
    if (!existingHolding || existingHolding.qty < qty) {
      return res.status(400).json({ error: "Not enough holdings to sell" });
    }

    const newOrder = new Order({
      userId,
      name,
      qty,
      price,
      mode,
      type: "SELL",
    });
    await newOrder.save();

    const remainingQty = existingHolding.qty - qty;
    if (remainingQty === 0) {
      await Holding.deleteOne({ userId, name });
    } else {
      existingHolding.qty = remainingQty;
      await existingHolding.save();
    }

    const existingPosition = await Position.findOne({ userId, name });
    if (existingPosition) {
      const remainingPosQty = existingPosition.qty - qty;
      if (remainingPosQty <= 0) {
        await Position.deleteOne({ userId, name });
      } else {
        existingPosition.qty = remainingPosQty;
        existingPosition.price = price;
        await existingPosition.save();
      }
    }

    res.json({ message: "Stock sold successfully", order: newOrder });
  } catch (error) {
    console.error("Sell Error:", error);
    res.status(500).json({ error: "Error processing sell order" });
  }
});

module.exports = router;
