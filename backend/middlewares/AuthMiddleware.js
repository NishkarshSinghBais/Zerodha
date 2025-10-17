const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  try {
    // ✅ Get token from cookies or Authorization header
    const token =
      req.cookies.token ||
      (req.headers.authorization && req.headers.authorization.split(" ")[1]);

    if (!token) {
      return res
        .status(401)
        .json({ status: false, message: "No token provided" });
    }

    // Verify the JWT
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    // Find user by ID from decoded token
    const user = await User.findById(decoded.id).select("-password"); // exclude password
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    // ✅ Attach user data to request
    req.user = { id: user._id, username: user.username, email: user.email };

    // ✅ Continue to next middleware/route
    next();
  } catch (err) {
    console.error("Error verifying user:", err);

    // Handle JWT errors specifically
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ status: false, message: "Token expired" });
    } else if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ status: false, message: "Invalid token" });
    }

    res.status(500).json({ status: false, message: "Server error" });
  }
};
