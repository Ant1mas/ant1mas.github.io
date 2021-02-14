webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZU1vZHVsZU9wdGlvbnMudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRPcHRpb25zIiwiXyIsIm1lcmdlIiwiY2xvbmVEZWVwIiwiREVGQVVMVF9NT0RVTEVfT1BUSU9OUyIsImN1c3RvbUN1cnJlbmN5IiwiREVGQVVMVF9DVVJSRU5DWV9PQkpFQ1QiLCJvcHRpb25zVmFsdWVzVHlwZU51bWJlciIsIm9wdGlvbnNOYW1lc01hcCIsInVzZU1vZHVsZU9wdGlvbnMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJvcHRpb25zRm9yTW9kdWxlIiwic2V0T3B0aW9uc0Zvck1vZHVsZSIsIm9wdGlvbnNEaWZmZXJlbmNlcyIsIm9iamVjdHNEaWZmIiwidXNlRWZmZWN0Iiwic2F2ZU9wdGlvbnNGb3JNb2R1bGUiLCJ1cGRhdGVPcHRpb25zIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRWYWx1ZSIsInBhdGgiLCJnZXRPcHRpb25QYXRoIiwidXBkYXRlT3B0aW9uVmFsdWVCeVBhdGgiLCJ0eXBlIiwiY2hlY2tWYWx1ZVJhbmdlIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJtaW4iLCJOdW1iZXIiLCJtYXgiLCJ1bmRlZmluZWQiLCJjb252ZXJ0VmFsdWVzVG9UeXBlTnVtYmVyIiwib2JqZWN0IiwidmFsdWVzUGF0aHMiLCJyZXN1bHRPYmplY3QiLCJzb21lIiwidmFsdWVCeVBhdGgiLCJnZXQiLCJzZXQiLCJuZXdWYWx1ZSIsInVwZGF0ZWRPcHRpb25zIiwib3B0aW9uc1Jlc3VsdCIsImN1cnJlbmN5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBR0MsNkNBQUMsQ0FBQ0MsS0FBRixDQUFRRCw2Q0FBQyxDQUFDRSxTQUFGLENBQVlDLHNFQUFaLENBQVIsRUFBNkM7QUFDbEVDLGdCQUFjLEVBQUVKLDZDQUFDLENBQUNFLFNBQUYsQ0FBWUcsdUVBQVo7QUFEa0QsQ0FBN0MsQ0FBdkI7O0FBSUEsSUFBTUMsdUJBQXVCLEdBQUcsQ0FDOUIsYUFEOEIsRUFFOUIscUNBRjhCLEVBRzlCLDRDQUg4QixFQUk5QixrQ0FKOEIsQ0FBaEM7QUFPQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEIsY0FBWSxVQURVO0FBRXRCLDhCQUE0QixxQ0FGTjtBQUd0Qiw4QkFBNEIscUNBSE47QUFJdEIsOEJBQTRCLHFDQUpOO0FBS3RCLDREQUEwRCxzREFMcEM7QUFNdEIsMERBQXdELHNEQU5sQztBQU90QiwwREFBd0Qsb0RBUGxDO0FBUXRCLHdEQUFzRCxvREFSaEM7QUFTdEIsd0RBQXNELGtEQVRoQztBQVV0QixzREFBb0Qsa0RBVjlCO0FBV3RCLGlDQUErQiwyQ0FYVDtBQVl0QixpQ0FBK0IsMkNBWlQ7QUFhdEIsaUNBQStCLDJDQWJUO0FBY3RCLGtDQUFnQywyQ0FkVjtBQWV0QixxQ0FBbUMsa0RBZmI7QUFnQnRCLDJDQUF5Qyx3Q0FoQm5CO0FBaUJ0QixrQkFBZ0IsYUFqQk07QUFrQnRCLGdCQUFjLFlBbEJRO0FBbUJ0Qix3QkFBc0Isd0JBbkJBO0FBb0J0Qiw4QkFBNEIseUJBcEJOO0FBcUJ0QixpQ0FBK0IsNEJBckJUO0FBc0J0QixpQ0FBK0IsK0JBdEJUO0FBdUJ0QixvQ0FBa0Msa0NBdkJaO0FBd0J0QixnQ0FBOEIsc0JBeEJSO0FBeUJ0QixtQ0FBaUM7QUF6QlgsQ0FBeEI7QUE0Qk8sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQUEsd0JBQ05DLDRDQUFLLENBQUNDLFFBQU4sQ0FBZVgsY0FBZixDQURNO0FBQUE7QUFBQSxNQUM3QlksT0FENkI7QUFBQSxNQUNwQkMsVUFEb0I7O0FBQUEseUJBRVlILDRDQUFLLENBQUNDLFFBQU4sQ0FBZVAsc0VBQWYsQ0FGWjtBQUFBO0FBQUEsTUFFN0JVLGdCQUY2QjtBQUFBLE1BRVhDLG1CQUZXOztBQUdwQyxNQUFNQyxrQkFBa0IsR0FBR0MseUVBQVcsQ0FBQ2Isc0VBQUQsRUFBeUJVLGdCQUF6QixDQUF0QztBQUVBSiw4Q0FBSyxDQUFDUSxTQUFOLENBQWdCLFlBQU07QUFDcEJDLHdCQUFvQixDQUFDUCxPQUFELENBQXBCO0FBQ0QsR0FGRCxFQUVHLENBQUNBLE9BQUQsQ0FGSDs7QUFJQSxNQUFNUSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUMvQixRQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhRCxJQUExQjtBQUNBLFFBQU1FLEtBQUssR0FBR0MsUUFBUSxDQUFDSixLQUFLLENBQUNFLE1BQVAsQ0FBdEI7QUFDQSxRQUFNRyxJQUFJLEdBQUdDLGFBQWEsQ0FBQ0wsSUFBRCxDQUExQjtBQUNDSSxRQUFJLEtBQUssSUFBVixJQUFtQkUsdUJBQXVCLENBQUNGLElBQUQsRUFBT0YsS0FBUCxDQUExQztBQUNELEdBTEQ7O0FBT0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0YsTUFBRCxFQUFZO0FBQzNCLFFBQU1NLElBQUksR0FBR04sTUFBTSxDQUFDTSxJQUFwQjtBQUNBLFFBQUlMLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFuQjs7QUFDQSxRQUFJSyxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQkwsV0FBSyxHQUFHTSxlQUFlLENBQUNQLE1BQUQsQ0FBdkI7QUFDRCxLQUZELE1BRU8sSUFBSU0sSUFBSSxLQUFLLFVBQWIsRUFBeUI7QUFDOUJMLFdBQUssR0FBR08sT0FBTyxDQUFDUixNQUFNLENBQUNTLE9BQVIsQ0FBZjtBQUNEOztBQUNELFdBQU9SLEtBQVA7QUFDRCxHQVREOztBQVdBLE1BQU1NLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ1AsTUFBRCxFQUFZO0FBQ2xDLFFBQUlDLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFuQjs7QUFDQSxRQUFJQSxLQUFLLEtBQUssRUFBZCxFQUFrQjtBQUNoQixVQUFJRCxNQUFNLENBQUNVLEdBQVAsS0FBZSxFQUFuQixFQUF1QjtBQUNyQlQsYUFBSyxHQUFHVSxNQUFNLENBQUNWLEtBQUQsQ0FBTixJQUFpQlUsTUFBTSxDQUFDWCxNQUFNLENBQUNVLEdBQVIsQ0FBdkIsR0FBc0NULEtBQXRDLEdBQThDRCxNQUFNLENBQUNVLEdBQTdEO0FBQ0Q7O0FBQ0QsVUFBSVYsTUFBTSxDQUFDWSxHQUFQLEtBQWUsRUFBbkIsRUFBdUI7QUFDckJYLGFBQUssR0FBR1UsTUFBTSxDQUFDVixLQUFELENBQU4sSUFBaUJVLE1BQU0sQ0FBQ1gsTUFBTSxDQUFDVSxHQUFSLENBQXZCLEdBQXNDVCxLQUF0QyxHQUE4Q0QsTUFBTSxDQUFDVSxHQUE3RDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBT1QsS0FBUDtBQUNELEdBWEQ7O0FBYUEsTUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDTCxJQUFELEVBQVU7QUFDOUIsUUFBSWQsZUFBZSxDQUFDYyxJQUFELENBQWYsS0FBMEJjLFNBQTlCLEVBQXlDO0FBQ3ZDLGFBQU81QixlQUFlLENBQUNjLElBQUQsQ0FBdEI7QUFDRDs7QUFDRCxXQUFPLElBQVA7QUFDRCxHQUxEOztBQU9BLE1BQU1lLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQ0MsTUFBRCxFQUFTQyxXQUFULEVBQXlCO0FBQ3pELFFBQUlDLFlBQVksR0FBR3ZDLDZDQUFDLENBQUNFLFNBQUYsQ0FBWW1DLE1BQVosQ0FBbkI7O0FBQ0FDLGVBQVcsQ0FBQ0UsSUFBWixDQUFpQixVQUFDZixJQUFELEVBQVU7QUFDekIsVUFBTWdCLFdBQVcsR0FBR3pDLDZDQUFDLENBQUMwQyxHQUFGLENBQU1ILFlBQU4sRUFBb0JkLElBQXBCLENBQXBCOztBQUNBLFVBQUlnQixXQUFXLEtBQUtOLFNBQXBCLEVBQStCO0FBQzdCSSxvQkFBWSxHQUFHdkMsNkNBQUMsQ0FBQzJDLEdBQUYsQ0FBTUosWUFBTixFQUFvQmQsSUFBcEIsRUFBMEJRLE1BQU0sQ0FBQ1EsV0FBRCxDQUFoQyxDQUFmO0FBQ0Q7QUFDRixLQUxEO0FBTUEsV0FBT0YsWUFBUDtBQUNELEdBVEQ7O0FBV0EsTUFBTVosdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDRixJQUFELEVBQU9tQixRQUFQLEVBQW9CO0FBQ2xELFFBQUlDLGNBQWMsR0FBRzdDLDZDQUFDLENBQUNFLFNBQUYsQ0FBWVMsT0FBWixDQUFyQjs7QUFDQWtDLGtCQUFjLEdBQUc3Qyw2Q0FBQyxDQUFDMkMsR0FBRixDQUFNRSxjQUFOLEVBQXNCcEIsSUFBdEIsRUFBNEJtQixRQUE1QixDQUFqQjtBQUNBaEMsY0FBVSxDQUFDaUMsY0FBRCxDQUFWO0FBQ0QsR0FKRDs7QUFNQSxNQUFNM0Isb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDUCxPQUFELEVBQWE7QUFDeEMsUUFBSW1DLGFBQWEsR0FBRzlDLDZDQUFDLENBQUNFLFNBQUYsQ0FBWVMsT0FBWixDQUFwQjs7QUFDQSxXQUFPbUMsYUFBYSxDQUFDMUMsY0FBckI7O0FBQ0EsUUFBSU8sT0FBTyxDQUFDb0MsUUFBUixLQUFxQixRQUF6QixFQUFtQztBQUNqQ0QsbUJBQWEsQ0FBQ0MsUUFBZCxHQUF5QnBDLE9BQU8sQ0FBQ1AsY0FBakM7QUFDRDs7QUFDRDBDLGlCQUFhLEdBQUdWLHlCQUF5QixDQUFDVSxhQUFELEVBQWdCeEMsdUJBQWhCLENBQXpDO0FBQ0FRLHVCQUFtQixDQUFDZ0MsYUFBRCxDQUFuQjtBQUNELEdBUkQ7O0FBVUEsU0FBTztBQUNMbkMsV0FBTyxFQUFQQSxPQURLO0FBRUxFLG9CQUFnQixFQUFoQkEsZ0JBRks7QUFHTEUsc0JBQWtCLEVBQWxCQSxrQkFISztBQUlMSSxpQkFBYSxFQUFiQTtBQUpLLEdBQVA7QUFNRCxDQWhGTTs7R0FBTVgsZ0I7O0FBa0ZFQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNmY2NDMyMGM1NjE5NGIzYzhiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgb2JqZWN0c0RpZmYgZnJvbSAnbGliL2Z1bmN0aW9ucy9vYmplY3RzRGlmZidcbmltcG9ydCBERUZBVUxUX01PRFVMRV9PUFRJT05TIGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0TW9kdWxlT3B0aW9ucyc7XG5pbXBvcnQgREVGQVVMVF9DVVJSRU5DWV9PQkpFQ1QgZnJvbSAnY29uc3RhbnRzL2RlZmF1bHRDdXJyZW5jeU9iamVjdCc7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0gXy5tZXJnZShfLmNsb25lRGVlcChERUZBVUxUX01PRFVMRV9PUFRJT05TKSwge1xuICBjdXN0b21DdXJyZW5jeTogXy5jbG9uZURlZXAoREVGQVVMVF9DVVJSRU5DWV9PQkpFQ1QpLFxufSk7XG5cbmNvbnN0IG9wdGlvbnNWYWx1ZXNUeXBlTnVtYmVyID0gW1xuICAncm91bmROdW1iZXInLFxuICAnY3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmludGVnZXInLFxuICAnY3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmZyYWN0aW9uYWxQYXJ0JyxcbiAgJ2N1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyxcbl07XG5cbmNvbnN0IG9wdGlvbnNOYW1lc01hcCA9IHtcbiAgJ2N1cnJlbmN5JzogJ2N1cnJlbmN5JyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMSc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1swXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIzJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzJdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tbm9taW5hdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5ub21pbmF0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tbm9taW5hdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMubm9taW5hdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWdlbml0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmdlbml0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tZ2VuaXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmdlbml0aXZlWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tZGF0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmRhdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWRhdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuZGF0aXZlWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMSc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1swXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwzJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzJdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mb3JtLWludGVnZXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmludGVnZXInLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZvcm0tZnJhY3Rpb25hbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuZnJhY3Rpb25hbFBhcnQnLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtbWluLWxlbmd0aCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE1pbkxlbmd0aCcsXG4gICdyb3VuZC1udW1iZXInOiAncm91bmROdW1iZXInLFxuICAnZGVjbGVuc2lvbic6ICdkZWNsZW5zaW9uJyxcbiAgJ2NvbnZlcnQtbWludXMtc2lnbic6ICdjb252ZXJ0TWludXNTaWduVG9Xb3JkJyxcbiAgJ3Nob3ctbnVtYmVyLXBhcnQtaW50ZWdlcic6ICdzaG93TnVtYmVyUGFydHMuaW50ZWdlcicsXG4gICdzaG93LW51bWJlci1wYXJ0LWZyYWN0aW9uYWwnOiAnc2hvd051bWJlclBhcnRzLmZyYWN0aW9uYWwnLFxuICAnY29udmVydC1udW1iZXItcGFydC1pbnRlZ2VyJzogJ2NvbnZlcnROdW1iZXJ0VG9Xb3Jkcy5pbnRlZ2VyJyxcbiAgJ2NvbnZlcnQtbnVtYmVyLXBhcnQtZnJhY3Rpb25hbCc6ICdjb252ZXJ0TnVtYmVydFRvV29yZHMuZnJhY3Rpb25hbCcsXG4gICdzaG93LWN1cnJlbmN5LXBhcnQtaW50ZWdlcic6ICdzaG93Q3VycmVuY3kuaW50ZWdlcicsXG4gICdzaG93LWN1cnJlbmN5LXBhcnQtZnJhY3Rpb25hbCc6ICdzaG93Q3VycmVuY3kuZnJhY3Rpb25hbCcsXG59XG5cbmV4cG9ydCBjb25zdCB1c2VNb2R1bGVPcHRpb25zID0gKCkgPT4ge1xuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0T3B0aW9ucyk7XG4gIGNvbnN0IFtvcHRpb25zRm9yTW9kdWxlLCBzZXRPcHRpb25zRm9yTW9kdWxlXSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfTU9EVUxFX09QVElPTlMpO1xuICBjb25zdCBvcHRpb25zRGlmZmVyZW5jZXMgPSBvYmplY3RzRGlmZihERUZBVUxUX01PRFVMRV9PUFRJT05TLCBvcHRpb25zRm9yTW9kdWxlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNhdmVPcHRpb25zRm9yTW9kdWxlKG9wdGlvbnMpO1xuICB9LCBbb3B0aW9uc10pXG5cbiAgY29uc3QgdXBkYXRlT3B0aW9ucyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgcGF0aCA9IGdldE9wdGlvblBhdGgobmFtZSk7XG4gICAgKHBhdGggIT09IG51bGwpICYmIHVwZGF0ZU9wdGlvblZhbHVlQnlQYXRoKHBhdGgsIHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZSA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCB0eXBlID0gdGFyZ2V0LnR5cGU7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSBjaGVja1ZhbHVlUmFuZ2UodGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHZhbHVlID0gQm9vbGVhbih0YXJnZXQuY2hlY2tlZCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrVmFsdWVSYW5nZSA9ICh0YXJnZXQpID0+IHtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgaWYgKHRhcmdldC5taW4gIT09ICcnKSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSA+PSBOdW1iZXIodGFyZ2V0Lm1pbikgPyB2YWx1ZSA6IHRhcmdldC5taW47XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0Lm1heCAhPT0gJycpIHtcbiAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpIDw9IE51bWJlcih0YXJnZXQubWluKSA/IHZhbHVlIDogdGFyZ2V0Lm1pbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH07XG5cbiAgY29uc3QgZ2V0T3B0aW9uUGF0aCA9IChuYW1lKSA9PiB7XG4gICAgaWYgKG9wdGlvbnNOYW1lc01hcFtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc05hbWVzTWFwW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCBjb252ZXJ0VmFsdWVzVG9UeXBlTnVtYmVyID0gKG9iamVjdCwgdmFsdWVzUGF0aHMpID0+IHtcbiAgICBsZXQgcmVzdWx0T2JqZWN0ID0gXy5jbG9uZURlZXAob2JqZWN0KTtcbiAgICB2YWx1ZXNQYXRocy5zb21lKChwYXRoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZUJ5UGF0aCA9IF8uZ2V0KHJlc3VsdE9iamVjdCwgcGF0aCk7XG4gICAgICBpZiAodmFsdWVCeVBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHRPYmplY3QgPSBfLnNldChyZXN1bHRPYmplY3QsIHBhdGgsIE51bWJlcih2YWx1ZUJ5UGF0aCkpO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdE9iamVjdFxuICB9XG5cbiAgY29uc3QgdXBkYXRlT3B0aW9uVmFsdWVCeVBhdGggPSAocGF0aCwgbmV3VmFsdWUpID0+IHtcbiAgICBsZXQgdXBkYXRlZE9wdGlvbnMgPSBfLmNsb25lRGVlcChvcHRpb25zKTtcbiAgICB1cGRhdGVkT3B0aW9ucyA9IF8uc2V0KHVwZGF0ZWRPcHRpb25zLCBwYXRoLCBuZXdWYWx1ZSk7XG4gICAgc2V0T3B0aW9ucyh1cGRhdGVkT3B0aW9ucyk7XG4gIH07XG5cbiAgY29uc3Qgc2F2ZU9wdGlvbnNGb3JNb2R1bGUgPSAob3B0aW9ucykgPT4ge1xuICAgIGxldCBvcHRpb25zUmVzdWx0ID0gXy5jbG9uZURlZXAob3B0aW9ucyk7XG4gICAgZGVsZXRlIG9wdGlvbnNSZXN1bHQuY3VzdG9tQ3VycmVuY3k7XG4gICAgaWYgKG9wdGlvbnMuY3VycmVuY3kgPT09ICdjdXN0b20nKSB7XG4gICAgICBvcHRpb25zUmVzdWx0LmN1cnJlbmN5ID0gb3B0aW9ucy5jdXN0b21DdXJyZW5jeTtcbiAgICB9XG4gICAgb3B0aW9uc1Jlc3VsdCA9IGNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIob3B0aW9uc1Jlc3VsdCwgb3B0aW9uc1ZhbHVlc1R5cGVOdW1iZXIpO1xuICAgIHNldE9wdGlvbnNGb3JNb2R1bGUob3B0aW9uc1Jlc3VsdCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zLFxuICAgIG9wdGlvbnNGb3JNb2R1bGUsXG4gICAgb3B0aW9uc0RpZmZlcmVuY2VzLFxuICAgIHVwZGF0ZU9wdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTW9kdWxlT3B0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=