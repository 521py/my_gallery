"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactQuery = require("@tanstack/react-query");
var _react = require("react");
var _reactRedux = require("react-redux");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _uuid = require("uuid");
var _axios = _interopRequireDefault(require("axios"));
var _themeSlice = require("../redux/slices/themeSlice.ts");
var _filterSlice = require("../redux/slices/filterSlice.ts");
var _utils = require("../utils.ts");
var _stylesModule = _interopRequireDefault(require("../styles.module.scss"));
require("../MySearch2.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */
function AuthorsSearchFilter() {
  var theme = (0, _reactRedux.useSelector)(_themeSlice.getCurrentTheme);
  var authorId = (0, _reactRedux.useSelector)(_filterSlice.getSearchAuthorIdSelector);
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isFalse = _useState2[0],
    setIsFalse = _useState2[1];
  var _useState3 = (0, _react.useState)('Author'),
    _useState4 = _slicedToArray(_useState3, 2),
    isAuthor = _useState4[0],
    setIsAuthor = _useState4[1];
  var select1Ref = (0, _react.useRef)(null);
  var refClose = (0, _react.useRef)(null);
  var refUp = (0, _react.useRef)(null);
  var refDown = (0, _react.useRef)(null);
  var refElInFlexContainer1 = (0, _react.useRef)(null);
  var _useQuery = (0, _reactQuery.useQuery)({
      queryKey: (0, _utils.getQueryKeyForAuthorId)(authorId),
      queryFn: function queryFn() {
        return (0, _axios.default)("https://test-front.framework.team/authors/".concat(authorId)).then(function (res) {
          return res.data;
        });
      }
    }),
    authors = _useQuery.data,
    isAuthorLoading = _useQuery.isLoading,
    isAuthorError = _useQuery.isError,
    authorError = _useQuery.error;
  if (isAuthorLoading) return /*#__PURE__*/React.createElement("p", null, "Loading authors...");
  if (isAuthorError) {
    return /*#__PURE__*/React.createElement("p", null, "Error from author req is", ' ', authorError.toString());
  }
  var onCLickDown = function onCLickDown() {
    var _select1Ref$current, _select1Ref$current2;
    if ((_select1Ref$current = select1Ref.current) !== null && _select1Ref$current !== void 0 && _select1Ref$current.hidden) {
      setIsFalse(false);
      if (refClose.current) refClose.current.hidden = false;
      if (refDown.current) refDown.current.hidden = true;
      if (refUp.current) refUp.current.hidden = false;
      if (refElInFlexContainer1.current) refElInFlexContainer1.current.style.borderBottom = '1px solid gray';
    } else if (!((_select1Ref$current2 = select1Ref.current) !== null && _select1Ref$current2 !== void 0 && _select1Ref$current2.hidden)) {
      setIsFalse(true);
      if (refClose.current) refClose.current.hidden = true;
      if (refDown.current) refDown.current.hidden = false;
      if (refUp.current) refUp.current.hidden = true;
      if (refElInFlexContainer1.current) refElInFlexContainer1.current.style.borderBottom = 'none';
    }
  };
  var onCLick = function onCLick(e) {
    var eventTarget = e.target.outerText;
    setIsAuthor(eventTarget);
  };
  var onCLickClose = function onCLickClose() {
    setIsAuthor('Author');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.flexContainer)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.middleFlexElement)
  }, /*#__PURE__*/React.createElement("div", {
    ref: refElInFlexContainer1,
    onClick: onCLickDown,
    className: "".concat(_stylesModule.default.elInFlexContainer)
  }, /*#__PURE__*/React.createElement("p", null, isAuthor), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.faDivs)
  }, /*#__PURE__*/React.createElement("div", {
    ref: refClose,
    hidden: true
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faXmark,
    style: {
      color: '#878787',
      paddingRight: '10px'
    },
    onClick: onCLickClose
  })), /*#__PURE__*/React.createElement("div", {
    ref: refDown
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretDown,
    style: {
      color: '#878787',
      paddingBottom: '1px'
    },
    onClick: onCLickDown
  })), /*#__PURE__*/React.createElement("div", {
    ref: refUp,
    hidden: true
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretUp,
    fade: true,
    style: {
      color: '#878787',
      paddingTop: '1px'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: select1Ref,
    className: "".concat(_stylesModule.default.selectTag),
    hidden: isFalse
  }, authors === null || authors === void 0 ? void 0 : authors.map(function (author) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onCLick,
      key: (0, _uuid.v4)(),
      className: "optionTag".concat(theme === 'light' ? '' : 'Dark')
    }, author.name);
  })));
}
var _default = AuthorsSearchFilter;
exports.default = _default;