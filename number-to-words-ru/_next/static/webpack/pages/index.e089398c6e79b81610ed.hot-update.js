webpackHotUpdate_N_E("pages/index",{

/***/ "./components/OptionsContent.tsx":
/*!***************************************!*\
  !*** ./components/OptionsContent.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var lib_context_moduleParamsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/context/moduleParamsContext */ "./lib/context/moduleParamsContext.tsx");
/* harmony import */ var components_CurrecnyObjectOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/CurrecnyObjectOptions */ "./components/CurrecnyObjectOptions.tsx");
/* harmony import */ var components_InputSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/InputSelect */ "./components/InputSelect.tsx");
/* harmony import */ var components_InputSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/InputSwitch */ "./components/InputSwitch.tsx");
var _jsxFileName = "C:\\Open Server\\domains\\projects.local\\_react_projects\\number-to-words-ru app\\number-to-words-ru_APP(NextJs)\\components\\OptionsContent.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import styles from "./OptionsContent.module.sass"






var OptionsContent = function OptionsContent(props) {
  _s();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(lib_context_moduleParamsContext__WEBPACK_IMPORTED_MODULE_3__["ModuleParamsContext"]),
      appliedOptions = _React$useContext.appliedOptions,
      updateOptions = _React$useContext.updateOptions;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "column",
    spacing: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(components_InputSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "currency",
    label: t('options_currency_select_label'),
    fullWidth: true,
    value: options.currency,
    onChange: updateOptions,
    items: [{
      value: 'rub',
      name: t('options_currency_select_value_rub')
    }, {
      value: 'usd',
      name: t('options_currency_select_value_usd')
    }, {
      value: 'eur',
      name: t('options_currency_select_value_eur')
    }, {
      value: 'number',
      name: t('options_currency_select_value_number')
    }, {
      value: 'custom',
      name: t('options_currency_select_value_custom')
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
    xsUp: options.currency !== 'custom',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx(components_CurrecnyObjectOptions__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    name: "round-number",
    label: t('options_round_number'),
    margin: "normal",
    fullWidth: true,
    placeholder: "2",
    type: "number",
    inputProps: {
      min: -1
    },
    helperText: options.roundNumber == '-1' && t('options_round_number_helper_disabled'),
    value: options.roundNumber,
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(components_InputSwitch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "convert-minus-sign",
    label: t('options_convert_minus_sign'),
    checked: options.convertMinusSignToWord,
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(components_InputSwitch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "show-number-part-integer",
    label: t('options_show_integer_part'),
    checked: options.showNumberParts.integer,
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(components_InputSwitch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "show-number-part-fractional",
    label: t('options_show_fractional_part'),
    checked: options.showNumberParts.fractional,
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(components_InputSwitch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "convert-number-part-integer",
    label: t('options_convert_integer_part'),
    checked: options.convertNumbertToWords.integer,
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(components_InputSwitch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "convert-number-part-fractional",
    label: t('options_convert_fractional_part'),
    checked: options.convertNumbertToWords.fractional,
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(components_InputSwitch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "show-currency-part-integer",
    label: t('options_show_currency_integer_part'),
    checked: options.showCurrency.integer,
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(components_InputSwitch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "show-currency-part-fractional",
    label: t('options_show_currency_fractional_part'),
    checked: options.showCurrency.fractional,
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }))));
};

_s(OptionsContent, "DGLiuhjNxKpFkwfYPHVCqg1ghW0=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"]];
});

_c = OptionsContent;
/* harmony default export */ __webpack_exports__["default"] = (OptionsContent);

var _c;

$RefreshReg$(_c, "OptionsContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcHRpb25zQ29udGVudC50c3giXSwibmFtZXMiOlsiT3B0aW9uc0NvbnRlbnQiLCJwcm9wcyIsIlJlYWN0IiwidXNlQ29udGV4dCIsIk1vZHVsZVBhcmFtc0NvbnRleHQiLCJhcHBsaWVkT3B0aW9ucyIsInVwZGF0ZU9wdGlvbnMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwib3B0aW9ucyIsImN1cnJlbmN5IiwidmFsdWUiLCJuYW1lIiwibWluIiwicm91bmROdW1iZXIiLCJjb252ZXJ0TWludXNTaWduVG9Xb3JkIiwic2hvd051bWJlclBhcnRzIiwiaW50ZWdlciIsImZyYWN0aW9uYWwiLCJjb252ZXJ0TnVtYmVydFRvV29yZHMiLCJzaG93Q3VycmVuY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FPQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUVDLEtBQUYsRUFBYTtBQUFBOztBQUFBLDBCQUNRQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxtRkFBakIsQ0FEUjtBQUFBLE1BQzFCQyxjQUQwQixxQkFDMUJBLGNBRDBCO0FBQUEsTUFDVkMsYUFEVSxxQkFDVkEsYUFEVTs7QUFBQSx3QkFFZEMsb0VBQWMsRUFGQTtBQUFBLE1BRTFCQyxDQUYwQixtQkFFMUJBLENBRjBCO0FBQUEsTUFFdkJDLElBRnVCLG1CQUV2QkEsSUFGdUI7O0FBSWxDLFNBQ0UsbUVBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUMsUUFBMUI7QUFBbUMsV0FBTyxFQUFFLENBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7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LEVBQUVFLE9BQU8sQ0FBQ1csWUFBUixDQUFxQkgsT0FIaEM7QUFJRSxZQUFRLEVBQUVaLGFBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBOUVGLEVBc0ZFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFDRSxRQUFJLEVBQUMsK0JBRFA7QUFFRSxTQUFLLEVBQUVFLENBQUMsQ0FBQyx1Q0FBRCxDQUZWO0FBR0UsV0FBTyxFQUFFRSxPQUFPLENBQUNXLFlBQVIsQ0FBcUJGLFVBSGhDO0FBSUUsWUFBUSxFQUFFYixhQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXRGRixDQURGLENBREY7QUFtR0QsQ0F2R0Q7O0dBQU1OLGM7VUFFZ0JPLDREOzs7S0FGaEJQLGM7QUF5R1NBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUwODkzOThjNmU3OWI4MTYxMGVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBHcmlkLFxuICBIaWRkZW4sXG4gIFRleHRGaWVsZCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9PcHRpb25zQ29udGVudC5tb2R1bGUuc2Fzc1wiXG5pbXBvcnQgeyBNb2R1bGVQYXJhbXNDb250ZXh0IH0gZnJvbSAnbGliL2NvbnRleHQvbW9kdWxlUGFyYW1zQ29udGV4dCdcbmltcG9ydCBDdXJyZWNueU9iamVjdE9wdGlvbnMgZnJvbSBcImNvbXBvbmVudHMvQ3VycmVjbnlPYmplY3RPcHRpb25zXCJcbmltcG9ydCBJbnB1dFNlbGVjdCBmcm9tIFwiY29tcG9uZW50cy9JbnB1dFNlbGVjdFwiXG5pbXBvcnQgSW5wdXRTd2l0Y2ggZnJvbSBcImNvbXBvbmVudHMvSW5wdXRTd2l0Y2hcIlxuXG5jb25zdCBPcHRpb25zQ29udGVudCA9ICggcHJvcHMgKSA9PiB7XG4gIGNvbnN0IHsgYXBwbGllZE9wdGlvbnMsIHVwZGF0ZU9wdGlvbnMgfSA9IFJlYWN0LnVzZUNvbnRleHQoTW9kdWxlUGFyYW1zQ29udGV4dCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nIHNwYWNpbmc9ezF9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgIDxJbnB1dFNlbGVjdFxuICAgICAgICAgICAgbmFtZT0nY3VycmVuY3knXG4gICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9zZWxlY3RfbGFiZWwnKX1cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VycmVuY3l9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAgIGl0ZW1zPXtbXG4gICAgICAgICAgICAgIHt2YWx1ZTogJ3J1YicsIG5hbWU6IHQoJ29wdGlvbnNfY3VycmVuY3lfc2VsZWN0X3ZhbHVlX3J1YicpfSxcbiAgICAgICAgICAgICAge3ZhbHVlOiAndXNkJywgbmFtZTogdCgnb3B0aW9uc19jdXJyZW5jeV9zZWxlY3RfdmFsdWVfdXNkJyl9LFxuICAgICAgICAgICAgICB7dmFsdWU6ICdldXInLCBuYW1lOiB0KCdvcHRpb25zX2N1cnJlbmN5X3NlbGVjdF92YWx1ZV9ldXInKX0sXG4gICAgICAgICAgICAgIHt2YWx1ZTogJ251bWJlcicsIG5hbWU6IHQoJ29wdGlvbnNfY3VycmVuY3lfc2VsZWN0X3ZhbHVlX251bWJlcicpfSxcbiAgICAgICAgICAgICAge3ZhbHVlOiAnY3VzdG9tJywgbmFtZTogdCgnb3B0aW9uc19jdXJyZW5jeV9zZWxlY3RfdmFsdWVfY3VzdG9tJyl9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxIaWRkZW4geHNVcD17b3B0aW9ucy5jdXJyZW5jeSAhPT0gJ2N1c3RvbSd9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICA8Q3VycmVjbnlPYmplY3RPcHRpb25zIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBuYW1lPSdyb3VuZC1udW1iZXInXG4gICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19yb3VuZF9udW1iZXInKX1cbiAgICAgICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nMidcbiAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBoZWxwZXJUZXh0PXtvcHRpb25zLnJvdW5kTnVtYmVyID09ICctMScgJiYgdCgnb3B0aW9uc19yb3VuZF9udW1iZXJfaGVscGVyX2Rpc2FibGVkJyl9XG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5yb3VuZE51bWJlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8SW5wdXRTd2l0Y2hcbiAgICAgICAgICAgIG5hbWU9J2NvbnZlcnQtbWludXMtc2lnbidcbiAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2NvbnZlcnRfbWludXNfc2lnbicpfVxuICAgICAgICAgICAgY2hlY2tlZD17b3B0aW9ucy5jb252ZXJ0TWludXNTaWduVG9Xb3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxJbnB1dFN3aXRjaFxuICAgICAgICAgICAgbmFtZT0nc2hvdy1udW1iZXItcGFydC1pbnRlZ2VyJ1xuICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfc2hvd19pbnRlZ2VyX3BhcnQnKX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e29wdGlvbnMuc2hvd051bWJlclBhcnRzLmludGVnZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgPElucHV0U3dpdGNoXG4gICAgICAgICAgICBuYW1lPSdzaG93LW51bWJlci1wYXJ0LWZyYWN0aW9uYWwnXG4gICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19zaG93X2ZyYWN0aW9uYWxfcGFydCcpfVxuICAgICAgICAgICAgY2hlY2tlZD17b3B0aW9ucy5zaG93TnVtYmVyUGFydHMuZnJhY3Rpb25hbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8SW5wdXRTd2l0Y2hcbiAgICAgICAgICAgIG5hbWU9J2NvbnZlcnQtbnVtYmVyLXBhcnQtaW50ZWdlcidcbiAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2NvbnZlcnRfaW50ZWdlcl9wYXJ0Jyl9XG4gICAgICAgICAgICBjaGVja2VkPXtvcHRpb25zLmNvbnZlcnROdW1iZXJ0VG9Xb3Jkcy5pbnRlZ2VyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxJbnB1dFN3aXRjaFxuICAgICAgICAgICAgbmFtZT0nY29udmVydC1udW1iZXItcGFydC1mcmFjdGlvbmFsJ1xuICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY29udmVydF9mcmFjdGlvbmFsX3BhcnQnKX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e29wdGlvbnMuY29udmVydE51bWJlcnRUb1dvcmRzLmZyYWN0aW9uYWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgPElucHV0U3dpdGNoXG4gICAgICAgICAgICBuYW1lPSdzaG93LWN1cnJlbmN5LXBhcnQtaW50ZWdlcidcbiAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX3Nob3dfY3VycmVuY3lfaW50ZWdlcl9wYXJ0Jyl9XG4gICAgICAgICAgICBjaGVja2VkPXtvcHRpb25zLnNob3dDdXJyZW5jeS5pbnRlZ2VyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxJbnB1dFN3aXRjaFxuICAgICAgICAgICAgbmFtZT0nc2hvdy1jdXJyZW5jeS1wYXJ0LWZyYWN0aW9uYWwnXG4gICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19zaG93X2N1cnJlbmN5X2ZyYWN0aW9uYWxfcGFydCcpfVxuICAgICAgICAgICAgY2hlY2tlZD17b3B0aW9ucy5zaG93Q3VycmVuY3kuZnJhY3Rpb25hbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcHRpb25zQ29udGVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=