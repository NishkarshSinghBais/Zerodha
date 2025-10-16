const { model, Schema } = require("mongoose");

const OrderSchema = new Schema({
   userId: {
    type: Schema.Types.ObjectId,
    ref: "User", // this connects holdings to a user
    required: true,
  },
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

const Order = model("Order", OrderSchema);

module.exports = Order;