"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MySearch3;
var _react = require("react");
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _filterSlice = require("./redux/slices/filterSlice.ts");
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */
function MySearch3() {
  var isCreated = 'Created';
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isHidden = _useState2[0],
    setIsHidden = _useState2[1];
  var refDownRange = (0, _react.useRef)(null);
  var refUpRange = (0, _react.useRef)(null);
  var refInputRanges = (0, _react.useRef)(null);
  var searchValue = (0, _reactRedux.useSelector)(_filterSlice.getSearchSelector);
  var rangeStart = (0, _reactRedux.useSelector)(_filterSlice.getSearchRangeSelector);
  var rangeEnd = (0, _reactRedux.useSelector)(_filterSlice.getSearchRangeSelectorEnd);
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useSearchParams = (0, _reactRouterDom.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var _useState3 = (0, _react.useState)(function () {
      var searchValueFromQuery = searchParams.get('created_gte');
      return searchValueFromQuery !== null && searchValueFromQuery !== void 0 ? searchValueFromQuery : '';
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    search = _useState4[0],
    setSearch = _useState4[1];
  var _useState5 = (0, _react.useState)(function () {
      var searchValueFromQuery = searchParams.get('created_lte');
      return searchValueFromQuery !== null && searchValueFromQuery !== void 0 ? searchValueFromQuery : '';
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    search2 = _useState6[0],
    setSearch2 = _useState6[1];
  var changeSearchHandlerRangeStart = function changeSearchHandlerRangeStart(e) {
    var newSearchValue = e.target.value;
    setSearch(newSearchValue);
    setSearchParams(function () {
      var _searchValue$toString;
      return {
        q: (_searchValue$toString = searchValue.toString()) !== null && _searchValue$toString !== void 0 ? _searchValue$toString : '',
        created_gte: newSearchValue,
        created_lte: rangeEnd !== null && rangeEnd !== void 0 ? rangeEnd : '2023'
      };
    });
    dispatch((0, _filterSlice.changeSearchRange)(newSearchValue));
  };
  var changeSearchHandlerRangeEnd = function changeSearchHandlerRangeEnd(e) {
    var newSearchValue = e.target.value;
    setSearch2(newSearchValue);
    setSearchParams(function () {
      var _searchValue$toString2;
      return {
        q: (_searchValue$toString2 = searchValue.toString()) !== null && _searchValue$toString2 !== void 0 ? _searchValue$toString2 : '',
        created_gte: rangeStart !== null && rangeStart !== void 0 ? rangeStart : '0',
        created_lte: newSearchValue
      };
    });
    dispatch((0, _filterSlice.changeSearchRangeEnd)(newSearchValue));
  };
  var onCLickDownRange = function onCLickDownRange() {
    if (!refDownRange.current || !refUpRange.current) return;
    refDownRange.current.hidden = true;
    refUpRange.current.hidden = false;
    setIsHidden(false);
  };
  var onClickUpRange = function onClickUpRange() {
    if (!refDownRange.current || !refUpRange.current) return;
    refDownRange.current.hidden = false;
    refUpRange.current.hidden = true;
    setIsHidden(true);
  };
  var onClickSelectFieldRange = function onClickSelectFieldRange() {
    if (!refInputRanges.current || !refDownRange.current || !refUpRange.current) return;
    if (refInputRanges.current.hidden) {
      refInputRanges.current.hidden = false;
      refInputRanges.current.className = "".concat(_stylesModule.default.specialRangeContainer);
      refDownRange.current.hidden = true;
      refUpRange.current.hidden = false;
    } else if (!refInputRanges.current.hidden) {
      refInputRanges.current.hidden = true;
      refInputRanges.current.className = '';
      refDownRange.current.hidden = false;
      refUpRange.current.hidden = true;
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.flexContainer)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.middleFlexElement)
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClickSelectFieldRange,
    className: "".concat(_stylesModule.default.elInFlexContainer)
  }, /*#__PURE__*/React.createElement("p", null, isCreated), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.faDivs)
  }, /*#__PURE__*/React.createElement("div", {
    ref: refDownRange
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretDown,
    style: {
      color: '#878787',
      paddingBottom: '1px'
    },
    onClick: onCLickDownRange
  })), /*#__PURE__*/React.createElement("div", {
    ref: refUpRange,
    hidden: true
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretUp,
    fade: true,
    style: {
      color: '#878787',
      paddingTop: '1px'
    },
    onClick: onClickUpRange
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: refInputRanges,
    hidden: isHidden
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: search,
    onChange: changeSearchHandlerRangeStart,
    placeholder: "from",
    className: "".concat(_stylesModule.default.inputRange)
  }), /*#__PURE__*/React.createElement("span", null, "\u2014"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: search2,
    onChange: changeSearchHandlerRangeEnd,
    placeholder: "before",
    className: "".concat(_stylesModule.default.inputRange)
  })));
}