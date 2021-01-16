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

    console.log(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(optionsResult, optionsValuesTypeNumber[0]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZU1vZHVsZU9wdGlvbnMudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRDdXJyZW5jeU9iamVjdCIsImN1cnJlbmN5TmFtZUNhc2VzIiwiZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXMiLCJjdXJyZW5jeU5vdW5HZW5kZXIiLCJpbnRlZ2VyIiwiZnJhY3Rpb25hbFBhcnQiLCJmcmFjdGlvbmFsUGFydE1pbkxlbmd0aCIsImRlZmF1bHRNb2R1bGVPcHRpb25zIiwiY3VycmVuY3kiLCJyb3VuZE51bWJlciIsImNvbnZlcnRNaW51c1NpZ25Ub1dvcmQiLCJzaG93TnVtYmVyUGFydHMiLCJmcmFjdGlvbmFsIiwiY29udmVydE51bWJlcnRUb1dvcmRzIiwic2hvd0N1cnJlbmN5IiwiZGVmYXVsdE9wdGlvbnMiLCJfIiwibWVyZ2UiLCJjbG9uZURlZXAiLCJjdXN0b21DdXJyZW5jeSIsIm9wdGlvbnNWYWx1ZXNUeXBlTnVtYmVyIiwib3B0aW9uc05hbWVzTWFwIiwidXNlTW9kdWxlT3B0aW9ucyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsIm9wdGlvbnNGb3JNb2R1bGUiLCJzZXRPcHRpb25zRm9yTW9kdWxlIiwib3B0aW9uc0RpZmZlcmVuY2VzIiwib2JqZWN0c0RpZmYiLCJ1c2VFZmZlY3QiLCJzYXZlT3B0aW9uc0Zvck1vZHVsZSIsInVwZGF0ZU9wdGlvbnMiLCJldmVudCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldFZhbHVlIiwicGF0aCIsImdldE9wdGlvblBhdGgiLCJ1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCIsInR5cGUiLCJjaGVja1RhcmdldFR5cGVOdW1iZXIiLCJCb29sZWFuIiwiY2hlY2tlZCIsInJlc3VsdFZhbHVlIiwiY2hlY2tWYWx1ZVJhbmdlIiwibWluIiwiTnVtYmVyIiwibWF4IiwidW5kZWZpbmVkIiwibmV3VmFsdWUiLCJ1cGRhdGVkT3B0aW9ucyIsInNl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QUFNSCxhQUFOLEVBQXFCbkMsdUJBQXVCLENBQUMsQ0FBRCxDQUE1QyxDQUFaO0FBQ0FRLHVCQUFtQixDQUFDMkIsYUFBRCxDQUFuQjtBQUNELEdBUkQ7O0FBVUEsU0FBTztBQUNMOUIsV0FBTyxFQUFQQSxPQURLO0FBRUxFLG9CQUFnQixFQUFoQkEsZ0JBRks7QUFHTEUsc0JBQWtCLEVBQWxCQSxrQkFISztBQUlMSSxpQkFBYSxFQUFiQTtBQUpLLEdBQVA7QUFNRCxDQTNFTTs7R0FBTVgsZ0I7O0FBNkVFQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNDQ4MTEzYWQwNmE3OTIwNDM1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgb2JqZWN0c0RpZmYgZnJvbSAnbGliL2Z1bmN0aW9ucy9vYmplY3RzRGlmZidcblxuY29uc3QgZGVmYXVsdEN1cnJlbmN5T2JqZWN0ID0ge1xuICBjdXJyZW5jeU5hbWVDYXNlczogWyfRgNGD0LHQu9GMJywgJ9GA0YPQsdC70Y8nLCAn0YDRg9Cx0LvQtdC5J10sXG4gIGZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzOiBbJ9C60L7Qv9C10LnQutCwJywgJ9C60L7Qv9C10LnQutC4JywgJ9C60L7Qv9C10LXQuiddLFxuICBjdXJyZW5jeU5vdW5HZW5kZXI6IHtcbiAgICBpbnRlZ2VyOiAwLFxuICAgIGZyYWN0aW9uYWxQYXJ0OiAxLFxuICB9LFxuICBmcmFjdGlvbmFsUGFydE1pbkxlbmd0aDogMixcbn07XG5cbmNvbnN0IGRlZmF1bHRNb2R1bGVPcHRpb25zID0ge1xuICBjdXJyZW5jeTogJ3J1YicsXG4gIHJvdW5kTnVtYmVyOiAtMSxcbiAgY29udmVydE1pbnVzU2lnblRvV29yZDogdHJ1ZSxcbiAgc2hvd051bWJlclBhcnRzOiB7XG4gICAgaW50ZWdlcjogdHJ1ZSxcbiAgICBmcmFjdGlvbmFsOiB0cnVlLFxuICB9LFxuICBjb252ZXJ0TnVtYmVydFRvV29yZHM6IHtcbiAgICBpbnRlZ2VyOiB0cnVlLFxuICAgIGZyYWN0aW9uYWw6IGZhbHNlLFxuICB9LFxuICBzaG93Q3VycmVuY3k6IHtcbiAgICBpbnRlZ2VyOiB0cnVlLFxuICAgIGZyYWN0aW9uYWw6IHRydWUsXG4gIH0sXG59O1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IF8ubWVyZ2UoXy5jbG9uZURlZXAoZGVmYXVsdE1vZHVsZU9wdGlvbnMpLCB7XG4gIGN1c3RvbUN1cnJlbmN5OiBfLmNsb25lRGVlcChkZWZhdWx0Q3VycmVuY3lPYmplY3QpLFxufSk7XG5cbmNvbnN0IG9wdGlvbnNWYWx1ZXNUeXBlTnVtYmVyID0gW1xuICAncm91bmROdW1iZXInLFxuICAnY3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmludGVnZXInLFxuICAnY3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmZyYWN0aW9uYWxQYXJ0JyxcbiAgJ2N1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyxcbl07XG5cbmNvbnN0IG9wdGlvbnNOYW1lc01hcCA9IHtcbiAgJ2N1cnJlbmN5JzogJ2N1cnJlbmN5JyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMSc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1swXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIzJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzJdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMSc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1swXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwzJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzJdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mb3JtLWludGVnZXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmludGVnZXInLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZvcm0tZnJhY3Rpb25hbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuZnJhY3Rpb25hbFBhcnQnLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtbWluLWxlbmd0aCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE1pbkxlbmd0aCcsXG4gICdyb3VuZC1udW1iZXInOiAncm91bmROdW1iZXInLFxuICAnY29udmVydC1taW51cy1zaWduJzogJ2NvbnZlcnRNaW51c1NpZ25Ub1dvcmQnLFxuICAnc2hvdy1udW1iZXItcGFydC1pbnRlZ2VyJzogJ3Nob3dOdW1iZXJQYXJ0cy5pbnRlZ2VyJyxcbiAgJ3Nob3ctbnVtYmVyLXBhcnQtZnJhY3Rpb25hbCc6ICdzaG93TnVtYmVyUGFydHMuZnJhY3Rpb25hbCcsXG4gICdjb252ZXJ0LW51bWJlci1wYXJ0LWludGVnZXInOiAnY29udmVydE51bWJlcnRUb1dvcmRzLmludGVnZXInLFxuICAnY29udmVydC1udW1iZXItcGFydC1mcmFjdGlvbmFsJzogJ2NvbnZlcnROdW1iZXJ0VG9Xb3Jkcy5mcmFjdGlvbmFsJyxcbiAgJ3Nob3ctY3VycmVuY3ktcGFydC1pbnRlZ2VyJzogJ3Nob3dDdXJyZW5jeS5pbnRlZ2VyJyxcbiAgJ3Nob3ctY3VycmVuY3ktcGFydC1mcmFjdGlvbmFsJzogJ3Nob3dDdXJyZW5jeS5mcmFjdGlvbmFsJyxcbn1cblxuZXhwb3J0IGNvbnN0IHVzZU1vZHVsZU9wdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRPcHRpb25zKTtcbiAgY29uc3QgW29wdGlvbnNGb3JNb2R1bGUsIHNldE9wdGlvbnNGb3JNb2R1bGVdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdE1vZHVsZU9wdGlvbnMpO1xuICBjb25zdCBvcHRpb25zRGlmZmVyZW5jZXMgPSBvYmplY3RzRGlmZihkZWZhdWx0TW9kdWxlT3B0aW9ucywgb3B0aW9uc0Zvck1vZHVsZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzYXZlT3B0aW9uc0Zvck1vZHVsZShvcHRpb25zKTtcbiAgfSwgW29wdGlvbnNdKVxuXG4gIGNvbnN0IHVwZGF0ZU9wdGlvbnMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShldmVudC50YXJnZXQpO1xuICAgIGNvbnN0IHBhdGggPSBnZXRPcHRpb25QYXRoKG5hbWUpO1xuICAgIChwYXRoICE9PSBudWxsKSAmJiB1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aChwYXRoLCB2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWUgPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHRhcmdldC50eXBlO1xuICAgIGxldCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gY2hlY2tUYXJnZXRUeXBlTnVtYmVyKHRhcmdldCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICB2YWx1ZSA9IEJvb2xlYW4odGFyZ2V0LmNoZWNrZWQpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjb25zdCBjaGVja1RhcmdldFR5cGVOdW1iZXIgPSAodGFyZ2V0KSA9PiB7XG4gICAgbGV0IHJlc3VsdFZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGlmIChyZXN1bHRWYWx1ZSAhPT0gJycpIHsgXG4gICAgICByZXN1bHRWYWx1ZSA9IGNoZWNrVmFsdWVSYW5nZSh0YXJnZXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0VmFsdWU7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tWYWx1ZVJhbmdlID0gKHRhcmdldCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBpZiAodGFyZ2V0Lm1pbiAhPT0gJycpIHtcbiAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSA+PSBOdW1iZXIodGFyZ2V0Lm1pbikgPyB2YWx1ZSA6IHRhcmdldC5taW47XG4gICAgfVxuICAgIGlmICh0YXJnZXQubWF4ICE9PSAnJykge1xuICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpIDw9IE51bWJlcih0YXJnZXQubWluKSA/IHZhbHVlIDogdGFyZ2V0Lm1pbjtcbiAgICB9XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0T3B0aW9uUGF0aCA9IChuYW1lKSA9PiB7XG4gICAgaWYgKG9wdGlvbnNOYW1lc01hcFtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc05hbWVzTWFwW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCA9IChwYXRoLCBuZXdWYWx1ZSkgPT4ge1xuICAgIGxldCB1cGRhdGVkT3B0aW9ucyA9IF8uY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgIHVwZGF0ZWRPcHRpb25zID0gXy5zZXQodXBkYXRlZE9wdGlvbnMsIHBhdGgsIG5ld1ZhbHVlKTtcbiAgICBzZXRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKTtcbiAgfTtcblxuICBjb25zdCBzYXZlT3B0aW9uc0Zvck1vZHVsZSA9IChvcHRpb25zKSA9PiB7XG4gICAgbGV0IG9wdGlvbnNSZXN1bHQgPSBfLmNsb25lRGVlcChvcHRpb25zKTtcbiAgICBkZWxldGUgb3B0aW9uc1Jlc3VsdC5jdXN0b21DdXJyZW5jeTtcbiAgICBpZiAob3B0aW9ucy5jdXJyZW5jeSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgIG9wdGlvbnNSZXN1bHQuY3VycmVuY3kgPSBvcHRpb25zLmN1c3RvbUN1cnJlbmN5O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhfLmdldChvcHRpb25zUmVzdWx0LCBvcHRpb25zVmFsdWVzVHlwZU51bWJlclswXSkpO1xuICAgIHNldE9wdGlvbnNGb3JNb2R1bGUob3B0aW9uc1Jlc3VsdCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zLFxuICAgIG9wdGlvbnNGb3JNb2R1bGUsXG4gICAgb3B0aW9uc0RpZmZlcmVuY2VzLFxuICAgIHVwZGF0ZU9wdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTW9kdWxlT3B0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=