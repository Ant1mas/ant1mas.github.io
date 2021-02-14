webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/constants/optionsSyncedValuesMap.ts":
/*!*************************************************!*\
  !*** ./lib/constants/optionsSyncedValuesMap.ts ***!
  \*************************************************/
/*! exports provided: OPTIONS_SYNCED_VALUES_MAP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS_SYNCED_VALUES_MAP", function() { return OPTIONS_SYNCED_VALUES_MAP; });
var OPTIONS_SYNCED_VALUES_MAP = {
  'custom-currency-integer1': 'customCurrency.currencyNameDeclensions.nominative[0]',
  'custom-currency-integer2': 'customCurrency.currencyNameDeclensions.genitive[0]',
  'custom-currency-integer3': 'customCurrency.currencyNameDeclensions.genitive[1]',
  'custom-currency-integer-declension-nominative-singular': 'customCurrency.currencyNameCases[0]',
  'custom-currency-integer-declension-genitive-singular': 'customCurrency.currencyNameCases[1]',
  'custom-currency-integer-declension-genitive-plural': 'customCurrency.currencyNameCases[2]',
  'custom-currency-fractional1': 'customCurrency.fractionalPartNameDeclensions.nominative[0]',
  'custom-currency-fractional2': 'customCurrency.fractionalPartNameDeclensions.genitive[0]',
  'custom-currency-fractional3': 'customCurrency.fractionalPartNameDeclensions.genitive[1]',
  'custom-currency-fractional-declension-nominative-singular': 'customCurrency.fractionalPartNameCases[0]',
  'custom-currency-fractional-declension-genitive-singular': 'customCurrency.fractionalPartNameCases[1]',
  'custom-currency-fractional-declension-genitive-plural': 'customCurrency.fractionalPartNameCases[2]'
};
/* harmony default export */ __webpack_exports__["default"] = (OPTIONS_SYNCED_VALUES_MAP);

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
/* harmony import */ var lib_constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/constants/defaultModuleOptions */ "./lib/constants/defaultModuleOptions.ts");
/* harmony import */ var lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/constants/defaultCurrencyObject */ "./lib/constants/defaultCurrencyObject.ts");
/* harmony import */ var lib_constants_optionsNamesMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/constants/optionsNamesMap */ "./lib/constants/optionsNamesMap.ts");
/* harmony import */ var lib_constants_optionsValuesTypeNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/constants/optionsValuesTypeNumber */ "./lib/constants/optionsValuesTypeNumber.ts");
/* harmony import */ var lib_constants_optionsSyncedValuesMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/constants/optionsSyncedValuesMap */ "./lib/constants/optionsSyncedValuesMap.ts");


var _s = $RefreshSig$();










var defaultOptions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.merge(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(lib_constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_4__["default"]), {
  customCurrency: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_5__["default"])
});

