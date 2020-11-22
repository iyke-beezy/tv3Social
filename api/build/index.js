"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.function.name");

var _http = _interopRequireDefault(require("http"));

var _debug = _interopRequireDefault(require("debug"));

var _dotenv = require("dotenv");

var _app = _interopRequireDefault(require("./app"));

require("./db/mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();
var DEBUG = (0, _debug["default"])("dev");
var PORT = process.env.PORT || 5000;

var server = _http["default"].createServer(_app["default"]);

process.on("uncaughtException", function (error) {
  DEBUG("uncaught exception: ".concat(error.message));
  process.exit(1);
});
process.on("unhandledRejection", function (err) {
  DEBUG(err);
  DEBUG("Unhandled Rejection:", {
    name: err.name,
    message: err.message || err
  });
  process.exit(1);
});
server.listen(PORT, function () {
  DEBUG("server running on http://localhost:".concat(PORT, " in ").concat(process.env.NODE_ENV, " mode"));
});
//# sourceMappingURL=index.js.map