const { model, Schema } = require("mongoose");

const HoldingSchema = new Schema({
   userId: {
    type: Schema.Types.ObjectId,
    ref: "User", // this connects holdings to a user
    required: true,
  },
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const Holding = model("Holding", HoldingSchema);

module.exports = Holding;
