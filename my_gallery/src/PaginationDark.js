"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationDark = PaginationDark;
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _reactQuery = require("@tanstack/react-query");
var _react = require("react");
var _reactPaginate = _interopRequireDefault(require("react-paginate"));
var _reactRedux = require("react-redux");
var _axios = _interopRequireDefault(require("axios"));
var _filterSlice = require("./redux/slices/filterSlice.ts");
var _themeSlice = require("./redux/slices/themeSlice.ts");
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
require("./Pagination.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable no-nested-ternary */ /* eslint-disable jsx-a11y/control-has-associated-label */ /* eslint-disable import/prefer-default-export */
function PaginationDark() {
  var theme = (0, _reactRedux.useSelector)(_themeSlice.getCurrentTheme);
  var refLastPage = (0, _react.useRef)(null);
  var refFirstPage = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    isArray = _useState2[0],
    setIsArray = _useState2[1];
  var currentPage = (0, _reactRedux.useSelector)(_filterSlice.getCurrentPage);
  var dispatch = (0, _reactRedux.useDispatch)();
  var onPageChange = function onPageChange(_ref) {
    var selected = _ref.selected;
    dispatch((0, _filterSlice.setCurrentPage)(selected + 1));
  };
  var _useQuery = (0, _reactQuery.useQuery)({
      queryKey: ['GET_ARRAY_LENGTH'],
      queryFn: function queryFn() {
        return (0, _axios.default)('https://test-front.framework.team/paintings/').then(function (res) {
          setIsArray(res.data);
          return 2;
        });
      }
    }),
    isLoading = _useQuery.isLoading,
    isError = _useQuery.isError,
    error = _useQuery.error;
  if (isLoading) return /*#__PURE__*/React.createElement("p", null, "Loading...");
  if (isError) {
    return /*#__PURE__*/React.createElement("p", null, "Error from search req is", "".concat(error));
  }
  var pageCount = Math.ceil(isArray.length / 12);
  var onClickFirstPage = function onClickFirstPage() {
    dispatch((0, _filterSlice.setCurrentPage)(1));
  };
  var onClickLastPage = function onClickLastPage() {
    dispatch((0, _filterSlice.setCurrentPage)(Math.ceil(isArray.length / 12)));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.mainDiv)
  }, /*#__PURE__*/React.createElement("button", {
    ref: refFirstPage,
    className: "lessThan".concat(theme === 'dark' && currentPage === '1' ? 'DarkDisabled' : theme === 'dark' && Number(currentPage) !== 1 ? 'Dark' : 'DarkDisabled'),
    onClick: onClickFirstPage,
    type: "button"
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faAnglesLeft
  })), /*#__PURE__*/React.createElement(_reactPaginate.default, {
    nextLabel: /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faAngleRight
    }),
    previousLabel: /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faAngleLeft
    }),
    pageCount: pageCount,
    forcePage: Number(currentPage) - 1,
    onPageChange: onPageChange,
    containerClassName: "containerPaginate".concat(theme === 'dark' ? 'Dark' : ''),
    previousLinkClassName: "previousPaginate".concat(theme === 'dark' && currentPage === '1' ? 'DarkDisabled' : theme === 'dark' && Number(currentPage) !== 1 ? 'Dark' : 'DarkDisabled'),
    nextLinkClassName: "nextPaginate".concat(theme === 'dark' && Number(currentPage) === pageCount ? 'DarkDisabled' : theme === 'dark' && Number(currentPage) !== pageCount ? 'Dark' : 'DarkDisabled'),
    disabledClassName: "disabledPaginate".concat(theme === 'dark' ? 'Dark' : ''),
    activeClassName: "activePaginate".concat(theme === 'dark' ? 'Dark' : ''),
    pageLinkClassName: "allPagesPaginate".concat(theme === 'dark' ? 'Dark' : '')
  }), /*#__PURE__*/React.createElement("button", {
    ref: refLastPage,
    className: "moreThan".concat(theme === 'dark' && Number(currentPage) === pageCount ? 'DarkDisabled' : 'Dark'),
    onClick: onClickLastPage,
    type: "button"
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faAnglesRight
  })));
}