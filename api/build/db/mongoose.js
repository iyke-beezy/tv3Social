"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = require("dotenv");

var _debug = _interopRequireDefault(require("debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();
var DEBUG = (0, _debug["default"])('dev');
var NODE_ENV = process.env.NODE_ENV;
var options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};
var mongoUrl = process.env.MONGODB_URI;

_mongoose["default"].connect(mongoUrl, options).then(function () {
  DEBUG("MongoDB is connected");
})["catch"](function (err) {
  DEBUG("MongoDB connection unsuccessful");
  DEBUG(err);
});
//# sourceMappingURL=mongoose.js.map