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
      value = checkValueRange(target);
    } else if (type === 'checkbox') {
      value = Boolean(target.checked);
    }

    return value;
  };

  var checkValueRange = function checkValueRange(target) {
    var value = target.value;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZU1vZHVsZU9wdGlvbnMudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRDdXJyZW5jeU9iamVjdCIsImN1cnJlbmN5TmFtZUNhc2VzIiwiZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXMiLCJjdXJyZW5jeU5vdW5HZW5kZXIiLCJpbnRlZ2VyIiwiZnJhY3Rpb25hbFBhcnQiLCJmcmFjdGlvbmFsUGFydE1pbkxlbmd0aCIsImRlZmF1bHRNb2R1bGVPcHRpb25zIiwiY3VycmVuY3kiLCJyb3VuZE51bWJlciIsImNvbnZlcnRNaW51c1NpZ25Ub1dvcmQiLCJzaG93TnVtYmVyUGFydHMiLCJmcmFjdGlvbmFsIiwiY29udmVydE51bWJlcnRUb1dvcmRzIiwic2hvd0N1cnJlbmN5IiwiZGVmYXVsdE9wdGlvbnMiLCJfIiwibWVyZ2UiLCJjbG9uZURlZXAiLCJjdXN0b21DdXJyZW5jeSIsIm9wdGlvbnNOYW1lc01hcCIsInVzZU1vZHVsZU9wdGlvbnMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJvcHRpb25zRm9yTW9kdWxlIiwic2V0T3B0aW9uc0Zvck1vZHVsZSIsIm9wdGlvbnNEaWZmZXJlbmNlcyIsIm9iamVjdHNEaWZmIiwidXNlRWZmZWN0Iiwic2F2ZU9wdGlvbnNGb3JNb2R1bGUiLCJ1cGRhdGVPcHRpb25zIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRWYWx1ZSIsInBhdGgiLCJnZXRPcHRpb25QYXRoIiwidXBkYXRlT3B0aW9uVmFsdWVCeVBhdGgiLCJ0eXBlIiwiY2hlY2tWYWx1ZVJhbmdlIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJtaW4iLCJOdW1iZXIiLCJtYXgiLCJ1bmRlZmluZWQiLCJuZXdWYWx1ZSIsInVwZGF0ZWRPcHRpb25zIiwic2V0Iiwib3B0aW9uc1Jlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7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QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNGLElBQUQsRUFBT1csUUFBUCxFQUFvQjtBQUNsRCxRQUFJQyxjQUFjLEdBQUdsQyw2Q0FBQyxDQUFDRSxTQUFGLENBQVlNLE9BQVosQ0FBckI7O0FBQ0EwQixrQkFBYyxHQUFHbEMsNkNBQUMsQ0FBQ21DLEdBQUYsQ0FBTUQsY0FBTixFQUFzQlosSUFBdEIsRUFBNEJXLFFBQTVCLENBQWpCO0FBQ0F4QixjQUFVLENBQUN5QixjQUFELENBQVY7QUFDRCxHQUpEOztBQU1BLE1BQU1uQixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNQLE9BQUQsRUFBYTtBQUN4QyxRQUFJNEIsYUFBYSxHQUFHcEMsNkNBQUMsQ0FBQ0UsU0FBRixDQUFZTSxPQUFaLENBQXBCOztBQUNBLFdBQU80QixhQUFhLENBQUNqQyxjQUFyQjs7QUFDQSxRQUFJSyxPQUFPLENBQUNoQixRQUFSLEtBQXFCLFFBQXpCLEVBQW1DO0FBQ2pDNEMsbUJBQWEsQ0FBQzVDLFFBQWQsR0FBeUJnQixPQUFPLENBQUNMLGNBQWpDO0FBQ0Q7O0FBQ0RRLHVCQUFtQixDQUFDeUIsYUFBRCxDQUFuQjtBQUNELEdBUEQ7O0FBU0EsU0FBTztBQUNMNUIsV0FBTyxFQUFQQSxPQURLO0FBRUxFLG9CQUFnQixFQUFoQkEsZ0JBRks7QUFHTEUsc0JBQWtCLEVBQWxCQSxrQkFISztBQUlMSSxpQkFBYSxFQUFiQTtBQUpLLEdBQVA7QUFNRCxDQWxFTTs7R0FBTVgsZ0I7O0FBb0VFQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMDc5NTZiODhjNzNkM2UxNjcyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgb2JqZWN0c0RpZmYgZnJvbSAnbGliL2Z1bmN0aW9ucy9vYmplY3RzRGlmZidcblxuY29uc3QgZGVmYXVsdEN1cnJlbmN5T2JqZWN0ID0ge1xuICBjdXJyZW5jeU5hbWVDYXNlczogWyfRgNGD0LHQu9GMJywgJ9GA0YPQsdC70Y8nLCAn0YDRg9Cx0LvQtdC5J10sXG4gIGZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzOiBbJ9C60L7Qv9C10LnQutCwJywgJ9C60L7Qv9C10LnQutC4JywgJ9C60L7Qv9C10LXQuiddLFxuICBjdXJyZW5jeU5vdW5HZW5kZXI6IHtcbiAgICBpbnRlZ2VyOiAwLFxuICAgIGZyYWN0aW9uYWxQYXJ0OiAxLFxuICB9LFxuICBmcmFjdGlvbmFsUGFydE1pbkxlbmd0aDogMixcbn07XG5cbmNvbnN0IGRlZmF1bHRNb2R1bGVPcHRpb25zID0ge1xuICBjdXJyZW5jeTogJ3J1YicsXG4gIHJvdW5kTnVtYmVyOiAtMSxcbiAgY29udmVydE1pbnVzU2lnblRvV29yZDogdHJ1ZSxcbiAgc2hvd051bWJlclBhcnRzOiB7XG4gICAgaW50ZWdlcjogdHJ1ZSxcbiAgICBmcmFjdGlvbmFsOiB0cnVlLFxuICB9LFxuICBjb252ZXJ0TnVtYmVydFRvV29yZHM6IHtcbiAgICBpbnRlZ2VyOiB0cnVlLFxuICAgIGZyYWN0aW9uYWw6IGZhbHNlLFxuICB9LFxuICBzaG93Q3VycmVuY3k6IHtcbiAgICBpbnRlZ2VyOiB0cnVlLFxuICAgIGZyYWN0aW9uYWw6IHRydWUsXG4gIH0sXG59O1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IF8ubWVyZ2UoXy5jbG9uZURlZXAoZGVmYXVsdE1vZHVsZU9wdGlvbnMpLCB7XG4gIGN1c3RvbUN1cnJlbmN5OiBfLmNsb25lRGVlcChkZWZhdWx0Q3VycmVuY3lPYmplY3QpLFxufSk7XG5cbmNvbnN0IG9wdGlvbnNOYW1lc01hcCA9IHtcbiAgJ2N1cnJlbmN5JzogJ2N1cnJlbmN5JyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMSc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1swXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIzJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzJdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMSc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1swXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwzJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzJdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mb3JtLWludGVnZXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmludGVnZXInLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZvcm0tZnJhY3Rpb25hbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuZnJhY3Rpb25hbFBhcnQnLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtbWluLWxlbmd0aCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE1pbkxlbmd0aCcsXG4gICdyb3VuZC1udW1iZXInOiAncm91bmROdW1iZXInLFxuICAnY29udmVydC1taW51cy1zaWduJzogJ2NvbnZlcnRNaW51c1NpZ25Ub1dvcmQnLFxuICAnc2hvdy1udW1iZXItcGFydC1pbnRlZ2VyJzogJ3Nob3dOdW1iZXJQYXJ0cy5pbnRlZ2VyJyxcbiAgJ3Nob3ctbnVtYmVyLXBhcnQtZnJhY3Rpb25hbCc6ICdzaG93TnVtYmVyUGFydHMuZnJhY3Rpb25hbCcsXG4gICdjb252ZXJ0LW51bWJlci1wYXJ0LWludGVnZXInOiAnY29udmVydE51bWJlcnRUb1dvcmRzLmludGVnZXInLFxuICAnY29udmVydC1udW1iZXItcGFydC1mcmFjdGlvbmFsJzogJ2NvbnZlcnROdW1iZXJ0VG9Xb3Jkcy5mcmFjdGlvbmFsJyxcbiAgJ3Nob3ctY3VycmVuY3ktcGFydC1pbnRlZ2VyJzogJ3Nob3dDdXJyZW5jeS5pbnRlZ2VyJyxcbiAgJ3Nob3ctY3VycmVuY3ktcGFydC1mcmFjdGlvbmFsJzogJ3Nob3dDdXJyZW5jeS5mcmFjdGlvbmFsJyxcbn1cblxuZXhwb3J0IGNvbnN0IHVzZU1vZHVsZU9wdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRPcHRpb25zKTtcbiAgY29uc3QgW29wdGlvbnNGb3JNb2R1bGUsIHNldE9wdGlvbnNGb3JNb2R1bGVdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdE1vZHVsZU9wdGlvbnMpO1xuICBjb25zdCBvcHRpb25zRGlmZmVyZW5jZXMgPSBvYmplY3RzRGlmZihkZWZhdWx0TW9kdWxlT3B0aW9ucywgb3B0aW9uc0Zvck1vZHVsZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzYXZlT3B0aW9uc0Zvck1vZHVsZShvcHRpb25zKTtcbiAgfSwgW29wdGlvbnNdKVxuXG4gIGNvbnN0IHVwZGF0ZU9wdGlvbnMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShldmVudC50YXJnZXQpO1xuICAgIGNvbnN0IHBhdGggPSBnZXRPcHRpb25QYXRoKG5hbWUpO1xuICAgIChwYXRoICE9PSBudWxsKSAmJiB1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aChwYXRoLCB2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWUgPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHRhcmdldC50eXBlO1xuICAgIGxldCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gY2hlY2tWYWx1ZVJhbmdlKHRhcmdldCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICB2YWx1ZSA9IEJvb2xlYW4odGFyZ2V0LmNoZWNrZWQpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjb25zdCBjaGVja1ZhbHVlUmFuZ2UgPSAodGFyZ2V0KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0YXJnZXQubWluICE9PSAnJykge1xuICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpID49IE51bWJlcih0YXJnZXQubWluKSA/IHZhbHVlIDogdGFyZ2V0Lm1pbjtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5tYXggIT09ICcnKSB7XG4gICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSkgPD0gTnVtYmVyKHRhcmdldC5taW4pID8gdmFsdWUgOiB0YXJnZXQubWluO1xuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRPcHRpb25QYXRoID0gKG5hbWUpID0+IHtcbiAgICBpZiAob3B0aW9uc05hbWVzTWFwW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBvcHRpb25zTmFtZXNNYXBbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZU9wdGlvblZhbHVlQnlQYXRoID0gKHBhdGgsIG5ld1ZhbHVlKSA9PiB7XG4gICAgbGV0IHVwZGF0ZWRPcHRpb25zID0gXy5jbG9uZURlZXAob3B0aW9ucyk7XG4gICAgdXBkYXRlZE9wdGlvbnMgPSBfLnNldCh1cGRhdGVkT3B0aW9ucywgcGF0aCwgbmV3VmFsdWUpO1xuICAgIHNldE9wdGlvbnModXBkYXRlZE9wdGlvbnMpO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVPcHRpb25zRm9yTW9kdWxlID0gKG9wdGlvbnMpID0+IHtcbiAgICBsZXQgb3B0aW9uc1Jlc3VsdCA9IF8uY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgIGRlbGV0ZSBvcHRpb25zUmVzdWx0LmN1c3RvbUN1cnJlbmN5O1xuICAgIGlmIChvcHRpb25zLmN1cnJlbmN5ID09PSAnY3VzdG9tJykge1xuICAgICAgb3B0aW9uc1Jlc3VsdC5jdXJyZW5jeSA9IG9wdGlvbnMuY3VzdG9tQ3VycmVuY3k7XG4gICAgfVxuICAgIHNldE9wdGlvbnNGb3JNb2R1bGUob3B0aW9uc1Jlc3VsdCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zLFxuICAgIG9wdGlvbnNGb3JNb2R1bGUsXG4gICAgb3B0aW9uc0RpZmZlcmVuY2VzLFxuICAgIHVwZGF0ZU9wdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTW9kdWxlT3B0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=