"use strict";

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportJwt = require("passport-jwt");

var _dotenv = require("dotenv");

var _admin = _interopRequireDefault(require("../models/admin.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();
var jwtPublicSecret = process.env.JWT_PUBLIC_SECRET.replace(/\\n/g, '\n');
var options = {
  secretOrKey: jwtPublicSecret,
  algorithms: ['RS256'],
  passReqToCallback: true,
  ignoreExpiration: true
};
options.jwtFromRequest = _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();

_passport["default"].use(new _passportJwt.Strategy(options, function (req, jwtPayload, done) {
  _admin["default"].findOne({
    _id: jwtPayload.id
  }).then(function (admin) {
    if (admin) {
      delete admin._doc.password;
      done(null, admin);
    } else {
      done(null, false);
    }
  })["catch"](function (err) {
    if (err) {
      return done(err, false);
    }
  });
}));

var _default = _passport["default"];
exports["default"] = _default;
//# sourceMappingURL=config.js.map