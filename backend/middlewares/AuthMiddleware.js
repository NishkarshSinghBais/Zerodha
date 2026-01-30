const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      (req.headers.authorization && req.headers.authorization.split(" ")[1]);

    if (!token) {
      return res
        .status(401)
        .json({ status: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    req.user = { id: user._id, username: user.username, email: user.email };

    next();
  } catch (err) {
    console.error("Error verifying user:", err);

    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ status: false, message: "Token expired" });
    } else if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ status: false, message: "Invalid token" });
    }

    res.status(500).json({ status: false, message: "Server error" });
  }
};
