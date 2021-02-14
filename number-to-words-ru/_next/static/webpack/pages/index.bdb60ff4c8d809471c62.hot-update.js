webpackHotUpdate_N_E("pages/index",{

/***/ "./constants/defaultCurrencyObject.ts":
/*!********************************************!*\
  !*** ./constants/defaultCurrencyObject.ts ***!
  \********************************************/
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/hooks/useModuleOptions.tsx":
/*!****************************************!*\
  !*** ./lib/hooks/useModuleOptions.tsx ***!
  \****************************************/
/*! exports provided: defaultCurrencyObject, useModuleOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCurrencyObject", function() { return defaultCurrencyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useModuleOptions", function() { return useModuleOptions; });
/* harmony import */ var C_OpenServer_domains_projects_local_react_projects_number_to_words_ru_app_number_to_words_ru_APP_NextJs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_functions_objectsDiff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/functions/objectsDiff */ "./lib/functions/objectsDiff.ts");
/* harmony import */ var constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/defaultModuleOptions */ "./constants/defaultModuleOptions.ts");
/* harmony import */ var constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constants/defaultCurrencyObject */ "./constants/defaultCurrencyObject.ts");


var _s = $RefreshSig$();






var defaultCurrencyObject = {
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

var defaultOptions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.merge(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_4__["default"]), {
  customCurrency: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_5__["default"])
});

