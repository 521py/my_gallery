"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactQuery = require("@tanstack/react-query");
var _MainGalleryPage = _interopRequireDefault(require("../pages/MainGalleryPage.tsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var queryClient = new _reactQuery.QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});
function AppLayer() {
  return /*#__PURE__*/React.createElement(_reactQuery.QueryClientProvider, {
    client: queryClient
  }, /*#__PURE__*/React.createElement(_MainGalleryPage.default, null));
}
var _default = AppLayer;
exports.default = _default;