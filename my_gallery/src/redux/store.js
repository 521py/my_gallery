"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _filterSlice = require("./slices/filterSlice.ts");
var _themeSlice = require("./slices/themeSlice.ts");
/* eslint-disable import/prefer-default-export */

var store = (0, _toolkit.configureStore)({
  reducer: {
    filter: _filterSlice.filterReducer,
    theme: _themeSlice.themeReducer
  }
});
exports.store = store;