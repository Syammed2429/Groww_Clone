const mongoose = require("mongoose");

// schema for top news

const newsSchema = new mongoose.Schema({
  news: { type: String, required: true },
  agency: { type: String, required: true },
  link: { type: String, required: true },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies",
    required: true,
  },
});

const News = mongoose.model("news", newsSchema);

module.exports = News;
