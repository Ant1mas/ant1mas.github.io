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
/* harmony import */ var lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/constants/defaultCurrencyObject */ "./lib/constants/defaultCurrencyObject.ts");



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
        placeholder: lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].nominative[0],
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
        placeholder: lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].nominative[1],
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
        placeholder: lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].genitive[0],
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
        placeholder: lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].genitive[1],
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
        placeholder: lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].dative[0],
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
        placeholder: lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].dative[1],
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
        placeholder: lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].accusative[0],
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
        placeholder: lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].accusative[1],
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
        placeholder: lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].instrumental[0],
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
        name: "custom-currency-".concat(numberPart, "-declension-instrumental-plural"),
        label: t('options_currency_custom_value_declension_instrumental_plural'),
        fullWidth: true,
        placeholder: lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].instrumental[1],
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
        name: "custom-currency-".concat(numberPart, "-declension-prepositional-singular"),
        label: t('options_currency_custom_value_declension_prepositional_singular'),
        fullWidth: true,
        placeholder: lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].prepositional[0],
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
        name: "custom-currency-".concat(numberPart, "-declension-prepositional-plural"),
        label: t('options_currency_custom_value_declension_prepositional_plural'),
        fullWidth: true,
        placeholder: lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"][declensionsObjectName].prepositional[1],
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

/***/ }),

/***/ "./constants/defaultCurrencyObject.ts":
false,

/***/ "./constants/defaultModuleOptions.ts":
false,

/***/ "./constants/optionsNamesMap.ts":
false,

/***/ "./constants/optionsValuesTypeNumber.ts":
false,

/***/ "./lib/constants/defaultCurrencyObject.ts":
/*!************************************************!*\
  !*** ./lib/constants/defaultCurrencyObject.ts ***!
  \************************************************/
/*! exports provided: DEFAULT_CURRENCY_OBJECT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CURRENCY_OBJECT", function() { return DEFAULT_CURRENCY_OBJECT; });
var DEFAULT_CURRENCY_OBJECT = {
  currencyNameCases: ['рубль', 'рубля', 'рублей'],
  currencyNameDeclensions: {
    nominative: ['рубль', 'рубли'],
    genitive: ['рубля', 'рублей'],
    dative: ['рублю', 'рублям'],
    accusative: ['рубль', 'рубли'],
    instrumental: ['рублём', 'рублями'],
    prepositional: ['рубле', 'рублях']
  },
  fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
  fractionalPartNameDeclensions: {
    nominative: ['копейка', 'копейки'],
    genitive: ['копейки', 'копеек'],
    dative: ['копейке', 'копейкам'],
    accusative: ['копейку', 'копейки'],
    instrumental: ['копейкой', 'копейками'],
    prepositional: ['копейке', 'копейках']
  },
  currencyNounGender: {
    integer: 0,
    fractionalPart: 1
  },
  fractionalPartMinLength: 2
};
/* harmony default export */ __webpack_exports__["default"] = (DEFAULT_CURRENCY_OBJECT);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/constants/defaultModuleOptions.ts":
/*!***********************************************!*\
  !*** ./lib/constants/defaultModuleOptions.ts ***!
  \***********************************************/
/*! exports provided: DEFAULT_MODULE_OPTIONS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MODULE_OPTIONS", function() { return DEFAULT_MODULE_OPTIONS; });
var DEFAULT_MODULE_OPTIONS = {
  currency: 'rub',
  declension: 'nominative',
  roundNumber: -1,
  convertMinusSignToWord: true,
  showNumberParts: {
    integer: true,
    fractional: true
  },
  convertNumbertToWords: {
    integer: true,
    fractional: false
  },
  showCurrency: {
    integer: true,
    fractional: true
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DEFAULT_MODULE_OPTIONS);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/constants/optionsNamesMap.ts":
/*!******************************************!*\
  !*** ./lib/constants/optionsNamesMap.ts ***!
  \******************************************/
