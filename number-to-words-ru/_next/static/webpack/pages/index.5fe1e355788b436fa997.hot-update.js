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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_functions_objectsDiff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/functions/objectsDiff */ "./lib/functions/objectsDiff.ts");


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

var defaultOptions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.merge(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(defaultModuleOptions), {
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
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      options = _React$useState2[0],
      setOptions = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(defaultModuleOptions),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      optionsForModule = _React$useState4[0],
      setOptionsForModule = _React$useState4[1];

  var optionsDifferences = Object(lib_functions_objectsDiff__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultModuleOptions, optionsForModule);
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

_s(useModuleOptions, "eOCbmkI1e+18OGgFoKegYHCfQ8w=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZU1vZHVsZU9wdGlvbnMudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRDdXJyZW5jeU9iamVjdCIsImN1cnJlbmN5TmFtZUNhc2VzIiwiY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMiLCJub21pbmF0aXZlIiwiZ2VuaXRpdmUiLCJkYXRpdmUiLCJhY2N1c2F0aXZlIiwiaW5zdHJ1bWVudGFsIiwicHJlcG9zaXRpb25hbCIsImZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzIiwiZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMiLCJjdXJyZW5jeU5vdW5HZW5kZXIiLCJpbnRlZ2VyIiwiZnJhY3Rpb25hbFBhcnQiLCJmcmFjdGlvbmFsUGFydE1pbkxlbmd0aCIsImRlZmF1bHRNb2R1bGVPcHRpb25zIiwiY3VycmVuY3kiLCJkZWNsZW5zaW9uIiwicm91bmROdW1iZXIiLCJjb252ZXJ0TWludXNTaWduVG9Xb3JkIiwic2hvd051bWJlclBhcnRzIiwiZnJhY3Rpb25hbCIsImNvbnZlcnROdW1iZXJ0VG9Xb3JkcyIsInNob3dDdXJyZW5jeSIsImRlZmF1bHRPcHRpb25zIiwiXyIsIm1lcmdlIiwiY2xvbmVEZWVwIiwiY3VzdG9tQ3VycmVuY3kiLCJvcHRpb25zVmFsdWVzVHlwZU51bWJlciIsIm9wdGlvbnNOYW1lc01hcCIsInVzZU1vZHVsZU9wdGlvbnMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJvcHRpb25zRm9yTW9kdWxlIiwic2V0T3B0aW9uc0Zvck1vZHVsZSIsIm9wdGlvbnNEaWZmZXJlbmNlcyIsIm9iamVjdHNEaWZmIiwidXNlRWZmZWN0Iiwic2F2ZU9wdGlvbnNGb3JNb2R1bGUiLCJ1cGRhdGVPcHRpb25zIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRWYWx1ZSIsInBhdGgiLCJnZXRPcHRpb25QYXRoIiwidXBkYXRlT3B0aW9uVmFsdWVCeVBhdGgiLCJ0eXBlIiwiY2hlY2tWYWx1ZVJhbmdlIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJtaW4iLCJOdW1iZXIiLCJtYXgiLCJ1bmRlZmluZWQiLCJjb252ZXJ0VmFsdWVzVG9UeXBlTnVtYmVyIiwib2JqZWN0IiwidmFsdWVzUGF0aHMiLCJyZXN1bHRPYmplY3QiLCJzb21lIiwidmFsdWVCeVBhdGgiLCJnZXQiLCJzZXQiLCJuZXdWYWx1ZSIsInVwZGF0ZWRPcHRpb25zIiwib3B0aW9uc1Jlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHFCQUFxQixHQUFHO0FBQzVCQyxtQkFBaUIsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFFBQW5CLENBRFM7QUFFNUJDLHlCQUF1QixFQUFFO0FBQ3ZCQyxjQUFVLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixDQURXO0FBRXZCQyxZQUFRLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixDQUZhO0FBR3ZCQyxVQUFNLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhlO0FBSXZCQyxjQUFVLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUpXO0FBS3ZCQyxnQkFBWSxFQUFFLENBQUMsUUFBRCxFQUFXLFNBQVgsQ0FMUztBQU12QkMsaUJBQWEsRUFBRSxDQUFDLE9BQUQsRUFBVSxRQUFWO0FBTlEsR0FGRztBQVU1QkMseUJBQXVCLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixRQUF2QixDQVZHO0FBVzVCQywrQkFBNkIsRUFBRTtBQUM3QlAsY0FBVSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FEaUI7QUFFN0JDLFlBQVEsRUFBRSxDQUFDLFNBQUQsRUFBWSxRQUFaLENBRm1CO0FBRzdCQyxVQUFNLEVBQUUsQ0FBQyxTQUFELEVBQVksVUFBWixDQUhxQjtBQUk3QkMsY0FBVSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FKaUI7QUFLN0JDLGdCQUFZLEVBQUUsQ0FBQyxV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S0FBcUIsUUFBekIsRUFBbUM7QUFDakNxRCxtQkFBYSxDQUFDckQsUUFBZCxHQUF5QmtCLE9BQU8sQ0FBQ04sY0FBakM7QUFDRDs7QUFDRHlDLGlCQUFhLEdBQUdWLHlCQUF5QixDQUFDVSxhQUFELEVBQWdCeEMsdUJBQWhCLENBQXpDO0FBQ0FRLHVCQUFtQixDQUFDZ0MsYUFBRCxDQUFuQjtBQUNELEdBUkQ7O0FBVUEsU0FBTztBQUNMbkMsV0FBTyxFQUFQQSxPQURLO0FBRUxFLG9CQUFnQixFQUFoQkEsZ0JBRks7QUFHTEUsc0JBQWtCLEVBQWxCQSxrQkFISztBQUlMSSxpQkFBYSxFQUFiQTtBQUpLLEdBQVA7QUFNRCxDQWhGTTs7R0FBTVgsZ0I7O0FBa0ZFQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZmUxZTM1NTc4OGI0MzZmYTk5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgb2JqZWN0c0RpZmYgZnJvbSAnbGliL2Z1bmN0aW9ucy9vYmplY3RzRGlmZidcblxuY29uc3QgZGVmYXVsdEN1cnJlbmN5T2JqZWN0ID0ge1xuICBjdXJyZW5jeU5hbWVDYXNlczogWyfRgNGD0LHQu9GMJywgJ9GA0YPQsdC70Y8nLCAn0YDRg9Cx0LvQtdC5J10sXG4gIGN1cnJlbmN5TmFtZURlY2xlbnNpb25zOiB7XG4gICAgbm9taW5hdGl2ZTogWyfRgNGD0LHQu9GMJywgJ9GA0YPQsdC70LgnXSxcbiAgICBnZW5pdGl2ZTogWyfRgNGD0LHQu9GPJywgJ9GA0YPQsdC70LXQuSddLFxuICAgIGRhdGl2ZTogWyfRgNGD0LHQu9GOJywgJ9GA0YPQsdC70Y/QvCddLFxuICAgIGFjY3VzYXRpdmU6IFsn0YDRg9Cx0LvRjCcsICfRgNGD0LHQu9C4J10sXG4gICAgaW5zdHJ1bWVudGFsOiBbJ9GA0YPQsdC70ZHQvCcsICfRgNGD0LHQu9GP0LzQuCddLFxuICAgIHByZXBvc2l0aW9uYWw6IFsn0YDRg9Cx0LvQtScsICfRgNGD0LHQu9GP0YUnXSxcbiAgfSxcbiAgZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXM6IFsn0LrQvtC/0LXQudC60LAnLCAn0LrQvtC/0LXQudC60LgnLCAn0LrQvtC/0LXQtdC6J10sXG4gIGZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zOiB7XG4gICAgbm9taW5hdGl2ZTogWyfQutC+0L/QtdC50LrQsCcsICfQutC+0L/QtdC50LrQuCddLFxuICAgIGdlbml0aXZlOiBbJ9C60L7Qv9C10LnQutC4JywgJ9C60L7Qv9C10LXQuiddLFxuICAgIGRhdGl2ZTogWyfQutC+0L/QtdC50LrQtScsICfQutC+0L/QtdC50LrQsNC8J10sXG4gICAgYWNjdXNhdGl2ZTogWyfQutC+0L/QtdC50LrRgycsICfQutC+0L/QtdC50LrQuCddLFxuICAgIGluc3RydW1lbnRhbDogWyfQutC+0L/QtdC50LrQvtC5JywgJ9C60L7Qv9C10LnQutCw0LzQuCddLFxuICAgIHByZXBvc2l0aW9uYWw6IFsn0LrQvtC/0LXQudC60LUnLCAn0LrQvtC/0LXQudC60LDRhSddLFxuICB9LFxuICBjdXJyZW5jeU5vdW5HZW5kZXI6IHtcbiAgICBpbnRlZ2VyOiAwLFxuICAgIGZyYWN0aW9uYWxQYXJ0OiAxLFxuICB9LFxuICBmcmFjdGlvbmFsUGFydE1pbkxlbmd0aDogMixcbn07XG5cbmNvbnN0IGRlZmF1bHRNb2R1bGVPcHRpb25zID0ge1xuICBjdXJyZW5jeTogJ3J1YicsXG4gIGRlY2xlbnNpb246ICdub21pbmF0aXZlJyxcbiAgcm91bmROdW1iZXI6IC0xLFxuICBjb252ZXJ0TWludXNTaWduVG9Xb3JkOiB0cnVlLFxuICBzaG93TnVtYmVyUGFydHM6IHtcbiAgICBpbnRlZ2VyOiB0cnVlLFxuICAgIGZyYWN0aW9uYWw6IHRydWUsXG4gIH0sXG4gIGNvbnZlcnROdW1iZXJ0VG9Xb3Jkczoge1xuICAgIGludGVnZXI6IHRydWUsXG4gICAgZnJhY3Rpb25hbDogZmFsc2UsXG4gIH0sXG4gIHNob3dDdXJyZW5jeToge1xuICAgIGludGVnZXI6IHRydWUsXG4gICAgZnJhY3Rpb25hbDogdHJ1ZSxcbiAgfSxcbn07XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0gXy5tZXJnZShfLmNsb25lRGVlcChkZWZhdWx0TW9kdWxlT3B0aW9ucyksIHtcbiAgY3VzdG9tQ3VycmVuY3k6IF8uY2xvbmVEZWVwKGRlZmF1bHRDdXJyZW5jeU9iamVjdCksXG59KTtcblxuY29uc3Qgb3B0aW9uc1ZhbHVlc1R5cGVOdW1iZXIgPSBbXG4gICdyb3VuZE51bWJlcicsXG4gICdjdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuaW50ZWdlcicsXG4gICdjdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuZnJhY3Rpb25hbFBhcnQnLFxuICAnY3VycmVuY3kuZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGgnLFxuXTtcblxuY29uc3Qgb3B0aW9uc05hbWVzTWFwID0ge1xuICAnY3VycmVuY3knOiAnY3VycmVuY3knLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIxJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1sxXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjMnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMl0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwxJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1sxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDMnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMl0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZvcm0taW50ZWdlcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuaW50ZWdlcicsXG4gICdjdXN0b20tY3VycmVuY3ktZm9ybS1mcmFjdGlvbmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5mcmFjdGlvbmFsUGFydCcsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1taW4tbGVuZ3RoJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyxcbiAgJ3JvdW5kLW51bWJlcic6ICdyb3VuZE51bWJlcicsXG4gICdkZWNsZW5zaW9uJzogJ2RlY2xlbnNpb24nLFxuICAnY29udmVydC1taW51cy1zaWduJzogJ2NvbnZlcnRNaW51c1NpZ25Ub1dvcmQnLFxuICAnc2hvdy1udW1iZXItcGFydC1pbnRlZ2VyJzogJ3Nob3dOdW1iZXJQYXJ0cy5pbnRlZ2VyJyxcbiAgJ3Nob3ctbnVtYmVyLXBhcnQtZnJhY3Rpb25hbCc6ICdzaG93TnVtYmVyUGFydHMuZnJhY3Rpb25hbCcsXG4gICdjb252ZXJ0LW51bWJlci1wYXJ0LWludGVnZXInOiAnY29udmVydE51bWJlcnRUb1dvcmRzLmludGVnZXInLFxuICAnY29udmVydC1udW1iZXItcGFydC1mcmFjdGlvbmFsJzogJ2NvbnZlcnROdW1iZXJ0VG9Xb3Jkcy5mcmFjdGlvbmFsJyxcbiAgJ3Nob3ctY3VycmVuY3ktcGFydC1pbnRlZ2VyJzogJ3Nob3dDdXJyZW5jeS5pbnRlZ2VyJyxcbiAgJ3Nob3ctY3VycmVuY3ktcGFydC1mcmFjdGlvbmFsJzogJ3Nob3dDdXJyZW5jeS5mcmFjdGlvbmFsJyxcbn1cblxuZXhwb3J0IGNvbnN0IHVzZU1vZHVsZU9wdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRPcHRpb25zKTtcbiAgY29uc3QgW29wdGlvbnNGb3JNb2R1bGUsIHNldE9wdGlvbnNGb3JNb2R1bGVdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdE1vZHVsZU9wdGlvbnMpO1xuICBjb25zdCBvcHRpb25zRGlmZmVyZW5jZXMgPSBvYmplY3RzRGlmZihkZWZhdWx0TW9kdWxlT3B0aW9ucywgb3B0aW9uc0Zvck1vZHVsZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzYXZlT3B0aW9uc0Zvck1vZHVsZShvcHRpb25zKTtcbiAgfSwgW29wdGlvbnNdKVxuXG4gIGNvbnN0IHVwZGF0ZU9wdGlvbnMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShldmVudC50YXJnZXQpO1xuICAgIGNvbnN0IHBhdGggPSBnZXRPcHRpb25QYXRoKG5hbWUpO1xuICAgIChwYXRoICE9PSBudWxsKSAmJiB1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aChwYXRoLCB2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWUgPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHRhcmdldC50eXBlO1xuICAgIGxldCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gY2hlY2tWYWx1ZVJhbmdlKHRhcmdldCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICB2YWx1ZSA9IEJvb2xlYW4odGFyZ2V0LmNoZWNrZWQpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjb25zdCBjaGVja1ZhbHVlUmFuZ2UgPSAodGFyZ2V0KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgIGlmICh0YXJnZXQubWluICE9PSAnJykge1xuICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSkgPj0gTnVtYmVyKHRhcmdldC5taW4pID8gdmFsdWUgOiB0YXJnZXQubWluO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldC5tYXggIT09ICcnKSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSA8PSBOdW1iZXIodGFyZ2V0Lm1pbikgPyB2YWx1ZSA6IHRhcmdldC5taW47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9O1xuXG4gIGNvbnN0IGdldE9wdGlvblBhdGggPSAobmFtZSkgPT4ge1xuICAgIGlmIChvcHRpb25zTmFtZXNNYXBbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnNOYW1lc01hcFtuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY29uc3QgY29udmVydFZhbHVlc1RvVHlwZU51bWJlciA9IChvYmplY3QsIHZhbHVlc1BhdGhzKSA9PiB7XG4gICAgbGV0IHJlc3VsdE9iamVjdCA9IF8uY2xvbmVEZWVwKG9iamVjdCk7XG4gICAgdmFsdWVzUGF0aHMuc29tZSgocGF0aCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWVCeVBhdGggPSBfLmdldChyZXN1bHRPYmplY3QsIHBhdGgpO1xuICAgICAgaWYgKHZhbHVlQnlQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0T2JqZWN0ID0gXy5zZXQocmVzdWx0T2JqZWN0LCBwYXRoLCBOdW1iZXIodmFsdWVCeVBhdGgpKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRPYmplY3RcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZU9wdGlvblZhbHVlQnlQYXRoID0gKHBhdGgsIG5ld1ZhbHVlKSA9PiB7XG4gICAgbGV0IHVwZGF0ZWRPcHRpb25zID0gXy5jbG9uZURlZXAob3B0aW9ucyk7XG4gICAgdXBkYXRlZE9wdGlvbnMgPSBfLnNldCh1cGRhdGVkT3B0aW9ucywgcGF0aCwgbmV3VmFsdWUpO1xuICAgIHNldE9wdGlvbnModXBkYXRlZE9wdGlvbnMpO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVPcHRpb25zRm9yTW9kdWxlID0gKG9wdGlvbnMpID0+IHtcbiAgICBsZXQgb3B0aW9uc1Jlc3VsdCA9IF8uY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgIGRlbGV0ZSBvcHRpb25zUmVzdWx0LmN1c3RvbUN1cnJlbmN5O1xuICAgIGlmIChvcHRpb25zLmN1cnJlbmN5ID09PSAnY3VzdG9tJykge1xuICAgICAgb3B0aW9uc1Jlc3VsdC5jdXJyZW5jeSA9IG9wdGlvbnMuY3VzdG9tQ3VycmVuY3k7XG4gICAgfVxuICAgIG9wdGlvbnNSZXN1bHQgPSBjb252ZXJ0VmFsdWVzVG9UeXBlTnVtYmVyKG9wdGlvbnNSZXN1bHQsIG9wdGlvbnNWYWx1ZXNUeXBlTnVtYmVyKTtcbiAgICBzZXRPcHRpb25zRm9yTW9kdWxlKG9wdGlvbnNSZXN1bHQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgb3B0aW9ucyxcbiAgICBvcHRpb25zRm9yTW9kdWxlLFxuICAgIG9wdGlvbnNEaWZmZXJlbmNlcyxcbiAgICB1cGRhdGVPcHRpb25zLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1vZHVsZU9wdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9