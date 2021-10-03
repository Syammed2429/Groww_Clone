const express = require("express");

const connect = require("./config/db");

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

//import controller
const companyController = require("./controller/company.controller");
const topGainerController = require("./controller/topgainer.controller");
const topLooserController = require("./controller/toploosers.controller");
const topnewsController = require("./controller/topnews.controller");

app.use("/companies", companyController);
app.use("/gainers", topGainerController);
app.use("/loosers", topLooserController);
app.use("/news", topnewsController);

app.listen(6334, async () => {
  await connect();
  console.log("listening on 6334");
});