/*! exports provided: OPTIONS_NAMES_MAP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS_NAMES_MAP", function() { return OPTIONS_NAMES_MAP; });
var OPTIONS_NAMES_MAP = {
  'currency': 'currency',
  'custom-currency-integer1': 'customCurrency.currencyNameCases[0]',
  'custom-currency-integer2': 'customCurrency.currencyNameCases[1]',
  'custom-currency-integer3': 'customCurrency.currencyNameCases[2]',
  'custom-currency-integer-declension-nominative-singular': 'customCurrency.currencyNameDeclensions.nominative[0]',
  'custom-currency-integer-declension-nominative-plural': 'customCurrency.currencyNameDeclensions.nominative[1]',
  'custom-currency-integer-declension-genitive-singular': 'customCurrency.currencyNameDeclensions.genitive[0]',
  'custom-currency-integer-declension-genitive-plural': 'customCurrency.currencyNameDeclensions.genitive[1]',
  'custom-currency-integer-declension-dative-singular': 'customCurrency.currencyNameDeclensions.dative[0]',
  'custom-currency-integer-declension-dative-plural': 'customCurrency.currencyNameDeclensions.dative[1]',
  'custom-currency-integer-declension-accusative-singular': 'customCurrency.currencyNameDeclensions.accusative[0]',
  'custom-currency-integer-declension-accusative-plural': 'customCurrency.currencyNameDeclensions.accusative[1]',
  'custom-currency-integer-declension-instrumental-singular': 'customCurrency.currencyNameDeclensions.instrumental[0]',
  'custom-currency-integer-declension-instrumental-plural': 'customCurrency.currencyNameDeclensions.instrumental[1]',
  'custom-currency-integer-declension-prepositional-singular': 'customCurrency.currencyNameDeclensions.prepositional[0]',
  'custom-currency-integer-declension-prepositional-plural': 'customCurrency.currencyNameDeclensions.prepositional[1]',
  'custom-currency-fractional1': 'customCurrency.fractionalPartNameCases[0]',
  'custom-currency-fractional2': 'customCurrency.fractionalPartNameCases[1]',
  'custom-currency-fractional3': 'customCurrency.fractionalPartNameCases[2]',
  'custom-currency-fractional-declension-nominative-singular': 'customCurrency.fractionalPartNameDeclensions.nominative[0]',
  'custom-currency-fractional-declension-nominative-plural': 'customCurrency.fractionalPartNameDeclensions.nominative[1]',
  'custom-currency-fractional-declension-genitive-singular': 'customCurrency.fractionalPartNameDeclensions.genitive[0]',
  'custom-currency-fractional-declension-genitive-plural': 'customCurrency.fractionalPartNameDeclensions.genitive[1]',
  'custom-currency-fractional-declension-dative-singular': 'customCurrency.fractionalPartNameDeclensions.dative[0]',
  'custom-currency-fractional-declension-dative-plural': 'customCurrency.fractionalPartNameDeclensions.dative[1]',
  'custom-currency-fractional-declension-accusative-singular': 'customCurrency.fractionalPartNameDeclensions.accusative[0]',
  'custom-currency-fractional-declension-accusative-plural': 'customCurrency.fractionalPartNameDeclensions.accusative[1]',
  'custom-currency-fractional-declension-instrumental-singular': 'customCurrency.fractionalPartNameDeclensions.instrumental[0]',
  'custom-currency-fractional-declension-instrumental-plural': 'customCurrency.fractionalPartNameDeclensions.instrumental[1]',
  'custom-currency-fractional-declension-prepositional-singular': 'customCurrency.fractionalPartNameDeclensions.prepositional[0]',
  'custom-currency-fractional-declension-prepositional-plural': 'customCurrency.fractionalPartNameDeclensions.prepositional[1]',
  'custom-currency-form-integer': 'customCurrency.currencyNounGender.integer',
  'custom-currency-form-fractional': 'customCurrency.currencyNounGender.fractionalPart',
  'custom-currency-fractional-min-length': 'customCurrency.fractionalPartMinLength',
  'round-number': 'roundNumber',
  'declension': 'declension',
  'convert-minus-sign': 'convertMinusSignToWord',
  'show-number-part-integer': 'showNumberParts.integer',
  'show-number-part-fractional': 'showNumberParts.fractional',
  'convert-number-part-integer': 'convertNumbertToWords.integer',
  'convert-number-part-fractional': 'convertNumbertToWords.fractional',
  'show-currency-part-integer': 'showCurrency.integer',
  'show-currency-part-fractional': 'showCurrency.fractional'
};
/* harmony default export */ __webpack_exports__["default"] = (OPTIONS_NAMES_MAP);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/constants/optionsValuesTypeNumber.ts":
/*!**************************************************!*\
  !*** ./lib/constants/optionsValuesTypeNumber.ts ***!
  \**************************************************/
/*! exports provided: OPTIONS_VALUES_TYPE_NUMBER, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS_VALUES_TYPE_NUMBER", function() { return OPTIONS_VALUES_TYPE_NUMBER; });
var OPTIONS_VALUES_TYPE_NUMBER = ['roundNumber', 'currency.currencyNounGender.integer', 'currency.currencyNounGender.fractionalPart', 'currency.fractionalPartMinLength'];
/* harmony default export */ __webpack_exports__["default"] = (OPTIONS_VALUES_TYPE_NUMBER);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/hooks/useModuleOptions.tsx":
/*!****************************************!*\
  !*** ./lib/hooks/useModuleOptions.tsx ***!
  \****************************************/
/*! exports provided: useModuleOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useModuleOptions", function() { return useModuleOptions; });
/* harmony import */ var C_OpenServer_domains_projects_local_react_projects_number_to_words_ru_app_number_to_words_ru_APP_NextJs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_functions_objectsDiff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/functions/objectsDiff */ "./lib/functions/objectsDiff.ts");
/* harmony import */ var lib_constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/constants/defaultModuleOptions */ "./lib/constants/defaultModuleOptions.ts");
/* harmony import */ var lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/constants/defaultCurrencyObject */ "./lib/constants/defaultCurrencyObject.ts");
/* harmony import */ var lib_constants_optionsNamesMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/constants/optionsNamesMap */ "./lib/constants/optionsNamesMap.ts");
/* harmony import */ var lib_constants_optionsValuesTypeNumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/constants/optionsValuesTypeNumber */ "./lib/constants/optionsValuesTypeNumber.ts");


var _s = $RefreshSig$();









