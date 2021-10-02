const express = require("express");
const News = require("../models/topnews.model");
const router = express.Router();

router.post("", async (req, res) => {
  const news = await News.create(req.body);
  return res.status(200).send({ news });
});

router.get("", async (req, res) => {
  const news = await News.find().populate("company").lean().exec();

  // news.forEach(function (data) {
  //   let nam = data.company.name;
  //   console.log(nam);
  //   let share = data.company.sharePrice[0];
  //   console.log(share);
  //   let image = data.company.logo_image;
  //   console.log(image);
  // });

  // res.render("dashboard.ejs", {
  //   news: news,
  // });

  return res.status(201).send({ news });
});

module.exports = router;
