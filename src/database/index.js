const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/3000", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose.connect('mongodb://localhost:27017/test');
mongoose.Promise = global.Promise;

module.exports = mongoose;
