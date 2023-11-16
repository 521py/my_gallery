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
var _stylesModule = _interopRequireDefault(require("../styles.module.scss"));
require("../MySearch2.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */
function LocationsSearchFilter() {
  var theme = (0, _reactRedux.useSelector)(_themeSlice.getCurrentTheme);
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isFalse2 = _useState2[0],
    setIsFalse2 = _useState2[1];
  var _useState3 = (0, _react.useState)('Location'),
    _useState4 = _slicedToArray(_useState3, 2),
    isLocation = _useState4[0],
    setIsLocation = _useState4[1];
  var refClose2 = (0, _react.useRef)(null);
  var select2Ref = (0, _react.useRef)(null);
  var refUp2 = (0, _react.useRef)(null);
  var refDown2 = (0, _react.useRef)(null);
  var refElInFlexContainer2 = (0, _react.useRef)(null);
  var _useQuery = (0, _reactQuery.useQuery)({
      queryKey: ['GET_ALL_LOCATIONS'],
      queryFn: function queryFn() {
        return (0, _axios.default)('https://test-front.framework.team/locations/').then(function (res) {
          return res.data;
        });
      }
    }),
    locations = _useQuery.data,
    isLoading3 = _useQuery.isLoading,
    isLocationsError = _useQuery.isError,
    locationsError = _useQuery.error;
  if (isLoading3) return /*#__PURE__*/React.createElement("p", null, "Loading loc...");
  if (isLocationsError) {
    return /*#__PURE__*/React.createElement("p", null, "Error from loc req is", ' ', locationsError.toString());
  }
  var onCLickDown2 = function onCLickDown2() {
    var _select2Ref$current, _select2Ref$current2;
    if ((_select2Ref$current = select2Ref.current) !== null && _select2Ref$current !== void 0 && _select2Ref$current.hidden) {
      setIsFalse2(false);
      if (refClose2.current) refClose2.current.hidden = false;
      if (refDown2.current) refDown2.current.hidden = true;
      if (refUp2.current) refUp2.current.hidden = false;
      if (refElInFlexContainer2.current) refElInFlexContainer2.current.style.borderBottom = '1px solid gray';
    } else if (!((_select2Ref$current2 = select2Ref.current) !== null && _select2Ref$current2 !== void 0 && _select2Ref$current2.hidden)) {
      setIsFalse2(true);
      if (refClose2.current) refClose2.current.hidden = true;
      if (refDown2.current) refDown2.current.hidden = false;
      if (refUp2.current) refUp2.current.hidden = true;
      if (refElInFlexContainer2.current) refElInFlexContainer2.current.style.borderBottom = 'none';
    }
  };
  var onClick2 = function onClick2(e) {
    var eventTarget = e.target.outerText;
    setIsLocation(eventTarget);
  };
  var onCLickClose2 = function onCLickClose2() {
    setIsLocation('Location');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.flexContainer)
  }, /*#__PURE__*/React.createElement("div", {
    ref: refElInFlexContainer2,
    onClick: onCLickDown2,
    className: "".concat(_stylesModule.default.elInFlexContainer)
  }, /*#__PURE__*/React.createElement("p", null, isLocation), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.faDivs)
  }, /*#__PURE__*/React.createElement("div", {
    ref: refClose2,
    hidden: true
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faXmark,
    style: {
      color: '#878787',
      paddingRight: '10px'
    },
    onClick: onCLickClose2
  })), /*#__PURE__*/React.createElement("div", {
    ref: refDown2
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretDown,
    style: {
      color: '#878787',
      paddingBottom: '1px'
    },
    onClick: onCLickDown2
  })), /*#__PURE__*/React.createElement("div", {
    ref: refUp2,
    hidden: true
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretUp,
    fade: true,
    style: {
      color: '#878787',
      paddingTop: '1px'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    ref: select2Ref,
    className: "".concat(_stylesModule.default.selectTag),
    hidden: isFalse2
  }, locations === null || locations === void 0 ? void 0 : locations.map(function (location) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick2,
      key: (0, _uuid.v4)(),
      className: "optionTag".concat(theme === 'light' ? '' : 'Dark')
    }, location.location);
  })));
}
var _default = LocationsSearchFilter;
exports.default = _default;