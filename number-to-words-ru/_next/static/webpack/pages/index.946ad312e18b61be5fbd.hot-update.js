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
  fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
  currencyNounGender: {
    integer: 0,
    fractionalPart: 1
  },
  fractionalPartMinLength: 2
};
var defaultModuleOptions = {
  currency: 'rub',
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
      value = checkTargetTypeNumber(target);
    } else if (type === 'checkbox') {
      value = Boolean(target.checked);
    }

    return value;
  };

  var checkTargetTypeNumber = function checkTargetTypeNumber(target) {
    var resultValue = target.value;

    if (resultValue !== '') {
      resultValue = checkValueRange(target);
    }

    return resultValue;
  };

  var checkValueRange = function checkValueRange(target) {
    var value = target.value;

    if (value !== '') {}

    if (target.min !== '') {
      value = Number(value) >= Number(target.min) ? value : target.min;
    }

    if (target.max !== '') {
      value = Number(value) <= Number(target.min) ? value : target.min;
    }

    return Number(value);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZU1vZHVsZU9wdGlvbnMudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRDdXJyZW5jeU9iamVjdCIsImN1cnJlbmN5TmFtZUNhc2VzIiwiZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXMiLCJjdXJyZW5jeU5vdW5HZW5kZXIiLCJpbnRlZ2VyIiwiZnJhY3Rpb25hbFBhcnQiLCJmcmFjdGlvbmFsUGFydE1pbkxlbmd0aCIsImRlZmF1bHRNb2R1bGVPcHRpb25zIiwiY3VycmVuY3kiLCJyb3VuZE51bWJlciIsImNvbnZlcnRNaW51c1NpZ25Ub1dvcmQiLCJzaG93TnVtYmVyUGFydHMiLCJmcmFjdGlvbmFsIiwiY29udmVydE51bWJlcnRUb1dvcmRzIiwic2hvd0N1cnJlbmN5IiwiZGVmYXVsdE9wdGlvbnMiLCJfIiwibWVyZ2UiLCJjbG9uZURlZXAiLCJjdXN0b21DdXJyZW5jeSIsIm9wdGlvbnNWYWx1ZXNUeXBlTnVtYmVyIiwib3B0aW9uc05hbWVzTWFwIiwidXNlTW9kdWxlT3B0aW9ucyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsIm9wdGlvbnNGb3JNb2R1bGUiLCJzZXRPcHRpb25zRm9yTW9kdWxlIiwib3B0aW9uc0RpZmZlcmVuY2VzIiwib2JqZWN0c0RpZmYiLCJ1c2VFZmZlY3QiLCJzYXZlT3B0aW9uc0Zvck1vZHVsZSIsInVwZGF0ZU9wdGlvbnMiLCJldmVudCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldFZhbHVlIiwicGF0aCIsImdldE9wdGlvblBhdGgiLCJ1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCIsInR5cGUiLCJjaGVja1RhcmdldFR5cGVOdW1iZXIiLCJCb29sZWFuIiwiY2hlY2tlZCIsInJlc3VsdFZhbHVlIiwiY2hlY2tWYWx1ZVJhbmdlIiwibWluIiwiTnVtYmVyIiwibWF4IiwidW5kZWZpbmVkIiwiY29udmVydFZhbHVlc1RvVHlwZU51bWJlciIsIm9iamVjdCIsInZhbHVlc1BhdGhzIiwicmVzdWx0T2JqZWN0Iiwic29tZSIsInZhbHVlQnlQYXRoIiwiZ2V0Iiwic2V0IiwibmV3VmFsdWUiLCJ1cGRhdGVkT3B0aW9ucyIsIm9wdGlvbnNSZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRztBQUM1QkMsbUJBQWlCLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixRQUFuQixDQURTO0FBRTVCQyx5QkFBdUIsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFFBQXZCLENBRkc7QUFHNUJDLG9CQUFrQixFQUFFO0FBQ2xCQyxXQUFPLEVBQUUsQ0FEUztBQUVsQkMsa0JBQWMsRUFBRTtBQUZFLEdBSFE7QUFPNUJDLHlCQUF1QixFQUFFO0FBUEcsQ0FBOUI7QUFVQSxJQUFNQyxvQkFBb0IsR0FBRztBQUMzQkMsVUFBUSxFQUFFLEtBRGlCO0FBRTNCQyxhQUFXLEVBQUUsQ0FBQyxDQUZhO0FBRzNCQyx3QkFBc0IsRUFBRSxJQUhHO0FBSTNCQyxpQkFBZSxFQUFFO0FBQ2ZQLFdBQU8sRUFBRSxJQURNO0FBRWZRLGNBQVUsRUFBRTtBQUZHLEdBSlU7QUFRM0JDLHVCQUFxQixFQUFFO0FBQ3JCVCxXQUFPLEVBQUUsSUFEWTtBQUVyQlEsY0FBVSxFQUFFO0FBRlMsR0FSSTtBQVkzQkUsY0FBWSxFQUFFO0FBQ1pWLFdBQU8sRUFBRSxJQURHO0FBRVpRLGNBQVUsRUFBRTtBQUZBO0FBWmEsQ0FBN0I7O0FBa0JBLElBQU1HLGNBQWMsR0FBR0MsNkNBQUMsQ0FBQ0MsS0FBRixDQUFRRCw2Q0FBQyxDQUFDRSxTQUFGLENBQVlYLG9CQUFaLENBQVIsRUFBMkM7QUFDaEVZLGdCQUFjLEVBQUVILDZDQUFDLENBQUNFLFNBQUYsQ0FBWWxCLHFCQUFaO0FBRGdELENBQTNDLENBQXZCOztBQUlBLElBQU1vQix1QkFBdUIsR0FBRyxDQUM5QixhQUQ4QixFQUU5QixxQ0FGOEIs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QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNGLElBQUQsRUFBT3FCLFFBQVAsRUFBb0I7QUFDbEQsUUFBSUMsY0FBYyxHQUFHN0MsNkNBQUMsQ0FBQ0UsU0FBRixDQUFZTyxPQUFaLENBQXJCOztBQUNBb0Msa0JBQWMsR0FBRzdDLDZDQUFDLENBQUMyQyxHQUFGLENBQU1FLGNBQU4sRUFBc0J0QixJQUF0QixFQUE0QnFCLFFBQTVCLENBQWpCO0FBQ0FsQyxjQUFVLENBQUNtQyxjQUFELENBQVY7QUFDRCxHQUpEOztBQU1BLE1BQU03QixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNQLE9BQUQsRUFBYTtBQUN4QyxRQUFJcUMsYUFBYSxHQUFHOUMsNkNBQUMsQ0FBQ0UsU0FBRixDQUFZTyxPQUFaLENBQXBCOztBQUNBLFdBQU9xQyxhQUFhLENBQUMzQyxjQUFyQjs7QUFDQSxRQUFJTSxPQUFPLENBQUNqQixRQUFSLEtBQXFCLFFBQXpCLEVBQW1DO0FBQ2pDc0QsbUJBQWEsQ0FBQ3RELFFBQWQsR0FBeUJpQixPQUFPLENBQUNOLGNBQWpDO0FBQ0Q7O0FBQ0QyQyxpQkFBYSxHQUFHVix5QkFBeUIsQ0FBQ1UsYUFBRCxFQUFnQjFDLHVCQUFoQixDQUF6QztBQUNBUSx1QkFBbUIsQ0FBQ2tDLGFBQUQsQ0FBbkI7QUFDRCxHQVJEOztBQVVBLFNBQU87QUFDTHJDLFdBQU8sRUFBUEEsT0FESztBQUVMRSxvQkFBZ0IsRUFBaEJBLGdCQUZLO0FBR0xFLHNCQUFrQixFQUFsQkEsa0JBSEs7QUFJTEksaUJBQWEsRUFBYkE7QUFKSyxHQUFQO0FBTUQsQ0F6Rk07O0dBQU1YLGdCOztBQTJGRUEsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTQ2YWQzMTJlMThiNjFiZTVmYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG9iamVjdHNEaWZmIGZyb20gJ2xpYi9mdW5jdGlvbnMvb2JqZWN0c0RpZmYnXG5cbmNvbnN0IGRlZmF1bHRDdXJyZW5jeU9iamVjdCA9IHtcbiAgY3VycmVuY3lOYW1lQ2FzZXM6IFsn0YDRg9Cx0LvRjCcsICfRgNGD0LHQu9GPJywgJ9GA0YPQsdC70LXQuSddLFxuICBmcmFjdGlvbmFsUGFydE5hbWVDYXNlczogWyfQutC+0L/QtdC50LrQsCcsICfQutC+0L/QtdC50LrQuCcsICfQutC+0L/QtdC10LonXSxcbiAgY3VycmVuY3lOb3VuR2VuZGVyOiB7XG4gICAgaW50ZWdlcjogMCxcbiAgICBmcmFjdGlvbmFsUGFydDogMSxcbiAgfSxcbiAgZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGg6IDIsXG59O1xuXG5jb25zdCBkZWZhdWx0TW9kdWxlT3B0aW9ucyA9IHtcbiAgY3VycmVuY3k6ICdydWInLFxuICByb3VuZE51bWJlcjogLTEsXG4gIGNvbnZlcnRNaW51c1NpZ25Ub1dvcmQ6IHRydWUsXG4gIHNob3dOdW1iZXJQYXJ0czoge1xuICAgIGludGVnZXI6IHRydWUsXG4gICAgZnJhY3Rpb25hbDogdHJ1ZSxcbiAgfSxcbiAgY29udmVydE51bWJlcnRUb1dvcmRzOiB7XG4gICAgaW50ZWdlcjogdHJ1ZSxcbiAgICBmcmFjdGlvbmFsOiBmYWxzZSxcbiAgfSxcbiAgc2hvd0N1cnJlbmN5OiB7XG4gICAgaW50ZWdlcjogdHJ1ZSxcbiAgICBmcmFjdGlvbmFsOiB0cnVlLFxuICB9LFxufTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBfLm1lcmdlKF8uY2xvbmVEZWVwKGRlZmF1bHRNb2R1bGVPcHRpb25zKSwge1xuICBjdXN0b21DdXJyZW5jeTogXy5jbG9uZURlZXAoZGVmYXVsdEN1cnJlbmN5T2JqZWN0KSxcbn0pO1xuXG5jb25zdCBvcHRpb25zVmFsdWVzVHlwZU51bWJlciA9IFtcbiAgJ3JvdW5kTnVtYmVyJyxcbiAgJ2N1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5pbnRlZ2VyJyxcbiAgJ2N1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5mcmFjdGlvbmFsUGFydCcsXG4gICdjdXJyZW5jeS5mcmFjdGlvbmFsUGFydE1pbkxlbmd0aCcsXG5dO1xuXG5jb25zdCBvcHRpb25zTmFtZXNNYXAgPSB7XG4gICdjdXJyZW5jeSc6ICdjdXJyZW5jeScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjEnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMyc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1syXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDEnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwyJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMyc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1syXScsXG4gICdjdXN0b20tY3VycmVuY3ktZm9ybS1pbnRlZ2VyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5pbnRlZ2VyJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mb3JtLWZyYWN0aW9uYWwnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmZyYWN0aW9uYWxQYXJ0JyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLW1pbi1sZW5ndGgnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnRNaW5MZW5ndGgnLFxuICAncm91bmQtbnVtYmVyJzogJ3JvdW5kTnVtYmVyJyxcbiAgJ2NvbnZlcnQtbWludXMtc2lnbic6ICdjb252ZXJ0TWludXNTaWduVG9Xb3JkJyxcbiAgJ3Nob3ctbnVtYmVyLXBhcnQtaW50ZWdlcic6ICdzaG93TnVtYmVyUGFydHMuaW50ZWdlcicsXG4gICdzaG93LW51bWJlci1wYXJ0LWZyYWN0aW9uYWwnOiAnc2hvd051bWJlclBhcnRzLmZyYWN0aW9uYWwnLFxuICAnY29udmVydC1udW1iZXItcGFydC1pbnRlZ2VyJzogJ2NvbnZlcnROdW1iZXJ0VG9Xb3Jkcy5pbnRlZ2VyJyxcbiAgJ2NvbnZlcnQtbnVtYmVyLXBhcnQtZnJhY3Rpb25hbCc6ICdjb252ZXJ0TnVtYmVydFRvV29yZHMuZnJhY3Rpb25hbCcsXG4gICdzaG93LWN1cnJlbmN5LXBhcnQtaW50ZWdlcic6ICdzaG93Q3VycmVuY3kuaW50ZWdlcicsXG4gICdzaG93LWN1cnJlbmN5LXBhcnQtZnJhY3Rpb25hbCc6ICdzaG93Q3VycmVuY3kuZnJhY3Rpb25hbCcsXG59XG5cbmV4cG9ydCBjb25zdCB1c2VNb2R1bGVPcHRpb25zID0gKCkgPT4ge1xuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0T3B0aW9ucyk7XG4gIGNvbnN0IFtvcHRpb25zRm9yTW9kdWxlLCBzZXRPcHRpb25zRm9yTW9kdWxlXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRNb2R1bGVPcHRpb25zKTtcbiAgY29uc3Qgb3B0aW9uc0RpZmZlcmVuY2VzID0gb2JqZWN0c0RpZmYoZGVmYXVsdE1vZHVsZU9wdGlvbnMsIG9wdGlvbnNGb3JNb2R1bGUpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2F2ZU9wdGlvbnNGb3JNb2R1bGUob3B0aW9ucyk7XG4gIH0sIFtvcHRpb25zXSlcblxuICBjb25zdCB1cGRhdGVPcHRpb25zID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBwYXRoID0gZ2V0T3B0aW9uUGF0aChuYW1lKTtcbiAgICAocGF0aCAhPT0gbnVsbCkgJiYgdXBkYXRlT3B0aW9uVmFsdWVCeVBhdGgocGF0aCwgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlID0gKHRhcmdldCkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSB0YXJnZXQudHlwZTtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IGNoZWNrVGFyZ2V0VHlwZU51bWJlcih0YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgdmFsdWUgPSBCb29sZWFuKHRhcmdldC5jaGVja2VkKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY29uc3QgY2hlY2tUYXJnZXRUeXBlTnVtYmVyID0gKHRhcmdldCkgPT4ge1xuICAgIGxldCByZXN1bHRWYWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBpZiAocmVzdWx0VmFsdWUgIT09ICcnKSB7IFxuICAgICAgcmVzdWx0VmFsdWUgPSBjaGVja1ZhbHVlUmFuZ2UodGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrVmFsdWVSYW5nZSA9ICh0YXJnZXQpID0+IHtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgXG4gICAgfVxuICAgIGlmICh0YXJnZXQubWluICE9PSAnJykge1xuICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpID49IE51bWJlcih0YXJnZXQubWluKSA/IHZhbHVlIDogdGFyZ2V0Lm1pbjtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5tYXggIT09ICcnKSB7XG4gICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSkgPD0gTnVtYmVyKHRhcmdldC5taW4pID8gdmFsdWUgOiB0YXJnZXQubWluO1xuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRPcHRpb25QYXRoID0gKG5hbWUpID0+IHtcbiAgICBpZiAob3B0aW9uc05hbWVzTWFwW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBvcHRpb25zTmFtZXNNYXBbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IGNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIgPSAob2JqZWN0LCB2YWx1ZXNQYXRocykgPT4ge1xuICAgIGxldCByZXN1bHRPYmplY3QgPSBfLmNsb25lRGVlcChvYmplY3QpO1xuICAgIHZhbHVlc1BhdGhzLnNvbWUoKHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlQnlQYXRoID0gXy5nZXQocmVzdWx0T2JqZWN0LCBwYXRoKTtcbiAgICAgIGlmICh2YWx1ZUJ5UGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdE9iamVjdCA9IF8uc2V0KHJlc3VsdE9iamVjdCwgcGF0aCwgTnVtYmVyKHZhbHVlQnlQYXRoKSk7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0T2JqZWN0XG4gIH1cblxuICBjb25zdCB1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCA9IChwYXRoLCBuZXdWYWx1ZSkgPT4ge1xuICAgIGxldCB1cGRhdGVkT3B0aW9ucyA9IF8uY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgIHVwZGF0ZWRPcHRpb25zID0gXy5zZXQodXBkYXRlZE9wdGlvbnMsIHBhdGgsIG5ld1ZhbHVlKTtcbiAgICBzZXRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKTtcbiAgfTtcblxuICBjb25zdCBzYXZlT3B0aW9uc0Zvck1vZHVsZSA9IChvcHRpb25zKSA9PiB7XG4gICAgbGV0IG9wdGlvbnNSZXN1bHQgPSBfLmNsb25lRGVlcChvcHRpb25zKTtcbiAgICBkZWxldGUgb3B0aW9uc1Jlc3VsdC5jdXN0b21DdXJyZW5jeTtcbiAgICBpZiAob3B0aW9ucy5jdXJyZW5jeSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgIG9wdGlvbnNSZXN1bHQuY3VycmVuY3kgPSBvcHRpb25zLmN1c3RvbUN1cnJlbmN5O1xuICAgIH1cbiAgICBvcHRpb25zUmVzdWx0ID0gY29udmVydFZhbHVlc1RvVHlwZU51bWJlcihvcHRpb25zUmVzdWx0LCBvcHRpb25zVmFsdWVzVHlwZU51bWJlcik7XG4gICAgc2V0T3B0aW9uc0Zvck1vZHVsZShvcHRpb25zUmVzdWx0KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG9wdGlvbnMsXG4gICAgb3B0aW9uc0Zvck1vZHVsZSxcbiAgICBvcHRpb25zRGlmZmVyZW5jZXMsXG4gICAgdXBkYXRlT3B0aW9ucyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNb2R1bGVPcHRpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==