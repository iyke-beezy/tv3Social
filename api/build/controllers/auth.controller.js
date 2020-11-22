"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime/runtime");

var _passport = _interopRequireDefault(require("passport"));

var _debug = _interopRequireDefault(require("debug"));

var _passportLocal = _interopRequireDefault(require("../passport/passport-local"));

var _errors = require("../helpers/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var DEBUG = (0, _debug["default"])("dev");

var createCookieFromToken = function createCookieFromToken(Admin, statusCode, req, res) {
  var token = Admin.generateVerificationToken();
  res.status(statusCode).json({
    status: "success",
    token: token,
    data: {
      Admin: Admin
    }
  });
};

var _default = {
  signup: function () {
    var _signup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _passport["default"].authenticate("signup", {
                session: false
              }, /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, Admin, info) {
                  var _info$statusCode, statusCode, message;

                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;

                          if (!(err || !Admin)) {
                            _context.next = 4;
                            break;
                          }

                          _info$statusCode = info.statusCode, statusCode = _info$statusCode === void 0 ? 400 : _info$statusCode, message = info.message;
                          return _context.abrupt("return", res.status(statusCode).json({
                            status: "error",
                            error: {
                              message: message
                            }
                          }));

                        case 4:
                          createCookieFromToken(Admin, 201, req, res);
                          _context.next = 11;
                          break;

                        case 7:
                          _context.prev = 7;
                          _context.t0 = _context["catch"](0);
                          DEBUG(_context.t0);
                          throw new _errors.ApplicationError(500, _context.t0);

                        case 11:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 7]]);
                }));

                return function (_x4, _x5, _x6) {
                  return _ref.apply(this, arguments);
                };
              }())(req, res, next);

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function signup(_x, _x2, _x3) {
      return _signup.apply(this, arguments);
    }

    return signup;
  }(),
  login: function login(req, res, next) {
    _passport["default"].authenticate("login", {
      session: false
    }, function (err, Admin, info) {
      if (err || !Admin) {
        var message = err;

        if (info) {
          message = info.message;
        }

        return res.status(401).json({
          status: "error",
          error: {
            message: message
          }
        });
      }

      createCookieFromToken(Admin, 200, req, res);
    })(req, res, next);
  }
};
exports["default"] = _default;
//# sourceMappingURL=auth.controller.js.map