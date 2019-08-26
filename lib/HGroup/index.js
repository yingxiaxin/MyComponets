"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var HGroup =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(HGroup, _Component);

  function HGroup() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = HGroup.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: "hd-hgroup"
    }, "This is a HGroup.");
  };

  return HGroup;
}(_react.Component);

var _default = HGroup;
exports["default"] = _default;