var defaultOptions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.merge(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(lib_constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_5__["default"]), {
  customCurrency: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_6__["default"])
});

var useModuleOptions = function useModuleOptions() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(defaultOptions),
      _React$useState2 = Object(C_OpenServer_domains_projects_local_react_projects_number_to_words_ru_app_number_to_words_ru_APP_NextJs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      options = _React$useState2[0],
      setOptions = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(lib_constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_5__["default"]),
      _React$useState4 = Object(C_OpenServer_domains_projects_local_react_projects_number_to_words_ru_app_number_to_words_ru_APP_NextJs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      optionsForModule = _React$useState4[0],
      setOptionsForModule = _React$useState4[1];

  var optionsDifferences = Object(lib_functions_objectsDiff__WEBPACK_IMPORTED_MODULE_3__["default"])(lib_constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_5__["default"], optionsForModule);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    saveOptionsForModule(options);
  }, [options]);

  var updateOptions = function updateOptions(event) {
    var name = event.target.name;
    var value = getValue(event.target);
    var path = getOptionPath(name);
    path !== null && updateOptionValueByPath(path, value);
  };

  var getValue = function getValue(target) {
    var type = target.type;
    var value = target.value;

    if (type === 'number') {
      value = checkValueRange(target);
    } else if (type === 'checkbox') {
      value = Boolean(target.checked);
    }

    return value;
  };

  var checkValueRange = function checkValueRange(target) {
    var value = target.value;

    if (value !== '') {
      if (target.min !== '') {
        value = Number(value) >= Number(target.min) ? value : target.min;
      }

      if (target.max !== '') {
        value = Number(value) <= Number(target.min) ? value : target.min;
      }
    }

    return value;
  };

  var getOptionPath = function getOptionPath(name) {
    if (lib_constants_optionsNamesMap__WEBPACK_IMPORTED_MODULE_7__["default"][name] !== undefined) {
      return lib_constants_optionsNamesMap__WEBPACK_IMPORTED_MODULE_7__["default"][name];
    }

    return null;
  };

  var convertValuesToTypeNumber = function convertValuesToTypeNumber(object, valuesPaths) {
    var resultObject = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(object);

    valuesPaths.some(function (path) {
      var valueByPath = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(resultObject, path);

      if (valueByPath !== undefined) {
        resultObject = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.set(resultObject, path, Number(valueByPath));
      }
    });
    return resultObject;
  };

  var updateOptionValueByPath = function updateOptionValueByPath(path, newValue) {
    var updatedOptions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(options);

    updatedOptions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.set(updatedOptions, path, newValue);
    setOptions(updatedOptions);
  };

  var saveOptionsForModule = function saveOptionsForModule(options) {
    var optionsResult = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(options);

    delete optionsResult.customCurrency;

    if (options.currency === 'custom') {
      optionsResult.currency = options.customCurrency;
    }

    optionsResult = convertValuesToTypeNumber(optionsResult, lib_constants_optionsValuesTypeNumber__WEBPACK_IMPORTED_MODULE_8__["default"]);
    setOptionsForModule(optionsResult);
  };

  return {
    options: options,
    optionsForModule: optionsForModule,
    optionsDifferences: optionsDifferences,
    updateOptions: updateOptions
  };
};

_s(useModuleOptions, "g81h8VVgHjCi9EduXqZeY1i9XGY=");

