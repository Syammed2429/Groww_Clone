const mongoose = require("mongoose");
const looserSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies",
    required: true,
  },
});
const Looser = mongoose.model("toploosers", looserSchema);

module.exports = Looser;
