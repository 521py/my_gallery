"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Avatar = _interopRequireDefault(require("../features/Avatar.tsx"));
var _ThemeHandler = _interopRequireDefault(require("../features/ThemeHandler.tsx"));
var _stylesModule = _interopRequireDefault(require("../styles.module.scss"));
require("../App.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Header() {
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.header1)
  }, /*#__PURE__*/React.createElement(_Avatar.default, null), /*#__PURE__*/React.createElement(_ThemeHandler.default, null));
}
var _default = Header;
exports.default = _default;