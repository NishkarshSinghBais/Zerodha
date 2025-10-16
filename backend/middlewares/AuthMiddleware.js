const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ status: false, message: "No token provided" });
    }

    // Verify the JWT
    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ status: false, message: "Invalid token" });
      }

      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(404).json({ status: false, message: "User not found" });
      }

      // ✅ Attach user data to request
      req.user = { id: user._id, username: user.username, email: user.email };

      // ✅ Continue to next route
      next();
    });
  } catch (err) {
    console.error("Error verifying user:", err);
    res.status(500).json({ status: false, message: "Server error" });
  }
};