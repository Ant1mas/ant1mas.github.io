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
            children: "\u0426\u0435\u043B\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u0447\u0438\u0441\u043B\u0430"
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
            label: t('options_currency_custom_value_integer1'),
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
            label: t('options_currency_custom_value_integer2'),
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
            label: t('options_currency_custom_value_integer3'),
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
          numberPart: "integer"
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
            paddingTop: '1.5rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
            variant: "h5",
            display: "block",
            children: "\u0414\u0440\u043E\u0431\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u0447\u0438\u0441\u043B\u0430"
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
            label: t('options_currency_custom_value_fractional1'),
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
            label: t('options_currency_custom_value_fractional2'),
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
            label: t('options_currency_custom_value_fractional3'),
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
            lineNumber: 112,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 12,
          style: {
            padding: '1.5rem 0'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
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
            lineNumber: 127,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZWNueU9iamVjdE9wdGlvbnMudHN4Il0sIm5hbWVzIjpbIkN1cnJlY255T2JqZWN0T3B0aW9ucyIsIlJlYWN0IiwidXNlQ29udGV4dCIsIk1vZHVsZVBhcmFtc0NvbnRleHQiLCJvcHRpb25zIiwidXBkYXRlT3B0aW9ucyIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJib3JkZXJMZWZ0IiwibWFyZ2luIiwicGFkZGluZyIsImN1c3RvbUN1cnJlbmN5IiwiY3VycmVuY3lOYW1lQ2FzZXMiLCJjdXJyZW5jeU5vdW5HZW5kZXIiLCJpbnRlZ2VyIiwidmFsdWUiLCJuYW1lIiwicGFkZGluZ1RvcCIsImZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzIiwiZnJhY3Rpb25hbFBhcnQiLCJtaW4iLCJmcmFjdGlvbmFsUGFydE1pbkxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQU9BOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFBQTs7QUFBQSwwQkFDQ0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsbUZBQWpCLENBREQ7QUFBQSxNQUMxQkMsT0FEMEIscUJBQzFCQSxPQUQwQjtBQUFBLE1BQ2pCQyxhQURpQixxQkFDakJBLGFBRGlCOztBQUFBLHdCQUVkQyxvRUFBYyxFQUZBO0FBQUEsTUFFMUJDLENBRjBCLG1CQUUxQkEsQ0FGMEI7QUFBQSxNQUV2QkMsSUFGdUIsbUJBRXZCQSxJQUZ1Qjs7QUFJbEMsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLFdBQUssRUFBRTtBQUNWQyxrQkFBVSxFQUFFLG1CQURGO0FBRVZDLGNBQU0sRUFBRSxTQUZFO0FBR1ZDLGVBQU8sRUFBRTtBQUhDLE9BQVo7QUFBQSw2QkFLRSxxRUFBQyxzREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsZUFBTyxFQUFFLENB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QUU7QUFBQ00sbUJBQU8sRUFBRTtBQUFWO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEdGLGVBcUdFLHFFQUFDLHNEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLEVBQWY7QUFBQSxpQ0FDRSxxRUFBQywyREFBRDtBQUNFLGdCQUFJLEVBQUMsdUNBRFA7QUFFRSxpQkFBSyxFQUFFSixDQUFDLENBQUMsMENBQUQsQ0FGVjtBQUdFLHFCQUFTLE1BSFg7QUFJRSxnQkFBSSxFQUFDLFFBSlA7QUFLRSxzQkFBVSxFQUFFO0FBQ1ZjLGlCQUFHLEVBQUU7QUFESyxhQUxkO0FBUUUsdUJBQVcsRUFBQyxHQVJkO0FBU0UsaUJBQUssRUFBRWpCLE9BQU8sQ0FBQ1EsY0FBUixDQUF1QlUsdUJBVGhDO0FBVUUsb0JBQVEsRUFBRWpCO0FBVlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQThIRCxDQWxJRDs7R0FBTUwscUI7VUFFZ0JNLDREOzs7S0FGaEJOLHFCO0FBb0lTQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xM2NmZjJiMzVjNjRmNTlkOGJiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgR3JpZCxcbiAgVGV4dEZpZWxkLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0N1cnJlY255T2JqZWN0T3B0aW9ucy5tb2R1bGUuc2Fzc1wiXG5pbXBvcnQgeyBNb2R1bGVQYXJhbXNDb250ZXh0IH0gZnJvbSAnbGliL2NvbnRleHQvbW9kdWxlUGFyYW1zQ29udGV4dCdcbmltcG9ydCBJbnB1dFNlbGVjdCBmcm9tICdjb21wb25lbnRzL0lucHV0U2VsZWN0JztcbmltcG9ydCBEZWNsZW5zaW9uc0ZpZWxkcyBmcm9tICdjb21wb25lbnRzL0RlY2xlbnNpb25zRmllbGRzJztcblxuY29uc3QgQ3VycmVjbnlPYmplY3RPcHRpb25zID0gKCkgPT4ge1xuICBjb25zdCB7IG9wdGlvbnMsIHVwZGF0ZU9wdGlvbnMgfSA9IFJlYWN0LnVzZUNvbnRleHQoTW9kdWxlUGFyYW1zQ29udGV4dCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIGJvcmRlckxlZnQ6ICcycHggc29saWQgIzk4YTJkYicsXG4gICAgICAgIG1hcmdpbjogJy41cmVtIDAnLFxuICAgICAgICBwYWRkaW5nOiAnMCAuNXJlbScsXG4gICAgICB9fT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGRpc3BsYXk9XCJibG9ja1wiPlxuICAgICAgICAgICAgICDQptC10LvQsNGPINGH0LDRgdGC0Ywg0YfQuNGB0LvQsFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBuYW1lPSdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjEnXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9pbnRlZ2VyMScpfVxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQoNGD0LHQu9GMXCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMF19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWludGVnZXIyJ1xuICAgICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfaW50ZWdlcjInKX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KDRg9Cx0LvRj1wiXG4gICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzFdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMydcbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2ludGVnZXIzJyl9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCg0YPQsdC70LXQuVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzJdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxEZWNsZW5zaW9uc0ZpZWxkcyBudW1iZXJQYXJ0PSdpbnRlZ2VyJyAvPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxJbnB1dFNlbGVjdFxuICAgICAgICAgICAgICBuYW1lPSdjdXN0b20tY3VycmVuY3ktZm9ybS1pbnRlZ2VyJ1xuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2ludGVnZXJfbmFtZV9mb3JtJyl9XG4gICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5pbnRlZ2VyfVxuICAgICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICAgIHt2YWx1ZTogMCwgbmFtZTogdCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfd29yZF9mb3JtMScpfSxcbiAgICAgICAgICAgICAgICB7dmFsdWU6IDEsIG5hbWU6IHQoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX3dvcmRfZm9ybTInKX0sXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAyLCBuYW1lOiB0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV93b3JkX2Zvcm0zJyl9LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3BhZGRpbmdUb3A6ICcxLjVyZW0nfX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBkaXNwbGF5PVwiYmxvY2tcIj5cbiAgICAgICAgICAgICAg0JTRgNC+0LHQvdCw0Y8g0YfQsNGB0YLRjCDRh9C40YHQu9CwXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMSdcbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2ZyYWN0aW9uYWwxJyl9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCa0L7Qv9C10LnQutCwXCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMF19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwyJ1xuICAgICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZnJhY3Rpb25hbDInKX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JrQvtC/0LXQudC60LhcIlxuICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1sxXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBuYW1lPSdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDMnXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9mcmFjdGlvbmFsMycpfVxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQmtC+0L/QtdC10LpcIlxuICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1syXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8SW5wdXRTZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWZvcm0tZnJhY3Rpb25hbCdcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9mcmFjdGlvbmFsX25hbWVfZm9ybScpfVxuICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuZnJhY3Rpb25hbFBhcnR9XG4gICAgICAgICAgICAgIGl0ZW1zPXtbXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAwLCBuYW1lOiB0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV93b3JkX2Zvcm0xJyl9LFxuICAgICAgICAgICAgICAgIHt2YWx1ZTogMSwgbmFtZTogdCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfd29yZF9mb3JtMicpfSxcbiAgICAgICAgICAgICAgICB7dmFsdWU6IDIsIG5hbWU6IHQoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX3dvcmRfZm9ybTMnKX0sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7cGFkZGluZzogJzEuNXJlbSAwJ319PjwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLW1pbi1sZW5ndGgnXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2ZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyl9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIyXCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGh9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlY255T2JqZWN0T3B0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=