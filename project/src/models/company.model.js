const mongoose = require("mongoose");
//schema for company

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo_image: { type: String, required: true },
  sharePrice: { type: Array, required: true },
  today_low: { type: Number, required: true },
  today_high: { type: Number, required: true },
  week_52_low: { type: Number, required: true },
  week_52_high: { type: Number, required: true },
  open_price: { type: Number, required: true },
  prev_close: { type: Number, required: true },
  volume: { type: String, required: true },
  value: { type: String, required: true },
  analyst_estimate: { type: String, required: true },
  buy: { type: String, required: true },
  hold: { type: String, required: true },
  sale: { type: String, required: true },
  marketcap: { type: String, required: true },
  pe_ratio: { type: String, required: true },
  pb_ratio: { type: String, required: true },
  industry_pe: { type: Number, required: true },
  roe: { type: String, required: true },
  eps_ttm: { type: String, required: true },
  dividend_yield: { type: String, required: true },
  book_value: { type: String, required: true },
  about: { type: String, required: true },
  parent_organisation: { type: String, required: true },
  founded: { type: Number, required: true },
  managing_director: { type: String, required: true },
  nse_symbol: { type: String, required: true },
  promoters: { type: String, required: true },
  retail_others: { type: String, required: true },
  other_domestic_institution: { type: String, required: true },
});

const Company = mongoose.model("companies", companySchema);

module.exports = Company;
