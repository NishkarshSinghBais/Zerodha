const { model, Schema } = require("mongoose");

const PositionsSchema = new Schema({
   userId: {
    type: Schema.Types.ObjectId,
    ref: "User", // this connects holdings to a user
    required: true,
  },
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const Position = model("Position", PositionsSchema);

module.exports = Position;