var optionsValuesTypeNumber = ['roundNumber', 'currency.currencyNounGender.integer', 'currency.currencyNounGender.fractionalPart', 'currency.fractionalPartMinLength'];
var optionsNamesMap = {
  'currency': 'currency',
  'custom-currency-integer1': 'customCurrency.currencyNameCases[0]',
  'custom-currency-integer2': 'customCurrency.currencyNameCases[1]',
  'custom-currency-integer3': 'customCurrency.currencyNameCases[2]',
  'custom-currency-fractional1': 'customCurrency.fractionalPartNameCases[0]',
  'custom-currency-fractional2': 'customCurrency.fractionalPartNameCases[1]',
  'custom-currency-fractional3': 'customCurrency.fractionalPartNameCases[2]',
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
var useModuleOptions = function useModuleOptions() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(defaultOptions),
      _React$useState2 = Object(C_OpenServer_domains_projects_local_react_projects_number_to_words_ru_app_number_to_words_ru_APP_NextJs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      options = _React$useState2[0],
      setOptions = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_4__["default"]),
      _React$useState4 = Object(C_OpenServer_domains_projects_local_react_projects_number_to_words_ru_app_number_to_words_ru_APP_NextJs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      optionsForModule = _React$useState4[0],
      setOptionsForModule = _React$useState4[1];

  var optionsDifferences = Object(lib_functions_objectsDiff__WEBPACK_IMPORTED_MODULE_3__["default"])(constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_4__["default"], optionsForModule);
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
    if (optionsNamesMap[name] !== undefined) {
      return optionsNamesMap[name];
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

    optionsResult = convertValuesToTypeNumber(optionsResult, optionsValuesTypeNumber);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2RlZmF1bHRDdXJyZW5jeU9iamVjdC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZU1vZHVsZU9wdGlvbnMudHN4Il0sIm5hbWVzIjpbIkRFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUIiwiY3VycmVuY3lOYW1lQ2FzZXMiLCJjdXJyZW5jeU5hbWVEZWNsZW5zaW9ucyIsIm5vbWluYXRpdmUiLCJnZW5pdGl2ZSIsImRhdGl2ZSIsImFjY3VzYXRpdmUiLCJpbnN0cnVtZW50YWwiLCJwcmVwb3NpdGlvbmFsIiwiZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXMiLCJmcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucyIsImN1cnJlbmN5Tm91bkdlbmRlciIsImludGVnZXIiLCJmcmFjdGlvbmFsUGFydCIsImZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoIiwiZGVmYXVsdEN1cnJlbmN5T2JqZWN0IiwiZGVmYXVsdE9wdGlvbnMiLCJfIiwibWVyZ2UiLCJjbG9uZURlZXAiLCJERUZBVUxUX01PRFVMRV9PUFRJT05TIiwiY3VzdG9tQ3VycmVuY3kiLCJvcHRpb25zVmFsdWVzVHlwZU51bWJlciIsIm9wdGlvbnNOYW1lc01hcCIsInVzZU1vZHVsZU9wdGlvbnMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJvcHRpb25zRm9yTW9kdWxlIiwic2V0T3B0aW9uc0Zvck1vZHVsZSIsIm9wdGlvbnNEaWZmZXJlbmNlcyIsIm9iamVjdHNEaWZmIiwidXNlRWZmZWN0Iiwic2F2ZU9wdGlvbnNGb3JNb2R1bGUiLCJ1cGRhdGVPcHRpb25zIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRWYWx1ZSIsInBhdGgiLCJnZXRPcHRpb25QYXRoIiwidXBkYXRlT3B0aW9uVmFsdWVCeVBhdGgiLCJ0eXBlIiwiY2hlY2tWYWx1ZVJhbmdlIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJtaW4iLCJOdW1iZXIiLCJtYXgiLCJ1bmRlZmluZWQiLCJjb252ZXJ0VmFsdWVzVG9UeXBlTnVtYmVyIiwib2JqZWN0IiwidmFsdWVzUGF0aHMiLCJyZXN1bHRPYmplY3QiLCJzb21lIiwidmFsdWVCeVBhdGgiLCJnZXQiLCJzZXQiLCJuZXdWYWx1ZSIsInVwZGF0ZWRPcHRpb25zIiwib3B0aW9uc1Jlc3VsdCIsImN1cnJlbmN5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPLElBQU1BLHVCQUF1QixHQUFHO0FBQ3JDQyxtQkFBaUIsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFFBQW5CLENBRGtCO0FBRXJDQyx5QkFBdUIsRUFBRTtBQUN2QkMsY0FBVSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FEVztBQUV2QkMsWUFBUSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FGYTtBQUd2QkMsVUFBTSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIZTtBQUl2QkMsY0FBVSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FKVztBQUt2QkMsZ0JBQVksRUFBRSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBTFM7QUFNdkJDLGlCQUFhLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVjtBQU5RLEdBRlk7QUFVckNDLHlCQUF1QixFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsUUFBdkIsQ0FWWTtBQVdyQ0MsK0JBQTZCLEVBQUU7QUFDN0JQLGNBQVUsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBRGlCO0FBRTdCQyxZQUFRLEVBQUUsQ0FBQyxTQUFELEVBQVksUUFBWixDQUZtQjtBQUc3QkMsVUFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLFVBQVosQ0FIcUI7QUFJN0JDLGNBQVUsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBSmlCO0FBSzdCQyxnQkFBWSxFQUFFLENBQUMsVUFBRCxFQUFhLFdBQWIsQ0FMZTtBQU03QkMsaUJBQWEsRUFBRSxDQUFDLFNBQUQsRUFBWSxVQUFaO0FBTmMsR0FYTTtBQW1CckNHLG9CQUFrQixFQUFFO0FBQ2xCQyxXQUFPLEVBQUUsQ0FEUztBQUVsQkMsa0JBQWMsRUFBRTtBQUZFLEdBbkJpQjtBQXVCckNDLHlCQUF1QixFQUFFO0FBdkJZLENBQWhDO0FBMEJRZCxzRkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNZSxxQkFBcUIsR0FBRztBQUNuQ2QsbUJBQWlCLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixRQUFuQixDQURnQjtBQUVuQ0MseUJBQXVCLEVBQUU7QUFDdkJDLGNBQVUsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBRFc7QUFFdkJDLFlBQVEsRUFBRSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBRmE7QUFHdkJDLFVBQU0sRUFBRSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSGU7QUFJdkJDLGNBQVUsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBSlc7QUFLdkJDLGdCQUFZLEVBQUUsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQUxTO0FBTXZCQyxpQkFBYSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVY7QUFOUSxHQUZVO0FBVW5DQyx5QkFBdUIsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFFBQXZCLENBVlU7QUFXbkNDLCtCQUE2QixFQUFFO0FBQzdCUCxjQUFVLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWixDQURpQjtBQUU3QkMsWUFBUSxFQUFFLENBQUMsU0FBRCxFQUFZLFFBQVosQ0FGbUI7QUFHN0JDLFVBQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxVQUFaLENBSHFCO0FBSTdCQyxjQUFVLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWixDQUppQjtBQUs3QkMsZ0JBQVksRUFBRSxDQUFDLFVBQUQsRUFBYSxXQUFiLENBTGU7QUFNN0JDLGlCQUFhLEVBQUUsQ0FBQyxTQUFELEVBQVksVUFBWjtBQU5jLEdBWEk7QUFtQm5DRyxvQkFBa0IsRUFBRTtBQUNsQkMsV0FBTyxFQUFFLENBRFM7QUFFbEJDLGtCQUFjLEVBQUU7QUFGRSxHQW5CZTtBQXVCbkNDLHlCQUF1QixFQUFFO0FBdkJVLENBQTlCOztBQTBCUCxJQUFNRSxjQUFjLEdBQUdDLDZDQUFDLENBQUNDLEtBQUYsQ0FBUUQsNkNBQUMsQ0FBQ0UsU0FBRixDQUFZQyxzRUFBWixDQUFSLEVBQTZDO0FBQ2xFQyxnQkFBYyxFQUFFSiw2Q0FBQyxDQUFDRSxTQUFGLENBQVluQix1RUFBWjtBQURrRCxDQUE3QyxDQUF2Qjs7QUFJQSxJQUFNc0IsdUJBQXVCLEdBQUcsQ0FDOUIsYUFEOEIsRUFFOUIscUNBRjhCLEVBRzlCLDRDQUg4QixFQUk5QixrQ0FKOEIsQ0FBaEM7QUFPQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEIsY0FBWSxVQURVO0FBRXRCLDhCQUE0QixxQ0FGTjtBQUd0Qiw4QkFBNEIscUNBSE47QUFJdEIsOEJBQTRCLHFDQUpOO0FBS3RCLGlDQUErQiwyQ0FMVDtBQU10QixpQ0FBK0IsMkNBTlQ7QUFPdEIsaUNBQStCLDJDQVBUO0FBUXRCLGtDQUFnQywyQ0FSVjtBQVN0QixxQ0FBbUMsa0RBVGI7QUFVdEIsMkNBQXlDLHdDQVZuQjtBQVd0QixrQkFBZ0IsYUFYTTtBQVl0QixnQkFBYyxZQVpRO0FBYXRCLHdCQUFzQix3QkFiQTtBQWN0Qiw4QkFBNEIseUJBZE47QUFldEIsaUNBQStCLDRCQWZUO0FBZ0J0QixpQ0FBK0IsK0JBaEJUO0FBaUJ0QixvQ0FBa0Msa0NBakJaO0FBa0J0QixnQ0FBOEIsc0JBbEJSO0FBbUJ0QixtQ0FBaUM7QUFuQlgsQ0FBeEI7QUFzQk8sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQUEsd0JBQ05DLDRDQUFLLENBQUNDLFFBQU4sQ0FBZVYsY0FBZixDQURNO0FBQUE7QUFBQSxNQUM3QlcsT0FENkI7QUFBQSxNQUNwQkMsVUFEb0I7O0FBQUEseUJBRVlILDRDQUFLLENBQUNDLFFBQU4sQ0FBZU4sc0VBQWYsQ0FGWjtBQUFBO0FBQUEsTUFFN0JTLGdCQUY2QjtBQUFBLE1BRVhDLG1CQUZXOztBQUdwQyxNQUFNQyxrQkFBa0IsR0FBR0MseUVBQVcsQ0FBQ1osc0VBQUQsRUFBeUJTLGdCQUF6QixDQUF0QztBQUVBSiw4Q0FBSyxDQUFDUSxTQUFOLENBQWdCLFlBQU07QUFDcEJDLHdCQUFvQixDQUFDUCxPQUFELENBQXBCO0FBQ0QsR0FGRCxFQUVHLENBQUNBLE9BQUQsQ0FGSDs7QUFJQSxNQUFNUSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUMvQixRQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhRCxJQUExQjtBQUNBLFFBQU1FLEtBQUssR0FBR0MsUUFBUSxDQUFDSixLQUFLLENBQUNFLE1BQVAsQ0FBdEI7QUFDQSxRQUFNRyxJQUFJLEdBQUdDLGFBQWEsQ0FBQ0wsSUFBRCxDQUExQjtBQUNDSSxRQUFJLEtBQUssSUFBVixJQUFtQkUsdUJBQXVCLENBQUNGLElBQUQsRUFBT0YsS0FBUCxDQUExQztBQUNELEdBTEQ7O0FBT0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0YsTUFBRCxFQUFZO0FBQzNCLFFBQU1NLElBQUksR0FBR04sTUFBTSxDQUFDTSxJQUFwQjtBQUNBLFFBQUlMLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFuQjs7QUFDQSxRQUFJSyxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQkwsV0FBSyxHQUFHTSxlQUFlLENBQUNQLE1BQUQsQ0FBdkI7QUFDRCxLQUZELE1BRU8sSUFBSU0sSUFBSSxLQUFLLFVBQWIsRUFBeUI7QUFDOUJMLFdBQUssR0FBR08sT0FBTyxDQUFDUixNQUFNLENBQUNTLE9BQVIsQ0FBZjtBQUNEOztBQUNELFdBQU9SLEtBQVA7QUFDRCxHQVREOztBQVdBLE1BQU1NLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ1AsTUFBRCxFQUFZO0FBQ2xDLFFBQUlDLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFuQjs7QUFDQSxRQUFJQSxLQUFLLEtBQUssRUFBZCxFQUFrQjtBQUNoQixVQUFJRCxNQUFNLENBQUNVLEdBQVAsS0FBZSxFQUFuQixFQUF1QjtBQUNyQlQsYUFBSyxHQUFHVSxNQUFNLENBQUNWLEtBQUQsQ0FBTixJQUFpQlUsTUFBTSxDQUFDWCxNQUFNLENBQUNVLEdBQVIsQ0FBdkIsR0FBc0NULEtBQXRDLEdBQThDRCxNQUFNLENBQUNVLEdBQTdEO0FBQ0Q7O0FBQ0QsVUFBSVYsTUFBTSxDQUFDWSxHQUFQLEtBQWUsRUFBbkIsRUFBdUI7QUFDckJYLGFBQUssR0FBR1UsTUFBTSxDQUFDVixLQUFELENBQU4sSUFBaUJVLE1BQU0sQ0FBQ1gsTUFBTSxDQUFDVSxHQUFSLENBQXZCLEdBQXNDVCxLQUF0QyxHQUE4Q0QsTUFBTSxDQUFDVSxHQUE3RDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBT1QsS0FBUDtBQUNELEdBWEQ7O0FBYUEsTUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDTCxJQUFELEVBQVU7QUFDOUIsUUFBSWQsZUFBZSxDQUFDYyxJQUFELENBQWYsS0FBMEJjLFNBQTlCLEVBQXlDO0FBQ3ZDLGFBQU81QixlQUFlLENBQUNjLElBQUQsQ0FBdEI7QUFDRDs7QUFDRCxXQUFPLElBQVA7QUFDRCxHQUxEOztBQU9BLE1BQU1lLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQ0MsTUFBRCxFQUFTQyxXQUFULEVBQXlCO0FBQ3pELFFBQUlDLFlBQVksR0FBR3RDLDZDQUFDLENBQUNFLFNBQUYsQ0FBWWtDLE1BQVosQ0FBbkI7O0FBQ0FDLGVBQVcsQ0FBQ0UsSUFBWixDQUFpQixVQUFDZixJQUFELEVBQVU7QUFDekIsVUFBTWdCLFdBQVcsR0FBR3hDLDZDQUFDLENBQUN5QyxHQUFGLENBQU1ILFlBQU4sRUFBb0JkLElBQXBCLENBQXBCOztBQUNBLFVBQUlnQixXQUFXLEtBQUtOLFNBQXBCLEVBQStCO0FBQzdCSSxvQkFBWSxHQUFHdEMsNkNBQUMsQ0FBQzBDLEdBQUYsQ0FBTUosWUFBTixFQUFvQmQsSUFBcEIsRUFBMEJRLE1BQU0sQ0FBQ1EsV0FBRCxDQUFoQyxDQUFmO0FBQ0Q7QUFDRixLQUxEO0FBTUEsV0FBT0YsWUFBUDtBQUNELEdBVEQ7O0FBV0EsTUFBTVosdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDRixJQUFELEVBQU9tQixRQUFQLEVBQW9CO0FBQ2xELFFBQUlDLGNBQWMsR0FBRzVDLDZDQUFDLENBQUNFLFNBQUYsQ0FBWVEsT0FBWixDQUFyQjs7QUFDQWtDLGtCQUFjLEdBQUc1Qyw2Q0FBQyxDQUFDMEMsR0FBRixDQUFNRSxjQUFOLEVBQXNCcEIsSUFBdEIsRUFBNEJtQixRQUE1QixDQUFqQjtBQUNBaEMsY0FBVSxDQUFDaUMsY0FBRCxDQUFWO0FBQ0QsR0FKRDs7QUFNQSxNQUFNM0Isb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDUCxPQUFELEVBQWE7QUFDeEMsUUFBSW1DLGFBQWEsR0FBRzdDLDZDQUFDLENBQUNFLFNBQUYsQ0FBWVEsT0FBWixDQUFwQjs7QUFDQSxXQUFPbUMsYUFBYSxDQUFDekMsY0FBckI7O0FBQ0EsUUFBSU0sT0FBTyxDQUFDb0MsUUFBUixLQUFxQixRQUF6QixFQUFtQztBQUNqQ0QsbUJBQWEsQ0FBQ0MsUUFBZCxHQUF5QnBDLE9BQU8sQ0FBQ04sY0FBakM7QUFDRDs7QUFDRHlDLGlCQUFhLEdBQUdWLHlCQUF5QixDQUFDVSxhQUFELEVBQWdCeEMsdUJBQWhCLENBQXpDO0FBQ0FRLHVCQUFtQixDQUFDZ0MsYUFBRCxDQUFuQjtBQUNELEdBUkQ7O0FBVUEsU0FBTztBQUNMbkMsV0FBTyxFQUFQQSxPQURLO0FBRUxFLG9CQUFnQixFQUFoQkEsZ0JBRks7QUFHTEUsc0JBQWtCLEVBQWxCQSxrQkFISztBQUlMSSxpQkFBYSxFQUFiQTtBQUpLLEdBQVA7QUFNRCxDQWhGTTs7R0FBTVgsZ0I7O0FBa0ZFQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZGI2MGZmNGM4ZDgwOTQ3MWM2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IERFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUID0ge1xuICBjdXJyZW5jeU5hbWVDYXNlczogWyfRgNGD0LHQu9GMJywgJ9GA0YPQsdC70Y8nLCAn0YDRg9Cx0LvQtdC5J10sXG4gIGN1cnJlbmN5TmFtZURlY2xlbnNpb25zOiB7XG4gICAgbm9taW5hdGl2ZTogWyfRgNGD0LHQu9GMJywgJ9GA0YPQsdC70LgnXSxcbiAgICBnZW5pdGl2ZTogWyfRgNGD0LHQu9GPJywgJ9GA0YPQsdC70LXQuSddLFxuICAgIGRhdGl2ZTogWyfRgNGD0LHQu9GOJywgJ9GA0YPQsdC70Y/QvCddLFxuICAgIGFjY3VzYXRpdmU6IFsn0YDRg9Cx0LvRjCcsICfRgNGD0LHQu9C4J10sXG4gICAgaW5zdHJ1bWVudGFsOiBbJ9GA0YPQsdC70ZHQvCcsICfRgNGD0LHQu9GP0LzQuCddLFxuICAgIHByZXBvc2l0aW9uYWw6IFsn0YDRg9Cx0LvQtScsICfRgNGD0LHQu9GP0YUnXSxcbiAgfSxcbiAgZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXM6IFsn0LrQvtC/0LXQudC60LAnLCAn0LrQvtC/0LXQudC60LgnLCAn0LrQvtC/0LXQtdC6J10sXG4gIGZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zOiB7XG4gICAgbm9taW5hdGl2ZTogWyfQutC+0L/QtdC50LrQsCcsICfQutC+0L/QtdC50LrQuCddLFxuICAgIGdlbml0aXZlOiBbJ9C60L7Qv9C10LnQutC4JywgJ9C60L7Qv9C10LXQuiddLFxuICAgIGRhdGl2ZTogWyfQutC+0L/QtdC50LrQtScsICfQutC+0L/QtdC50LrQsNC8J10sXG4gICAgYWNjdXNhdGl2ZTogWyfQutC+0L/QtdC50LrRgycsICfQutC+0L/QtdC50LrQuCddLFxuICAgIGluc3RydW1lbnRhbDogWyfQutC+0L/QtdC50LrQvtC5JywgJ9C60L7Qv9C10LnQutCw0LzQuCddLFxuICAgIHByZXBvc2l0aW9uYWw6IFsn0LrQvtC/0LXQudC60LUnLCAn0LrQvtC/0LXQudC60LDRhSddLFxuICB9LFxuICBjdXJyZW5jeU5vdW5HZW5kZXI6IHtcbiAgICBpbnRlZ2VyOiAwLFxuICAgIGZyYWN0aW9uYWxQYXJ0OiAxLFxuICB9LFxuICBmcmFjdGlvbmFsUGFydE1pbkxlbmd0aDogMixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgb2JqZWN0c0RpZmYgZnJvbSAnbGliL2Z1bmN0aW9ucy9vYmplY3RzRGlmZidcbmltcG9ydCBERUZBVUxUX01PRFVMRV9PUFRJT05TIGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0TW9kdWxlT3B0aW9ucyc7XG5pbXBvcnQgREVGQVVMVF9DVVJSRU5DWV9PQkpFQ1QgZnJvbSAnY29uc3RhbnRzL2RlZmF1bHRDdXJyZW5jeU9iamVjdCc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Q3VycmVuY3lPYmplY3QgPSB7XG4gIGN1cnJlbmN5TmFtZUNhc2VzOiBbJ9GA0YPQsdC70YwnLCAn0YDRg9Cx0LvRjycsICfRgNGD0LHQu9C10LknXSxcbiAgY3VycmVuY3lOYW1lRGVjbGVuc2lvbnM6IHtcbiAgICBub21pbmF0aXZlOiBbJ9GA0YPQsdC70YwnLCAn0YDRg9Cx0LvQuCddLFxuICAgIGdlbml0aXZlOiBbJ9GA0YPQsdC70Y8nLCAn0YDRg9Cx0LvQtdC5J10sXG4gICAgZGF0aXZlOiBbJ9GA0YPQsdC70Y4nLCAn0YDRg9Cx0LvRj9C8J10sXG4gICAgYWNjdXNhdGl2ZTogWyfRgNGD0LHQu9GMJywgJ9GA0YPQsdC70LgnXSxcbiAgICBpbnN0cnVtZW50YWw6IFsn0YDRg9Cx0LvRkdC8JywgJ9GA0YPQsdC70Y/QvNC4J10sXG4gICAgcHJlcG9zaXRpb25hbDogWyfRgNGD0LHQu9C1JywgJ9GA0YPQsdC70Y/RhSddLFxuICB9LFxuICBmcmFjdGlvbmFsUGFydE5hbWVDYXNlczogWyfQutC+0L/QtdC50LrQsCcsICfQutC+0L/QtdC50LrQuCcsICfQutC+0L/QtdC10LonXSxcbiAgZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnM6IHtcbiAgICBub21pbmF0aXZlOiBbJ9C60L7Qv9C10LnQutCwJywgJ9C60L7Qv9C10LnQutC4J10sXG4gICAgZ2VuaXRpdmU6IFsn0LrQvtC/0LXQudC60LgnLCAn0LrQvtC/0LXQtdC6J10sXG4gICAgZGF0aXZlOiBbJ9C60L7Qv9C10LnQutC1JywgJ9C60L7Qv9C10LnQutCw0LwnXSxcbiAgICBhY2N1c2F0aXZlOiBbJ9C60L7Qv9C10LnQutGDJywgJ9C60L7Qv9C10LnQutC4J10sXG4gICAgaW5zdHJ1bWVudGFsOiBbJ9C60L7Qv9C10LnQutC+0LknLCAn0LrQvtC/0LXQudC60LDQvNC4J10sXG4gICAgcHJlcG9zaXRpb25hbDogWyfQutC+0L/QtdC50LrQtScsICfQutC+0L/QtdC50LrQsNGFJ10sXG4gIH0sXG4gIGN1cnJlbmN5Tm91bkdlbmRlcjoge1xuICAgIGludGVnZXI6IDAsXG4gICAgZnJhY3Rpb25hbFBhcnQ6IDEsXG4gIH0sXG4gIGZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoOiAyLFxufTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBfLm1lcmdlKF8uY2xvbmVEZWVwKERFRkFVTFRfTU9EVUxFX09QVElPTlMpLCB7XG4gIGN1c3RvbUN1cnJlbmN5OiBfLmNsb25lRGVlcChERUZBVUxUX0NVUlJFTkNZX09CSkVDVCksXG59KTtcblxuY29uc3Qgb3B0aW9uc1ZhbHVlc1R5cGVOdW1iZXIgPSBbXG4gICdyb3VuZE51bWJlcicsXG4gICdjdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuaW50ZWdlcicsXG4gICdjdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuZnJhY3Rpb25hbFBhcnQnLFxuICAnY3VycmVuY3kuZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGgnLFxuXTtcblxuY29uc3Qgb3B0aW9uc05hbWVzTWFwID0ge1xuICAnY3VycmVuY3knOiAnY3VycmVuY3knLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIxJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1sxXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjMnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMl0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwxJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1sxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDMnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMl0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZvcm0taW50ZWdlcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuaW50ZWdlcicsXG4gICdjdXN0b20tY3VycmVuY3ktZm9ybS1mcmFjdGlvbmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5mcmFjdGlvbmFsUGFydCcsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1taW4tbGVuZ3RoJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyxcbiAgJ3JvdW5kLW51bWJlcic6ICdyb3VuZE51bWJlcicsXG4gICdkZWNsZW5zaW9uJzogJ2RlY2xlbnNpb24nLFxuICAnY29udmVydC1taW51cy1zaWduJzogJ2NvbnZlcnRNaW51c1NpZ25Ub1dvcmQnLFxuICAnc2hvdy1udW1iZXItcGFydC1pbnRlZ2VyJzogJ3Nob3dOdW1iZXJQYXJ0cy5pbnRlZ2VyJyxcbiAgJ3Nob3ctbnVtYmVyLXBhcnQtZnJhY3Rpb25hbCc6ICdzaG93TnVtYmVyUGFydHMuZnJhY3Rpb25hbCcsXG4gICdjb252ZXJ0LW51bWJlci1wYXJ0LWludGVnZXInOiAnY29udmVydE51bWJlcnRUb1dvcmRzLmludGVnZXInLFxuICAnY29udmVydC1udW1iZXItcGFydC1mcmFjdGlvbmFsJzogJ2NvbnZlcnROdW1iZXJ0VG9Xb3Jkcy5mcmFjdGlvbmFsJyxcbiAgJ3Nob3ctY3VycmVuY3ktcGFydC1pbnRlZ2VyJzogJ3Nob3dDdXJyZW5jeS5pbnRlZ2VyJyxcbiAgJ3Nob3ctY3VycmVuY3ktcGFydC1mcmFjdGlvbmFsJzogJ3Nob3dDdXJyZW5jeS5mcmFjdGlvbmFsJyxcbn1cblxuZXhwb3J0IGNvbnN0IHVzZU1vZHVsZU9wdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRPcHRpb25zKTtcbiAgY29uc3QgW29wdGlvbnNGb3JNb2R1bGUsIHNldE9wdGlvbnNGb3JNb2R1bGVdID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9NT0RVTEVfT1BUSU9OUyk7XG4gIGNvbnN0IG9wdGlvbnNEaWZmZXJlbmNlcyA9IG9iamVjdHNEaWZmKERFRkFVTFRfTU9EVUxFX09QVElPTlMsIG9wdGlvbnNGb3JNb2R1bGUpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2F2ZU9wdGlvbnNGb3JNb2R1bGUob3B0aW9ucyk7XG4gIH0sIFtvcHRpb25zXSlcblxuICBjb25zdCB1cGRhdGVPcHRpb25zID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBwYXRoID0gZ2V0T3B0aW9uUGF0aChuYW1lKTtcbiAgICAocGF0aCAhPT0gbnVsbCkgJiYgdXBkYXRlT3B0aW9uVmFsdWVCeVBhdGgocGF0aCwgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlID0gKHRhcmdldCkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSB0YXJnZXQudHlwZTtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IGNoZWNrVmFsdWVSYW5nZSh0YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgdmFsdWUgPSBCb29sZWFuKHRhcmdldC5jaGVja2VkKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY29uc3QgY2hlY2tWYWx1ZVJhbmdlID0gKHRhcmdldCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICBpZiAodGFyZ2V0Lm1pbiAhPT0gJycpIHtcbiAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpID49IE51bWJlcih0YXJnZXQubWluKSA/IHZhbHVlIDogdGFyZ2V0Lm1pbjtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXQubWF4ICE9PSAnJykge1xuICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSkgPD0gTnVtYmVyKHRhcmdldC5taW4pID8gdmFsdWUgOiB0YXJnZXQubWluO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfTtcblxuICBjb25zdCBnZXRPcHRpb25QYXRoID0gKG5hbWUpID0+IHtcbiAgICBpZiAob3B0aW9uc05hbWVzTWFwW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBvcHRpb25zTmFtZXNNYXBbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IGNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIgPSAob2JqZWN0LCB2YWx1ZXNQYXRocykgPT4ge1xuICAgIGxldCByZXN1bHRPYmplY3QgPSBfLmNsb25lRGVlcChvYmplY3QpO1xuICAgIHZhbHVlc1BhdGhzLnNvbWUoKHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlQnlQYXRoID0gXy5nZXQocmVzdWx0T2JqZWN0LCBwYXRoKTtcbiAgICAgIGlmICh2YWx1ZUJ5UGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdE9iamVjdCA9IF8uc2V0KHJlc3VsdE9iamVjdCwgcGF0aCwgTnVtYmVyKHZhbHVlQnlQYXRoKSk7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0T2JqZWN0XG4gIH1cblxuICBjb25zdCB1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCA9IChwYXRoLCBuZXdWYWx1ZSkgPT4ge1xuICAgIGxldCB1cGRhdGVkT3B0aW9ucyA9IF8uY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgIHVwZGF0ZWRPcHRpb25zID0gXy5zZXQodXBkYXRlZE9wdGlvbnMsIHBhdGgsIG5ld1ZhbHVlKTtcbiAgICBzZXRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKTtcbiAgfTtcblxuICBjb25zdCBzYXZlT3B0aW9uc0Zvck1vZHVsZSA9IChvcHRpb25zKSA9PiB7XG4gICAgbGV0IG9wdGlvbnNSZXN1bHQgPSBfLmNsb25lRGVlcChvcHRpb25zKTtcbiAgICBkZWxldGUgb3B0aW9uc1Jlc3VsdC5jdXN0b21DdXJyZW5jeTtcbiAgICBpZiAob3B0aW9ucy5jdXJyZW5jeSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgIG9wdGlvbnNSZXN1bHQuY3VycmVuY3kgPSBvcHRpb25zLmN1c3RvbUN1cnJlbmN5O1xuICAgIH1cbiAgICBvcHRpb25zUmVzdWx0ID0gY29udmVydFZhbHVlc1RvVHlwZU51bWJlcihvcHRpb25zUmVzdWx0LCBvcHRpb25zVmFsdWVzVHlwZU51bWJlcik7XG4gICAgc2V0T3B0aW9uc0Zvck1vZHVsZShvcHRpb25zUmVzdWx0KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG9wdGlvbnMsXG4gICAgb3B0aW9uc0Zvck1vZHVsZSxcbiAgICBvcHRpb25zRGlmZmVyZW5jZXMsXG4gICAgdXBkYXRlT3B0aW9ucyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNb2R1bGVPcHRpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==