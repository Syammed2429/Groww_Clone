const express = require("express");

const Company = require("../models/company.model");

const router = express.Router();

//post

router.post("", async (req, res) => {
  const company = await Company.create(req.body);
  return res.status(200).send({ company });
});

//get
router.get("", async (req, res) => {
  const company = await Company.find();
  // company.forEach(function (data) {
  //   let name = data.sharePrice[0];
  //   console.log(name);
  // });

  res.render("dashboard.ejs", {
    company: company,
  });
});

router.get("/stocksdetails/:id", async (req, res) => {
  const company = await Company.findById(req.params.id).lean().exec();
  // res.send({ company });
  // console.log(company.name);
  res.render("stocksdetails.ejs", {
    company: company,
  });
});

//patch
router.patch("/:id", async (req, res) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  return res.status(201).send({ company });
});

module.exports = router;
