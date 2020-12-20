module.exports = {
  init: init,
};

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = process.env;

var mongoose = require("mongoose");

var url = `mongodb://`;

if (MONGO_USERNAME) {
  url += `${MONGO_USERNAME}:${MONGO_PASSWORD}@`;
}
url += `${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

function init() {
  var options = {
    promiseLibrary: require("bluebird"),
    useNewUrlParser: true,
  };

  mongoose
    .connect(url, options)
    .then(function () {
      console.log("MongoDB connection successful.");
    })
    .catch(function (error) {
      console.log(error.message);
      console.log("Error occurred while connecting to DB");
    });
}
