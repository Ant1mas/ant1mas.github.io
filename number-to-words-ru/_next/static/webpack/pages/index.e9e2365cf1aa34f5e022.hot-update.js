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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZU1vZHVsZU9wdGlvbnMudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRDdXJyZW5jeU9iamVjdCIsImN1cnJlbmN5TmFtZUNhc2VzIiwiZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXMiLCJjdXJyZW5jeU5vdW5HZW5kZXIiLCJpbnRlZ2VyIiwiZnJhY3Rpb25hbFBhcnQiLCJmcmFjdGlvbmFsUGFydE1pbkxlbmd0aCIsImRlZmF1bHRNb2R1bGVPcHRpb25zIiwiY3VycmVuY3kiLCJyb3VuZE51bWJlciIsImNvbnZlcnRNaW51c1NpZ25Ub1dvcmQiLCJzaG93TnVtYmVyUGFydHMiLCJmcmFjdGlvbmFsIiwiY29udmVydE51bWJlcnRUb1dvcmRzIiwic2hvd0N1cnJlbmN5IiwiZGVmYXVsdE9wdGlvbnMiLCJfIiwibWVyZ2UiLCJjbG9uZURlZXAiLCJjdXN0b21DdXJyZW5jeSIsIm9wdGlvbnNOYW1lc01hcCIsInVzZU1vZHVsZU9wdGlvbnMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJvcHRpb25zRm9yTW9kdWxlIiwic2V0T3B0aW9uc0Zvck1vZHVsZSIsIm9wdGlvbnNEaWZmZXJlbmNlcyIsIm9iamVjdHNEaWZmIiwidXNlRWZmZWN0Iiwic2F2ZU9wdGlvbnNGb3JNb2R1bGUiLCJ1cGRhdGVPcHRpb25zIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRWYWx1ZSIsInBhdGgiLCJnZXRPcHRpb25QYXRoIiwidXBkYXRlT3B0aW9uVmFsdWVCeVBhdGgiLCJ0eXBlIiwiY2hlY2tUYXJnZXRUeXBlTnVtYmVyIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJyZXN1bHRWYWx1ZSIsImNoZWNrVmFsdWVSYW5nZSIsIm1pbiIsIk51bWJlciIsIm1heCIsInVuZGVmaW5lZCIsIm5ld1ZhbHVlIiwidXBkYXRlZE9wdGlvbnMiLCJzZXQiLCJvcHRpb25zUmVzdWx0Il0sIm1hcHBp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QUE0RUVBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU5ZTIzNjVjZjFhYTM0ZjVlMDIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBvYmplY3RzRGlmZiBmcm9tICdsaWIvZnVuY3Rpb25zL29iamVjdHNEaWZmJ1xuXG5jb25zdCBkZWZhdWx0Q3VycmVuY3lPYmplY3QgPSB7XG4gIGN1cnJlbmN5TmFtZUNhc2VzOiBbJ9GA0YPQsdC70YwnLCAn0YDRg9Cx0LvRjycsICfRgNGD0LHQu9C10LknXSxcbiAgZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXM6IFsn0LrQvtC/0LXQudC60LAnLCAn0LrQvtC/0LXQudC60LgnLCAn0LrQvtC/0LXQtdC6J10sXG4gIGN1cnJlbmN5Tm91bkdlbmRlcjoge1xuICAgIGludGVnZXI6IDAsXG4gICAgZnJhY3Rpb25hbFBhcnQ6IDEsXG4gIH0sXG4gIGZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoOiAyLFxufTtcblxuY29uc3QgZGVmYXVsdE1vZHVsZU9wdGlvbnMgPSB7XG4gIGN1cnJlbmN5OiAncnViJyxcbiAgcm91bmROdW1iZXI6IC0xLFxuICBjb252ZXJ0TWludXNTaWduVG9Xb3JkOiB0cnVlLFxuICBzaG93TnVtYmVyUGFydHM6IHtcbiAgICBpbnRlZ2VyOiB0cnVlLFxuICAgIGZyYWN0aW9uYWw6IHRydWUsXG4gIH0sXG4gIGNvbnZlcnROdW1iZXJ0VG9Xb3Jkczoge1xuICAgIGludGVnZXI6IHRydWUsXG4gICAgZnJhY3Rpb25hbDogZmFsc2UsXG4gIH0sXG4gIHNob3dDdXJyZW5jeToge1xuICAgIGludGVnZXI6IHRydWUsXG4gICAgZnJhY3Rpb25hbDogdHJ1ZSxcbiAgfSxcbn07XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0gXy5tZXJnZShfLmNsb25lRGVlcChkZWZhdWx0TW9kdWxlT3B0aW9ucyksIHtcbiAgY3VzdG9tQ3VycmVuY3k6IF8uY2xvbmVEZWVwKGRlZmF1bHRDdXJyZW5jeU9iamVjdCksXG59KTtcblxuY29uc3Qgb3B0aW9uc05hbWVzTWFwID0ge1xuICAnY3VycmVuY3knOiAnY3VycmVuY3knLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIxJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1sxXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjMnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMl0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwxJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1sxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDMnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMl0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZvcm0taW50ZWdlcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuaW50ZWdlcicsXG4gICdjdXN0b20tY3VycmVuY3ktZm9ybS1mcmFjdGlvbmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5mcmFjdGlvbmFsUGFydCcsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1taW4tbGVuZ3RoJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyxcbiAgJ3JvdW5kLW51bWJlcic6ICdyb3VuZE51bWJlcicsXG4gICdjb252ZXJ0LW1pbnVzLXNpZ24nOiAnY29udmVydE1pbnVzU2lnblRvV29yZCcsXG4gICdzaG93LW51bWJlci1wYXJ0LWludGVnZXInOiAnc2hvd051bWJlclBhcnRzLmludGVnZXInLFxuICAnc2hvdy1udW1iZXItcGFydC1mcmFjdGlvbmFsJzogJ3Nob3dOdW1iZXJQYXJ0cy5mcmFjdGlvbmFsJyxcbiAgJ2NvbnZlcnQtbnVtYmVyLXBhcnQtaW50ZWdlcic6ICdjb252ZXJ0TnVtYmVydFRvV29yZHMuaW50ZWdlcicsXG4gICdjb252ZXJ0LW51bWJlci1wYXJ0LWZyYWN0aW9uYWwnOiAnY29udmVydE51bWJlcnRUb1dvcmRzLmZyYWN0aW9uYWwnLFxuICAnc2hvdy1jdXJyZW5jeS1wYXJ0LWludGVnZXInOiAnc2hvd0N1cnJlbmN5LmludGVnZXInLFxuICAnc2hvdy1jdXJyZW5jeS1wYXJ0LWZyYWN0aW9uYWwnOiAnc2hvd0N1cnJlbmN5LmZyYWN0aW9uYWwnLFxufVxuXG5leHBvcnQgY29uc3QgdXNlTW9kdWxlT3B0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdE9wdGlvbnMpO1xuICBjb25zdCBbb3B0aW9uc0Zvck1vZHVsZSwgc2V0T3B0aW9uc0Zvck1vZHVsZV0gPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0TW9kdWxlT3B0aW9ucyk7XG4gIGNvbnN0IG9wdGlvbnNEaWZmZXJlbmNlcyA9IG9iamVjdHNEaWZmKGRlZmF1bHRNb2R1bGVPcHRpb25zLCBvcHRpb25zRm9yTW9kdWxlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNhdmVPcHRpb25zRm9yTW9kdWxlKG9wdGlvbnMpO1xuICB9LCBbb3B0aW9uc10pXG5cbiAgY29uc3QgdXBkYXRlT3B0aW9ucyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgcGF0aCA9IGdldE9wdGlvblBhdGgobmFtZSk7XG4gICAgKHBhdGggIT09IG51bGwpICYmIHVwZGF0ZU9wdGlvblZhbHVlQnlQYXRoKHBhdGgsIHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZSA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCB0eXBlID0gdGFyZ2V0LnR5cGU7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSBjaGVja1RhcmdldFR5cGVOdW1iZXIodGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHZhbHVlID0gQm9vbGVhbih0YXJnZXQuY2hlY2tlZCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrVGFyZ2V0VHlwZU51bWJlciA9ICh0YXJnZXQpID0+IHtcbiAgICBsZXQgcmVzdWx0VmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgaWYgKHJlc3VsdFZhbHVlICE9PSAnJykgeyBcbiAgICAgIHJlc3VsdFZhbHVlID0gY2hlY2tWYWx1ZVJhbmdlKHRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRWYWx1ZTtcbiAgfTtcblxuICBjb25zdCBjaGVja1ZhbHVlUmFuZ2UgPSAodGFyZ2V0KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0YXJnZXQubWluICE9PSAnJykge1xuICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpID49IE51bWJlcih0YXJnZXQubWluKSA/IHZhbHVlIDogdGFyZ2V0Lm1pbjtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5tYXggIT09ICcnKSB7XG4gICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSkgPD0gTnVtYmVyKHRhcmdldC5taW4pID8gdmFsdWUgOiB0YXJnZXQubWluO1xuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRPcHRpb25QYXRoID0gKG5hbWUpID0+IHtcbiAgICBpZiAob3B0aW9uc05hbWVzTWFwW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBvcHRpb25zTmFtZXNNYXBbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZU9wdGlvblZhbHVlQnlQYXRoID0gKHBhdGgsIG5ld1ZhbHVlKSA9PiB7XG4gICAgbGV0IHVwZGF0ZWRPcHRpb25zID0gXy5jbG9uZURlZXAob3B0aW9ucyk7XG4gICAgdXBkYXRlZE9wdGlvbnMgPSBfLnNldCh1cGRhdGVkT3B0aW9ucywgcGF0aCwgbmV3VmFsdWUpO1xuICAgIHNldE9wdGlvbnModXBkYXRlZE9wdGlvbnMpO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVPcHRpb25zRm9yTW9kdWxlID0gKG9wdGlvbnMpID0+IHtcbiAgICBsZXQgb3B0aW9uc1Jlc3VsdCA9IF8uY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgIGRlbGV0ZSBvcHRpb25zUmVzdWx0LmN1c3RvbUN1cnJlbmN5O1xuICAgIGlmIChvcHRpb25zLmN1cnJlbmN5ID09PSAnY3VzdG9tJykge1xuICAgICAgb3B0aW9uc1Jlc3VsdC5jdXJyZW5jeSA9IG9wdGlvbnMuY3VzdG9tQ3VycmVuY3k7XG4gICAgfVxuICAgIHNldE9wdGlvbnNGb3JNb2R1bGUob3B0aW9uc1Jlc3VsdCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zLFxuICAgIG9wdGlvbnNGb3JNb2R1bGUsXG4gICAgb3B0aW9uc0RpZmZlcmVuY2VzLFxuICAgIHVwZGF0ZU9wdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTW9kdWxlT3B0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=