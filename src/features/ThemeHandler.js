"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRedux = require("react-redux");
var _themeSlice = require("../redux/slices/themeSlice.ts");
var _stylesModule = _interopRequireDefault(require("../styles.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ThemeHandler() {
  var theme = (0, _reactRedux.useSelector)(_themeSlice.getCurrentTheme);
  var dispatch = (0, _reactRedux.useDispatch)();
  var onClickChangeTheme = function onClickChangeTheme() {
    var next = theme === 'dark' ? 'light' : 'dark';
    // console.log(theme);
    dispatch((0, _themeSlice.set)(next));
  };
  return /*#__PURE__*/React.createElement("svg", {
    onClick: onClickChangeTheme,
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    fill: "currentColor",
    className: "".concat(_stylesModule.default.sun),
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
  }));
}
var _default = ThemeHandler;
exports.default = _default;