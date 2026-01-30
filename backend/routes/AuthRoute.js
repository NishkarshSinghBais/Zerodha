const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const passport = require("passport");
const { createSecretToken } = require("../util/SecretToken");

const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);

router.post("/verify", userVerification);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const user = req.user;

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.redirect("https://zerodha-2-tbun.onrender.com");
  }
);

module.exports = router;

