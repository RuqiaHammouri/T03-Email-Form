const express = require("express");
const { getWeathers } = require("../controllers/weather");

const mailRouter = express.Router();
mailRouter.get("/mail", getWeathers);

module.exports = mailRouter;