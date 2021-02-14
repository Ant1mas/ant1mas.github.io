webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CurrecnyObjectOptions.tsx":
/*!**********************************************!*\
  !*** ./components/CurrecnyObjectOptions.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var lib_context_moduleParamsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/context/moduleParamsContext */ "./lib/context/moduleParamsContext.tsx");
/* harmony import */ var components_InputSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/InputSelect */ "./components/InputSelect.tsx");
/* harmony import */ var components_DeclensionsFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/DeclensionsFields */ "./components/DeclensionsFields.tsx");



var _jsxFileName = "C:\\OpenServer\\domains\\projects.local\\_react_projects\\number-to-words-ru_app\\number-to-words-ru_APP(NextJs)\\components\\CurrecnyObjectOptions.tsx",
    _this = undefined,
    _s = $RefreshSig$();



 // import styles from "./CurrecnyObjectOptions.module.sass"





var CurrecnyObjectOptions = function CurrecnyObjectOptions() {
  _s();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(lib_context_moduleParamsContext__WEBPACK_IMPORTED_MODULE_4__["ModuleParamsContext"]),
      options = _React$useContext.options,
      updateOptions = _React$useContext.updateOptions;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        borderLeft: '2px solid #98a2db',
        margin: '.5rem 0',
        padding: '0 .5rem'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        container: true,
        spacing: 1,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            name: "custom-currency-integer1",
            label: t('options_currency_custom_value_integer1'),
            fullWidth: true,
            placeholder: "\u0420\u0443\u0431\u043B\u044C",
            value: options.customCurrency.currencyNameCases[0],
            onChange: updateOptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            name: "custom-currency-integer2",
            label: t('options_currency_custom_value_integer2'),
            fullWidth: true,
            placeholder: "\u0420\u0443\u0431\u043B\u044F",
            value: options.customCurrency.currencyNameCases[1],
            onChange: updateOptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            name: "custom-currency-integer3",
            label: t('options_currency_custom_value_integer3'),
            fullWidth: true,
            placeholder: "\u0420\u0443\u0431\u043B\u0435\u0439",
            value: options.customCurrency.currencyNameCases[2],
            onChange: updateOptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_DeclensionsFields__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_InputSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "custom-currency-form-integer",
            fullWidth: true,
            label: t('options_currency_custom_value_integer_name_form'),
            value: options.customCurrency.currencyNounGender.integer,
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
            onChange: updateOptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          style: {
            padding: '1.5rem 0'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            name: "custom-currency-fractional1",
            label: t('options_currency_custom_value_fractional1'),
            fullWidth: true,
            placeholder: "\u041A\u043E\u043F\u0435\u0439\u043A\u0430",
            value: options.customCurrency.fractionalPartNameCases[0],
            onChange: updateOptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            name: "custom-currency-fractional2",
            label: t('options_currency_custom_value_fractional2'),
            fullWidth: true,
            placeholder: "\u041A\u043E\u043F\u0435\u0439\u043A\u0438",
            value: options.customCurrency.fractionalPartNameCases[1],
            onChange: updateOptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            name: "custom-currency-fractional3",
            label: t('options_currency_custom_value_fractional3'),
            fullWidth: true,
            placeholder: "\u041A\u043E\u043F\u0435\u0435\u043A",
            value: options.customCurrency.fractionalPartNameCases[2],
            onChange: updateOptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_InputSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "custom-currency-form-fractional",
            fullWidth: true,
            label: t('options_currency_custom_value_fractional_name_form'),
            value: options.customCurrency.currencyNounGender.fractionalPart,
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
            onChange: updateOptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          style: {
            padding: '1.5rem 0'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            name: "custom-currency-fractional-min-length",
            label: t('options_currency_fractionalPartMinLength'),
            fullWidth: true,
            type: "number",
            inputProps: {
              min: 0
            },
            placeholder: "2",
            value: options.customCurrency.fractionalPartMinLength,
            onChange: updateOptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(CurrecnyObjectOptions, "YCAVFLQRe9xGoyZn1b1KC1T2BOU=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"]];
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZWNueU9iamVjdE9wdGlvbnMudHN4Il0sIm5hbWVzIjpbIkN1cnJlY255T2JqZWN0T3B0aW9ucyIsIlJlYWN0IiwidXNlQ29udGV4dCIsIk1vZHVsZVBhcmFtc0NvbnRleHQiLCJvcHRpb25zIiwidXBkYXRlT3B0aW9ucyIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJib3JkZXJMZWZ0IiwibWFyZ2luIiwicGFkZGluZyIsImN1c3RvbUN1cnJlbmN5IiwiY3VycmVuY3lOYW1lQ2FzZXMiLCJjdXJyZW5jeU5vdW5HZW5kZXIiLCJpbnRlZ2VyIiwidmFsdWUiLCJuYW1lIiwiZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXMiLCJmcmFjdGlvbmFsUGFydCIsIm1pbiIsImZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBTUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUFBOztBQUFBLDBCQUNDQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxtRkFBakIsQ0FERDtBQUFBLE1BQzFCQyxPQUQwQixxQkFDMUJBLE9BRDBCO0FBQUEsTUFDakJDLGFBRGlCLHFCQUNqQkEsYUFEaUI7O0FBQUEsd0JBRWRDLG9FQUFjLEVBRkE7QUFBQSxNQUUxQkMsQ0FGMEIsbUJBRTFCQSxDQUYwQjtBQUFBLE1BRXZCQyxJQUZ1QixtQkFFdkJBLElBRnVCOztBQUlsQyxzQkFDRTtBQUFBLDJCQUNFO0FBQUssV0FBSyxFQUFFO0FBQ1ZDLGtCQUFVLEVBQUUsbUJBREY7QUFFVkMsY0FBTSxFQUFFLFNBRkU7QUFHVkMsZUFBTyxFQUFFO0FBSEMsT0FBWjtBQUFBLDZCQUtFLHFFQUFDLHNEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUUsQ0FBekI7QUFBQSxnQ0FD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USxjQUFSLENBQXVCUyx1QkFUaEM7QUFVRSxvQkFBUSxFQUFFaEI7QUFWWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBcUhELENBekhEOztHQUFNTCxxQjtVQUVnQk0sNEQ7OztLQUZoQk4scUI7QUEySFNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZmMGE1OGM2YWY1ZTVjM2VmNWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBHcmlkLFxuICBUZXh0RmllbGQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ3VycmVjbnlPYmplY3RPcHRpb25zLm1vZHVsZS5zYXNzXCJcbmltcG9ydCB7IE1vZHVsZVBhcmFtc0NvbnRleHQgfSBmcm9tICdsaWIvY29udGV4dC9tb2R1bGVQYXJhbXNDb250ZXh0J1xuaW1wb3J0IElucHV0U2VsZWN0IGZyb20gJ2NvbXBvbmVudHMvSW5wdXRTZWxlY3QnO1xuaW1wb3J0IERlY2xlbnNpb25zRmllbGRzIGZyb20gJ2NvbXBvbmVudHMvRGVjbGVuc2lvbnNGaWVsZHMnO1xuXG5jb25zdCBDdXJyZWNueU9iamVjdE9wdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgb3B0aW9ucywgdXBkYXRlT3B0aW9ucyB9ID0gUmVhY3QudXNlQ29udGV4dChNb2R1bGVQYXJhbXNDb250ZXh0KTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCAjOThhMmRiJyxcbiAgICAgICAgbWFyZ2luOiAnLjVyZW0gMCcsXG4gICAgICAgIHBhZGRpbmc6ICcwIC41cmVtJyxcbiAgICAgIH19PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWludGVnZXIxJ1xuICAgICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfaW50ZWdlcjEnKX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KDRg9Cx0LvRjFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzBdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMidcbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2ludGVnZXIyJyl9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCg0YPQsdC70Y9cIlxuICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1sxXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBuYW1lPSdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjMnXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9pbnRlZ2VyMycpfVxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQoNGD0LHQu9C10LlcIlxuICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1syXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8RGVjbGVuc2lvbnNGaWVsZHMgLz5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8SW5wdXRTZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWZvcm0taW50ZWdlcidcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9pbnRlZ2VyX25hbWVfZm9ybScpfVxuICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuaW50ZWdlcn1cbiAgICAgICAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICAgICAgICB7dmFsdWU6IDAsIG5hbWU6IHQoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX3dvcmRfZm9ybTEnKX0sXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAxLCBuYW1lOiB0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV93b3JkX2Zvcm0yJyl9LFxuICAgICAgICAgICAgICAgIHt2YWx1ZTogMiwgbmFtZTogdCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfd29yZF9mb3JtMycpfSxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3twYWRkaW5nOiAnMS41cmVtIDAnfX0+PC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMSdcbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2ZyYWN0aW9uYWwxJyl9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCa0L7Qv9C10LnQutCwXCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMF19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwyJ1xuICAgICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZnJhY3Rpb25hbDInKX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JrQvtC/0LXQudC60LhcIlxuICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1sxXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBuYW1lPSdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDMnXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9mcmFjdGlvbmFsMycpfVxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQmtC+0L/QtdC10LpcIlxuICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1syXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8SW5wdXRTZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWZvcm0tZnJhY3Rpb25hbCdcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9mcmFjdGlvbmFsX25hbWVfZm9ybScpfVxuICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuZnJhY3Rpb25hbFBhcnR9XG4gICAgICAgICAgICAgIGl0ZW1zPXtbXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAwLCBuYW1lOiB0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV93b3JkX2Zvcm0xJyl9LFxuICAgICAgICAgICAgICAgIHt2YWx1ZTogMSwgbmFtZTogdCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfd29yZF9mb3JtMicpfSxcbiAgICAgICAgICAgICAgICB7dmFsdWU6IDIsIG5hbWU6IHQoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX3dvcmRfZm9ybTMnKX0sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7cGFkZGluZzogJzEuNXJlbSAwJ319PjwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLW1pbi1sZW5ndGgnXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2ZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyl9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIyXCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGh9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlY255T2JqZWN0T3B0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=