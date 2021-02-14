webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZU1vZHVsZU9wdGlvbnMudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRDdXJyZW5jeU9iamVjdCIsImN1cnJlbmN5TmFtZUNhc2VzIiwiY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMiLCJub21pbmF0aXZlIiwiZ2VuaXRpdmUiLCJkYXRpdmUiLCJhY2N1c2F0aXZlIiwiaW5zdHJ1bWVudGFsIiwicHJlcG9zaXRpb25hbCIsImZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzIiwiZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMiLCJjdXJyZW5jeU5vdW5HZW5kZXIiLCJpbnRlZ2VyIiwiZnJhY3Rpb25hbFBhcnQiLCJmcmFjdGlvbmFsUGFydE1pbkxlbmd0aCIsImRlZmF1bHRPcHRpb25zIiwiXyIsIm1lcmdlIiwiY2xvbmVEZWVwIiwiREVGQVVMVF9NT0RVTEVfT1BUSU9OUyIsImN1c3RvbUN1cnJlbmN5Iiwib3B0aW9uc1ZhbHVlc1R5cGVOdW1iZXIiLCJvcHRpb25zTmFtZXNNYXAiLCJ1c2VNb2R1bGVPcHRpb25zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwib3B0aW9uc0Zvck1vZHVsZSIsInNldE9wdGlvbnNGb3JNb2R1bGUiLCJvcHRpb25zRGlmZmVyZW5jZXMiLCJvYmplY3RzRGlmZiIsInVzZUVmZmVjdCIsInNhdmVPcHRpb25zRm9yTW9kdWxlIiwidXBkYXRlT3B0aW9ucyIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJwYXRoIiwiZ2V0T3B0aW9uUGF0aCIsInVwZGF0ZU9wdGlvblZhbHVlQnlQYXRoIiwidHlwZSIsImNoZWNrVmFsdWVSYW5nZSIsIkJvb2xlYW4iLCJjaGVja2VkIiwibWluIiwiTnVtYmVyIiwibWF4IiwidW5kZWZpbmVkIiwiY29udmVydFZhbHVlc1RvVHlwZU51bWJlciIsIm9iamVjdCIsInZhbHVlc1BhdGhzIiwicmVzdWx0T2JqZWN0Iiwic29tZSIsInZhbHVlQnlQYXRoIiwiZ2V0Iiwic2V0IiwibmV3VmFsdWUiLCJ1cGRhdGVkT3B0aW9ucyIsIm9wdGlvbnNSZXN1bHQiLCJjdXJyZW5jeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxxQkFBcUIsR0FBRztBQUNuQ0MsbUJBQWlCLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixRQUFuQixDQURnQjtBQUVuQ0MseUJBQXVCLEVBQUU7QUFDdkJDLGNBQVUsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBRFc7QUFFdkJDLFlBQVEsRUFBRSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBRmE7QUFHdkJDLFVBQU0sRUFBRSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSGU7QUFJdkJDLGNBQVUsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBSlc7QUFLdkJDLGdCQUFZLEVBQUUsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQUxTO0FBTXZCQyxpQkFBYSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVY7QUFOUSxHQUZVO0FBVW5DQyx5QkFBdUIsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFFBQXZCLENBVlU7QUFXbkNDLCtCQUE2QixFQUFFO0FBQzdCUCxjQUFVLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWixDQURpQjtBQUU3QkMsWUFBUSxFQUFFLENBQUMsU0FBRCxFQUFZLFFBQVosQ0FGbUI7QUFHN0JDLFVBQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxVQUFaLENBSHFCO0FBSTdCQyxjQUFVLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWixDQUppQjtBQUs3QkMsZ0JBQVksRUFBRSxDQUFDLFVBQUQsRUFBYSxXQUFiLENBTGU7QUFNN0JDLGlCQUFhLEVBQUUsQ0FBQyxTQUFELEVBQVksVUFBWjtBQU5jLEdBWEk7QUFtQm5DRyxvQkFBa0IsRUFBRTtBQUNsQkMsV0FBTyxFQUFFLENBRFM7QUFF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Q0Q7QUFDRixLQUxEO0FBTUEsV0FBT0YsWUFBUDtBQUNELEdBVEQ7O0FBV0EsTUFBTVosdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDRixJQUFELEVBQU9tQixRQUFQLEVBQW9CO0FBQ2xELFFBQUlDLGNBQWMsR0FBRzVDLDZDQUFDLENBQUNFLFNBQUYsQ0FBWVEsT0FBWixDQUFyQjs7QUFDQWtDLGtCQUFjLEdBQUc1Qyw2Q0FBQyxDQUFDMEMsR0FBRixDQUFNRSxjQUFOLEVBQXNCcEIsSUFBdEIsRUFBNEJtQixRQUE1QixDQUFqQjtBQUNBaEMsY0FBVSxDQUFDaUMsY0FBRCxDQUFWO0FBQ0QsR0FKRDs7QUFNQSxNQUFNM0Isb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDUCxPQUFELEVBQWE7QUFDeEMsUUFBSW1DLGFBQWEsR0FBRzdDLDZDQUFDLENBQUNFLFNBQUYsQ0FBWVEsT0FBWixDQUFwQjs7QUFDQSxXQUFPbUMsYUFBYSxDQUFDekMsY0FBckI7O0FBQ0EsUUFBSU0sT0FBTyxDQUFDb0MsUUFBUixLQUFxQixRQUF6QixFQUFtQztBQUNqQ0QsbUJBQWEsQ0FBQ0MsUUFBZCxHQUF5QnBDLE9BQU8sQ0FBQ04sY0FBakM7QUFDRDs7QUFDRHlDLGlCQUFhLEdBQUdWLHlCQUF5QixDQUFDVSxhQUFELEVBQWdCeEMsdUJBQWhCLENBQXpDO0FBQ0FRLHVCQUFtQixDQUFDZ0MsYUFBRCxDQUFuQjtBQUNELEdBUkQ7O0FBVUEsU0FBTztBQUNMbkMsV0FBTyxFQUFQQSxPQURLO0FBRUxFLG9CQUFnQixFQUFoQkEsZ0JBRks7QUFHTEUsc0JBQWtCLEVBQWxCQSxrQkFISztBQUlMSSxpQkFBYSxFQUFiQTtBQUpLLEdBQVA7QUFNRCxDQWhGTTs7R0FBTVgsZ0I7O0FBa0ZFQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lN2QyNzA3YjVlMjE0MWIzMzk2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgb2JqZWN0c0RpZmYgZnJvbSAnbGliL2Z1bmN0aW9ucy9vYmplY3RzRGlmZidcbmltcG9ydCBERUZBVUxUX01PRFVMRV9PUFRJT05TIGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0TW9kdWxlT3B0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Q3VycmVuY3lPYmplY3QgPSB7XG4gIGN1cnJlbmN5TmFtZUNhc2VzOiBbJ9GA0YPQsdC70YwnLCAn0YDRg9Cx0LvRjycsICfRgNGD0LHQu9C10LknXSxcbiAgY3VycmVuY3lOYW1lRGVjbGVuc2lvbnM6IHtcbiAgICBub21pbmF0aXZlOiBbJ9GA0YPQsdC70YwnLCAn0YDRg9Cx0LvQuCddLFxuICAgIGdlbml0aXZlOiBbJ9GA0YPQsdC70Y8nLCAn0YDRg9Cx0LvQtdC5J10sXG4gICAgZGF0aXZlOiBbJ9GA0YPQsdC70Y4nLCAn0YDRg9Cx0LvRj9C8J10sXG4gICAgYWNjdXNhdGl2ZTogWyfRgNGD0LHQu9GMJywgJ9GA0YPQsdC70LgnXSxcbiAgICBpbnN0cnVtZW50YWw6IFsn0YDRg9Cx0LvRkdC8JywgJ9GA0YPQsdC70Y/QvNC4J10sXG4gICAgcHJlcG9zaXRpb25hbDogWyfRgNGD0LHQu9C1JywgJ9GA0YPQsdC70Y/RhSddLFxuICB9LFxuICBmcmFjdGlvbmFsUGFydE5hbWVDYXNlczogWyfQutC+0L/QtdC50LrQsCcsICfQutC+0L/QtdC50LrQuCcsICfQutC+0L/QtdC10LonXSxcbiAgZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnM6IHtcbiAgICBub21pbmF0aXZlOiBbJ9C60L7Qv9C10LnQutCwJywgJ9C60L7Qv9C10LnQutC4J10sXG4gICAgZ2VuaXRpdmU6IFsn0LrQvtC/0LXQudC60LgnLCAn0LrQvtC/0LXQtdC6J10sXG4gICAgZGF0aXZlOiBbJ9C60L7Qv9C10LnQutC1JywgJ9C60L7Qv9C10LnQutCw0LwnXSxcbiAgICBhY2N1c2F0aXZlOiBbJ9C60L7Qv9C10LnQutGDJywgJ9C60L7Qv9C10LnQutC4J10sXG4gICAgaW5zdHJ1bWVudGFsOiBbJ9C60L7Qv9C10LnQutC+0LknLCAn0LrQvtC/0LXQudC60LDQvNC4J10sXG4gICAgcHJlcG9zaXRpb25hbDogWyfQutC+0L/QtdC50LrQtScsICfQutC+0L/QtdC50LrQsNGFJ10sXG4gIH0sXG4gIGN1cnJlbmN5Tm91bkdlbmRlcjoge1xuICAgIGludGVnZXI6IDAsXG4gICAgZnJhY3Rpb25hbFBhcnQ6IDEsXG4gIH0sXG4gIGZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoOiAyLFxufTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBfLm1lcmdlKF8uY2xvbmVEZWVwKERFRkFVTFRfTU9EVUxFX09QVElPTlMpLCB7XG4gIGN1c3RvbUN1cnJlbmN5OiBfLmNsb25lRGVlcChkZWZhdWx0Q3VycmVuY3lPYmplY3QpLFxufSk7XG5cbmNvbnN0IG9wdGlvbnNWYWx1ZXNUeXBlTnVtYmVyID0gW1xuICAncm91bmROdW1iZXInLFxuICAnY3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmludGVnZXInLFxuICAnY3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmZyYWN0aW9uYWxQYXJ0JyxcbiAgJ2N1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyxcbl07XG5cbmNvbnN0IG9wdGlvbnNOYW1lc01hcCA9IHtcbiAgJ2N1cnJlbmN5JzogJ2N1cnJlbmN5JyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMSc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1swXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIzJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzJdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMSc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1swXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwzJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzJdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mb3JtLWludGVnZXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmludGVnZXInLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZvcm0tZnJhY3Rpb25hbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuZnJhY3Rpb25hbFBhcnQnLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtbWluLWxlbmd0aCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE1pbkxlbmd0aCcsXG4gICdyb3VuZC1udW1iZXInOiAncm91bmROdW1iZXInLFxuICAnZGVjbGVuc2lvbic6ICdkZWNsZW5zaW9uJyxcbiAgJ2NvbnZlcnQtbWludXMtc2lnbic6ICdjb252ZXJ0TWludXNTaWduVG9Xb3JkJyxcbiAgJ3Nob3ctbnVtYmVyLXBhcnQtaW50ZWdlcic6ICdzaG93TnVtYmVyUGFydHMuaW50ZWdlcicsXG4gICdzaG93LW51bWJlci1wYXJ0LWZyYWN0aW9uYWwnOiAnc2hvd051bWJlclBhcnRzLmZyYWN0aW9uYWwnLFxuICAnY29udmVydC1udW1iZXItcGFydC1pbnRlZ2VyJzogJ2NvbnZlcnROdW1iZXJ0VG9Xb3Jkcy5pbnRlZ2VyJyxcbiAgJ2NvbnZlcnQtbnVtYmVyLXBhcnQtZnJhY3Rpb25hbCc6ICdjb252ZXJ0TnVtYmVydFRvV29yZHMuZnJhY3Rpb25hbCcsXG4gICdzaG93LWN1cnJlbmN5LXBhcnQtaW50ZWdlcic6ICdzaG93Q3VycmVuY3kuaW50ZWdlcicsXG4gICdzaG93LWN1cnJlbmN5LXBhcnQtZnJhY3Rpb25hbCc6ICdzaG93Q3VycmVuY3kuZnJhY3Rpb25hbCcsXG59XG5cbmV4cG9ydCBjb25zdCB1c2VNb2R1bGVPcHRpb25zID0gKCkgPT4ge1xuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0T3B0aW9ucyk7XG4gIGNvbnN0IFtvcHRpb25zRm9yTW9kdWxlLCBzZXRPcHRpb25zRm9yTW9kdWxlXSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfTU9EVUxFX09QVElPTlMpO1xuICBjb25zdCBvcHRpb25zRGlmZmVyZW5jZXMgPSBvYmplY3RzRGlmZihERUZBVUxUX01PRFVMRV9PUFRJT05TLCBvcHRpb25zRm9yTW9kdWxlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNhdmVPcHRpb25zRm9yTW9kdWxlKG9wdGlvbnMpO1xuICB9LCBbb3B0aW9uc10pXG5cbiAgY29uc3QgdXBkYXRlT3B0aW9ucyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgcGF0aCA9IGdldE9wdGlvblBhdGgobmFtZSk7XG4gICAgKHBhdGggIT09IG51bGwpICYmIHVwZGF0ZU9wdGlvblZhbHVlQnlQYXRoKHBhdGgsIHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZSA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCB0eXBlID0gdGFyZ2V0LnR5cGU7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSBjaGVja1ZhbHVlUmFuZ2UodGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHZhbHVlID0gQm9vbGVhbih0YXJnZXQuY2hlY2tlZCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrVmFsdWVSYW5nZSA9ICh0YXJnZXQpID0+IHtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgaWYgKHRhcmdldC5taW4gIT09ICcnKSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSA+PSBOdW1iZXIodGFyZ2V0Lm1pbikgPyB2YWx1ZSA6IHRhcmdldC5taW47XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0Lm1heCAhPT0gJycpIHtcbiAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpIDw9IE51bWJlcih0YXJnZXQubWluKSA/IHZhbHVlIDogdGFyZ2V0Lm1pbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH07XG5cbiAgY29uc3QgZ2V0T3B0aW9uUGF0aCA9IChuYW1lKSA9PiB7XG4gICAgaWYgKG9wdGlvbnNOYW1lc01hcFtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc05hbWVzTWFwW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCBjb252ZXJ0VmFsdWVzVG9UeXBlTnVtYmVyID0gKG9iamVjdCwgdmFsdWVzUGF0aHMpID0+IHtcbiAgICBsZXQgcmVzdWx0T2JqZWN0ID0gXy5jbG9uZURlZXAob2JqZWN0KTtcbiAgICB2YWx1ZXNQYXRocy5zb21lKChwYXRoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZUJ5UGF0aCA9IF8uZ2V0KHJlc3VsdE9iamVjdCwgcGF0aCk7XG4gICAgICBpZiAodmFsdWVCeVBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHRPYmplY3QgPSBfLnNldChyZXN1bHRPYmplY3QsIHBhdGgsIE51bWJlcih2YWx1ZUJ5UGF0aCkpO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdE9iamVjdFxuICB9XG5cbiAgY29uc3QgdXBkYXRlT3B0aW9uVmFsdWVCeVBhdGggPSAocGF0aCwgbmV3VmFsdWUpID0+IHtcbiAgICBsZXQgdXBkYXRlZE9wdGlvbnMgPSBfLmNsb25lRGVlcChvcHRpb25zKTtcbiAgICB1cGRhdGVkT3B0aW9ucyA9IF8uc2V0KHVwZGF0ZWRPcHRpb25zLCBwYXRoLCBuZXdWYWx1ZSk7XG4gICAgc2V0T3B0aW9ucyh1cGRhdGVkT3B0aW9ucyk7XG4gIH07XG5cbiAgY29uc3Qgc2F2ZU9wdGlvbnNGb3JNb2R1bGUgPSAob3B0aW9ucykgPT4ge1xuICAgIGxldCBvcHRpb25zUmVzdWx0ID0gXy5jbG9uZURlZXAob3B0aW9ucyk7XG4gICAgZGVsZXRlIG9wdGlvbnNSZXN1bHQuY3VzdG9tQ3VycmVuY3k7XG4gICAgaWYgKG9wdGlvbnMuY3VycmVuY3kgPT09ICdjdXN0b20nKSB7XG4gICAgICBvcHRpb25zUmVzdWx0LmN1cnJlbmN5ID0gb3B0aW9ucy5jdXN0b21DdXJyZW5jeTtcbiAgICB9XG4gICAgb3B0aW9uc1Jlc3VsdCA9IGNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIob3B0aW9uc1Jlc3VsdCwgb3B0aW9uc1ZhbHVlc1R5cGVOdW1iZXIpO1xuICAgIHNldE9wdGlvbnNGb3JNb2R1bGUob3B0aW9uc1Jlc3VsdCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zLFxuICAgIG9wdGlvbnNGb3JNb2R1bGUsXG4gICAgb3B0aW9uc0RpZmZlcmVuY2VzLFxuICAgIHVwZGF0ZU9wdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTW9kdWxlT3B0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=