/* harmony default export */ __webpack_exports__["default"] = (useModuleOptions);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWNsZW5zaW9uc0ZpZWxkcy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy9kZWZhdWx0Q3VycmVuY3lPYmplY3QudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy9kZWZhdWx0TW9kdWxlT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL29wdGlvbnNOYW1lc01hcC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL29wdGlvbnNWYWx1ZXNUeXBlTnVtYmVyLnRzIiwid2VicGFjazovL19OX0UvLi9saWIvaG9va3MvdXNlTW9kdWxlT3B0aW9ucy50c3giXSwibmFtZXMiOlsiRGVjbGVuc2lvbnNGaWVsZHMiLCJudW1iZXJQYXJ0IiwiZGVjbGVuc2lvbnNPYmplY3ROYW1lIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiTW9kdWxlUGFyYW1zQ29udGV4dCIsIm9wdGlvbnMiLCJ1cGRhdGVPcHRpb25zIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsIkRFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUIiwibm9taW5hdGl2ZSIsImN1c3RvbUN1cnJlbmN5IiwiZ2VuaXRpdmUiLCJkYXRpdmUiLCJhY2N1c2F0aXZlIiwiaW5zdHJ1bWVudGFsIiwicHJlcG9zaXRpb25hbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImRlZmF1bHRQcm9wcyIsImN1cnJlbmN5TmFtZUNhc2VzIiwiY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMiLCJmcmFjdGlvbmFsUGFydE5hbWVDYXNlcyIsImZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zIiwiY3VycmVuY3lOb3VuR2VuZGVyIiwiaW50ZWdlciIsImZyYWN0aW9uYWxQYXJ0IiwiZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGgiLCJERUZBVUxUX01PRFVMRV9PUFRJT05TIiwiY3VycmVuY3kiLCJkZWNsZW5zaW9uIiwicm91bmROdW1iZXIiLCJjb252ZXJ0TWludXNTaWduVG9Xb3JkIiwic2hvd051bWJlclBhcnRzIiwiZnJhY3Rpb25hbCIsImNvbnZlcnROdW1iZXJ0VG9Xb3JkcyIsInNob3dDdXJyZW5jeSIsIk9QVElPTlNfTkFNRVNfTUFQIiwiT1BUSU9OU19WQUxVRVNfVFlQRV9OVU1CRVIiLCJkZWZhdWx0T3B0aW9ucyIsIl8iLCJtZXJnZSIsImNsb25lRGVlcCIsInVzZU1vZHVsZU9wdGlvbnMiLCJ1c2VTdGF0ZSIsInNldE9wdGlvbnMiLCJvcHRpb25zRm9yTW9kdWxlIiwic2V0T3B0aW9uc0Zvck1vZHVsZSIsIm9wdGlvbnNEaWZmZXJlbmNlcyIsIm9iamVjdHNEaWZmIiwidXNlRWZmZWN0Iiwic2F2ZU9wdGlvbnNGb3JNb2R1bGUiLCJldmVudCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldFZhbHVlIiwicGF0aCIsImdldE9wdGlvblBhdGgiLCJ1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCIsInR5cGUiLCJjaGVja1ZhbHVlUmFuZ2UiLCJCb29sZWFuIiwiY2hlY2tlZCIsIm1pbiIsIk51bWJlciIsIm1heCIsInVuZGVmaW5lZCIsImNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIiLCJvYmplY3QiLCJ2YWx1ZXNQYXRocyIsInJlc3VsdE9iamVjdCIsInNvbWUiLCJ2YWx1ZUJ5UGF0aCIsImdldCIsInNldCIsIm5ld1ZhbHVlIiwidXBkYXRlZE9wdGlvbnMiLCJvcHRpb25zUmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBTUE7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQTJDO0FBQUE7O0FBQUEsTUFBeENDLFVBQXdDLFFBQXhDQSxVQUF3QztBQUFBLE1BQTVCQyxxQkFBNEIsUUFBNUJBLHFCQUE0Qjs7QUFBQSwwQkFDaENDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLG1GQUFqQixDQURnQztB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QixFQUFsQkEsa0JBSEs7QUFJTDVDLGlCQUFhLEVBQWJBO0FBSkssR0FBUDtBQU1ELENBaEZNOztHQUFNdUMsZ0I7O0FBa0ZFQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zODhmMTdiYjMwZTkwZjQyMDJhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEdyaWQsXG4gIFRleHRGaWVsZCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9EZWNsZW5zaW9uc0ZpZWxkcy5tb2R1bGUuc2Fzc1wiXG5pbXBvcnQgeyBNb2R1bGVQYXJhbXNDb250ZXh0IH0gZnJvbSAnbGliL2NvbnRleHQvbW9kdWxlUGFyYW1zQ29udGV4dCdcbmltcG9ydCBERUZBVUxUX0NVUlJFTkNZX09CSkVDVCBmcm9tICdsaWIvY29uc3RhbnRzL2RlZmF1bHRDdXJyZW5jeU9iamVjdCc7XG5cbmNvbnN0IERlY2xlbnNpb25zRmllbGRzID0gKHsgbnVtYmVyUGFydCwgZGVjbGVuc2lvbnNPYmplY3ROYW1lIH0pID0+IHtcbiAgY29uc3QgeyBvcHRpb25zLCB1cGRhdGVPcHRpb25zIH0gPSBSZWFjdC51c2VDb250ZXh0KE1vZHVsZVBhcmFtc0NvbnRleHQpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIG5hbWU9e2BjdXN0b20tY3VycmVuY3ktJHtudW1iZXJQYXJ0fS1kZWNsZW5zaW9uLW5vbWluYXRpdmUtc2luZ3VsYXJgfVxuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX25vbWluYXRpdmVfc2luZ3VsYXInKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBwbGFjZWhvbGRlcj17REVGQVVMVF9DVVJSRU5DWV9PQkpFQ1RbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5ub21pbmF0aXZlWzBdfVxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0ubm9taW5hdGl2ZVswXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPXtgY3VzdG9tLWN1cnJlbmN5LSR7bnVtYmVyUGFydH0tZGVjbGVuc2lvbi1ub21pbmF0aXZlLXBsdXJhbGB9XG4gICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2RlY2xlbnNpb25fbm9taW5hdGl2ZV9wbHVyYWwnKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBwbGFjZWhvbGRlcj17REVGQVVMVF9DVVJSRU5DWV9PQkpFQ1RbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5ub21pbmF0aXZlWzFdfVxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0ubm9taW5hdGl2ZVsxXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPXtgY3VzdG9tLWN1cnJlbmN5LSR7bnVtYmVyUGFydH0tZGVjbGVuc2lvbi1nZW5pdGl2ZS1zaW5ndWxhcmB9XG4gICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2RlY2xlbnNpb25fZ2VuaXRpdmVfc2luZ3VsYXInKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBwbGFjZWhvbGRlcj17REVGQVVMVF9DVVJSRU5DWV9PQkpFQ1RbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5nZW5pdGl2ZVswXX1cbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeVtkZWNsZW5zaW9uc09iamVjdE5hbWVdLmdlbml0aXZlWzBdfVxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIG5hbWU9e2BjdXN0b20tY3VycmVuY3ktJHtudW1iZXJQYXJ0fS1kZWNsZW5zaW9uLWdlbml0aXZlLXBsdXJhbGB9XG4gICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2RlY2xlbnNpb25fZ2VuaXRpdmVfcGx1cmFsJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e0RFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUW2RlY2xlbnNpb25zT2JqZWN0TmFtZV0uZ2VuaXRpdmVbMV19XG4gICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3lbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5nZW5pdGl2ZVsxXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPXtgY3VzdG9tLWN1cnJlbmN5LSR7bnVtYmVyUGFydH0tZGVjbGVuc2lvbi1kYXRpdmUtc2luZ3VsYXJgfVxuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX2RhdGl2ZV9zaW5ndWxhcicpfVxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtERUZBVUxUX0NVUlJFTkNZX09CSkVDVFtkZWNsZW5zaW9uc09iamVjdE5hbWVdLmRhdGl2ZVswXX1cbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeVtkZWNsZW5zaW9uc09iamVjdE5hbWVdLmRhdGl2ZVswXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPXtgY3VzdG9tLWN1cnJlbmN5LSR7bnVtYmVyUGFydH0tZGVjbGVuc2lvbi1kYXRpdmUtcGx1cmFsYH1cbiAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZGVjbGVuc2lvbl9kYXRpdmVfcGx1cmFsJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e0RFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUW2RlY2xlbnNpb25zT2JqZWN0TmFtZV0uZGF0aXZlWzFdfVxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0uZGF0aXZlWzFdfVxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIG5hbWU9e2BjdXN0b20tY3VycmVuY3ktJHtudW1iZXJQYXJ0fS1kZWNsZW5zaW9uLWFjY3VzYXRpdmUtc2luZ3VsYXJgfVxuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX2FjY3VzYXRpdmVfc2luZ3VsYXInKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBwbGFjZWhvbGRlcj17REVGQVVMVF9DVVJSRU5DWV9PQkpFQ1RbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5hY2N1c2F0aXZlWzBdfVxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0uYWNjdXNhdGl2ZVswXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPXtgY3VzdG9tLWN1cnJlbmN5LSR7bnVtYmVyUGFydH0tZGVjbGVuc2lvbi1hY2N1c2F0aXZlLXBsdXJhbGB9XG4gICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2RlY2xlbnNpb25fYWNjdXNhdGl2ZV9wbHVyYWwnKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBwbGFjZWhvbGRlcj17REVGQVVMVF9DVVJSRU5DWV9PQkpFQ1RbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5hY2N1c2F0aXZlWzFdfVxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0uYWNjdXNhdGl2ZVsxXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPXtgY3VzdG9tLWN1cnJlbmN5LSR7bnVtYmVyUGFydH0tZGVjbGVuc2lvbi1pbnN0cnVtZW50YWwtc2luZ3VsYXJgfVxuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX2luc3RydW1lbnRhbF9zaW5ndWxhcicpfVxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtERUZBVUxUX0NVUlJFTkNZX09CSkVDVFtkZWNsZW5zaW9uc09iamVjdE5hbWVdLmluc3RydW1lbnRhbFswXX1cbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeVtkZWNsZW5zaW9uc09iamVjdE5hbWVdLmluc3RydW1lbnRhbFswXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPXtgY3VzdG9tLWN1cnJlbmN5LSR7bnVtYmVyUGFydH0tZGVjbGVuc2lvbi1pbnN0cnVtZW50YWwtcGx1cmFsYH1cbiAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZGVjbGVuc2lvbl9pbnN0cnVtZW50YWxfcGx1cmFsJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e0RFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUW2RlY2xlbnNpb25zT2JqZWN0TmFtZV0uaW5zdHJ1bWVudGFsWzFdfVxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0uaW5zdHJ1bWVudGFsWzFdfVxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIG5hbWU9e2BjdXN0b20tY3VycmVuY3ktJHtudW1iZXJQYXJ0fS1kZWNsZW5zaW9uLXByZXBvc2l0aW9uYWwtc2luZ3VsYXJgfVxuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX3ByZXBvc2l0aW9uYWxfc2luZ3VsYXInKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBwbGFjZWhvbGRlcj17REVGQVVMVF9DVVJSRU5DWV9PQkpFQ1RbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5wcmVwb3NpdGlvbmFsWzBdfVxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0ucHJlcG9zaXRpb25hbFswXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPXtgY3VzdG9tLWN1cnJlbmN5LSR7bnVtYmVyUGFydH0tZGVjbGVuc2lvbi1wcmVwb3NpdGlvbmFsLXBsdXJhbGB9XG4gICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2RlY2xlbnNpb25fcHJlcG9zaXRpb25hbF9wbHVyYWwnKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBwbGFjZWhvbGRlcj17REVGQVVMVF9DVVJSRU5DWV9PQkpFQ1RbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5wcmVwb3NpdGlvbmFsWzFdfVxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0ucHJlcG9zaXRpb25hbFsxXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICA8Lz5cbiAgKVxufVxuXG5EZWNsZW5zaW9uc0ZpZWxkcy5wcm9wVHlwZXMgPSB7XG4gIG51bWJlclBhcnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlY2xlbnNpb25zT2JqZWN0TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkRlY2xlbnNpb25zRmllbGRzLmRlZmF1bHRQcm9wcyA9IHtcbiAgbnVtYmVyUGFydDogJ2ludGVnZXInLFxuICBkZWNsZW5zaW9uc09iamVjdE5hbWU6ICdjdXJyZW5jeU5hbWVEZWNsZW5zaW9ucycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWNsZW5zaW9uc0ZpZWxkcztcbiIsImV4cG9ydCBjb25zdCBERUZBVUxUX0NVUlJFTkNZX09CSkVDVCA9IHtcbiAgY3VycmVuY3lOYW1lQ2FzZXM6IFsn0YDRg9Cx0LvRjCcsICfRgNGD0LHQu9GPJywgJ9GA0YPQsdC70LXQuSddLFxuICBjdXJyZW5jeU5hbWVEZWNsZW5zaW9uczoge1xuICAgIG5vbWluYXRpdmU6IFsn0YDRg9Cx0LvRjCcsICfRgNGD0LHQu9C4J10sXG4gICAgZ2VuaXRpdmU6IFsn0YDRg9Cx0LvRjycsICfRgNGD0LHQu9C10LknXSxcbiAgICBkYXRpdmU6IFsn0YDRg9Cx0LvRjicsICfRgNGD0LHQu9GP0LwnXSxcbiAgICBhY2N1c2F0aXZlOiBbJ9GA0YPQsdC70YwnLCAn0YDRg9Cx0LvQuCddLFxuICAgIGluc3RydW1lbnRhbDogWyfRgNGD0LHQu9GR0LwnLCAn0YDRg9Cx0LvRj9C80LgnXSxcbiAgICBwcmVwb3NpdGlvbmFsOiBbJ9GA0YPQsdC70LUnLCAn0YDRg9Cx0LvRj9GFJ10sXG4gIH0sXG4gIGZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzOiBbJ9C60L7Qv9C10LnQutCwJywgJ9C60L7Qv9C10LnQutC4JywgJ9C60L7Qv9C10LXQuiddLFxuICBmcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9uczoge1xuICAgIG5vbWluYXRpdmU6IFsn0LrQvtC/0LXQudC60LAnLCAn0LrQvtC/0LXQudC60LgnXSxcbiAgICBnZW5pdGl2ZTogWyfQutC+0L/QtdC50LrQuCcsICfQutC+0L/QtdC10LonXSxcbiAgICBkYXRpdmU6IFsn0LrQvtC/0LXQudC60LUnLCAn0LrQvtC/0LXQudC60LDQvCddLFxuICAgIGFjY3VzYXRpdmU6IFsn0LrQvtC/0LXQudC60YMnLCAn0LrQvtC/0LXQudC60LgnXSxcbiAgICBpbnN0cnVtZW50YWw6IFsn0LrQvtC/0LXQudC60L7QuScsICfQutC+0L/QtdC50LrQsNC80LgnXSxcbiAgICBwcmVwb3NpdGlvbmFsOiBbJ9C60L7Qv9C10LnQutC1JywgJ9C60L7Qv9C10LnQutCw0YUnXSxcbiAgfSxcbiAgY3VycmVuY3lOb3VuR2VuZGVyOiB7XG4gICAgaW50ZWdlcjogMCxcbiAgICBmcmFjdGlvbmFsUGFydDogMSxcbiAgfSxcbiAgZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGg6IDIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBERUZBVUxUX0NVUlJFTkNZX09CSkVDVDtcbiIsImV4cG9ydCBjb25zdCBERUZBVUxUX01PRFVMRV9PUFRJT05TID0ge1xuICBjdXJyZW5jeTogJ3J1YicsXG4gIGRlY2xlbnNpb246ICdub21pbmF0aXZlJyxcbiAgcm91bmROdW1iZXI6IC0xLFxuICBjb252ZXJ0TWludXNTaWduVG9Xb3JkOiB0cnVlLFxuICBzaG93TnVtYmVyUGFydHM6IHtcbiAgICBpbnRlZ2VyOiB0cnVlLFxuICAgIGZyYWN0aW9uYWw6IHRydWUsXG4gIH0sXG4gIGNvbnZlcnROdW1iZXJ0VG9Xb3Jkczoge1xuICAgIGludGVnZXI6IHRydWUsXG4gICAgZnJhY3Rpb25hbDogZmFsc2UsXG4gIH0sXG4gIHNob3dDdXJyZW5jeToge1xuICAgIGludGVnZXI6IHRydWUsXG4gICAgZnJhY3Rpb25hbDogdHJ1ZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERFRkFVTFRfTU9EVUxFX09QVElPTlM7XG4iLCJleHBvcnQgY29uc3QgT1BUSU9OU19OQU1FU19NQVAgPSB7XG4gICdjdXJyZW5jeSc6ICdjdXJyZW5jeScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjEnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMyc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1syXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLW5vbWluYXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMubm9taW5hdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLW5vbWluYXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLm5vbWluYXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1nZW5pdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5nZW5pdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWdlbml0aXZlLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5nZW5pdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWRhdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5kYXRpdmVbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1kYXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmRhdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWFjY3VzYXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuYWNjdXNhdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWFjY3VzYXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmFjY3VzYXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1pbnN0cnVtZW50YWwtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuaW5zdHJ1bWVudGFsWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24taW5zdHJ1bWVudGFsLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5pbnN0cnVtZW50YWxbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1wcmVwb3NpdGlvbmFsLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLnByZXBvc2l0aW9uYWxbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1wcmVwb3NpdGlvbmFsLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5wcmVwb3NpdGlvbmFsWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMSc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1swXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwzJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzJdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tbm9taW5hdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5ub21pbmF0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tbm9taW5hdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMubm9taW5hdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWdlbml0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmdlbml0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tZ2VuaXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmdlbml0aXZlWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tZGF0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmRhdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWRhdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMuZGF0aXZlWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tYWNjdXNhdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5hY2N1c2F0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tYWNjdXNhdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMuYWNjdXNhdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWluc3RydW1lbnRhbC1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5pbnN0cnVtZW50YWxbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1pbnN0cnVtZW50YWwtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmluc3RydW1lbnRhbFsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLXByZXBvc2l0aW9uYWwtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMucHJlcG9zaXRpb25hbFswXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLXByZXBvc2l0aW9uYWwtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLnByZXBvc2l0aW9uYWxbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZvcm0taW50ZWdlcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuaW50ZWdlcicsXG4gICdjdXN0b20tY3VycmVuY3ktZm9ybS1mcmFjdGlvbmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5mcmFjdGlvbmFsUGFydCcsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1taW4tbGVuZ3RoJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyxcbiAgJ3JvdW5kLW51bWJlcic6ICdyb3VuZE51bWJlcicsXG4gICdkZWNsZW5zaW9uJzogJ2RlY2xlbnNpb24nLFxuICAnY29udmVydC1taW51cy1zaWduJzogJ2NvbnZlcnRNaW51c1NpZ25Ub1dvcmQnLFxuICAnc2hvdy1udW1iZXItcGFydC1pbnRlZ2VyJzogJ3Nob3dOdW1iZXJQYXJ0cy5pbnRlZ2VyJyxcbiAgJ3Nob3ctbnVtYmVyLXBhcnQtZnJhY3Rpb25hbCc6ICdzaG93TnVtYmVyUGFydHMuZnJhY3Rpb25hbCcsXG4gICdjb252ZXJ0LW51bWJlci1wYXJ0LWludGVnZXInOiAnY29udmVydE51bWJlcnRUb1dvcmRzLmludGVnZXInLFxuICAnY29udmVydC1udW1iZXItcGFydC1mcmFjdGlvbmFsJzogJ2NvbnZlcnROdW1iZXJ0VG9Xb3Jkcy5mcmFjdGlvbmFsJyxcbiAgJ3Nob3ctY3VycmVuY3ktcGFydC1pbnRlZ2VyJzogJ3Nob3dDdXJyZW5jeS5pbnRlZ2VyJyxcbiAgJ3Nob3ctY3VycmVuY3ktcGFydC1mcmFjdGlvbmFsJzogJ3Nob3dDdXJyZW5jeS5mcmFjdGlvbmFsJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgT1BUSU9OU19OQU1FU19NQVA7XG4iLCJleHBvcnQgY29uc3QgT1BUSU9OU19WQUxVRVNfVFlQRV9OVU1CRVIgPSBbXG4gICdyb3VuZE51bWJlcicsXG4gICdjdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuaW50ZWdlcicsXG4gICdjdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuZnJhY3Rpb25hbFBhcnQnLFxuICAnY3VycmVuY3kuZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGgnLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgT1BUSU9OU19WQUxVRVNfVFlQRV9OVU1CRVI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBvYmplY3RzRGlmZiBmcm9tICdsaWIvZnVuY3Rpb25zL29iamVjdHNEaWZmJ1xuaW1wb3J0IERFRkFVTFRfTU9EVUxFX09QVElPTlMgZnJvbSAnbGliL2NvbnN0YW50cy9kZWZhdWx0TW9kdWxlT3B0aW9ucyc7XG5pbXBvcnQgREVGQVVMVF9DVVJSRU5DWV9PQkpFQ1QgZnJvbSAnbGliL2NvbnN0YW50cy9kZWZhdWx0Q3VycmVuY3lPYmplY3QnO1xuaW1wb3J0IE9QVElPTlNfTkFNRVNfTUFQIGZyb20gJ2xpYi9jb25zdGFudHMvb3B0aW9uc05hbWVzTWFwJztcbmltcG9ydCBPUFRJT05TX1ZBTFVFU19UWVBFX05VTUJFUiBmcm9tICdsaWIvY29uc3RhbnRzL29wdGlvbnNWYWx1ZXNUeXBlTnVtYmVyJztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBfLm1lcmdlKF8uY2xvbmVEZWVwKERFRkFVTFRfTU9EVUxFX09QVElPTlMpLCB7XG4gIGN1c3RvbUN1cnJlbmN5OiBfLmNsb25lRGVlcChERUZBVUxUX0NVUlJFTkNZX09CSkVDVCksXG59KTtcblxuZXhwb3J0IGNvbnN0IHVzZU1vZHVsZU9wdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRPcHRpb25zKTtcbiAgY29uc3QgW29wdGlvbnNGb3JNb2R1bGUsIHNldE9wdGlvbnNGb3JNb2R1bGVdID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9NT0RVTEVfT1BUSU9OUyk7XG4gIGNvbnN0IG9wdGlvbnNEaWZmZXJlbmNlcyA9IG9iamVjdHNEaWZmKERFRkFVTFRfTU9EVUxFX09QVElPTlMsIG9wdGlvbnNGb3JNb2R1bGUpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2F2ZU9wdGlvbnNGb3JNb2R1bGUob3B0aW9ucyk7XG4gIH0sIFtvcHRpb25zXSlcblxuICBjb25zdCB1cGRhdGVPcHRpb25zID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBwYXRoID0gZ2V0T3B0aW9uUGF0aChuYW1lKTtcbiAgICAocGF0aCAhPT0gbnVsbCkgJiYgdXBkYXRlT3B0aW9uVmFsdWVCeVBhdGgocGF0aCwgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlID0gKHRhcmdldCkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSB0YXJnZXQudHlwZTtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IGNoZWNrVmFsdWVSYW5nZSh0YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgdmFsdWUgPSBCb29sZWFuKHRhcmdldC5jaGVja2VkKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY29uc3QgY2hlY2tWYWx1ZVJhbmdlID0gKHRhcmdldCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICBpZiAodGFyZ2V0Lm1pbiAhPT0gJycpIHtcbiAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpID49IE51bWJlcih0YXJnZXQubWluKSA/IHZhbHVlIDogdGFyZ2V0Lm1pbjtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXQubWF4ICE9PSAnJykge1xuICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSkgPD0gTnVtYmVyKHRhcmdldC5taW4pID8gdmFsdWUgOiB0YXJnZXQubWluO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfTtcblxuICBjb25zdCBnZXRPcHRpb25QYXRoID0gKG5hbWUpID0+IHtcbiAgICBpZiAoT1BUSU9OU19OQU1FU19NQVBbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIE9QVElPTlNfTkFNRVNfTUFQW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCBjb252ZXJ0VmFsdWVzVG9UeXBlTnVtYmVyID0gKG9iamVjdCwgdmFsdWVzUGF0aHMpID0+IHtcbiAgICBsZXQgcmVzdWx0T2JqZWN0ID0gXy5jbG9uZURlZXAob2JqZWN0KTtcbiAgICB2YWx1ZXNQYXRocy5zb21lKChwYXRoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZUJ5UGF0aCA9IF8uZ2V0KHJlc3VsdE9iamVjdCwgcGF0aCk7XG4gICAgICBpZiAodmFsdWVCeVBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHRPYmplY3QgPSBfLnNldChyZXN1bHRPYmplY3QsIHBhdGgsIE51bWJlcih2YWx1ZUJ5UGF0aCkpO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdE9iamVjdFxuICB9XG5cbiAgY29uc3QgdXBkYXRlT3B0aW9uVmFsdWVCeVBhdGggPSAocGF0aCwgbmV3VmFsdWUpID0+IHtcbiAgICBsZXQgdXBkYXRlZE9wdGlvbnMgPSBfLmNsb25lRGVlcChvcHRpb25zKTtcbiAgICB1cGRhdGVkT3B0aW9ucyA9IF8uc2V0KHVwZGF0ZWRPcHRpb25zLCBwYXRoLCBuZXdWYWx1ZSk7XG4gICAgc2V0T3B0aW9ucyh1cGRhdGVkT3B0aW9ucyk7XG4gIH07XG5cbiAgY29uc3Qgc2F2ZU9wdGlvbnNGb3JNb2R1bGUgPSAob3B0aW9ucykgPT4ge1xuICAgIGxldCBvcHRpb25zUmVzdWx0ID0gXy5jbG9uZURlZXAob3B0aW9ucyk7XG4gICAgZGVsZXRlIG9wdGlvbnNSZXN1bHQuY3VzdG9tQ3VycmVuY3k7XG4gICAgaWYgKG9wdGlvbnMuY3VycmVuY3kgPT09ICdjdXN0b20nKSB7XG4gICAgICBvcHRpb25zUmVzdWx0LmN1cnJlbmN5ID0gb3B0aW9ucy5jdXN0b21DdXJyZW5jeTtcbiAgICB9XG4gICAgb3B0aW9uc1Jlc3VsdCA9IGNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIob3B0aW9uc1Jlc3VsdCwgT1BUSU9OU19WQUxVRVNfVFlQRV9OVU1CRVIpO1xuICAgIHNldE9wdGlvbnNGb3JNb2R1bGUob3B0aW9uc1Jlc3VsdCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zLFxuICAgIG9wdGlvbnNGb3JNb2R1bGUsXG4gICAgb3B0aW9uc0RpZmZlcmVuY2VzLFxuICAgIHVwZGF0ZU9wdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTW9kdWxlT3B0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=