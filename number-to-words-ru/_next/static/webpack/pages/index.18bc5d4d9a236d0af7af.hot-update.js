webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CurrecnyObjectOptions.tsx":
/*!**********************************************!*\
  !*** ./components/CurrecnyObjectOptions.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var lib_context_moduleParamsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/context/moduleParamsContext */ "./lib/context/moduleParamsContext.tsx");
/* harmony import */ var components_InputSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/InputSelect */ "./components/InputSelect.tsx");
var _jsxFileName = "C:\\Open Server\\domains\\projects.local\\_react_projects\\number-to-words-ru app\\number-to-words-ru_APP(NextJs)\\components\\CurrecnyObjectOptions.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import styles from "./CurrecnyObjectOptions.module.sass"




var CurrecnyObjectOptions = function CurrecnyObjectOptions() {
  _s();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(lib_context_moduleParamsContext__WEBPACK_IMPORTED_MODULE_3__["ModuleParamsContext"]),
      appliedOptions = _React$useContext.appliedOptions,
      updateOptions = _React$useContext.updateOptions;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      borderLeft: '2px solid #98a2db',
      margin: '.5rem 0',
      padding: '0 .5rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    name: "custom-currency-integer1",
    label: t('options_currency_custom_value_integer1'),
    margin: "normal",
    fullWidth: true,
    placeholder: "\u0420\u0443\u0431\u043B\u044C",
    value: appliedOptions.customCurrency.currencyNameCases[0],
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    name: "custom-currency-integer2",
    label: t('options_currency_custom_value_integer2'),
    margin: "normal",
    fullWidth: true,
    placeholder: "\u0420\u0443\u0431\u043B\u044F",
    value: appliedOptions.customCurrency.currencyNameCases[1],
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    name: "custom-currency-integer3",
    label: t('options_currency_custom_value_integer3'),
    margin: "normal",
    fullWidth: true,
    placeholder: "\u0420\u0443\u0431\u043B\u0435\u0439",
    value: appliedOptions.customCurrency.currencyNameCases[2],
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(components_InputSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "custom-currency-form-integer",
    fullWidth: true,
    label: t('options_currency_custom_value_integer_name_form'),
    value: appliedOptions.customCurrency.currencyNounGender.integer,
    items: [{
      value: 0,
      name: t('options_currency_custom_value_word_form1')
    }, {
      value: 1,
      name: t('options_currency_custom_value_word_form2')
    }, {
      value: 2,
      name: t('options_currency_custom_value_word_form3')
    }],
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    name: "custom-currency-fractional1",
    label: t('options_currency_custom_value_fractional1'),
    margin: "normal",
    fullWidth: true,
    placeholder: "\u041A\u043E\u043F\u0435\u0439\u043A\u0430",
    value: appliedOptions.customCurrency.fractionalPartNameCases[0],
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    name: "custom-currency-fractional2",
    label: t('options_currency_custom_value_fractional2'),
    margin: "normal",
    fullWidth: true,
    placeholder: "\u041A\u043E\u043F\u0435\u0439\u043A\u0438",
    value: appliedOptions.customCurrency.fractionalPartNameCases[1],
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    name: "custom-currency-fractional3",
    label: t('options_currency_custom_value_fractional3'),
    margin: "normal",
    fullWidth: true,
    placeholder: "\u041A\u043E\u043F\u0435\u0435\u043A",
    value: appliedOptions.customCurrency.fractionalPartNameCases[2],
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(components_InputSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "custom-currency-form-fractional",
    fullWidth: true,
    label: t('options_currency_custom_value_fractional_name_form'),
    value: appliedOptions.customCurrency.currencyNounGender.fractionalPart,
    items: [{
      value: 0,
      name: t('options_currency_custom_value_word_form1')
    }, {
      value: 1,
      name: t('options_currency_custom_value_word_form2')
    }, {
      value: 2,
      name: t('options_currency_custom_value_word_form3')
    }],
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    name: "custom-currency-fractional-min-length",
    label: t('options_currency_fractionalPartMinLength'),
    margin: "normal",
    fullWidth: true,
    type: "number",
    inputProps: {
      min: 0
    },
    placeholder: "2",
    value: appliedOptions.customCurrency.fractionalPartMinLength,
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  })))));
};

_s(CurrecnyObjectOptions, "DGLiuhjNxKpFkwfYPHVCqg1ghW0=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"]];
});

_c = CurrecnyObjectOptions;
/* harmony default export */ __webpack_exports__["default"] = (CurrecnyObjectOptions);

var _c;

