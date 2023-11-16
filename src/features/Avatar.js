"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _stylesModule = _interopRequireDefault(require("../styles.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Avatar() {
  return /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCircle,
    color: "whitesmoke",
    size: "2xl",
    className: "".concat(_stylesModule.default.avatar)
  });
}
var _default = Avatar;
exports.default = _default;