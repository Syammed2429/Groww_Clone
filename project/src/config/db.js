const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://rambhu:masaischool@cluster0.dfin9.mongodb.net/companies?retryWrites=true&w=majority"
  );
};

module.exports = connect;
