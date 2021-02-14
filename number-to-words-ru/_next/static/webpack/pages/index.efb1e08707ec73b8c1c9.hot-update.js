webpackHotUpdate_N_E("pages/index",{

/***/ "./constants/defaultModuleOptions.ts":
/*!*******************************************!*\
  !*** ./constants/defaultModuleOptions.ts ***!
  \*******************************************/
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/hooks/useModuleOptions.tsx":
/*!****************************************!*\
  !*** ./lib/hooks/useModuleOptions.tsx ***!
  \****************************************/
/*! exports provided: defaultCurrencyObject, defaultModuleOptions, useModuleOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCurrencyObject", function() { return defaultCurrencyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModuleOptions", function() { return defaultModuleOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useModuleOptions", function() { return useModuleOptions; });
/* harmony import */ var C_OpenServer_domains_projects_local_react_projects_number_to_words_ru_app_number_to_words_ru_APP_NextJs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_functions_objectsDiff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/functions/objectsDiff */ "./lib/functions/objectsDiff.ts");
/* harmony import */ var constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/defaultModuleOptions */ "./constants/defaultModuleOptions.ts");


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
var defaultModuleOptions = {
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

var defaultOptions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.merge(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_4__["default"]), {
  customCurrency: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(defaultCurrencyObject)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2RlZmF1bHRNb2R1bGVPcHRpb25zLnRzIiwid2VicGFjazovL19OX0UvLi9saWIvaG9va3MvdXNlTW9kdWxlT3B0aW9ucy50c3giXSwibmFtZXMiOlsiREVGQVVMVF9NT0RVTEVfT1BUSU9OUyIsImN1cnJlbmN5IiwiZGVjbGVuc2lvbiIsInJvdW5kTnVtYmVyIiwiY29udmVydE1pbnVzU2lnblRvV29yZCIsInNob3dOdW1iZXJQYXJ0cyIsImludGVnZXIiLCJmcmFjdGlvbmFsIiwiY29udmVydE51bWJlcnRUb1dvcmRzIiwic2hvd0N1cnJlbmN5IiwiZGVmYXVsdEN1cnJlbmN5T2JqZWN0IiwiY3VycmVuY3lOYW1lQ2FzZXMiLCJjdXJyZW5jeU5hbWVEZWNsZW5zaW9ucyIsIm5vbWluYXRpdmUiLCJnZW5pdGl2ZSIsImRhdGl2ZSIsImFjY3VzYXRpdmUiLCJpbnN0cnVtZW50YWwiLCJwcmVwb3NpdGlvbmFsIiwiZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXMiLCJmcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucyIsImN1cnJlbmN5Tm91bkdlbmRlciIsImZyYWN0aW9uYWxQYXJ0IiwiZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGgiLCJkZWZhdWx0TW9kdWxlT3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwiXyIsIm1lcmdlIiwiY2xvbmVEZWVwIiwiY3VzdG9tQ3VycmVuY3kiLCJvcHRpb25zVmFsdWVzVHlwZU51bWJlciIsIm9wdGlvbnNOYW1lc01hcCIsInVzZU1vZHVsZU9wdGlvbnMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJvcHRpb25zRm9yTW9kdWxlIiwic2V0T3B0aW9uc0Zvck1vZHVsZSIsIm9wdGlvbnNEaWZmZXJlbmNlcyIsIm9iamVjdHNEaWZmIiwidXNlRWZmZWN0Iiwic2F2ZU9wdGlvbnNGb3JNb2R1bGUiLCJ1cGRhdGVPcHRpb25zIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRWYWx1ZSIsInBhdGgiLCJnZXRPcHRpb25QYXRoIiwidXBkYXRlT3B0aW9uVmFsdWVCeVBhdGgiLCJ0eXBlIiwiY2hlY2tWYWx1ZVJhbmdlIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJtaW4iLCJOdW1iZXIiLCJtYXgiLCJ1bmRlZmluZWQiLCJjb252ZXJ0VmFsdWVzVG9UeXBlTnVtYmVyIiwib2JqZWN0IiwidmFsdWVzUGF0aHMiLCJyZXN1bHRPYmplY3QiLCJzb21lIiwidmFsdWVCeVBhdGgiLCJnZXQiLCJzZXQiLCJuZXdWYWx1ZSIsInVwZGF0ZWRPcHRpb25zIiwib3B0aW9uc1Jlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTyxJQUFNQSxzQkFBc0IsR0FBRztBQUNwQ0MsVUFBUSxFQUFFLEtBRDBCO0FBRXBDQyxZQUFVLEVBQUUsWUFGd0I7QUFHcENDLGFBQVcsRUFBRSxDQUFDLENBSHNCO0FBSXBDQyx3QkFBc0IsRUFBRSxJQUpZO0FBS3BDQyxpQkFBZSxFQUFFO0FBQ2ZDLFdBQU8sRUFBRSxJQURNO0FBRWZDLGNBQVUsRUFBRTtBQUZHLEdBTG1CO0FBU3BDQyx1QkFBcUIsRUFBRTtBQUNyQkYsV0FBTyxFQUFFLElBRFk7QUFFckJDLGNBQVUsRUFBRTtBQUZTLEdBVGE7QUFhcENFLGNBQVksRUFBRTtBQUNaSCxXQUFPLEVBQUUsSUFERztBQUVaQyxjQUFVLEVBQUU7QUFGQTtBQWJzQixDQUEvQjtBQW1CUVAscUZBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1VLHFCQUFxQixHQUFHO0FBQ25DQyxtQkFBaUIsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFFBQW5CLENBRGdCO0FBRW5DQyx5QkFBdUIsRUFBRTtBQUN2QkMsY0FBVSxFQUFFLENBQUMsT0FB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ZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBERUZBVUxUX01PRFVMRV9PUFRJT05TID0ge1xuICBjdXJyZW5jeTogJ3J1YicsXG4gIGRlY2xlbnNpb246ICdub21pbmF0aXZlJyxcbiAgcm91bmROdW1iZXI6IC0xLFxuICBjb252ZXJ0TWludXNTaWduVG9Xb3JkOiB0cnVlLFxuICBzaG93TnVtYmVyUGFydHM6IHtcbiAgICBpbnRlZ2VyOiB0cnVlLFxuICAgIGZyYWN0aW9uYWw6IHRydWUsXG4gIH0sXG4gIGNvbnZlcnROdW1iZXJ0VG9Xb3Jkczoge1xuICAgIGludGVnZXI6IHRydWUsXG4gICAgZnJhY3Rpb25hbDogZmFsc2UsXG4gIH0sXG4gIHNob3dDdXJyZW5jeToge1xuICAgIGludGVnZXI6IHRydWUsXG4gICAgZnJhY3Rpb25hbDogdHJ1ZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERFRkFVTFRfTU9EVUxFX09QVElPTlM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBvYmplY3RzRGlmZiBmcm9tICdsaWIvZnVuY3Rpb25zL29iamVjdHNEaWZmJ1xuaW1wb3J0IERFRkFVTFRfTU9EVUxFX09QVElPTlMgZnJvbSAnY29uc3RhbnRzL2RlZmF1bHRNb2R1bGVPcHRpb25zJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDdXJyZW5jeU9iamVjdCA9IHtcbiAgY3VycmVuY3lOYW1lQ2FzZXM6IFsn0YDRg9Cx0LvRjCcsICfRgNGD0LHQu9GPJywgJ9GA0YPQsdC70LXQuSddLFxuICBjdXJyZW5jeU5hbWVEZWNsZW5zaW9uczoge1xuICAgIG5vbWluYXRpdmU6IFsn0YDRg9Cx0LvRjCcsICfRgNGD0LHQu9C4J10sXG4gICAgZ2VuaXRpdmU6IFsn0YDRg9Cx0LvRjycsICfRgNGD0LHQu9C10LknXSxcbiAgICBkYXRpdmU6IFsn0YDRg9Cx0LvRjicsICfRgNGD0LHQu9GP0LwnXSxcbiAgICBhY2N1c2F0aXZlOiBbJ9GA0YPQsdC70YwnLCAn0YDRg9Cx0LvQuCddLFxuICAgIGluc3RydW1lbnRhbDogWyfRgNGD0LHQu9GR0LwnLCAn0YDRg9Cx0LvRj9C80LgnXSxcbiAgICBwcmVwb3NpdGlvbmFsOiBbJ9GA0YPQsdC70LUnLCAn0YDRg9Cx0LvRj9GFJ10sXG4gIH0sXG4gIGZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzOiBbJ9C60L7Qv9C10LnQutCwJywgJ9C60L7Qv9C10LnQutC4JywgJ9C60L7Qv9C10LXQuiddLFxuICBmcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9uczoge1xuICAgIG5vbWluYXRpdmU6IFsn0LrQvtC/0LXQudC60LAnLCAn0LrQvtC/0LXQudC60LgnXSxcbiAgICBnZW5pdGl2ZTogWyfQutC+0L/QtdC50LrQuCcsICfQutC+0L/QtdC10LonXSxcbiAgICBkYXRpdmU6IFsn0LrQvtC/0LXQudC60LUnLCAn0LrQvtC/0LXQudC60LDQvCddLFxuICAgIGFjY3VzYXRpdmU6IFsn0LrQvtC/0LXQudC60YMnLCAn0LrQvtC/0LXQudC60LgnXSxcbiAgICBpbnN0cnVtZW50YWw6IFsn0LrQvtC/0LXQudC60L7QuScsICfQutC+0L/QtdC50LrQsNC80LgnXSxcbiAgICBwcmVwb3NpdGlvbmFsOiBbJ9C60L7Qv9C10LnQutC1JywgJ9C60L7Qv9C10LnQutCw0YUnXSxcbiAgfSxcbiAgY3VycmVuY3lOb3VuR2VuZGVyOiB7XG4gICAgaW50ZWdlcjogMCxcbiAgICBmcmFjdGlvbmFsUGFydDogMSxcbiAgfSxcbiAgZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGg6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdE1vZHVsZU9wdGlvbnMgPSB7XG4gIGN1cnJlbmN5OiAncnViJyxcbiAgZGVjbGVuc2lvbjogJ25vbWluYXRpdmUnLFxuICByb3VuZE51bWJlcjogLTEsXG4gIGNvbnZlcnRNaW51c1NpZ25Ub1dvcmQ6IHRydWUsXG4gIHNob3dOdW1iZXJQYXJ0czoge1xuICAgIGludGVnZXI6IHRydWUsXG4gICAgZnJhY3Rpb25hbDogdHJ1ZSxcbiAgfSxcbiAgY29udmVydE51bWJlcnRUb1dvcmRzOiB7XG4gICAgaW50ZWdlcjogdHJ1ZSxcbiAgICBmcmFjdGlvbmFsOiBmYWxzZSxcbiAgfSxcbiAgc2hvd0N1cnJlbmN5OiB7XG4gICAgaW50ZWdlcjogdHJ1ZSxcbiAgICBmcmFjdGlvbmFsOiB0cnVlLFxuICB9LFxufTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBfLm1lcmdlKF8uY2xvbmVEZWVwKERFRkFVTFRfTU9EVUxFX09QVElPTlMpLCB7XG4gIGN1c3RvbUN1cnJlbmN5OiBfLmNsb25lRGVlcChkZWZhdWx0Q3VycmVuY3lPYmplY3QpLFxufSk7XG5cbmNvbnN0IG9wdGlvbnNWYWx1ZXNUeXBlTnVtYmVyID0gW1xuICAncm91bmROdW1iZXInLFxuICAnY3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmludGVnZXInLFxuICAnY3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmZyYWN0aW9uYWxQYXJ0JyxcbiAgJ2N1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyxcbl07XG5cbmNvbnN0IG9wdGlvbnNOYW1lc01hcCA9IHtcbiAgJ2N1cnJlbmN5JzogJ2N1cnJlbmN5JyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMSc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1swXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIzJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzJdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMSc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1swXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwzJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzJdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mb3JtLWludGVnZXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmludGVnZXInLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZvcm0tZnJhY3Rpb25hbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuZnJhY3Rpb25hbFBhcnQnLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtbWluLWxlbmd0aCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE1pbkxlbmd0aCcsXG4gICdyb3VuZC1udW1iZXInOiAncm91bmROdW1iZXInLFxuICAnZGVjbGVuc2lvbic6ICdkZWNsZW5zaW9uJyxcbiAgJ2NvbnZlcnQtbWludXMtc2lnbic6ICdjb252ZXJ0TWludXNTaWduVG9Xb3JkJyxcbiAgJ3Nob3ctbnVtYmVyLXBhcnQtaW50ZWdlcic6ICdzaG93TnVtYmVyUGFydHMuaW50ZWdlcicsXG4gICdzaG93LW51bWJlci1wYXJ0LWZyYWN0aW9uYWwnOiAnc2hvd051bWJlclBhcnRzLmZyYWN0aW9uYWwnLFxuICAnY29udmVydC1udW1iZXItcGFydC1pbnRlZ2VyJzogJ2NvbnZlcnROdW1iZXJ0VG9Xb3Jkcy5pbnRlZ2VyJyxcbiAgJ2NvbnZlcnQtbnVtYmVyLXBhcnQtZnJhY3Rpb25hbCc6ICdjb252ZXJ0TnVtYmVydFRvV29yZHMuZnJhY3Rpb25hbCcsXG4gICdzaG93LWN1cnJlbmN5LXBhcnQtaW50ZWdlcic6ICdzaG93Q3VycmVuY3kuaW50ZWdlcicsXG4gICdzaG93LWN1cnJlbmN5LXBhcnQtZnJhY3Rpb25hbCc6ICdzaG93Q3VycmVuY3kuZnJhY3Rpb25hbCcsXG59XG5cbmV4cG9ydCBjb25zdCB1c2VNb2R1bGVPcHRpb25zID0gKCkgPT4ge1xuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0T3B0aW9ucyk7XG4gIGNvbnN0IFtvcHRpb25zRm9yTW9kdWxlLCBzZXRPcHRpb25zRm9yTW9kdWxlXSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfTU9EVUxFX09QVElPTlMpO1xuICBjb25zdCBvcHRpb25zRGlmZmVyZW5jZXMgPSBvYmplY3RzRGlmZihERUZBVUxUX01PRFVMRV9PUFRJT05TLCBvcHRpb25zRm9yTW9kdWxlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNhdmVPcHRpb25zRm9yTW9kdWxlKG9wdGlvbnMpO1xuICB9LCBbb3B0aW9uc10pXG5cbiAgY29uc3QgdXBkYXRlT3B0aW9ucyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgcGF0aCA9IGdldE9wdGlvblBhdGgobmFtZSk7XG4gICAgKHBhdGggIT09IG51bGwpICYmIHVwZGF0ZU9wdGlvblZhbHVlQnlQYXRoKHBhdGgsIHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZSA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCB0eXBlID0gdGFyZ2V0LnR5cGU7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSBjaGVja1ZhbHVlUmFuZ2UodGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHZhbHVlID0gQm9vbGVhbih0YXJnZXQuY2hlY2tlZCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrVmFsdWVSYW5nZSA9ICh0YXJnZXQpID0+IHtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgaWYgKHRhcmdldC5taW4gIT09ICcnKSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSA+PSBOdW1iZXIodGFyZ2V0Lm1pbikgPyB2YWx1ZSA6IHRhcmdldC5taW47XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0Lm1heCAhPT0gJycpIHtcbiAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpIDw9IE51bWJlcih0YXJnZXQubWluKSA/IHZhbHVlIDogdGFyZ2V0Lm1pbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH07XG5cbiAgY29uc3QgZ2V0T3B0aW9uUGF0aCA9IChuYW1lKSA9PiB7XG4gICAgaWYgKG9wdGlvbnNOYW1lc01hcFtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc05hbWVzTWFwW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCBjb252ZXJ0VmFsdWVzVG9UeXBlTnVtYmVyID0gKG9iamVjdCwgdmFsdWVzUGF0aHMpID0+IHtcbiAgICBsZXQgcmVzdWx0T2JqZWN0ID0gXy5jbG9uZURlZXAob2JqZWN0KTtcbiAgICB2YWx1ZXNQYXRocy5zb21lKChwYXRoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZUJ5UGF0aCA9IF8uZ2V0KHJlc3VsdE9iamVjdCwgcGF0aCk7XG4gICAgICBpZiAodmFsdWVCeVBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHRPYmplY3QgPSBfLnNldChyZXN1bHRPYmplY3QsIHBhdGgsIE51bWJlcih2YWx1ZUJ5UGF0aCkpO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdE9iamVjdFxuICB9XG5cbiAgY29uc3QgdXBkYXRlT3B0aW9uVmFsdWVCeVBhdGggPSAocGF0aCwgbmV3VmFsdWUpID0+IHtcbiAgICBsZXQgdXBkYXRlZE9wdGlvbnMgPSBfLmNsb25lRGVlcChvcHRpb25zKTtcbiAgICB1cGRhdGVkT3B0aW9ucyA9IF8uc2V0KHVwZGF0ZWRPcHRpb25zLCBwYXRoLCBuZXdWYWx1ZSk7XG4gICAgc2V0T3B0aW9ucyh1cGRhdGVkT3B0aW9ucyk7XG4gIH07XG5cbiAgY29uc3Qgc2F2ZU9wdGlvbnNGb3JNb2R1bGUgPSAob3B0aW9ucykgPT4ge1xuICAgIGxldCBvcHRpb25zUmVzdWx0ID0gXy5jbG9uZURlZXAob3B0aW9ucyk7XG4gICAgZGVsZXRlIG9wdGlvbnNSZXN1bHQuY3VzdG9tQ3VycmVuY3k7XG4gICAgaWYgKG9wdGlvbnMuY3VycmVuY3kgPT09ICdjdXN0b20nKSB7XG4gICAgICBvcHRpb25zUmVzdWx0LmN1cnJlbmN5ID0gb3B0aW9ucy5jdXN0b21DdXJyZW5jeTtcbiAgICB9XG4gICAgb3B0aW9uc1Jlc3VsdCA9IGNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIob3B0aW9uc1Jlc3VsdCwgb3B0aW9uc1ZhbHVlc1R5cGVOdW1iZXIpO1xuICAgIHNldE9wdGlvbnNGb3JNb2R1bGUob3B0aW9uc1Jlc3VsdCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zLFxuICAgIG9wdGlvbnNGb3JNb2R1bGUsXG4gICAgb3B0aW9uc0RpZmZlcmVuY2VzLFxuICAgIHVwZGF0ZU9wdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTW9kdWxlT3B0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=