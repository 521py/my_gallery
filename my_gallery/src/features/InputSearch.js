"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _useDebounce = require("../hooks/useDebounce.ts");
var _filterSlice = require("../redux/slices/filterSlice.ts");
var _stylesModule = _interopRequireDefault(require("../styles.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function InputSearch() {
  var isName = 'Name';
  var rangeStart = (0, _reactRedux.useSelector)(_filterSlice.getSearchRangeSelector);
  var rangeEnd = (0, _reactRedux.useSelector)(_filterSlice.getSearchRangeSelectorEnd);
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useSearchParams = (0, _reactRouterDom.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var _useState = (0, _react.useState)(function () {
      var searchValueFromQuery = searchParams.get('q');
      return searchValueFromQuery !== null && searchValueFromQuery !== void 0 ? searchValueFromQuery : '';
    }),
    _useState2 = _slicedToArray(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];
  var debauncedSearchValue = (0, _useDebounce.useDebounce)(search, 1000);
  var changeSearchHandler = function changeSearchHandler(e) {
    var input = e.target;
    var newSearchValue = input.value;
    setSearch(newSearchValue);
    setSearchParams(function () {
      return {
        q: newSearchValue,
        created_gte: rangeStart !== null && rangeStart !== void 0 ? rangeStart : '0',
        created_lte: rangeEnd !== null && rangeEnd !== void 0 ? rangeEnd : '2023'
      };
    });
  };
  (0, _react.useEffect)(function () {
    dispatch((0, _filterSlice.changeSearchFilter)(debauncedSearchValue));
  }, [debauncedSearchValue, dispatch]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.flexContainerForInput)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.middleFlexElement)
  }, /*#__PURE__*/React.createElement("input", {
    type: "search",
    value: search,
    onChange: changeSearchHandler,
    placeholder: isName,
    className: "".concat(_stylesModule.default.elInFlexContainer)
  })));
}
var _default = InputSearch;
exports.default = _default;