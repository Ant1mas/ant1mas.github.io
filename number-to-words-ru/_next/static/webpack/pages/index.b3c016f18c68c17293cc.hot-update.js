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
      selectedOptions = _React$useContext.selectedOptions,
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
    value: selectedOptions.customCurrency.currencyNameCases[0],
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
    value: selectedOptions.customCurrency.currencyNameCases[1],
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
    value: selectedOptions.customCurrency.currencyNameCases[2],
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
    value: selectedOptions.customCurrency.currencyNounGender.integer,
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
    value: selectedOptions.customCurrency.fractionalPartNameCases[0],
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
    value: selectedOptions.customCurrency.fractionalPartNameCases[1],
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
    value: selectedOptions.customCurrency.fractionalPartNameCases[2],
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
    value: selectedOptions.customCurrency.currencyNounGender.fractionalPart,
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
    value: selectedOptions.customCurrency.fractionalPartMinLength,
    onChange: updateOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  })))));
};

_s(CurrecnyObjectOptions, "DK1LNw3FAFpkx/S8uBQwoI+9SnA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZWNueU9iamVjdE9wdGlvbnMudHN4Il0sIm5hbWVzIjpbIkN1cnJlY255T2JqZWN0T3B0aW9ucyIsIlJlYWN0IiwidXNlQ29udGV4dCIsIk1vZHVsZVBhcmFtc0NvbnRleHQiLCJzZWxlY3RlZE9wdGlvbnMiLCJ1cGRhdGVPcHRpb25zIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsImJvcmRlckxlZnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY3VzdG9tQ3VycmVuY3kiLCJjdXJyZW5jeU5hbWVDYXNlcyIsImN1cnJlbmN5Tm91bkdlbmRlciIsImludGVnZXIiLCJ2YWx1ZSIsIm5hbWUiLCJmcmFjdGlvbmFsUGFydE5hbWVDYXNlcyIsImZyYWN0aW9uYWxQYXJ0IiwibWluIiwiZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBTUE7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFBQTs7QUFBQSwwQkFDU0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsbUZBQWpCLENBRFQ7QUFBQSxNQUMxQkMsZUFEMEIscUJBQzFCQSxlQUQwQjtBQUFBLE1BQ1RDLGFBRFMscUJBQ1RBLGFBRFM7O0FBQUEsd0JBRWRDLG9FQUFjLEVBRkE7QUFBQSxNQUUxQkMsQ0FGMEIsbUJBRTFCQSxDQUYwQjtBQUFBLE1BRXZCQyxJQUZ1QixtQkFFdkJBLElBRnVCOztBQUlsQyxTQUNFLG1FQUNFO0FBQUssU0FBSyxFQUFFO0FBQ1ZDLGdCQUFVLEVBQUUsbUJBREY7QUFFVkMsWUFBTSxFQUFFLFNBRkU7QUFHVkMsYUFBTyxFQUFFO0FBSEMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUs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QUFVRSxTQUFLLEVBQUVoQixlQUFlLENBQUNRLGNBQWhCLENBQStCUyx1QkFWeEM7QUFXRSxZQUFRLEVBQUVoQixhQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQS9GRixDQUxGLENBREYsQ0FERjtBQXlIRCxDQTdIRDs7R0FBTUwscUI7VUFFZ0JNLDREOzs7S0FGaEJOLHFCO0FBK0hTQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iM2MwMTZmMThjNjhjMTcyOTNjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgR3JpZCxcbiAgVGV4dEZpZWxkLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0N1cnJlY255T2JqZWN0T3B0aW9ucy5tb2R1bGUuc2Fzc1wiXG5pbXBvcnQgeyBNb2R1bGVQYXJhbXNDb250ZXh0IH0gZnJvbSAnbGliL2NvbnRleHQvbW9kdWxlUGFyYW1zQ29udGV4dCdcbmltcG9ydCBJbnB1dFNlbGVjdCBmcm9tICdjb21wb25lbnRzL0lucHV0U2VsZWN0JztcblxuY29uc3QgQ3VycmVjbnlPYmplY3RPcHRpb25zID0gKCkgPT4ge1xuICBjb25zdCB7IHNlbGVjdGVkT3B0aW9ucywgdXBkYXRlT3B0aW9ucyB9ID0gUmVhY3QudXNlQ29udGV4dChNb2R1bGVQYXJhbXNDb250ZXh0KTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCAjOThhMmRiJyxcbiAgICAgICAgbWFyZ2luOiAnLjVyZW0gMCcsXG4gICAgICAgIHBhZGRpbmc6ICcwIC41cmVtJyxcbiAgICAgIH19PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWludGVnZXIxJ1xuICAgICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfaW50ZWdlcjEnKX1cbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KDRg9Cx0LvRjFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbnMuY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMF19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWludGVnZXIyJ1xuICAgICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfaW50ZWdlcjInKX1cbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KDRg9Cx0LvRj1wiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbnMuY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMV19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWludGVnZXIzJ1xuICAgICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfaW50ZWdlcjMnKX1cbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KDRg9Cx0LvQtdC5XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ucy5jdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1syXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8SW5wdXRTZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWZvcm0taW50ZWdlcidcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9pbnRlZ2VyX25hbWVfZm9ybScpfVxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb25zLmN1c3RvbUN1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5pbnRlZ2VyfVxuICAgICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICAgIHt2YWx1ZTogMCwgbmFtZTogdCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfd29yZF9mb3JtMScpfSxcbiAgICAgICAgICAgICAgICB7dmFsdWU6IDEsIG5hbWU6IHQoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX3dvcmRfZm9ybTInKX0sXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAyLCBuYW1lOiB0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV93b3JkX2Zvcm0zJyl9LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMSdcbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2ZyYWN0aW9uYWwxJyl9XG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCa0L7Qv9C10LnQutCwXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ucy5jdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1swXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBuYW1lPSdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDInXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9mcmFjdGlvbmFsMicpfVxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQmtC+0L/QtdC50LrQuFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbnMuY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMV19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwzJ1xuICAgICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZnJhY3Rpb25hbDMnKX1cbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JrQvtC/0LXQtdC6XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ucy5jdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1syXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8SW5wdXRTZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWZvcm0tZnJhY3Rpb25hbCdcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9mcmFjdGlvbmFsX25hbWVfZm9ybScpfVxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb25zLmN1c3RvbUN1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5mcmFjdGlvbmFsUGFydH1cbiAgICAgICAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICAgICAgICB7dmFsdWU6IDAsIG5hbWU6IHQoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX3dvcmRfZm9ybTEnKX0sXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAxLCBuYW1lOiB0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV93b3JkX2Zvcm0yJyl9LFxuICAgICAgICAgICAgICAgIHt2YWx1ZTogMiwgbmFtZTogdCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfd29yZF9mb3JtMycpfSxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLW1pbi1sZW5ndGgnXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2ZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyl9XG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIyXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ucy5jdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE1pbkxlbmd0aH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVjbnlPYmplY3RPcHRpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==