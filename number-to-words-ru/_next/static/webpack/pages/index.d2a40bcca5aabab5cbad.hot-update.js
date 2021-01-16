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
      value = Number(value.replace(/[^\d-,./]/g, ''));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZU1vZHVsZU9wdGlvbnMudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRDdXJyZW5jeU9iamVjdCIsImN1cnJlbmN5TmFtZUNhc2VzIiwiZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXMiLCJjdXJyZW5jeU5vdW5HZW5kZXIiLCJpbnRlZ2VyIiwiZnJhY3Rpb25hbFBhcnQiLCJmcmFjdGlvbmFsUGFydE1pbkxlbmd0aCIsImRlZmF1bHRNb2R1bGVPcHRpb25zIiwiY3VycmVuY3kiLCJyb3VuZE51bWJlciIsImNvbnZlcnRNaW51c1NpZ25Ub1dvcmQiLCJzaG93TnVtYmVyUGFydHMiLCJmcmFjdGlvbmFsIiwiY29udmVydE51bWJlcnRUb1dvcmRzIiwic2hvd0N1cnJlbmN5IiwiZGVmYXVsdE9wdGlvbnMiLCJfIiwibWVyZ2UiLCJjbG9uZURlZXAiLCJjdXN0b21DdXJyZW5jeSIsIm9wdGlvbnNOYW1lc01hcCIsInVzZU1vZHVsZU9wdGlvbnMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJvcHRpb25zRm9yTW9kdWxlIiwic2V0T3B0aW9uc0Zvck1vZHVsZSIsIm9wdGlvbnNEaWZmZXJlbmNlcyIsIm9iamVjdHNEaWZmIiwidXNlRWZmZWN0Iiwic2F2ZU9wdGlvbnNGb3JNb2R1bGUiLCJ1cGRhdGVPcHRpb25zIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRWYWx1ZSIsInBhdGgiLCJnZXRPcHRpb25QYXRoIiwidXBkYXRlT3B0aW9uVmFsdWVCeVBhdGgiLCJ0eXBlIiwiTnVtYmVyIiwicmVwbGFjZSIsIkJvb2xlYW4iLCJjaGVja2VkIiwiY2hlY2tWYWx1ZVJhbmdlIiwibWluIiwibWF4IiwidW5kZWZpbmVkIiwibmV3VmFsdWUiLCJ1cGRhdGVkT3B0aW9ucyIsInNldCIsIm9wdGlvbnNSZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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dEI7QUFDRDs7QUFDRCxXQUFPLElBQVA7QUFDRCxHQUxEOztBQU9BLE1BQU1NLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0YsSUFBRCxFQUFPWSxRQUFQLEVBQW9CO0FBQ2xELFFBQUlDLGNBQWMsR0FBR25DLDZDQUFDLENBQUNFLFNBQUYsQ0FBWU0sT0FBWixDQUFyQjs7QUFDQTJCLGtCQUFjLEdBQUduQyw2Q0FBQyxDQUFDb0MsR0FBRixDQUFNRCxjQUFOLEVBQXNCYixJQUF0QixFQUE0QlksUUFBNUIsQ0FBakI7QUFDQXpCLGNBQVUsQ0FBQzBCLGNBQUQsQ0FBVjtBQUNELEdBSkQ7O0FBTUEsTUFBTXBCLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ1AsT0FBRCxFQUFhO0FBQ3hDLFFBQUk2QixhQUFhLEdBQUdyQyw2Q0FBQyxDQUFDRSxTQUFGLENBQVlNLE9BQVosQ0FBcEI7O0FBQ0EsV0FBTzZCLGFBQWEsQ0FBQ2xDLGNBQXJCOztBQUNBLFFBQUlLLE9BQU8sQ0FBQ2hCLFFBQVIsS0FBcUIsUUFBekIsRUFBbUM7QUFDakM2QyxtQkFBYSxDQUFDN0MsUUFBZCxHQUF5QmdCLE9BQU8sQ0FBQ0wsY0FBakM7QUFDRDs7QUFDRFEsdUJBQW1CLENBQUMwQixhQUFELENBQW5CO0FBQ0QsR0FQRDs7QUFTQSxTQUFPO0FBQ0w3QixXQUFPLEVBQVBBLE9BREs7QUFFTEUsb0JBQWdCLEVBQWhCQSxnQkFGSztBQUdMRSxzQkFBa0IsRUFBbEJBLGtCQUhLO0FBSUxJLGlCQUFhLEVBQWJBO0FBSkssR0FBUDtBQU1ELENBbEVNOztHQUFNWCxnQjs7QUFvRUVBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQyYTQwYmNjYTVhYWJhYjVjYmFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBvYmplY3RzRGlmZiBmcm9tICdsaWIvZnVuY3Rpb25zL29iamVjdHNEaWZmJ1xuXG5jb25zdCBkZWZhdWx0Q3VycmVuY3lPYmplY3QgPSB7XG4gIGN1cnJlbmN5TmFtZUNhc2VzOiBbJ9GA0YPQsdC70YwnLCAn0YDRg9Cx0LvRjycsICfRgNGD0LHQu9C10LknXSxcbiAgZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXM6IFsn0LrQvtC/0LXQudC60LAnLCAn0LrQvtC/0LXQudC60LgnLCAn0LrQvtC/0LXQtdC6J10sXG4gIGN1cnJlbmN5Tm91bkdlbmRlcjoge1xuICAgIGludGVnZXI6IDAsXG4gICAgZnJhY3Rpb25hbFBhcnQ6IDEsXG4gIH0sXG4gIGZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoOiAyLFxufTtcblxuY29uc3QgZGVmYXVsdE1vZHVsZU9wdGlvbnMgPSB7XG4gIGN1cnJlbmN5OiAncnViJyxcbiAgcm91bmROdW1iZXI6IC0xLFxuICBjb252ZXJ0TWludXNTaWduVG9Xb3JkOiB0cnVlLFxuICBzaG93TnVtYmVyUGFydHM6IHtcbiAgICBpbnRlZ2VyOiB0cnVlLFxuICAgIGZyYWN0aW9uYWw6IHRydWUsXG4gIH0sXG4gIGNvbnZlcnROdW1iZXJ0VG9Xb3Jkczoge1xuICAgIGludGVnZXI6IHRydWUsXG4gICAgZnJhY3Rpb25hbDogZmFsc2UsXG4gIH0sXG4gIHNob3dDdXJyZW5jeToge1xuICAgIGludGVnZXI6IHRydWUsXG4gICAgZnJhY3Rpb25hbDogdHJ1ZSxcbiAgfSxcbn07XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0gXy5tZXJnZShfLmNsb25lRGVlcChkZWZhdWx0TW9kdWxlT3B0aW9ucyksIHtcbiAgY3VzdG9tQ3VycmVuY3k6IF8uY2xvbmVEZWVwKGRlZmF1bHRDdXJyZW5jeU9iamVjdCksXG59KTtcblxuY29uc3Qgb3B0aW9uc05hbWVzTWFwID0ge1xuICAnY3VycmVuY3knOiAnY3VycmVuY3knLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIxJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1sxXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjMnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMl0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwxJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1sxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDMnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMl0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZvcm0taW50ZWdlcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuaW50ZWdlcicsXG4gICdjdXN0b20tY3VycmVuY3ktZm9ybS1mcmFjdGlvbmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5mcmFjdGlvbmFsUGFydCcsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1taW4tbGVuZ3RoJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyxcbiAgJ3JvdW5kLW51bWJlcic6ICdyb3VuZE51bWJlcicsXG4gICdjb252ZXJ0LW1pbnVzLXNpZ24nOiAnY29udmVydE1pbnVzU2lnblRvV29yZCcsXG4gICdzaG93LW51bWJlci1wYXJ0LWludGVnZXInOiAnc2hvd051bWJlclBhcnRzLmludGVnZXInLFxuICAnc2hvdy1udW1iZXItcGFydC1mcmFjdGlvbmFsJzogJ3Nob3dOdW1iZXJQYXJ0cy5mcmFjdGlvbmFsJyxcbiAgJ2NvbnZlcnQtbnVtYmVyLXBhcnQtaW50ZWdlcic6ICdjb252ZXJ0TnVtYmVydFRvV29yZHMuaW50ZWdlcicsXG4gICdjb252ZXJ0LW51bWJlci1wYXJ0LWZyYWN0aW9uYWwnOiAnY29udmVydE51bWJlcnRUb1dvcmRzLmZyYWN0aW9uYWwnLFxuICAnc2hvdy1jdXJyZW5jeS1wYXJ0LWludGVnZXInOiAnc2hvd0N1cnJlbmN5LmludGVnZXInLFxuICAnc2hvdy1jdXJyZW5jeS1wYXJ0LWZyYWN0aW9uYWwnOiAnc2hvd0N1cnJlbmN5LmZyYWN0aW9uYWwnLFxufVxuXG5leHBvcnQgY29uc3QgdXNlTW9kdWxlT3B0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdE9wdGlvbnMpO1xuICBjb25zdCBbb3B0aW9uc0Zvck1vZHVsZSwgc2V0T3B0aW9uc0Zvck1vZHVsZV0gPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0TW9kdWxlT3B0aW9ucyk7XG4gIGNvbnN0IG9wdGlvbnNEaWZmZXJlbmNlcyA9IG9iamVjdHNEaWZmKGRlZmF1bHRNb2R1bGVPcHRpb25zLCBvcHRpb25zRm9yTW9kdWxlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNhdmVPcHRpb25zRm9yTW9kdWxlKG9wdGlvbnMpO1xuICB9LCBbb3B0aW9uc10pXG5cbiAgY29uc3QgdXBkYXRlT3B0aW9ucyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgcGF0aCA9IGdldE9wdGlvblBhdGgobmFtZSk7XG4gICAgKHBhdGggIT09IG51bGwpICYmIHVwZGF0ZU9wdGlvblZhbHVlQnlQYXRoKHBhdGgsIHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZSA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCB0eXBlID0gdGFyZ2V0LnR5cGU7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUucmVwbGFjZSgvW15cXGQtLC4vXS9nLCAnJykpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgdmFsdWUgPSBCb29sZWFuKHRhcmdldC5jaGVja2VkKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY29uc3QgY2hlY2tWYWx1ZVJhbmdlID0gKHRhcmdldCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBpZiAodGFyZ2V0Lm1pbiAhPT0gJycpIHtcbiAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSA+PSBOdW1iZXIodGFyZ2V0Lm1pbikgPyB2YWx1ZSA6IHRhcmdldC5taW47XG4gICAgfVxuICAgIGlmICh0YXJnZXQubWF4ICE9PSAnJykge1xuICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpIDw9IE51bWJlcih0YXJnZXQubWluKSA/IHZhbHVlIDogdGFyZ2V0Lm1pbjtcbiAgICB9XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0T3B0aW9uUGF0aCA9IChuYW1lKSA9PiB7XG4gICAgaWYgKG9wdGlvbnNOYW1lc01hcFtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc05hbWVzTWFwW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCA9IChwYXRoLCBuZXdWYWx1ZSkgPT4ge1xuICAgIGxldCB1cGRhdGVkT3B0aW9ucyA9IF8uY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgIHVwZGF0ZWRPcHRpb25zID0gXy5zZXQodXBkYXRlZE9wdGlvbnMsIHBhdGgsIG5ld1ZhbHVlKTtcbiAgICBzZXRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKTtcbiAgfTtcblxuICBjb25zdCBzYXZlT3B0aW9uc0Zvck1vZHVsZSA9IChvcHRpb25zKSA9PiB7XG4gICAgbGV0IG9wdGlvbnNSZXN1bHQgPSBfLmNsb25lRGVlcChvcHRpb25zKTtcbiAgICBkZWxldGUgb3B0aW9uc1Jlc3VsdC5jdXN0b21DdXJyZW5jeTtcbiAgICBpZiAob3B0aW9ucy5jdXJyZW5jeSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgIG9wdGlvbnNSZXN1bHQuY3VycmVuY3kgPSBvcHRpb25zLmN1c3RvbUN1cnJlbmN5O1xuICAgIH1cbiAgICBzZXRPcHRpb25zRm9yTW9kdWxlKG9wdGlvbnNSZXN1bHQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgb3B0aW9ucyxcbiAgICBvcHRpb25zRm9yTW9kdWxlLFxuICAgIG9wdGlvbnNEaWZmZXJlbmNlcyxcbiAgICB1cGRhdGVPcHRpb25zLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1vZHVsZU9wdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9