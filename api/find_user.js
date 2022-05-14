const express = require("express");
const Router = express.Router();
const User = require("../model/user");
const verifyToken = require("../token/verifyToken");
const validate_find_user = require("../validation/validate_find_user");

Router.post("/", verifyToken, async (req, res) => {
  // console.log(req.body)
  const request_isvalid = validate_find_user(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });
  const user = await User.findById(req.body.user);

  if (!user)
    return res
      .status(400)
      .json({
        error: true,
        errMessage:
          "an unexpected error occured please login again to access this api",
      });
  res.status(200).json({ error: false, message: user });
});
module.exports = Router;
