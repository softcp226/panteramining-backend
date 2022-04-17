const express = require("express");
const app = express();
app.use(express.json());

app.use("/", express.static("html"));
const login = require("./api/login");
app.use("/api/user/login", login);
const register = require("./api/register");
app.use("/api/newuser/register", register);
const complete_registration = require("./api/complete-registration");
app.use("/api/new_user/complete_registration", complete_registration);

const find_user=require("./api/find_user")
app.use("/api/user/find",find_user)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`running on port ${port}`));
