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
      options = _React$useContext.options,
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

_s(OptionsContent, "YCAVFLQRe9xGoyZn1b1KC1T2BOU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcHRpb25zQ29udGVudC50c3giXSwibmFtZXMiOlsiT3B0aW9uc0NvbnRlbnQiLCJwcm9wcyIsIlJlYWN0IiwidXNlQ29udGV4dCIsIk1vZHVsZVBhcmFtc0NvbnRleHQiLCJvcHRpb25zIiwidXBkYXRlT3B0aW9ucyIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJjdXJyZW5jeSIsInZhbHVlIiwibmFtZSIsIm1pbiIsInJvdW5kTnVtYmVyIiwiY29udmVydE1pbnVzU2lnblRvV29yZCIsInNob3dOdW1iZXJQYXJ0cyIsImludGVnZXIiLCJmcmFjdGlvbmFsIiwiY29udmVydE51bWJlcnRUb1dvcmRzIiwic2hvd0N1cnJlbmN5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBT0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFFQyxLQUFGLEVBQWE7QUFBQTs7QUFBQSwwQkFDQ0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsbUZBQWpCLENBREQ7QUFBQSxNQUMxQkMsT0FEMEIscUJBQzFCQSxPQUQwQjtBQUFBLE1BQ2pCQyxhQURpQixxQkFDakJBLGFBRGlCOztBQUFBLHdCQUVkQyxvRUFBYyxFQUZBO0FBQUEsTUFFMUJDLENBRjBCLG1CQUUxQkEsQ0FGMEI7QUFBQSxNQUV2QkMsSUFGdUIsbUJBRXZCQSxJQUZ1Qjs7QUFJbEMsU0FDRSxtRUFDRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxRQUExQjtBQUFtQyxXQUFPLEVBQUUsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFB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QUFDZSxZQUFSLENBQXFCSCxPQUhoQztBQUlFLFlBQVEsRUFBRVgsYUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0E5RUYsRUFzRkUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUNFLFFBQUksRUFBQywrQkFEUDtBQUVFLFNBQUssRUFBRUUsQ0FBQyxDQUFDLHVDQUFELENBRlY7QUFHRSxXQUFPLEVBQUVILE9BQU8sQ0FBQ2UsWUFBUixDQUFxQkYsVUFIaEM7QUFJRSxZQUFRLEVBQUVaLGFBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBdEZGLENBREYsQ0FERjtBQW1HRCxDQXZHRDs7R0FBTU4sYztVQUVnQk8sNEQ7OztLQUZoQlAsYztBQXlHU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWJkODJmMTk4YTA1ZWExYzVmNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEdyaWQsXG4gIEhpZGRlbixcbiAgVGV4dEZpZWxkLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL09wdGlvbnNDb250ZW50Lm1vZHVsZS5zYXNzXCJcbmltcG9ydCB7IE1vZHVsZVBhcmFtc0NvbnRleHQgfSBmcm9tICdsaWIvY29udGV4dC9tb2R1bGVQYXJhbXNDb250ZXh0J1xuaW1wb3J0IEN1cnJlY255T2JqZWN0T3B0aW9ucyBmcm9tIFwiY29tcG9uZW50cy9DdXJyZWNueU9iamVjdE9wdGlvbnNcIlxuaW1wb3J0IElucHV0U2VsZWN0IGZyb20gXCJjb21wb25lbnRzL0lucHV0U2VsZWN0XCJcbmltcG9ydCBJbnB1dFN3aXRjaCBmcm9tIFwiY29tcG9uZW50cy9JbnB1dFN3aXRjaFwiXG5cbmNvbnN0IE9wdGlvbnNDb250ZW50ID0gKCBwcm9wcyApID0+IHtcbiAgY29uc3QgeyBvcHRpb25zLCB1cGRhdGVPcHRpb25zIH0gPSBSZWFjdC51c2VDb250ZXh0KE1vZHVsZVBhcmFtc0NvbnRleHQpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJyBzcGFjaW5nPXsxfT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cbiAgICAgICAgICA8SW5wdXRTZWxlY3RcbiAgICAgICAgICAgIG5hbWU9J2N1cnJlbmN5J1xuICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfc2VsZWN0X2xhYmVsJyl9XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1cnJlbmN5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICB7dmFsdWU6ICdydWInLCBuYW1lOiB0KCdvcHRpb25zX2N1cnJlbmN5X3NlbGVjdF92YWx1ZV9ydWInKX0sXG4gICAgICAgICAgICAgIHt2YWx1ZTogJ3VzZCcsIG5hbWU6IHQoJ29wdGlvbnNfY3VycmVuY3lfc2VsZWN0X3ZhbHVlX3VzZCcpfSxcbiAgICAgICAgICAgICAge3ZhbHVlOiAnZXVyJywgbmFtZTogdCgnb3B0aW9uc19jdXJyZW5jeV9zZWxlY3RfdmFsdWVfZXVyJyl9LFxuICAgICAgICAgICAgICB7dmFsdWU6ICdudW1iZXInLCBuYW1lOiB0KCdvcHRpb25zX2N1cnJlbmN5X3NlbGVjdF92YWx1ZV9udW1iZXInKX0sXG4gICAgICAgICAgICAgIHt2YWx1ZTogJ2N1c3RvbScsIG5hbWU6IHQoJ29wdGlvbnNfY3VycmVuY3lfc2VsZWN0X3ZhbHVlX2N1c3RvbScpfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8SGlkZGVuIHhzVXA9e29wdGlvbnMuY3VycmVuY3kgIT09ICdjdXN0b20nfT5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPEN1cnJlY255T2JqZWN0T3B0aW9ucyAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbmFtZT0ncm91bmQtbnVtYmVyJ1xuICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfcm91bmRfbnVtYmVyJyl9XG4gICAgICAgICAgICBtYXJnaW49J25vcm1hbCdcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzInXG4gICAgICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaGVscGVyVGV4dD17b3B0aW9ucy5yb3VuZE51bWJlciA9PSAnLTEnICYmIHQoJ29wdGlvbnNfcm91bmRfbnVtYmVyX2hlbHBlcl9kaXNhYmxlZCcpfVxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMucm91bmROdW1iZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgPElucHV0U3dpdGNoXG4gICAgICAgICAgICBuYW1lPSdjb252ZXJ0LW1pbnVzLXNpZ24nXG4gICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jb252ZXJ0X21pbnVzX3NpZ24nKX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e29wdGlvbnMuY29udmVydE1pbnVzU2lnblRvV29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8SW5wdXRTd2l0Y2hcbiAgICAgICAgICAgIG5hbWU9J3Nob3ctbnVtYmVyLXBhcnQtaW50ZWdlcidcbiAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX3Nob3dfaW50ZWdlcl9wYXJ0Jyl9XG4gICAgICAgICAgICBjaGVja2VkPXtvcHRpb25zLnNob3dOdW1iZXJQYXJ0cy5pbnRlZ2VyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxJbnB1dFN3aXRjaFxuICAgICAgICAgICAgbmFtZT0nc2hvdy1udW1iZXItcGFydC1mcmFjdGlvbmFsJ1xuICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfc2hvd19mcmFjdGlvbmFsX3BhcnQnKX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e29wdGlvbnMuc2hvd051bWJlclBhcnRzLmZyYWN0aW9uYWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgPElucHV0U3dpdGNoXG4gICAgICAgICAgICBuYW1lPSdjb252ZXJ0LW51bWJlci1wYXJ0LWludGVnZXInXG4gICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jb252ZXJ0X2ludGVnZXJfcGFydCcpfVxuICAgICAgICAgICAgY2hlY2tlZD17b3B0aW9ucy5jb252ZXJ0TnVtYmVydFRvV29yZHMuaW50ZWdlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8SW5wdXRTd2l0Y2hcbiAgICAgICAgICAgIG5hbWU9J2NvbnZlcnQtbnVtYmVyLXBhcnQtZnJhY3Rpb25hbCdcbiAgICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2NvbnZlcnRfZnJhY3Rpb25hbF9wYXJ0Jyl9XG4gICAgICAgICAgICBjaGVja2VkPXtvcHRpb25zLmNvbnZlcnROdW1iZXJ0VG9Xb3Jkcy5mcmFjdGlvbmFsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxJbnB1dFN3aXRjaFxuICAgICAgICAgICAgbmFtZT0nc2hvdy1jdXJyZW5jeS1wYXJ0LWludGVnZXInXG4gICAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19zaG93X2N1cnJlbmN5X2ludGVnZXJfcGFydCcpfVxuICAgICAgICAgICAgY2hlY2tlZD17b3B0aW9ucy5zaG93Q3VycmVuY3kuaW50ZWdlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8SW5wdXRTd2l0Y2hcbiAgICAgICAgICAgIG5hbWU9J3Nob3ctY3VycmVuY3ktcGFydC1mcmFjdGlvbmFsJ1xuICAgICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfc2hvd19jdXJyZW5jeV9mcmFjdGlvbmFsX3BhcnQnKX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e29wdGlvbnMuc2hvd0N1cnJlbmN5LmZyYWN0aW9uYWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3B0aW9uc0NvbnRlbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9