var useModuleOptions = function useModuleOptions() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(defaultOptions),
      _React$useState2 = Object(C_OpenServer_domains_projects_local_react_projects_number_to_words_ru_app_number_to_words_ru_APP_NextJs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      options = _React$useState2[0],
      setOptions = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(lib_constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_4__["default"]),
      _React$useState4 = Object(C_OpenServer_domains_projects_local_react_projects_number_to_words_ru_app_number_to_words_ru_APP_NextJs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      optionsForModule = _React$useState4[0],
      setOptionsForModule = _React$useState4[1];

  var optionsDifferences = Object(lib_functions_objectsDiff__WEBPACK_IMPORTED_MODULE_3__["default"])(lib_constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_4__["default"], optionsForModule);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    saveOptionsForModule(options);
  }, [options]);

  var updateOptions = function updateOptions(event) {
    var name = event.target.name;
    var value = getValue(event.target);
    updateOptionValueByPath(name, value);
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

  var updateSyncedValues = function updateSyncedValues(name) {
    var path = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(lib_constants_optionsSyncedValuesMap__WEBPACK_IMPORTED_MODULE_8__["default"], [name]);

    if (false) {}
  };

  var updateOptionValueByPath = function updateOptionValueByPath(name, newValue) {
    var path = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(lib_constants_optionsNamesMap__WEBPACK_IMPORTED_MODULE_6__["default"], [name]);

    if (path !== undefined) {
      var updatedOptions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(options);

      updatedOptions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.set(updatedOptions, path, newValue);
      setOptions(updatedOptions);
    }
  };

  var saveOptionsForModule = function saveOptionsForModule(options) {
    var optionsResult = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(options);

    delete optionsResult.customCurrency;

    if (options.currency === 'custom') {
      optionsResult.currency = options.customCurrency;
    }

    optionsResult = convertValuesToTypeNumber(optionsResult, lib_constants_optionsValuesTypeNumber__WEBPACK_IMPORTED_MODULE_7__["default"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbnN0YW50cy9vcHRpb25zU3luY2VkVmFsdWVzTWFwLnRzIiwid2VicGFjazovL19OX0UvLi9saWIvaG9va3MvdXNlTW9kdWxlT3B0aW9ucy50c3giXSwibmFtZXMiOlsiT1BUSU9OU19TWU5DRURfVkFMVUVTX01BUCIsImRlZmF1bHRPcHRpb25zIiwiXyIsIm1lcmdlIiwiY2xvbmVEZWVwIiwiREVGQVVMVF9NT0RVTEVfT1BUSU9OUyIsImN1c3RvbUN1cnJlbmN5IiwiREVGQVVMVF9DVVJSRU5DWV9PQkpFQ1QiLCJ1c2VNb2R1bGVPcHRpb25zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwib3B0aW9uc0Zvck1vZHVsZSIsInNldE9wdGlvbnNGb3JNb2R1bGUiLCJvcHRpb25zRGlmZmVyZW5jZXMiLCJvYmplY3RzRGlmZiIsInVzZUVmZmVjdCIsInNhdmVPcHRpb25zRm9yTW9kdWxlIiwidXBkYXRlT3B0aW9ucyIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJ1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCIsInR5cGUiLCJjaGVja1ZhbHVlUmFuZ2UiLCJCb29sZWFuIiwiY2hlY2tlZCIsIm1pbiIsIk51bWJlciIsIm1heCIsImNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIiLCJvYmplY3QiLCJ2YWx1ZXNQYXRocyIsInJlc3VsdE9iamVjdCIsInNvbWUiLCJwYXRoIiwidmFsdWVCeVBhdGgiLCJnZXQiLCJ1bmRlZmluZWQiLCJzZXQiLCJ1cGRhdGVTeW5jZWRWYWx1ZXMiLCJuZXdWYWx1ZSIsIk9QVElPTlNfTkFNRVNfTUFQIiwidXBkYXRlZE9wdGlvbnMiLCJvcHRpb25zUmVzdWx0IiwiY3VycmVuY3kiLCJPUFRJT05TX1ZBTFVFU19UWVBFX05VTUJFUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTyxJQUFNQSx5QkFBeUIsR0FB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YixFQUF3QjtBQUN0QixVQUFJSyxjQUFjLEdBQUc1Qyw2Q0FBQyxDQUFDRSxTQUFGLENBQVlPLE9BQVosQ0FBckI7O0FBQ0FtQyxvQkFBYyxHQUFHNUMsNkNBQUMsQ0FBQ3dDLEdBQUYsQ0FBTUksY0FBTixFQUFzQlIsSUFBdEIsRUFBNEJNLFFBQTVCLENBQWpCO0FBQ0FoQyxnQkFBVSxDQUFDa0MsY0FBRCxDQUFWO0FBQ0Q7QUFDRixHQVBEOztBQVNBLE1BQU01QixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNQLE9BQUQsRUFBYTtBQUN4QyxRQUFJb0MsYUFBYSxHQUFHN0MsNkNBQUMsQ0FBQ0UsU0FBRixDQUFZTyxPQUFaLENBQXBCOztBQUNBLFdBQU9vQyxhQUFhLENBQUN6QyxjQUFyQjs7QUFDQSxRQUFJSyxPQUFPLENBQUNxQyxRQUFSLEtBQXFCLFFBQXpCLEVBQW1DO0FBQ2pDRCxtQkFBYSxDQUFDQyxRQUFkLEdBQXlCckMsT0FBTyxDQUFDTCxjQUFqQztBQUNEOztBQUNEeUMsaUJBQWEsR0FBR2QseUJBQXlCLENBQUNjLGFBQUQsRUFBZ0JFLDZFQUFoQixDQUF6QztBQUNBbkMsdUJBQW1CLENBQUNpQyxhQUFELENBQW5CO0FBQ0QsR0FSRDs7QUFVQSxTQUFPO0FBQ0xwQyxXQUFPLEVBQVBBLE9BREs7QUFFTEUsb0JBQWdCLEVBQWhCQSxnQkFGSztBQUdMRSxzQkFBa0IsRUFBbEJBLGtCQUhLO0FBSUxJLGlCQUFhLEVBQWJBO0FBSkssR0FBUDtBQU1ELENBbEZNOztHQUFNWCxnQjs7QUFvRkVBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI0MDFmZTg4NTNhZDQzNTJkMzg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgT1BUSU9OU19TWU5DRURfVkFMVUVTX01BUCA9IHtcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMSc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5ub21pbmF0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5nZW5pdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjMnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuZ2VuaXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1ub21pbmF0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tZ2VuaXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1nZW5pdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMl0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwxJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLm5vbWluYXRpdmVbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwyJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmdlbml0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMyc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5nZW5pdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLW5vbWluYXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1nZW5pdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1sxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWdlbml0aXZlLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1syXScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPUFRJT05TX1NZTkNFRF9WQUxVRVNfTUFQO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgb2JqZWN0c0RpZmYgZnJvbSAnbGliL2Z1bmN0aW9ucy9vYmplY3RzRGlmZidcbmltcG9ydCBERUZBVUxUX01PRFVMRV9PUFRJT05TIGZyb20gJ2xpYi9jb25zdGFudHMvZGVmYXVsdE1vZHVsZU9wdGlvbnMnO1xuaW1wb3J0IERFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUIGZyb20gJ2xpYi9jb25zdGFudHMvZGVmYXVsdEN1cnJlbmN5T2JqZWN0JztcbmltcG9ydCBPUFRJT05TX05BTUVTX01BUCBmcm9tICdsaWIvY29uc3RhbnRzL29wdGlvbnNOYW1lc01hcCc7XG5pbXBvcnQgT1BUSU9OU19WQUxVRVNfVFlQRV9OVU1CRVIgZnJvbSAnbGliL2NvbnN0YW50cy9vcHRpb25zVmFsdWVzVHlwZU51bWJlcic7XG5pbXBvcnQgT1BUSU9OU19TWU5DRURfVkFMVUVTX01BUCBmcm9tICdsaWIvY29uc3RhbnRzL29wdGlvbnNTeW5jZWRWYWx1ZXNNYXAnO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IF8ubWVyZ2UoXy5jbG9uZURlZXAoREVGQVVMVF9NT0RVTEVfT1BUSU9OUyksIHtcbiAgY3VzdG9tQ3VycmVuY3k6IF8uY2xvbmVEZWVwKERFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdXNlTW9kdWxlT3B0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdE9wdGlvbnMpO1xuICBjb25zdCBbb3B0aW9uc0Zvck1vZHVsZSwgc2V0T3B0aW9uc0Zvck1vZHVsZV0gPSBSZWFjdC51c2VTdGF0ZShERUZBVUxUX01PRFVMRV9PUFRJT05TKTtcbiAgY29uc3Qgb3B0aW9uc0RpZmZlcmVuY2VzID0gb2JqZWN0c0RpZmYoREVGQVVMVF9NT0RVTEVfT1BUSU9OUywgb3B0aW9uc0Zvck1vZHVsZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzYXZlT3B0aW9uc0Zvck1vZHVsZShvcHRpb25zKTtcbiAgfSwgW29wdGlvbnNdKVxuXG4gIGNvbnN0IHVwZGF0ZU9wdGlvbnMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShldmVudC50YXJnZXQpO1xuICAgIHVwZGF0ZU9wdGlvblZhbHVlQnlQYXRoKG5hbWUsIHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZSA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCB0eXBlID0gdGFyZ2V0LnR5cGU7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSBjaGVja1ZhbHVlUmFuZ2UodGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHZhbHVlID0gQm9vbGVhbih0YXJnZXQuY2hlY2tlZCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrVmFsdWVSYW5nZSA9ICh0YXJnZXQpID0+IHtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgaWYgKHRhcmdldC5taW4gIT09ICcnKSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSA+PSBOdW1iZXIodGFyZ2V0Lm1pbikgPyB2YWx1ZSA6IHRhcmdldC5taW47XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0Lm1heCAhPT0gJycpIHtcbiAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpIDw9IE51bWJlcih0YXJnZXQubWluKSA/IHZhbHVlIDogdGFyZ2V0Lm1pbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH07XG5cbiAgY29uc3QgY29udmVydFZhbHVlc1RvVHlwZU51bWJlciA9IChvYmplY3QsIHZhbHVlc1BhdGhzKSA9PiB7XG4gICAgbGV0IHJlc3VsdE9iamVjdCA9IF8uY2xvbmVEZWVwKG9iamVjdCk7XG4gICAgdmFsdWVzUGF0aHMuc29tZSgocGF0aCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWVCeVBhdGggPSBfLmdldChyZXN1bHRPYmplY3QsIHBhdGgpO1xuICAgICAgaWYgKHZhbHVlQnlQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0T2JqZWN0ID0gXy5zZXQocmVzdWx0T2JqZWN0LCBwYXRoLCBOdW1iZXIodmFsdWVCeVBhdGgpKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRPYmplY3RcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVN5bmNlZFZhbHVlcyA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IF8uZ2V0KE9QVElPTlNfU1lOQ0VEX1ZBTFVFU19NQVAsIFtuYW1lXSk7XG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCA9IChuYW1lLCBuZXdWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBfLmdldChPUFRJT05TX05BTUVTX01BUCwgW25hbWVdKTtcbiAgICBpZiAocGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgdXBkYXRlZE9wdGlvbnMgPSBfLmNsb25lRGVlcChvcHRpb25zKTtcbiAgICAgIHVwZGF0ZWRPcHRpb25zID0gXy5zZXQodXBkYXRlZE9wdGlvbnMsIHBhdGgsIG5ld1ZhbHVlKTtcbiAgICAgIHNldE9wdGlvbnModXBkYXRlZE9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzYXZlT3B0aW9uc0Zvck1vZHVsZSA9IChvcHRpb25zKSA9PiB7XG4gICAgbGV0IG9wdGlvbnNSZXN1bHQgPSBfLmNsb25lRGVlcChvcHRpb25zKTtcbiAgICBkZWxldGUgb3B0aW9uc1Jlc3VsdC5jdXN0b21DdXJyZW5jeTtcbiAgICBpZiAob3B0aW9ucy5jdXJyZW5jeSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgIG9wdGlvbnNSZXN1bHQuY3VycmVuY3kgPSBvcHRpb25zLmN1c3RvbUN1cnJlbmN5O1xuICAgIH1cbiAgICBvcHRpb25zUmVzdWx0ID0gY29udmVydFZhbHVlc1RvVHlwZU51bWJlcihvcHRpb25zUmVzdWx0LCBPUFRJT05TX1ZBTFVFU19UWVBFX05VTUJFUik7XG4gICAgc2V0T3B0aW9uc0Zvck1vZHVsZShvcHRpb25zUmVzdWx0KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG9wdGlvbnMsXG4gICAgb3B0aW9uc0Zvck1vZHVsZSxcbiAgICBvcHRpb25zRGlmZmVyZW5jZXMsXG4gICAgdXBkYXRlT3B0aW9ucyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNb2R1bGVPcHRpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==