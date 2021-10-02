const express = require("express");
const Gainer = require("../models/topgainer.model");

const router = express.Router();

//post

router.post("", async (req, res) => {
  const gainer = await Gainer.create(req.body);
  return res.status(200).send({ gainer });
});
//get
router.get("", async (req, res) => {
  const gainer = await Gainer.find().populate("company").lean().exec();
  // gainer.forEach(function (data) {
  //   let nam = data.company.name;
  //   console.log(nam);
  // });
  // res.render("dashboard.ejs", {
  //   gainer: gainer,
  // });

  return res.status(201).send({ gainer });
});

module.exports = router;
