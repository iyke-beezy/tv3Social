"use strict";

require("core-js/modules/es.array.find");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = exports.addData = void 0;

require("regenerator-runtime/runtime");

var _user = _interopRequireDefault(require("../models/user.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, age, gender, region, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, age = _req$body.age, gender = _req$body.gender, region = _req$body.region;
            _context.prev = 1;
            user = new _user["default"]();
            user.Age = age;
            user.Gender = gender;
            user.Region = region;
            _context.next = 8;
            return user.save();

          case 8:
            res.status(200).json({
              status: 'success',
              data: {
                message: 'successful',
                payload: user
              }
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              status: 'error',
              data: {
                message: _context.t0.message
              }
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function addData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.addData = addData;

var getData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _user["default"].find();

          case 3:
            users = _context2.sent;
            res.status(200).json({
              status: 'successful',
              data: {
                message: 'Successfully retrieved data',
                payload: users
              }
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              status: 'error',
              data: {
                message: 'Cannot retrieve users '
              }
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getData(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getData = getData;
//# sourceMappingURL=users.controller.js.map