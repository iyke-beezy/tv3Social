"use strict";

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = _mongoose["default"].Schema({
  Age: {
    type: String,
    required: [true, 'Age is required']
  },
  Gender: {
    type: String,
    required: [true, 'Gender is required']
  },
  Region: {
    type: String,
    required: [true, 'Region is required']
  },
  city: String,
  timestamp: {
    type: Date,
    "default": Date.now
  }
});

var User = _mongoose["default"].model('User', userSchema);

var _default = User;
exports["default"] = _default;
//# sourceMappingURL=user.model.js.map