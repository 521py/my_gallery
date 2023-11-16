"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _stylesModule = _interopRequireDefault(require("../styles.module.scss"));
var _MySearch = _interopRequireDefault(require("../MySearch.tsx"));
var _MySearch2 = require("../MySearch2.tsx");
var _MySearch3 = _interopRequireDefault(require("../MySearch3.tsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Navbar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.header2)
  }, /*#__PURE__*/React.createElement(_MySearch.default, null), /*#__PURE__*/React.createElement(_MySearch2.MySearch2, null), /*#__PURE__*/React.createElement(_MySearch3.default, null));
}
var _default = Navbar;
exports.default = _default;