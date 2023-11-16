"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRedux = require("react-redux");
var _themeSlice = require("../redux/slices/themeSlice.ts");
var _Header = _interopRequireDefault(require("../widgets/Header.tsx"));
var _Navbar = _interopRequireDefault(require("../widgets/Navbar.tsx"));
var _Paints = require("../Paints.tsx");
var _Pagination = require("../Pagination.tsx");
var _PaginationDark = require("../PaginationDark.tsx");
var _stylesModule = _interopRequireDefault(require("../styles.module.scss"));
require("../App.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function MainGalleryPage() {
  var theme = (0, _reactRedux.useSelector)(_themeSlice.getCurrentTheme);
  return /*#__PURE__*/React.createElement("div", {
    className: theme
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.wrapper)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.headers)
  }, /*#__PURE__*/React.createElement(_Header.default, null), /*#__PURE__*/React.createElement(_Navbar.default, null)), /*#__PURE__*/React.createElement(_Paints.Paints, null), theme === 'light' ? /*#__PURE__*/React.createElement(_Pagination.Pagination, null) : /*#__PURE__*/React.createElement(_PaginationDark.PaginationDark, null)));
}
var _default = MainGalleryPage;
exports.default = _default;