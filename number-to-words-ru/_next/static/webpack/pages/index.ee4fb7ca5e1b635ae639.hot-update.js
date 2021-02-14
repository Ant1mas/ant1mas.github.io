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
/* harmony import */ var lib_constants_defaultModuleOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/constants/defaultModuleOptions */ "./lib/constants/defaultModuleOptions.ts");
/* harmony import */ var lib_constants_defaultCurrencyObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/constants/defaultCurrencyObject */ "./lib/constants/defaultCurrencyObject.ts");
/* harmony import */ var lib_constants_optionsNamesMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/constants/optionsNamesMap */ "./lib/constants/optionsNamesMap.ts");
/* harmony import */ var lib_constants_optionsValuesTypeNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/constants/optionsValuesTypeNumber */ "./lib/constants/optionsValuesTypeNumber.ts");


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

  var updateSyncedValues = function updateSyncedValues(path) {
    if (false) {}
  };

  var updateOptionValueByPath = function updateOptionValueByPath(name, newValue) {
    var path = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(lib_constants_optionsNamesMap__WEBPACK_IMPORTED_MODULE_6__["default"], [name]);

    console.log('path :>> ', path);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZU1vZHVsZU9wdGlvbnMudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRPcHRpb25zIiwiXyIsIm1lcmdlIiwiY2xvbmVEZWVwIiwiREVGQVVMVF9NT0RVTEVfT1BUSU9OUyIsImN1c3RvbUN1cnJlbmN5IiwiREVGQVVMVF9DVVJSRU5DWV9PQkpFQ1QiLCJ1c2VNb2R1bGVPcHRpb25zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwib3B0aW9uc0Zvck1vZHVsZSIsInNldE9wdGlvbnNGb3JNb2R1bGUiLCJvcHRpb25zRGlmZmVyZW5jZXMiLCJvYmplY3RzRGlmZiIsInVzZUVmZmVjdCIsInNhdmVPcHRpb25zRm9yTW9kdWxlIiwidXBkYXRlT3B0aW9ucyIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJ1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCIsInR5cGUiLCJjaGVja1ZhbHVlUmFuZ2UiLCJCb29sZWFuIiwiY2hlY2tlZCIsIm1pbiIsIk51bWJlciIsIm1heCIsImNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIiLCJvYmplY3QiLCJ2YWx1ZXNQYXRocyIsInJlc3VsdE9iamVjdCIsInNvbWUiLCJwYXRoIiwidmFsdWVCeVBhdGgiLCJnZXQiLCJ1bmRlZmluZWQiLCJzZXQiLCJ1cGRhdGVTeW5jZWRWYWx1ZXMiLCJuZXdWYWx1ZSIsIk9QVElPTlNfTkFNRVNfTUFQIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZWRPcHRpb25zIiwib3B0aW9uc1Jlc3VsdCIsImN1cnJlbmN5IiwiT1BUSU9OU19WQUxVRVNfVFlQRV9OVU1CRVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsY0FBYyxHQUFHQyw2Q0FBQyxDQUFDQyxLQUFGLENBQVFELDZDQUFD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QUFDZ0IsYUFBRCxFQUFnQkUsNkVBQWhCLENBQXpDO0FBQ0FyQyx1QkFBbUIsQ0FBQ21DLGFBQUQsQ0FBbkI7QUFDRCxHQVJEOztBQVVBLFNBQU87QUFDTHRDLFdBQU8sRUFBUEEsT0FESztBQUVMRSxvQkFBZ0IsRUFBaEJBLGdCQUZLO0FBR0xFLHNCQUFrQixFQUFsQkEsa0JBSEs7QUFJTEksaUJBQWEsRUFBYkE7QUFKSyxHQUFQO0FBTUQsQ0FsRk07O0dBQU1YLGdCOztBQW9GRUEsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWU0ZmI3Y2E1ZTFiNjM1YWU2MzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG9iamVjdHNEaWZmIGZyb20gJ2xpYi9mdW5jdGlvbnMvb2JqZWN0c0RpZmYnXG5pbXBvcnQgREVGQVVMVF9NT0RVTEVfT1BUSU9OUyBmcm9tICdsaWIvY29uc3RhbnRzL2RlZmF1bHRNb2R1bGVPcHRpb25zJztcbmltcG9ydCBERUZBVUxUX0NVUlJFTkNZX09CSkVDVCBmcm9tICdsaWIvY29uc3RhbnRzL2RlZmF1bHRDdXJyZW5jeU9iamVjdCc7XG5pbXBvcnQgT1BUSU9OU19OQU1FU19NQVAgZnJvbSAnbGliL2NvbnN0YW50cy9vcHRpb25zTmFtZXNNYXAnO1xuaW1wb3J0IE9QVElPTlNfVkFMVUVTX1RZUEVfTlVNQkVSIGZyb20gJ2xpYi9jb25zdGFudHMvb3B0aW9uc1ZhbHVlc1R5cGVOdW1iZXInO1xuaW1wb3J0IE9QVElPTlNfU1lOQ0VEX1ZBTFVFU19NQVAgZnJvbSAnbGliL2NvbnN0YW50cy9vcHRpb25zU3luY2VkVmFsdWVzTWFwJztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBfLm1lcmdlKF8uY2xvbmVEZWVwKERFRkFVTFRfTU9EVUxFX09QVElPTlMpLCB7XG4gIGN1c3RvbUN1cnJlbmN5OiBfLmNsb25lRGVlcChERUZBVUxUX0NVUlJFTkNZX09CSkVDVCksXG59KTtcblxuZXhwb3J0IGNvbnN0IHVzZU1vZHVsZU9wdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRPcHRpb25zKTtcbiAgY29uc3QgW29wdGlvbnNGb3JNb2R1bGUsIHNldE9wdGlvbnNGb3JNb2R1bGVdID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9NT0RVTEVfT1BUSU9OUyk7XG4gIGNvbnN0IG9wdGlvbnNEaWZmZXJlbmNlcyA9IG9iamVjdHNEaWZmKERFRkFVTFRfTU9EVUxFX09QVElPTlMsIG9wdGlvbnNGb3JNb2R1bGUpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2F2ZU9wdGlvbnNGb3JNb2R1bGUob3B0aW9ucyk7XG4gIH0sIFtvcHRpb25zXSlcblxuICBjb25zdCB1cGRhdGVPcHRpb25zID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUoZXZlbnQudGFyZ2V0KTtcbiAgICB1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aChuYW1lLCB2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWUgPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHRhcmdldC50eXBlO1xuICAgIGxldCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gY2hlY2tWYWx1ZVJhbmdlKHRhcmdldCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICB2YWx1ZSA9IEJvb2xlYW4odGFyZ2V0LmNoZWNrZWQpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjb25zdCBjaGVja1ZhbHVlUmFuZ2UgPSAodGFyZ2V0KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgIGlmICh0YXJnZXQubWluICE9PSAnJykge1xuICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSkgPj0gTnVtYmVyKHRhcmdldC5taW4pID8gdmFsdWUgOiB0YXJnZXQubWluO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldC5tYXggIT09ICcnKSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSA8PSBOdW1iZXIodGFyZ2V0Lm1pbikgPyB2YWx1ZSA6IHRhcmdldC5taW47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9O1xuXG4gIGNvbnN0IGNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIgPSAob2JqZWN0LCB2YWx1ZXNQYXRocykgPT4ge1xuICAgIGxldCByZXN1bHRPYmplY3QgPSBfLmNsb25lRGVlcChvYmplY3QpO1xuICAgIHZhbHVlc1BhdGhzLnNvbWUoKHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlQnlQYXRoID0gXy5nZXQocmVzdWx0T2JqZWN0LCBwYXRoKTtcbiAgICAgIGlmICh2YWx1ZUJ5UGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdE9iamVjdCA9IF8uc2V0KHJlc3VsdE9iamVjdCwgcGF0aCwgTnVtYmVyKHZhbHVlQnlQYXRoKSk7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0T2JqZWN0XG4gIH1cblxuICBjb25zdCB1cGRhdGVTeW5jZWRWYWx1ZXMgPSAocGF0aCkgPT4ge1xuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdXBkYXRlT3B0aW9uVmFsdWVCeVBhdGggPSAobmFtZSwgbmV3VmFsdWUpID0+IHtcbiAgICBjb25zdCBwYXRoID0gXy5nZXQoT1BUSU9OU19OQU1FU19NQVAsIFtuYW1lXSk7XG4gICAgY29uc29sZS5sb2coJ3BhdGggOj4+ICcsIHBhdGgpO1xuICAgIGlmIChwYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCB1cGRhdGVkT3B0aW9ucyA9IF8uY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgICAgdXBkYXRlZE9wdGlvbnMgPSBfLnNldCh1cGRhdGVkT3B0aW9ucywgcGF0aCwgbmV3VmFsdWUpO1xuICAgICAgc2V0T3B0aW9ucyh1cGRhdGVkT3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNhdmVPcHRpb25zRm9yTW9kdWxlID0gKG9wdGlvbnMpID0+IHtcbiAgICBsZXQgb3B0aW9uc1Jlc3VsdCA9IF8uY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgIGRlbGV0ZSBvcHRpb25zUmVzdWx0LmN1c3RvbUN1cnJlbmN5O1xuICAgIGlmIChvcHRpb25zLmN1cnJlbmN5ID09PSAnY3VzdG9tJykge1xuICAgICAgb3B0aW9uc1Jlc3VsdC5jdXJyZW5jeSA9IG9wdGlvbnMuY3VzdG9tQ3VycmVuY3k7XG4gICAgfVxuICAgIG9wdGlvbnNSZXN1bHQgPSBjb252ZXJ0VmFsdWVzVG9UeXBlTnVtYmVyKG9wdGlvbnNSZXN1bHQsIE9QVElPTlNfVkFMVUVTX1RZUEVfTlVNQkVSKTtcbiAgICBzZXRPcHRpb25zRm9yTW9kdWxlKG9wdGlvbnNSZXN1bHQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgb3B0aW9ucyxcbiAgICBvcHRpb25zRm9yTW9kdWxlLFxuICAgIG9wdGlvbnNEaWZmZXJlbmNlcyxcbiAgICB1cGRhdGVPcHRpb25zLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1vZHVsZU9wdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9