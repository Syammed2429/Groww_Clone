const express = require("express");
const Looser = require("../models/toploosers.model");
const router = express.Router();

router.post("", async (req, res) => {
  const looser = await Looser.create(req.body);
  return res.status(200).send({ looser });
});

router.get("", async (req, res) => {
  const looser = await Looser.find().populate("company").lean().exec();
  // looser.forEach(function (data) {
  //   let nam = data.company.name;
  //   console.log(nam);
  // });
  // res.render("dashboard.ejs", {
  //   looser: looser,
  // });
  res.status(201).send({ looser });
});

module.exports = router;
