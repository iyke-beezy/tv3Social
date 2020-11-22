"use strict";

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-json");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.url.to-json");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime/runtime");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _dotenv = require("dotenv");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _dotenv.config)();
var jwtPrivateSecret = process.env.JWT_PRIVATE_SECRET.replace(/\\n/g, "\n"); //build the admin schema

var adminSchema = _mongoose["default"].Schema({
  fullName: {
    type: String,
    required: [true, 'fullName is required']
  },
  username: {
    type: String,
    required: [true, 'username is required']
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  timestamp: {
    type: Date,
    "default": Date.now
  },
  lastLogin: Date
});

adminSchema.pre("save", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!this.password || !this.isModified("password"))) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", next);

          case 2:
            _context.next = 4;
            return _bcrypt["default"].hash(this.password, parseInt(process.env.HASH));

          case 4:
            this.password = _context.sent;
            next();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()); //compare passwords for login

adminSchema.methods.comparePassword = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(password) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _bcrypt["default"].compare(password, this.password);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}(); //remove password from user object when requested 


adminSchema.methods.toJSON = function () {
  var user = this;
  var userObj = user.toObject();
  delete userObj.password;
  return userObj;
}; //generate private jwt codes for authorization which expires in 10days


adminSchema.methods.generateVerificationToken = function () {
  return _jsonwebtoken["default"].sign({
    id: this._id
  }, jwtPrivateSecret, {
    expiresIn: "10d",
    algorithm: "RS256"
  });
};

adminSchema.statics.checkExistingField = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(field, value) {
    var checkField;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Org.findOne(_defineProperty({}, "".concat(field), value));

          case 2:
            checkField = _context3.sent;
            return _context3.abrupt("return", checkField);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

var Admin = _mongoose["default"].model('Admin', adminSchema);

var _default = Admin;
exports["default"] = _default;
//# sourceMappingURL=admin.model.js.map