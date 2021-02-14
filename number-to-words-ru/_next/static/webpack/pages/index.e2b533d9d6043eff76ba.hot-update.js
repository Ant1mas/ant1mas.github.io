webpackHotUpdate_N_E("pages/index",{

/***/ "./components/DeclensionsFields.tsx":
/*!******************************************!*\
  !*** ./components/DeclensionsFields.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var lib_context_moduleParamsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/context/moduleParamsContext */ "./lib/context/moduleParamsContext.tsx");
/* harmony import */ var constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! constants/defaultCurrencyObject */ "./constants/defaultCurrencyObject.ts");



var _jsxFileName = "C:\\OpenServer\\domains\\projects.local\\_react_projects\\number-to-words-ru_app\\number-to-words-ru_APP(NextJs)\\components\\DeclensionsFields.tsx",
    _this = undefined,
    _s = $RefreshSig$();




 // import styles from "./DeclensionsFields.module.sass"




var DeclensionsFields = function DeclensionsFields(_ref) {
  _s();

  var numberPart = _ref.numberPart,
      declensionsObjectName = _ref.declensionsObjectName;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(lib_context_moduleParamsContext__WEBPACK_IMPORTED_MODULE_5__["ModuleParamsContext"]),
      options = _React$useContext.options,
      updateOptions = _React$useContext.updateOptions;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-".concat(numberPart, "-declension-nominative-singular"),
        label: t('options_currency_custom_value_declension_nominative_singular'),
        fullWidth: true,
        placeholder: constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].nominative[0],
        value: options.customCurrency[declensionsObjectName].nominative[0],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-".concat(numberPart, "-declension-nominative-plural"),
        label: t('options_currency_custom_value_declension_nominative_plural'),
        fullWidth: true,
        placeholder: constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].nominative[1],
        value: options.customCurrency[declensionsObjectName].nominative[1],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-".concat(numberPart, "-declension-genitive-singular"),
        label: t('options_currency_custom_value_declension_genitive_singular'),
        fullWidth: true,
        placeholder: constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].genitive[0],
        value: options.customCurrency[declensionsObjectName].genitive[0],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-".concat(numberPart, "-declension-genitive-plural"),
        label: t('options_currency_custom_value_declension_genitive_plural'),
        fullWidth: true,
        placeholder: constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].genitive[1],
        value: options.customCurrency[declensionsObjectName].genitive[1],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-".concat(numberPart, "-declension-dative-singular"),
        label: t('options_currency_custom_value_declension_dative_singular'),
        fullWidth: true,
        placeholder: constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].dative[0],
        value: options.customCurrency[declensionsObjectName].dative[0],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-".concat(numberPart, "-declension-dative-plural"),
        label: t('options_currency_custom_value_declension_dative_plural'),
        fullWidth: true,
        placeholder: constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].dative[1],
        value: options.customCurrency[declensionsObjectName].dative[1],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-".concat(numberPart, "-declension-accusative-singular"),
        label: t('options_currency_custom_value_declension_accusative_singular'),
        fullWidth: true,
        placeholder: constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].accusative[0],
        value: options.customCurrency[declensionsObjectName].accusative[0],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-".concat(numberPart, "-declension-accusative-plural"),
        label: t('options_currency_custom_value_declension_accusative_plural'),
        fullWidth: true,
        placeholder: constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].accusative[1],
        value: options.customCurrency[declensionsObjectName].accusative[1],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-".concat(numberPart, "-declension-instrumental-singular"),
        label: t('options_currency_custom_value_declension_instrumental_singular'),
        fullWidth: true,
        placeholder: constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].instrumental[0],
        value: options.customCurrency[declensionsObjectName].instrumental[0],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-integer-declension-instrumental-plural",
        label: t('options_currency_custom_value_declension_instrumental_plural'),
        fullWidth: true,
        placeholder: constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].instrumental[1],
        value: options.customCurrency[declensionsObjectName].instrumental[1],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-integer-declension-prepositional-singular",
        label: t('options_currency_custom_value_declension_prepositional_singular'),
        fullWidth: true,
        placeholder: constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].prepositional[0],
        value: options.customCurrency[declensionsObjectName].prepositional[0],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-integer-declension-prepositional-plural",
        label: t('options_currency_custom_value_declension_prepositional_plural'),
        fullWidth: true,
        placeholder: constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].prepositional[1],
        value: options.customCurrency[declensionsObjectName].prepositional[1],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(DeclensionsFields, "YCAVFLQRe9xGoyZn1b1KC1T2BOU=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"]];
});

