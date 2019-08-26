import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";

var HGroup =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(HGroup, _Component);

  function HGroup() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = HGroup.prototype;

  _proto.render = function render() {
    return React.createElement("div", {
      className: "hd-hgroup"
    }, "This is a HGroup.");
  };

  return HGroup;
}(Component);

export default HGroup;