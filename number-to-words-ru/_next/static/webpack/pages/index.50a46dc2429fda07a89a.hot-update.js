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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
            variant: "h5",
            display: "block",
            children: t('options_currency_custom_integer_block_title')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            name: "custom-currency-integer1",
            label: t('options_currency_custom_value_form1'),
            fullWidth: true,
            placeholder: "\u0420\u0443\u0431\u043B\u044C",
            value: options.customCurrency.currencyNameCases[0],
            onChange: updateOptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            name: "custom-currency-integer2",
            label: t('options_currency_custom_value_form2'),
            fullWidth: true,
            placeholder: "\u0420\u0443\u0431\u043B\u044F",
            value: options.customCurrency.currencyNameCases[1],
            onChange: updateOptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            name: "custom-currency-integer3",
            label: t('options_currency_custom_value_form3'),
            fullWidth: true,
            placeholder: "\u0420\u0443\u0431\u043B\u0435\u0439",
            value: options.customCurrency.currencyNameCases[2],
            onChange: updateOptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_DeclensionsFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
          numberPart: "integer",
          declensionsObjectName: "currencyNameDeclensions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_InputSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "custom-currency-form-integer",
            fullWidth: true,
            label: t('options_currency_custom_value_currency_name_form'),
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
            lineNumber: 63,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          style: {
            marginTop: '1.5rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
            variant: "h5",
            display: "block",
            children: t('options_currency_custom_fractional_block_title')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            name: "custom-currency-fractional1",
            label: t('options_currency_custom_value_form1'),
            fullWidth: true,
            placeholder: "\u041A\u043E\u043F\u0435\u0439\u043A\u0430",
            value: options.customCurrency.fractionalPartNameCases[0],
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
            name: "custom-currency-fractional2",
            label: t('options_currency_custom_value_form2'),
            fullWidth: true,
            placeholder: "\u041A\u043E\u043F\u0435\u0439\u043A\u0438",
            value: options.customCurrency.fractionalPartNameCases[1],
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
          sm: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            name: "custom-currency-fractional3",
            label: t('options_currency_custom_value_form3'),
            fullWidth: true,
            placeholder: "\u041A\u043E\u043F\u0435\u0435\u043A",
            value: options.customCurrency.fractionalPartNameCases[2],
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_DeclensionsFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
          numberPart: "fractional",
          declensionsObjectName: "fractionalPartNameDeclensions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_InputSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "custom-currency-form-fractional",
            fullWidth: true,
            label: t('options_currency_custom_value_currency_name_form'),
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
            lineNumber: 113,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          style: {
            marginTop: '1.5rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
            variant: "h5",
            display: "block",
            children: t('options_currency_custom_common_block_title')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
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
            lineNumber: 132,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZWNueU9iamVjdE9wdGlvbnMudHN4Il0sIm5hbWVzIjpbIkN1cnJlY255T2JqZWN0T3B0aW9ucyIsIlJlYWN0IiwidXNlQ29udGV4dCIsIk1vZHVsZVBhcmFtc0NvbnRleHQiLCJvcHRpb25zIiwidXBkYXRlT3B0aW9ucyIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJib3JkZXJMZWZ0IiwibWFyZ2luIiwicGFkZGluZyIsImN1c3RvbUN1cnJlbmN5IiwiY3VycmVuY3lOYW1lQ2FzZXMiLCJjdXJyZW5jeU5vdW5HZW5kZXIiLCJpbnRlZ2VyIiwidmFsdWUiLCJuYW1lIiwibWFyZ2luVG9wIiwiZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXMiLCJmcmFjdGlvbmFsUGFydCIsIm1pbiIsImZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBT0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUFBOztBQUFBLDBCQUNDQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxtRkFBakIsQ0FERDtBQUFBLE1BQzFCQyxPQUQwQixxQkFDMUJBLE9BRDBCO0FBQUEsTUFDakJDLGFBRGlCLHFCQUNqQkEsYUFEaUI7O0FBQUEsd0JBRWRDLG9FQUFjLEVBRkE7QUFBQSxNQUUxQkMsQ0FGMEIsbUJBRTFCQSxDQUYwQjtBQUFBLE1BRXZCQyxJQUZ1QixtQkFFdkJBLElBRnVCOztBQUlsQyxzQkFDRTtBQUFBLDJCQUNFO0FBQUssV0FBSyxFQUFFO0FBQ1ZDLGtCQUFVLEVBQUUsbUJBREY7QUFFVkMsY0FBTSxFQUFFLFNBRkU7QUFHVkMsZUFBTyxFQUFFO0FBSEMsT0FBWjtBQUFBLDZCQUtFLHFFQUFDLHNEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUUsQ0FBekI7QUFBQSxnQ0FDRSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQUEsaUNBQ0UscUVBQUMsNERBQUQ7QUFBWSxtQkFBTyxFQUFDLElBQXBCO0FBQXlCLG1CQUFPLEVBQUMsT0FBakM7QUFBQSxzQkFDR0osQ0FBQyxDQUFDLDZDQUFEO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQW1CLFlBQUUsRUFBRSxDQUF2QjtBQUFBLGlDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsZ0JBQUksRUFBQywwQkFEUDtBQUVFLGlCQUFLLEVBQUVBLENBQUMsQ0FBQyxxQ0FBRCxDQUZWO0FBR0UscUJBQVMsTUFIWDtBQUlFLHVCQUFXLEVBQUMsZ0NBSmQ7QUFLRSxpQkFBSyxFQUFFSCxPQUFPLENBQUNRLGNBQVIsQ0FBdUJDLGlCQUF2QixDQUF5QyxDQUF6QyxDQUxUO0FBTUUsb0JBQVEsRUFBRVI7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQWdCRSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQW1CLFlBQUUsRUFBRSxDQUF2QjtBQUFBLGlDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsZ0JBQUksRUFBQywwQkFEUDtBQUVFLGlCQUFLLEVBQUVFLENBQUMsQ0FBQyxxQ0FBRCxDQUZWO0FBR0UscUJBQVMsTUFIWDtBQUlFLHVCQUFXLEVBQUMsZ0NBSmQ7QUFLRSxpQkFBSyxFQUFFSCxPQUFPLENBQUNRLGNBQVIsQ0FBdUJDLGlCQUF2QixDQUF5QyxDQUF6QyxDQUxUO0FBTUUsb0JBQVEsRUFBRVI7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkYsZUEwQkUscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsRUFBZjtBQUFtQixZQUFFLEVBQUUsQ0FBdkI7QUFBQSxpQ0FDRSxxRUFBQywyREFBRDtBQUNFLGdCQUFJLEVBQUMsMEJBRFA7QUFFRSxpQkFBSyxFQUFFRSxDQUFDLENBQUMscUNBQUQsQ0FGVjtBQUdFLHFCQUFTLE1BSFg7QUFJRSx1QkFBVyxFQUFDLHNDQUpkO0FBS0UsaUJBQUssRUFBRUgsT0FBTyxDQUFDUSxjQUFSLENBQXVCQyxpQkFBdkIsQ0FBeUMsQ0FBekMsQ0FMVDtBQU1FLG9CQUFRLEVBQUVSO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJGLGVBb0NFLHFFQUFDLG9FQUFEO0FBQW1CLG9CQUFVLEVBQUMsU0FBOUI7QUFBd0MsK0JBQXFCLEVBQUM7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQ0YsZUFxQ0UscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsRUFBZjtBQUFBLGlDQUNFLHFFQUFDLDhEQUFEO0FBQ0UsZ0JBQUksRUFBQyw4QkFEUDtBQUVFLHFCQUFTLE1BRlg7QUFHRSxpQkFBSyxFQUFFRSxDQUFDLENBQUMsa0RBQUQsQ0FIVjtBQUlFLGlCQUFLLEVBQUVILE9BQU8sQ0FBQ1EsY0FBUixDQUF1QkUsa0JBQXZCLENBQTBDQyxPQUpuRDtBQUtFLGlCQUFLLEVBQUUsQ0FDTDtBQUFDQyxtQkFBSyxFQUFFLENBQVI7QUFBV0Msa0JBQUksRUFBRVYsQ0FBQyxDQUFDLDBDQUFEO0FBQWxCLGFBREssRUFFTDtBQUFDUyxtQkFBSyxFQUFFLENBQVI7QUFBV0Msa0JBQUksRUFBRVYsQ0FBQyxDQUFDLDBDQUFEO0FBQWxCLGFBRkssRUFHTDtBQUFDUyxtQkFBSyxFQUFFLENBQVI7QUFBV0Msa0JBQUksRUFBRVYsQ0FBQyxDQUFDLDBDQUFEO0FBQWxCLGFBSEssQ0FMVDtBQVVFLG9CQUFRLEVBQUVGO0FBVlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckNGLGVBbURFLHFFQUFDLHNEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLEVBQWY7QUFBbUIsZUFBSyxFQUFFO0FBQUNhLHFCQUFTLEVBQUU7QUFBWixXQUExQjtBQUFBLGlDQUNFLHFFQUFDLDREQUFEO0FBQVksbUJBQU8sRUFBQyxJQUFwQjtBQUF5QixtQkFBTyxFQUFDLE9BQWpDO0FBQUEsc0JBQ0dYLENBQUMsQ0FBQyxnREFBRDtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5ERixlQXdERSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQW1CLFlBQUUsRUFBRSxDQUF2QjtBQUFBLGlDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsZ0JBQUksRUFBQyw2QkFEUDtBQUVFLGlCQUFLLEVBQUVBLENBQUMsQ0FBQyxxQ0FBRCxDQUZWO0FBR0UscUJBQVMsTUFIWDtBQUlFLHVCQUFXLEVBQUMsNENBSmQ7QUFLRSxpQkFBSyxFQUFFSCxPQUFPLENBQUNRLGNBQVIsQ0FBdUJPLHVCQUF2QixDQUErQyxDQUEvQyxDQUxUO0FBTUUsb0JBQVEsRUFBRWQ7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4REYsZUFrRUUscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsRUFBZjtBQUFtQixZQUFFLEVBQUUsQ0FBdkI7QUFBQSxpQ0FDRSxxRUFBQywyREFBRDtBQUNFLGdCQUFJLEVBQUMsNkJBRFA7QUFFRSxpQkFBSyxFQUFFRSxDQUFDLENBQUMscUNBQUQsQ0FGVjtBQUdFLHFCQUFTLE1BSFg7QUFJRSx1QkFBVyxFQUFDLDRDQUpkO0FBS0UsaUJBQUssRUFBRUgsT0FBTyxDQUFDUSxjQUFSLENBQXVCTyx1QkFBdkIsQ0FBK0MsQ0FBL0MsQ0FMVDtBQU1FLG9CQUFRLEVBQUVkO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEVGLGVBNEVFLHFFQUFDLHNEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLEVBQWY7QUFBbUIsWUFBRSxFQUFFLENBQXZCO0FBQUEsaUNBQ0UscUVBQUMsMkRBQUQ7QUFDRSxnQkFBSSxFQUFDLDZCQURQO0FBRUUsaUJBQUssRUFBRUUsQ0FBQyxDQUFDLHFDQUFELENBRlY7QUFHRSxxQkFBUyxNQUhYO0FBSUUsdUJBQVcsRUFBQyxzQ0FKZDtBQUtFLGlCQUFLLEVBQUVILE9BQU8sQ0FBQ1EsY0FBUixDQUF1Qk8sdUJBQXZCLENBQStDLENBQS9DLENBTFQ7QUFNRSxvQkFBUSxFQUFFZDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVFRixlQXNGRSxxRUFBQyxvRUFBRDtBQUFtQixvQkFBVSxFQUFDLFlBQTlCO0FBQTJDLCtCQUFxQixFQUFDO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEZGLGVBdUZFLHFFQUFDLHNEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLEVBQWY7QUFBQSxpQ0FDRSxxRUFBQyw4REFBRDtBQUNFLGdCQUFJLEVBQUMsaUNBRFA7QUFFRSxxQkFBUyxNQUZYO0FBR0UsaUJBQUssRUFBRUUsQ0FBQyxDQUFDLGtEQUFELENBSFY7QUFJRSxpQkFBSyxFQUFFSCxPQUFPLENBQUNRLGNBQVIsQ0FBdUJFLGtCQUF2QixDQUEwQ00sY0FKbkQ7QUFLRSxpQkFBSyxFQUFFLENBQ0w7QUFBQ0osbUJBQUssRUFBRSxDQUFSO0FBQVdDLGtCQUFJLEVBQUVWLENBQUMsQ0FBQywwQ0FBRDtBQUFsQixhQURLLEVBRUw7QUFBQ1MsbUJBQUssRUFBRSxDQUFSO0FBQVdDLGtCQUFJLEVBQUVWLENBQUMsQ0FBQywwQ0FBRDtBQUFsQixhQUZLLEVBR0w7QUFBQ1MsbUJBQUssRUFBRSxDQUFSO0FBQVdDLGtCQUFJLEVBQUVWLENBQUMsQ0FBQywwQ0FBRDtBQUFsQixhQUhLLENBTFQ7QUFVRSxvQkFBUSxFQUFFRjtBQVZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZGRixlQXFHRSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQW1CLGVBQUssRUFBRTtBQUFDYSxxQkFBUyxFQUFFO0FBQVosV0FBMUI7QUFBQSxpQ0FDRSxxRUFBQyw0REFBRDtBQUFZLG1CQUFPLEVBQUMsSUFBcEI7QUFBeUIsbUJBQU8sRUFBQyxPQUFqQztBQUFBLHNCQUNHWCxDQUFDLENBQUMsNENBQUQ7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyR0YsZUEwR0UscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsRUFBZjtBQUFBLGlDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsZ0JBQUksRUFBQyx1Q0FEUDtBQUVFLGlCQUFLLEVBQUVBLENBQUMsQ0FBQywwQ0FBRCxDQUZWO0FBR0UscUJBQVMsTUFIWDtBQUlFLGdCQUFJLEVBQUMsUUFKUDtBQUtFLHNCQUFVLEVBQUU7QUFDVmMsaUJBQUcsRUFBRTtBQURLLGFBTGQ7QUFRRSx1QkFBVyxFQUFDLEdBUmQ7QUFTRSxpQkFBSyxFQUFFakIsT0FBTyxDQUFDUSxjQUFSLENBQXVCVSx1QkFUaEM7QUFVRSxvQkFBUSxFQUFFakI7QUFWWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBbUlELENBdklEOztHQUFNTCxxQjtVQUVnQk0sNEQ7OztLQUZoQk4scUI7QUF5SVNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUwYTQ2ZGMyNDI5ZmRhMDdhODlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBHcmlkLFxuICBUZXh0RmllbGQsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ3VycmVjbnlPYmplY3RPcHRpb25zLm1vZHVsZS5zYXNzXCJcbmltcG9ydCB7IE1vZHVsZVBhcmFtc0NvbnRleHQgfSBmcm9tICdsaWIvY29udGV4dC9tb2R1bGVQYXJhbXNDb250ZXh0J1xuaW1wb3J0IElucHV0U2VsZWN0IGZyb20gJ2NvbXBvbmVudHMvSW5wdXRTZWxlY3QnO1xuaW1wb3J0IERlY2xlbnNpb25zRmllbGRzIGZyb20gJ2NvbXBvbmVudHMvRGVjbGVuc2lvbnNGaWVsZHMnO1xuXG5jb25zdCBDdXJyZWNueU9iamVjdE9wdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgb3B0aW9ucywgdXBkYXRlT3B0aW9ucyB9ID0gUmVhY3QudXNlQ29udGV4dChNb2R1bGVQYXJhbXNDb250ZXh0KTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCAjOThhMmRiJyxcbiAgICAgICAgbWFyZ2luOiAnLjVyZW0gMCcsXG4gICAgICAgIHBhZGRpbmc6ICcwIC41cmVtJyxcbiAgICAgIH19PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgZGlzcGxheT1cImJsb2NrXCI+XG4gICAgICAgICAgICAgIHt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV9pbnRlZ2VyX2Jsb2NrX3RpdGxlJyl9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMSdcbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2Zvcm0xJyl9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCg0YPQsdC70YxcIlxuICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1swXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBuYW1lPSdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjInXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9mb3JtMicpfVxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQoNGD0LHQu9GPXCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMV19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWludGVnZXIzJ1xuICAgICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZm9ybTMnKX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KDRg9Cx0LvQtdC5XCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMl19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPERlY2xlbnNpb25zRmllbGRzIG51bWJlclBhcnQ9J2ludGVnZXInIGRlY2xlbnNpb25zT2JqZWN0TmFtZT0nY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMnIC8+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPElucHV0U2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1mb3JtLWludGVnZXInXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfY3VycmVuY3lfbmFtZV9mb3JtJyl9XG4gICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5pbnRlZ2VyfVxuICAgICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICAgIHt2YWx1ZTogMCwgbmFtZTogdCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfd29yZF9mb3JtMScpfSxcbiAgICAgICAgICAgICAgICB7dmFsdWU6IDEsIG5hbWU6IHQoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX3dvcmRfZm9ybTInKX0sXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAyLCBuYW1lOiB0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV93b3JkX2Zvcm0zJyl9LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpblRvcDogJzEuNXJlbSd9fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGRpc3BsYXk9XCJibG9ja1wiPlxuICAgICAgICAgICAgICB7dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fZnJhY3Rpb25hbF9ibG9ja190aXRsZScpfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBuYW1lPSdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDEnXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9mb3JtMScpfVxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQmtC+0L/QtdC50LrQsFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzBdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMidcbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2Zvcm0yJyl9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCa0L7Qv9C10LnQutC4XCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMV19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwzJ1xuICAgICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZm9ybTMnKX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JrQvtC/0LXQtdC6XCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMl19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPERlY2xlbnNpb25zRmllbGRzIG51bWJlclBhcnQ9J2ZyYWN0aW9uYWwnIGRlY2xlbnNpb25zT2JqZWN0TmFtZT0nZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMnIC8+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPElucHV0U2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1mb3JtLWZyYWN0aW9uYWwnXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfY3VycmVuY3lfbmFtZV9mb3JtJyl9XG4gICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5mcmFjdGlvbmFsUGFydH1cbiAgICAgICAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICAgICAgICB7dmFsdWU6IDAsIG5hbWU6IHQoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX3dvcmRfZm9ybTEnKX0sXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAxLCBuYW1lOiB0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV93b3JkX2Zvcm0yJyl9LFxuICAgICAgICAgICAgICAgIHt2YWx1ZTogMiwgbmFtZTogdCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfd29yZF9mb3JtMycpfSxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Ub3A6ICcxLjVyZW0nfX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBkaXNwbGF5PVwiYmxvY2tcIj5cbiAgICAgICAgICAgICAge3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX2NvbW1vbl9ibG9ja190aXRsZScpfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLW1pbi1sZW5ndGgnXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2ZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyl9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIyXCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGh9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlY255T2JqZWN0T3B0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=