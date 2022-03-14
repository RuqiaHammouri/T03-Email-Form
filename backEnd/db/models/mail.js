const mongoose = require("mongoose");

const mails = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Mails", mails);