_c = DeclensionsFields;
DeclensionsFields.propTypes = {
  numberPart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  declensionsObjectName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
DeclensionsFields.defaultProps = {
  numberPart: 'integer',
  declensionsObjectName: 'currencyNameDeclensions'
};
/* harmony default export */ __webpack_exports__["default"] = (DeclensionsFields);

var _c;

$RefreshReg$(_c, "DeclensionsFields");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWNsZW5zaW9uc0ZpZWxkcy50c3giXSwibmFtZXMiOlsiRGVjbGVuc2lvbnNGaWVsZHMiLCJudW1iZXJQYXJ0IiwiZGVjbGVuc2lvbnNPYmplY3ROYW1lIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiTW9kdWxlUGFyYW1zQ29udGV4dCIsIm9wdGlvbnMiLCJ1cGRhdGVPcHRpb25zIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsIkRFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUIiwibm9taW5hdGl2ZSIsImN1c3RvbUN1cnJlbmN5IiwiZ2VuaXRpdmUiLCJkYXRpdmUiLCJhY2N1c2F0aXZlIiwiaW5zdHJ1bWVudGFsIiwicHJlcG9zaXRpb25hbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQU1BOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUEyQztBQUFBOztBQUFBLE1BQXhDQyxVQUF3QyxRQUF4Q0EsVUFBd0M7QUFBQSxNQUE1QkMscUJBQTRCLFFBQTVCQSxxQkFBNEI7O0FBQUEsMEJBQ2hDQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxtRkFBakIsQ0FEZ0M7QUFBQSxNQUMzREMsT0FEMkQscUJBQzNEQSxPQUQyRDtBQUFBLE1BQ2xEQyxhQURrRCxxQkFDbERBLGFBRGtEOztBQUFBLHdCQUUvQ0Msb0VBQWMsRUFGaUM7QUFBQSxNQUUzREMsQ0FGMkQsbUJBRTNEQSxDQUYyRDtBQUFBLE1BRXhEQyxJQUZ3RCxtQkFFeERBLElBRndEOztBQUluRSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHNEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsUUFBRSxFQUFFLENBQXZCO0FBQUEsNkJB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QVcsRUFBRUUsdUVBQXVCLENBQUNULHFCQUFELENBQXZCLENBQStDZ0IsYUFBL0MsQ0FBNkQsQ0FBN0QsQ0FKZjtBQUtFLGFBQUssRUFBRVosT0FBTyxDQUFDTyxjQUFSLENBQXVCWCxxQkFBdkIsRUFBOENnQixhQUE5QyxDQUE0RCxDQUE1RCxDQUxUO0FBTUUsZ0JBQVEsRUFBRVg7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9HRjtBQUFBLGtCQURGO0FBNEhELENBaElEOztHQUFNUCxpQjtVQUVnQlEsNEQ7OztLQUZoQlIsaUI7QUFrSU5BLGlCQUFpQixDQUFDbUIsU0FBbEIsR0FBOEI7QUFDNUJsQixZQUFVLEVBQUVtQixpREFBUyxDQUFDQyxNQURNO0FBRTVCbkIsdUJBQXFCLEVBQUVrQixpREFBUyxDQUFDQztBQUZMLENBQTlCO0FBS0FyQixpQkFBaUIsQ0FBQ3NCLFlBQWxCLEdBQWlDO0FBQy9CckIsWUFBVSxFQUFFLFNBRG1CO0FBRS9CQyx1QkFBcUIsRUFBRTtBQUZRLENBQWpDO0FBS2VGLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUyYjUzM2Q5ZDYwNDNlZmY3NmJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgR3JpZCxcbiAgVGV4dEZpZWxkLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0RlY2xlbnNpb25zRmllbGRzLm1vZHVsZS5zYXNzXCJcbmltcG9ydCB7IE1vZHVsZVBhcmFtc0NvbnRleHQgfSBmcm9tICdsaWIvY29udGV4dC9tb2R1bGVQYXJhbXNDb250ZXh0J1xuaW1wb3J0IERFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUIGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0Q3VycmVuY3lPYmplY3QnO1xuXG5jb25zdCBEZWNsZW5zaW9uc0ZpZWxkcyA9ICh7IG51bWJlclBhcnQsIGRlY2xlbnNpb25zT2JqZWN0TmFtZSB9KSA9PiB7XG4gIGNvbnN0IHsgb3B0aW9ucywgdXBkYXRlT3B0aW9ucyB9ID0gUmVhY3QudXNlQ29udGV4dChNb2R1bGVQYXJhbXNDb250ZXh0KTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPXtgY3VzdG9tLWN1cnJlbmN5LSR7bnVtYmVyUGFydH0tZGVjbGVuc2lvbi1ub21pbmF0aXZlLXNpbmd1bGFyYH1cbiAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZGVjbGVuc2lvbl9ub21pbmF0aXZlX3Npbmd1bGFyJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e0RFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUW2RlY2xlbnNpb25zT2JqZWN0TmFtZV0ubm9taW5hdGl2ZVswXX1cbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeVtkZWNsZW5zaW9uc09iamVjdE5hbWVdLm5vbWluYXRpdmVbMF19XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbmFtZT17YGN1c3RvbS1jdXJyZW5jeS0ke251bWJlclBhcnR9LWRlY2xlbnNpb24tbm9taW5hdGl2ZS1wbHVyYWxgfVxuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX25vbWluYXRpdmVfcGx1cmFsJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e0RFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUW2RlY2xlbnNpb25zT2JqZWN0TmFtZV0ubm9taW5hdGl2ZVsxXX1cbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeVtkZWNsZW5zaW9uc09iamVjdE5hbWVdLm5vbWluYXRpdmVbMV19XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbmFtZT17YGN1c3RvbS1jdXJyZW5jeS0ke251bWJlclBhcnR9LWRlY2xlbnNpb24tZ2VuaXRpdmUtc2luZ3VsYXJgfVxuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX2dlbml0aXZlX3Npbmd1bGFyJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e0RFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUW2RlY2xlbnNpb25zT2JqZWN0TmFtZV0uZ2VuaXRpdmVbMF19XG4gICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3lbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5nZW5pdGl2ZVswXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPXtgY3VzdG9tLWN1cnJlbmN5LSR7bnVtYmVyUGFydH0tZGVjbGVuc2lvbi1nZW5pdGl2ZS1wbHVyYWxgfVxuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX2dlbml0aXZlX3BsdXJhbCcpfVxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtERUZBVUxUX0NVUlJFTkNZX09CSkVDVFtkZWNsZW5zaW9uc09iamVjdE5hbWVdLmdlbml0aXZlWzFdfVxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0uZ2VuaXRpdmVbMV19XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbmFtZT17YGN1c3RvbS1jdXJyZW5jeS0ke251bWJlclBhcnR9LWRlY2xlbnNpb24tZGF0aXZlLXNpbmd1bGFyYH1cbiAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZGVjbGVuc2lvbl9kYXRpdmVfc2luZ3VsYXInKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBwbGFjZWhvbGRlcj17REVGQVVMVF9DVVJSRU5DWV9PQkpFQ1RbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5kYXRpdmVbMF19XG4gICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3lbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5kYXRpdmVbMF19XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbmFtZT17YGN1c3RvbS1jdXJyZW5jeS0ke251bWJlclBhcnR9LWRlY2xlbnNpb24tZGF0aXZlLXBsdXJhbGB9XG4gICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2RlY2xlbnNpb25fZGF0aXZlX3BsdXJhbCcpfVxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtERUZBVUxUX0NVUlJFTkNZX09CSkVDVFtkZWNsZW5zaW9uc09iamVjdE5hbWVdLmRhdGl2ZVsxXX1cbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeVtkZWNsZW5zaW9uc09iamVjdE5hbWVdLmRhdGl2ZVsxXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPXtgY3VzdG9tLWN1cnJlbmN5LSR7bnVtYmVyUGFydH0tZGVjbGVuc2lvbi1hY2N1c2F0aXZlLXNpbmd1bGFyYH1cbiAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZGVjbGVuc2lvbl9hY2N1c2F0aXZlX3Npbmd1bGFyJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e0RFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUW2RlY2xlbnNpb25zT2JqZWN0TmFtZV0uYWNjdXNhdGl2ZVswXX1cbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeVtkZWNsZW5zaW9uc09iamVjdE5hbWVdLmFjY3VzYXRpdmVbMF19XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbmFtZT17YGN1c3RvbS1jdXJyZW5jeS0ke251bWJlclBhcnR9LWRlY2xlbnNpb24tYWNjdXNhdGl2ZS1wbHVyYWxgfVxuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX2FjY3VzYXRpdmVfcGx1cmFsJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e0RFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUW2RlY2xlbnNpb25zT2JqZWN0TmFtZV0uYWNjdXNhdGl2ZVsxXX1cbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeVtkZWNsZW5zaW9uc09iamVjdE5hbWVdLmFjY3VzYXRpdmVbMV19XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbmFtZT17YGN1c3RvbS1jdXJyZW5jeS0ke251bWJlclBhcnR9LWRlY2xlbnNpb24taW5zdHJ1bWVudGFsLXNpbmd1bGFyYH1cbiAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZGVjbGVuc2lvbl9pbnN0cnVtZW50YWxfc2luZ3VsYXInKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBwbGFjZWhvbGRlcj17REVGQVVMVF9DVVJSRU5DWV9PQkpFQ1RbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5pbnN0cnVtZW50YWxbMF19XG4gICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3lbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5pbnN0cnVtZW50YWxbMF19XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1pbnN0cnVtZW50YWwtcGx1cmFsJ1xuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX2luc3RydW1lbnRhbF9wbHVyYWwnKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBwbGFjZWhvbGRlcj17REVGQVVMVF9DVVJSRU5DWV9PQkpFQ1RbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5pbnN0cnVtZW50YWxbMV19XG4gICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3lbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5pbnN0cnVtZW50YWxbMV19XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1wcmVwb3NpdGlvbmFsLXNpbmd1bGFyJ1xuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX3ByZXBvc2l0aW9uYWxfc2luZ3VsYXInKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBwbGFjZWhvbGRlcj17REVGQVVMVF9DVVJSRU5DWV9PQkpFQ1RbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5wcmVwb3NpdGlvbmFsWzBdfVxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0ucHJlcG9zaXRpb25hbFswXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPSdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLXByZXBvc2l0aW9uYWwtcGx1cmFsJ1xuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX3ByZXBvc2l0aW9uYWxfcGx1cmFsJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e0RFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUW2RlY2xlbnNpb25zT2JqZWN0TmFtZV0ucHJlcG9zaXRpb25hbFsxXX1cbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeVtkZWNsZW5zaW9uc09iamVjdE5hbWVdLnByZXBvc2l0aW9uYWxbMV19XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgPC8+XG4gIClcbn1cblxuRGVjbGVuc2lvbnNGaWVsZHMucHJvcFR5cGVzID0ge1xuICBudW1iZXJQYXJ0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWNsZW5zaW9uc09iamVjdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5EZWNsZW5zaW9uc0ZpZWxkcy5kZWZhdWx0UHJvcHMgPSB7XG4gIG51bWJlclBhcnQ6ICdpbnRlZ2VyJyxcbiAgZGVjbGVuc2lvbnNPYmplY3ROYW1lOiAnY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVjbGVuc2lvbnNGaWVsZHM7XG4iXSwic291cmNlUm9vdCI6IiJ9