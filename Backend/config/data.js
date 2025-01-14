const { default: mongoose } = require("mongoose");

const DBconnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ubrn");
    console.log("db connect");
    
  } catch (error) {
    console.log("error");
  }
};

module.exports = DBconnect;
