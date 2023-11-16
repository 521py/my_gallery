"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AppLayer = _interopRequireDefault(require("./app/AppLayer.tsx"));
require("./App.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/React.createElement(_AppLayer.default, null);
}
var _default = App;
exports.default = _default;