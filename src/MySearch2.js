"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MySearch2 = MySearch2;
var _AuthorsSearchFilter = _interopRequireDefault(require("./features/AuthorsSearchFilter.tsx"));
var _LocationsSearchFilter = _interopRequireDefault(require("./features/LocationsSearchFilter.tsx"));
require("./MySearch2.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable import/prefer-default-export */

function MySearch2() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_AuthorsSearchFilter.default, null), /*#__PURE__*/React.createElement(_LocationsSearchFilter.default, null));
}