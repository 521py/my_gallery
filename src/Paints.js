"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paints = Paints;
var _reactQuery = require("@tanstack/react-query");
var _reactRedux = require("react-redux");
var _axios = _interopRequireDefault(require("axios"));
var _filterSlice = require("./redux/slices/filterSlice.ts");
var _utils = require("./utils.ts");
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable import/prefer-default-export */

function Paints() {
  var search = (0, _reactRedux.useSelector)(_filterSlice.getSearchSelector);
  var rangeStart = (0, _reactRedux.useSelector)(_filterSlice.getSearchRangeSelector);
  var rangeEnd = (0, _reactRedux.useSelector)(_filterSlice.getSearchRangeSelectorEnd);
  var currentPage = (0, _reactRedux.useSelector)(_filterSlice.getCurrentPage);
  var params = new URLSearchParams({
    q: search.toString(),
    created_gte: rangeStart,
    created_lte: rangeEnd,
    _page: currentPage,
    _limit: '12'
  });
  var baseUrl = 'https://test-front.framework.team/paintings/';
  var url = "".concat(baseUrl, "?").concat(params.toString());
  var _useQuery = (0, _reactQuery.useQuery)({
      queryKey: (0, _utils.getQueryKey)(search.toString(), rangeStart, rangeEnd, currentPage),
      queryFn: function queryFn() {
        return (0, _axios.default)(url).then(function (res) {
          return res.data;
        });
      }
    }),
    paints = _useQuery.data,
    isLoading = _useQuery.isLoading,
    isError = _useQuery.isError,
    error = _useQuery.error;
  if (isLoading) return /*#__PURE__*/React.createElement("p", null, "Loading...");
  if (isError) {
    return /*#__PURE__*/React.createElement("p", null, "Error from search req is", error.toString());
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.PaintsWrapper)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.Paints)
  }, paints === null || paints === void 0 ? void 0 : paints.map(function (paint) {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(_stylesModule.default.card),
      key: paint.id
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://test-front.framework.team".concat(paint.imageUrl),
      alt: paint.name,
      width: "300px",
      className: "".concat(_stylesModule.default.cardImg)
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(_stylesModule.default.intro)
    }, /*#__PURE__*/React.createElement("h2", null, paint.name), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "AuthorId: "), paint.authorId, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Created: "), paint.created, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "LocationId: "), paint.locationId)));
  })));
}