$RefreshReg$(_c, "CurrecnyObjectOptions");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZWNueU9iamVjdE9wdGlvbnMudHN4Il0sIm5hbWVzIjpbIkN1cnJlY255T2JqZWN0T3B0aW9ucyIsIlJlYWN0IiwidXNlQ29udGV4dCIsIk1vZHVsZVBhcmFtc0NvbnRleHQiLCJhcHBsaWVkT3B0aW9ucyIsInVwZGF0ZU9wdGlvbnMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwiYm9yZGVyTGVmdCIsIm1hcmdpbiIsInBhZGRpbmciLCJjdXN0b21DdXJyZW5jeSIsImN1cnJlbmN5TmFtZUNhc2VzIiwiY3VycmVuY3lOb3VuR2VuZGVyIiwiaW50ZWdlciIsInZhbHVlIiwibmFtZSIsImZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzIiwiZnJhY3Rpb25hbFBhcnQiLCJtaW4iLCJmcmFjdGlvbmFsUGFydE1pbkxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FNQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUFBOztBQUFBLDBCQUNRQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxtRkFBakIsQ0FEUjtBQUFBLE1BQzFCQyxjQUQwQixxQkFDMUJBLGNBRDBCO0FBQUEsTUFDVkMsYUFEVSxxQkFDVkEsYUFEVTs7QUFBQSx3QkFFZEMsb0VBQWMsRUFGQTtBQUFBLE1BRTFCQyxDQUYwQixtQkFFMUJBLENBRjBCO0FBQUEsTUFFdkJDLElBRnVCLG1CQUV2QkEsSUFGdUI7O0FBSWxDLFNBQ0UsbUVBQ0U7QUFBSyxTQUFLLEVBQUU7QUFDVkMsZ0JBQVUsRUFBRSxtQkFERjtBQUVWQyxZQUFNLEVBQUUsU0FGRTtBQUdWQyxhQUFPLEVBQUU7QUFIQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxD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LEVBQUVoQixjQUFjLENBQUNRLGNBQWYsQ0FBOEJTLHVCQVZ2QztBQVdFLFlBQVEsRUFBRWhCLGFBWFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBL0ZGLENBTEYsQ0FERixDQURGO0FBeUhELENBN0hEOztHQUFNTCxxQjtVQUVnQk0sNEQ7OztLQUZoQk4scUI7QUErSFNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE4YmM1ZDRkOWEyMzZkMGFmN2FmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBHcmlkLFxuICBUZXh0RmllbGQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ3VycmVjbnlPYmplY3RPcHRpb25zLm1vZHVsZS5zYXNzXCJcbmltcG9ydCB7IE1vZHVsZVBhcmFtc0NvbnRleHQgfSBmcm9tICdsaWIvY29udGV4dC9tb2R1bGVQYXJhbXNDb250ZXh0J1xuaW1wb3J0IElucHV0U2VsZWN0IGZyb20gJ2NvbXBvbmVudHMvSW5wdXRTZWxlY3QnO1xuXG5jb25zdCBDdXJyZWNueU9iamVjdE9wdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYXBwbGllZE9wdGlvbnMsIHVwZGF0ZU9wdGlvbnMgfSA9IFJlYWN0LnVzZUNvbnRleHQoTW9kdWxlUGFyYW1zQ29udGV4dCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIGJvcmRlckxlZnQ6ICcycHggc29saWQgIzk4YTJkYicsXG4gICAgICAgIG1hcmdpbjogJy41cmVtIDAnLFxuICAgICAgICBwYWRkaW5nOiAnMCAuNXJlbScsXG4gICAgICB9fT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMSdcbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2ludGVnZXIxJyl9XG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCg0YPQsdC70YxcIlxuICAgICAgICAgICAgICB2YWx1ZT17YXBwbGllZE9wdGlvbnMuY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMF19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWludGVnZXIyJ1xuICAgICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfaW50ZWdlcjInKX1cbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KDRg9Cx0LvRj1wiXG4gICAgICAgICAgICAgIHZhbHVlPXthcHBsaWVkT3B0aW9ucy5jdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1sxXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBuYW1lPSdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjMnXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9pbnRlZ2VyMycpfVxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQoNGD0LHQu9C10LlcIlxuICAgICAgICAgICAgICB2YWx1ZT17YXBwbGllZE9wdGlvbnMuY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMl19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPElucHV0U2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1mb3JtLWludGVnZXInXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfaW50ZWdlcl9uYW1lX2Zvcm0nKX1cbiAgICAgICAgICAgICAgdmFsdWU9e2FwcGxpZWRPcHRpb25zLmN1c3RvbUN1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5pbnRlZ2VyfVxuICAgICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICAgIHt2YWx1ZTogMCwgbmFtZTogdCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfd29yZF9mb3JtMScpfSxcbiAgICAgICAgICAgICAgICB7dmFsdWU6IDEsIG5hbWU6IHQoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX3dvcmRfZm9ybTInKX0sXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAyLCBuYW1lOiB0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV93b3JkX2Zvcm0zJyl9LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMSdcbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2ZyYWN0aW9uYWwxJyl9XG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCa0L7Qv9C10LnQutCwXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2FwcGxpZWRPcHRpb25zLmN1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzBdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMidcbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2ZyYWN0aW9uYWwyJyl9XG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCa0L7Qv9C10LnQutC4XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2FwcGxpZWRPcHRpb25zLmN1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzFdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMydcbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2ZyYWN0aW9uYWwzJyl9XG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCa0L7Qv9C10LXQulwiXG4gICAgICAgICAgICAgIHZhbHVlPXthcHBsaWVkT3B0aW9ucy5jdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1syXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8SW5wdXRTZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWZvcm0tZnJhY3Rpb25hbCdcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9mcmFjdGlvbmFsX25hbWVfZm9ybScpfVxuICAgICAgICAgICAgICB2YWx1ZT17YXBwbGllZE9wdGlvbnMuY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmZyYWN0aW9uYWxQYXJ0fVxuICAgICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICAgIHt2YWx1ZTogMCwgbmFtZTogdCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfd29yZF9mb3JtMScpfSxcbiAgICAgICAgICAgICAgICB7dmFsdWU6IDEsIG5hbWU6IHQoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX3dvcmRfZm9ybTInKX0sXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAyLCBuYW1lOiB0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV93b3JkX2Zvcm0zJyl9LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtbWluLWxlbmd0aCdcbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGgnKX1cbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjJcIlxuICAgICAgICAgICAgICB2YWx1ZT17YXBwbGllZE9wdGlvbnMuY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGh9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlY255T2JqZWN0T3B0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=