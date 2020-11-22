"use strict";

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

var _debug = _interopRequireDefault(require("debug"));

var _passportLocal = require("passport-local");

var _passport = _interopRequireDefault(require("passport"));

var _admin = _interopRequireDefault(require("../models/admin.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var DEBUG = (0, _debug["default"])('dev');
var authFields = {
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
};

_passport["default"].use('login', new _passportLocal.Strategy(authFields, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, username, password, cb) {
    var admin, checkPassword;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _admin["default"].checkExistingField('username', username);

          case 3:
            admin = _context.sent;

            if (!(!admin || !admin.password)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", cb(null, false, {
              message: 'Email is not registered.'
            }));

          case 6:
            _context.next = 8;
            return admin.comparePassword(password);

          case 8:
            checkPassword = _context.sent;

            if (checkPassword) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", cb(null, false, {
              message: 'Incorrect password.'
            }));

          case 11:
            admin.lastLogin = Date.now();
            admin.markModified('lastLogin');
            _context.next = 15;
            return admin.save();

          case 15:
            return _context.abrupt("return", cb(null, admin, {
              message: 'Logged In Successfully'
            }));

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            DEBUG(_context.t0);
            return _context.abrupt("return", cb(null, false, {
              statusCode: 400,
              message: _context.t0.message
            }));

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 18]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}()));

_passport["default"].use('signup', new _passportLocal.Strategy(authFields, /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, username, password, cb) {
    var checkEmail, checkUsername, newAdmin;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _admin["default"].checkExistingField('email', req.body.email);

          case 3:
            checkEmail = _context2.sent;

            if (!checkEmail) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", cb(null, false, {
              statusCode: 409,
              message: 'Email already registered, log in instead'
            }));

          case 6:
            _context2.next = 8;
            return _admin["default"].checkExistingField('username', req.body.username);

          case 8:
            checkUsername = _context2.sent;

            if (!checkUsername) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", cb(null, false, {
              statusCode: 409,
              message: 'Username exists, please try another'
            }));

          case 11:
            newAdmin = new _admin["default"]();
            newAdmin.fullName = req.body.fullName;
            newAdmin.username = req.body.username;
            newAdmin.password = req.body.password;
            _context2.next = 17;
            return newAdmin.save();

          case 17:
            return _context2.abrupt("return", cb(null, newAdmin, {
              statusCode: 200,
              message: 'success'
            }));

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](0);
            DEBUG(_context2.t0);
            return _context2.abrupt("return", cb(null, false, {
              statusCode: 400,
              message: _context2.t0.message
            }));

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 20]]);
  }));

  return function (_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}()));
//# sourceMappingURL=passport-local.js.map