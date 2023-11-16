"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./index.scss");
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _App = _interopRequireDefault(require("./App.tsx"));
var _store = require("./redux/store.ts");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_client.default.createRoot(document.getElementById('root')).render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: _store.store
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.HashRouter, null, /*#__PURE__*/_react.default.createElement(_App.default, null)))));