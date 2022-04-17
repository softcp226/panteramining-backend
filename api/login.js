const express = require("express");
const Router = express.Router();
const User = require("../model/user");
const genToken = require("../token/genToken");
const verifyPassword = require("../hash/comparePassword");
const validateLogin = require("../validation/validateLogin");

Router.post("/", async (req, res) => {
  const isvalid = validateLogin(req.body);
  if (isvalid != true)
    return res.status(400).json({ error: true, errMessage: isvalid });
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log("use", user);
    if (!user)
      return res
        .status(400)
        .json({ error: true, errMessage: "invalid Email or Password " });

    console.log("user", user);

    if (!user.password)
      return res.status(403).json({
        error: true,
        errMessage:
          "please register again, your previous registration was not complete",
      });
    const passwordIsverified = await verifyPassword(
      req.body.password,
      user.password
    );
    console.log(passwordIsverified);
    if (passwordIsverified != true)
      return res
        .status(400)
        .json({ error: true, errMessage: "invalid Email or password " });

    const token = genToken(user._id);
    res.status(200).json({
      error: false,
      message: { user: user._id },
      token,
    });
  } catch (err) {
    res.status(400).json({ error: true, errMessage: err.message });
  }
});

module.exports = Router;
