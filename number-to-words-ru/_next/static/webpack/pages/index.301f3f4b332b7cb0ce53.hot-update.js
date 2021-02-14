webpackHotUpdate_N_E("pages/index",{

/***/ "./constants/optionsNamesMap.ts":
/*!**************************************!*\
  !*** ./constants/optionsNamesMap.ts ***!
  \**************************************/
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

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
/* harmony import */ var constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/defaultModuleOptions */ "./constants/defaultModuleOptions.ts");
/* harmony import */ var constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constants/defaultCurrencyObject */ "./constants/defaultCurrencyObject.ts");
/* harmony import */ var constants_optionsNamesMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! constants/optionsNamesMap */ "./constants/optionsNamesMap.ts");


var _s = $RefreshSig$();








var defaultOptions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.merge(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_4__["default"]), {
  customCurrency: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_5__["default"])
});

var optionsValuesTypeNumber = ['roundNumber', 'currency.currencyNounGender.integer', 'currency.currencyNounGender.fractionalPart', 'currency.fractionalPartMinLength'];
var optionsNamesMap = {
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
    if (constants_optionsNamesMap__WEBPACK_IMPORTED_MODULE_6__["default"][name] !== undefined) {
      return constants_optionsNamesMap__WEBPACK_IMPORTED_MODULE_6__["default"][name];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL29wdGlvbnNOYW1lc01hcC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZU1vZHVsZU9wdGlvbnMudHN4Il0sIm5hbWVzIjpbIk9QVElPTlNfTkFNRVNfTUFQIiwiZGVmYXVsdE9wdGlvbnMiLCJfIiwibWVyZ2UiLCJjbG9uZURlZXAiLCJERUZBVUxUX01PRFVMRV9PUFRJT05TIiwiY3VzdG9tQ3VycmVuY3kiLCJERUZBVUxUX0NVUlJFTkNZX09CSkVDVCIsIm9wdGlvbnNWYWx1ZXNUeXBlTnVtYmVyIiwib3B0aW9uc05hbWVzTWFwIiwidXNlTW9kdWxlT3B0aW9ucyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsIm9wdGlvbnNGb3JNb2R1bGUiLCJzZXRPcHRpb25zRm9yTW9kdWxlIiwib3B0aW9uc0RpZmZlcmVuY2VzIiwib2JqZWN0c0RpZmYiLCJ1c2VFZmZlY3QiLCJzYXZlT3B0aW9uc0Zvck1vZHVsZSIsInVwZGF0ZU9wdGlvbnMiLCJldmVudCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldFZhbHVlIiwicGF0aCIsImdldE9wdGlvblBhdGgiLCJ1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCIsInR5cGUiLCJjaGVja1ZhbHVlUmFuZ2UiLCJCb29sZWFuIiwiY2hlY2tlZCIsIm1pbiIsIk51bWJlciIsIm1heCIsInVuZGVmaW5lZCIsImNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIiLCJvYmplY3QiLCJ2YWx1ZXNQYXRocyIsInJlc3VsdE9iamVjdCIsInNvbWUiLCJ2YWx1ZUJ5UGF0aCIsImdldCIsInNldCIsIm5ld1ZhbHVlIiwidXBkYXRlZE9wdGlvbnMiLCJvcHRpb25zUmVzdWx0IiwiY3VycmVuY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sSUFBTUEsaUJBQWlCLEdBQUc7QUFDL0IsY0FBWSxVQURtQjtBQUUvQiw4QkFB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QUFDUCxPQUFELEVBQWE7QUFDeEMsUUFBSW1DLGFBQWEsR0FBRzlDLDZDQUFDLENBQUNFLFNBQUYsQ0FBWVMsT0FBWixDQUFwQjs7QUFDQSxXQUFPbUMsYUFBYSxDQUFDMUMsY0FBckI7O0FBQ0EsUUFBSU8sT0FBTyxDQUFDb0MsUUFBUixLQUFxQixRQUF6QixFQUFtQztBQUNqQ0QsbUJBQWEsQ0FBQ0MsUUFBZCxHQUF5QnBDLE9BQU8sQ0FBQ1AsY0FBakM7QUFDRDs7QUFDRDBDLGlCQUFhLEdBQUdWLHlCQUF5QixDQUFDVSxhQUFELEVBQWdCeEMsdUJBQWhCLENBQXpDO0FBQ0FRLHVCQUFtQixDQUFDZ0MsYUFBRCxDQUFuQjtBQUNELEdBUkQ7O0FBVUEsU0FBTztBQUNMbkMsV0FBTyxFQUFQQSxPQURLO0FBRUxFLG9CQUFnQixFQUFoQkEsZ0JBRks7QUFHTEUsc0JBQWtCLEVBQWxCQSxrQkFISztBQUlMSSxpQkFBYSxFQUFiQTtBQUpLLEdBQVA7QUFNRCxDQWhGTTs7R0FBTVgsZ0I7O0FBa0ZFQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMDFmM2Y0YjMzMmI3Y2IwY2U1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE9QVElPTlNfTkFNRVNfTUFQID0ge1xuICAnY3VycmVuY3knOiAnY3VycmVuY3knLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIxJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1sxXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjMnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMl0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1ub21pbmF0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLm5vbWluYXRpdmVbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1ub21pbmF0aXZlLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5ub21pbmF0aXZlWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tZ2VuaXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuZ2VuaXRpdmVbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1nZW5pdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuZ2VuaXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1kYXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuZGF0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tZGF0aXZlLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5kYXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1hY2N1c2F0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmFjY3VzYXRpdmVbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1hY2N1c2F0aXZlLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5hY2N1c2F0aXZlWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24taW5zdHJ1bWVudGFsLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmluc3RydW1lbnRhbFswXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWluc3RydW1lbnRhbC1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuaW5zdHJ1bWVudGFsWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tcHJlcG9zaXRpb25hbC1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5wcmVwb3NpdGlvbmFsWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tcHJlcG9zaXRpb25hbC1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMucHJlcG9zaXRpb25hbFsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDEnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwyJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMyc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1syXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLW5vbWluYXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMubm9taW5hdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLW5vbWluYXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLm5vbWluYXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1nZW5pdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5nZW5pdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWdlbml0aXZlLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5nZW5pdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWRhdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5kYXRpdmVbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1kYXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmRhdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWFjY3VzYXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMuYWNjdXNhdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWFjY3VzYXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmFjY3VzYXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1pbnN0cnVtZW50YWwtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMuaW5zdHJ1bWVudGFsWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24taW5zdHJ1bWVudGFsLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5pbnN0cnVtZW50YWxbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1wcmVwb3NpdGlvbmFsLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLnByZXBvc2l0aW9uYWxbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1wcmVwb3NpdGlvbmFsLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5wcmVwb3NpdGlvbmFsWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mb3JtLWludGVnZXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmludGVnZXInLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZvcm0tZnJhY3Rpb25hbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuZnJhY3Rpb25hbFBhcnQnLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtbWluLWxlbmd0aCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE1pbkxlbmd0aCcsXG4gICdyb3VuZC1udW1iZXInOiAncm91bmROdW1iZXInLFxuICAnZGVjbGVuc2lvbic6ICdkZWNsZW5zaW9uJyxcbiAgJ2NvbnZlcnQtbWludXMtc2lnbic6ICdjb252ZXJ0TWludXNTaWduVG9Xb3JkJyxcbiAgJ3Nob3ctbnVtYmVyLXBhcnQtaW50ZWdlcic6ICdzaG93TnVtYmVyUGFydHMuaW50ZWdlcicsXG4gICdzaG93LW51bWJlci1wYXJ0LWZyYWN0aW9uYWwnOiAnc2hvd051bWJlclBhcnRzLmZyYWN0aW9uYWwnLFxuICAnY29udmVydC1udW1iZXItcGFydC1pbnRlZ2VyJzogJ2NvbnZlcnROdW1iZXJ0VG9Xb3Jkcy5pbnRlZ2VyJyxcbiAgJ2NvbnZlcnQtbnVtYmVyLXBhcnQtZnJhY3Rpb25hbCc6ICdjb252ZXJ0TnVtYmVydFRvV29yZHMuZnJhY3Rpb25hbCcsXG4gICdzaG93LWN1cnJlbmN5LXBhcnQtaW50ZWdlcic6ICdzaG93Q3VycmVuY3kuaW50ZWdlcicsXG4gICdzaG93LWN1cnJlbmN5LXBhcnQtZnJhY3Rpb25hbCc6ICdzaG93Q3VycmVuY3kuZnJhY3Rpb25hbCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9QVElPTlNfTkFNRVNfTUFQO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgb2JqZWN0c0RpZmYgZnJvbSAnbGliL2Z1bmN0aW9ucy9vYmplY3RzRGlmZidcbmltcG9ydCBERUZBVUxUX01PRFVMRV9PUFRJT05TIGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0TW9kdWxlT3B0aW9ucyc7XG5pbXBvcnQgREVGQVVMVF9DVVJSRU5DWV9PQkpFQ1QgZnJvbSAnY29uc3RhbnRzL2RlZmF1bHRDdXJyZW5jeU9iamVjdCc7XG5pbXBvcnQgT1BUSU9OU19OQU1FU19NQVAgZnJvbSAnY29uc3RhbnRzL29wdGlvbnNOYW1lc01hcCc7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0gXy5tZXJnZShfLmNsb25lRGVlcChERUZBVUxUX01PRFVMRV9PUFRJT05TKSwge1xuICBjdXN0b21DdXJyZW5jeTogXy5jbG9uZURlZXAoREVGQVVMVF9DVVJSRU5DWV9PQkpFQ1QpLFxufSk7XG5cbmNvbnN0IG9wdGlvbnNWYWx1ZXNUeXBlTnVtYmVyID0gW1xuICAncm91bmROdW1iZXInLFxuICAnY3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmludGVnZXInLFxuICAnY3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmZyYWN0aW9uYWxQYXJ0JyxcbiAgJ2N1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyxcbl07XG5cbmNvbnN0IG9wdGlvbnNOYW1lc01hcCA9IHtcbiAgJ2N1cnJlbmN5JzogJ2N1cnJlbmN5JyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMSc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1swXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIzJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzJdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tbm9taW5hdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5ub21pbmF0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tbm9taW5hdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMubm9taW5hdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWdlbml0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmdlbml0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tZ2VuaXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmdlbml0aXZlWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tZGF0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmRhdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWRhdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuZGF0aXZlWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tYWNjdXNhdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5hY2N1c2F0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tYWNjdXNhdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuYWNjdXNhdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWluc3RydW1lbnRhbC1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5pbnN0cnVtZW50YWxbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1pbnN0cnVtZW50YWwtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmluc3RydW1lbnRhbFsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLXByZXBvc2l0aW9uYWwtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMucHJlcG9zaXRpb25hbFswXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLXByZXBvc2l0aW9uYWwtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLnByZXBvc2l0aW9uYWxbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwxJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1sxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDMnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMl0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1ub21pbmF0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLm5vbWluYXRpdmVbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1ub21pbmF0aXZlLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5ub21pbmF0aXZlWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tZ2VuaXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMuZ2VuaXRpdmVbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1nZW5pdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMuZ2VuaXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1kYXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMuZGF0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tZGF0aXZlLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5kYXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1hY2N1c2F0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmFjY3VzYXRpdmVbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1hY2N1c2F0aXZlLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5hY2N1c2F0aXZlWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24taW5zdHJ1bWVudGFsLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmluc3RydW1lbnRhbFswXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWluc3RydW1lbnRhbC1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMuaW5zdHJ1bWVudGFsWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tcHJlcG9zaXRpb25hbC1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5wcmVwb3NpdGlvbmFsWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tcHJlcG9zaXRpb25hbC1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMucHJlcG9zaXRpb25hbFsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZm9ybS1pbnRlZ2VyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5pbnRlZ2VyJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mb3JtLWZyYWN0aW9uYWwnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmZyYWN0aW9uYWxQYXJ0JyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLW1pbi1sZW5ndGgnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGgnLFxuICAncm91bmQtbnVtYmVyJzogJ3JvdW5kTnVtYmVyJyxcbiAgJ2RlY2xlbnNpb24nOiAnZGVjbGVuc2lvbicsXG4gICdjb252ZXJ0LW1pbnVzLXNpZ24nOiAnY29udmVydE1pbnVzU2lnblRvV29yZCcsXG4gICdzaG93LW51bWJlci1wYXJ0LWludGVnZXInOiAnc2hvd051bWJlclBhcnRzLmludGVnZXInLFxuICAnc2hvdy1udW1iZXItcGFydC1mcmFjdGlvbmFsJzogJ3Nob3dOdW1iZXJQYXJ0cy5mcmFjdGlvbmFsJyxcbiAgJ2NvbnZlcnQtbnVtYmVyLXBhcnQtaW50ZWdlcic6ICdjb252ZXJ0TnVtYmVydFRvV29yZHMuaW50ZWdlcicsXG4gICdjb252ZXJ0LW51bWJlci1wYXJ0LWZyYWN0aW9uYWwnOiAnY29udmVydE51bWJlcnRUb1dvcmRzLmZyYWN0aW9uYWwnLFxuICAnc2hvdy1jdXJyZW5jeS1wYXJ0LWludGVnZXInOiAnc2hvd0N1cnJlbmN5LmludGVnZXInLFxuICAnc2hvdy1jdXJyZW5jeS1wYXJ0LWZyYWN0aW9uYWwnOiAnc2hvd0N1cnJlbmN5LmZyYWN0aW9uYWwnLFxufVxuXG5leHBvcnQgY29uc3QgdXNlTW9kdWxlT3B0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdE9wdGlvbnMpO1xuICBjb25zdCBbb3B0aW9uc0Zvck1vZHVsZSwgc2V0T3B0aW9uc0Zvck1vZHVsZV0gPSBSZWFjdC51c2VTdGF0ZShERUZBVUxUX01PRFVMRV9PUFRJT05TKTtcbiAgY29uc3Qgb3B0aW9uc0RpZmZlcmVuY2VzID0gb2JqZWN0c0RpZmYoREVGQVVMVF9NT0RVTEVfT1BUSU9OUywgb3B0aW9uc0Zvck1vZHVsZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzYXZlT3B0aW9uc0Zvck1vZHVsZShvcHRpb25zKTtcbiAgfSwgW29wdGlvbnNdKVxuXG4gIGNvbnN0IHVwZGF0ZU9wdGlvbnMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShldmVudC50YXJnZXQpO1xuICAgIGNvbnN0IHBhdGggPSBnZXRPcHRpb25QYXRoKG5hbWUpO1xuICAgIChwYXRoICE9PSBudWxsKSAmJiB1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aChwYXRoLCB2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWUgPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHRhcmdldC50eXBlO1xuICAgIGxldCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gY2hlY2tWYWx1ZVJhbmdlKHRhcmdldCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICB2YWx1ZSA9IEJvb2xlYW4odGFyZ2V0LmNoZWNrZWQpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjb25zdCBjaGVja1ZhbHVlUmFuZ2UgPSAodGFyZ2V0KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgIGlmICh0YXJnZXQubWluICE9PSAnJykge1xuICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSkgPj0gTnVtYmVyKHRhcmdldC5taW4pID8gdmFsdWUgOiB0YXJnZXQubWluO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldC5tYXggIT09ICcnKSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSA8PSBOdW1iZXIodGFyZ2V0Lm1pbikgPyB2YWx1ZSA6IHRhcmdldC5taW47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9O1xuXG4gIGNvbnN0IGdldE9wdGlvblBhdGggPSAobmFtZSkgPT4ge1xuICAgIGlmIChPUFRJT05TX05BTUVTX01BUFtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gT1BUSU9OU19OQU1FU19NQVBbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IGNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIgPSAob2JqZWN0LCB2YWx1ZXNQYXRocykgPT4ge1xuICAgIGxldCByZXN1bHRPYmplY3QgPSBfLmNsb25lRGVlcChvYmplY3QpO1xuICAgIHZhbHVlc1BhdGhzLnNvbWUoKHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlQnlQYXRoID0gXy5nZXQocmVzdWx0T2JqZWN0LCBwYXRoKTtcbiAgICAgIGlmICh2YWx1ZUJ5UGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdE9iamVjdCA9IF8uc2V0KHJlc3VsdE9iamVjdCwgcGF0aCwgTnVtYmVyKHZhbHVlQnlQYXRoKSk7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0T2JqZWN0XG4gIH1cblxuICBjb25zdCB1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCA9IChwYXRoLCBuZXdWYWx1ZSkgPT4ge1xuICAgIGxldCB1cGRhdGVkT3B0aW9ucyA9IF8uY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgIHVwZGF0ZWRPcHRpb25zID0gXy5zZXQodXBkYXRlZE9wdGlvbnMsIHBhdGgsIG5ld1ZhbHVlKTtcbiAgICBzZXRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKTtcbiAgfTtcblxuICBjb25zdCBzYXZlT3B0aW9uc0Zvck1vZHVsZSA9IChvcHRpb25zKSA9PiB7XG4gICAgbGV0IG9wdGlvbnNSZXN1bHQgPSBfLmNsb25lRGVlcChvcHRpb25zKTtcbiAgICBkZWxldGUgb3B0aW9uc1Jlc3VsdC5jdXN0b21DdXJyZW5jeTtcbiAgICBpZiAob3B0aW9ucy5jdXJyZW5jeSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgIG9wdGlvbnNSZXN1bHQuY3VycmVuY3kgPSBvcHRpb25zLmN1c3RvbUN1cnJlbmN5O1xuICAgIH1cbiAgICBvcHRpb25zUmVzdWx0ID0gY29udmVydFZhbHVlc1RvVHlwZU51bWJlcihvcHRpb25zUmVzdWx0LCBvcHRpb25zVmFsdWVzVHlwZU51bWJlcik7XG4gICAgc2V0T3B0aW9uc0Zvck1vZHVsZShvcHRpb25zUmVzdWx0KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG9wdGlvbnMsXG4gICAgb3B0aW9uc0Zvck1vZHVsZSxcbiAgICBvcHRpb25zRGlmZmVyZW5jZXMsXG4gICAgdXBkYXRlT3B0aW9ucyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNb2R1bGVPcHRpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==