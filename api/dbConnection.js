const mongoose = require("mongoose");

const uri =
  // "mongodb+srv://aditya:aditya@cluster0.gps4b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  "mongodb+srv://ayushbhatt963:ayushbhatt963@cluster0.jiog0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose;

function dbConnection() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
