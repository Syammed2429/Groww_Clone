const mongoose = require("mongoose");

//schema for top gainer

const gainerSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies",
    required: true,
  },
});

const Gainer = mongoose.model("topgainers", gainerSchema);

module.exports = Gainer;
