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

  var updateSyncedValues = function updateSyncedValues(optionsObject, name, newValue) {
    var path = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(lib_constants_optionsSyncedValuesMap__WEBPACK_IMPORTED_MODULE_8__["default"], [name]);

    if (path !== undefined) {
      var updatedOptions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(optionsObject);

      updatedOptions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.set(updatedOptions, path, newValue);
    }

    return optionsObject;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZU1vZHVsZU9wdGlvbnMudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRPcHRpb25zIiwiXyIsIm1lcmdlIiwiY2xvbmVEZWVwIiwiREVGQVVMVF9NT0RVTEVfT1BUSU9OUyIsImN1c3RvbUN1cnJlbmN5IiwiREVGQVVMVF9DVVJSRU5DWV9PQkpFQ1QiLCJ1c2VNb2R1bGVPcHRpb25zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwib3B0aW9uc0Zvck1vZHVsZSIsInNldE9wdGlvbnNGb3JNb2R1bGUiLCJvcHRpb25zRGlmZmVyZW5jZXMiLCJvYmplY3RzRGlmZiIsInVzZUVmZmVjdCIsInNhdmVPcHRpb25zRm9yTW9kdWxlIiwidXBkYXRlT3B0aW9ucyIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJ1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCIsInR5cGUiLCJjaGVja1ZhbHVlUmFuZ2UiLCJCb29sZWFuIiwiY2hlY2tlZCIsIm1pbiIsIk51bWJlciIsIm1heCIsImNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIiLCJvYmplY3QiLCJ2YWx1ZXNQYXRocyIsInJlc3VsdE9iamVjdCIsInNvbWUiLCJwYXRoIiwidmFsdWVCeVBhdGgiLCJnZXQiLCJ1bmRlZmluZWQiLCJzZXQiLCJ1cGRhdGVTeW5jZWRWYWx1ZXMiLCJvcHRpb25zT2JqZWN0IiwibmV3VmFsdWUiLCJPUFRJT05TX1NZTkNFRF9WQUxVRVNfTUFQIiwidXBkYXRlZE9wdGlvbnMiLCJPUFRJT05TX05BTUVTX01BUCIsIm9wdGlvbnNSZXN1bHQiLCJjdXJyZW5jeSIsIk9QVElPTlNfVkFMVUVTX1RZUEVfTlVNQkVSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMs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U0EsTUFBTTdCLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ1AsT0FBRCxFQUFhO0FBQ3hDLFFBQUlzQyxhQUFhLEdBQUcvQyw2Q0FBQyxDQUFDRSxTQUFGLENBQVlPLE9BQVosQ0FBcEI7O0FBQ0EsV0FBT3NDLGFBQWEsQ0FBQzNDLGNBQXJCOztBQUNBLFFBQUlLLE9BQU8sQ0FBQ3VDLFFBQVIsS0FBcUIsUUFBekIsRUFBbUM7QUFDakNELG1CQUFhLENBQUNDLFFBQWQsR0FBeUJ2QyxPQUFPLENBQUNMLGNBQWpDO0FBQ0Q7O0FBQ0QyQyxpQkFBYSxHQUFHaEIseUJBQXlCLENBQUNnQixhQUFELEVBQWdCRSw2RUFBaEIsQ0FBekM7QUFDQXJDLHVCQUFtQixDQUFDbUMsYUFBRCxDQUFuQjtBQUNELEdBUkQ7O0FBVUEsU0FBTztBQUNMdEMsV0FBTyxFQUFQQSxPQURLO0FBRUxFLG9CQUFnQixFQUFoQkEsZ0JBRks7QUFHTEUsc0JBQWtCLEVBQWxCQSxrQkFISztBQUlMSSxpQkFBYSxFQUFiQTtBQUpLLEdBQVA7QUFNRCxDQXBGTTs7R0FBTVgsZ0I7O0FBc0ZFQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40N2NmNmZhZTVkMWY3NzlkZGQ1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgb2JqZWN0c0RpZmYgZnJvbSAnbGliL2Z1bmN0aW9ucy9vYmplY3RzRGlmZidcbmltcG9ydCBERUZBVUxUX01PRFVMRV9PUFRJT05TIGZyb20gJ2xpYi9jb25zdGFudHMvZGVmYXVsdE1vZHVsZU9wdGlvbnMnO1xuaW1wb3J0IERFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUIGZyb20gJ2xpYi9jb25zdGFudHMvZGVmYXVsdEN1cnJlbmN5T2JqZWN0JztcbmltcG9ydCBPUFRJT05TX05BTUVTX01BUCBmcm9tICdsaWIvY29uc3RhbnRzL29wdGlvbnNOYW1lc01hcCc7XG5pbXBvcnQgT1BUSU9OU19WQUxVRVNfVFlQRV9OVU1CRVIgZnJvbSAnbGliL2NvbnN0YW50cy9vcHRpb25zVmFsdWVzVHlwZU51bWJlcic7XG5pbXBvcnQgT1BUSU9OU19TWU5DRURfVkFMVUVTX01BUCBmcm9tICdsaWIvY29uc3RhbnRzL29wdGlvbnNTeW5jZWRWYWx1ZXNNYXAnO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IF8ubWVyZ2UoXy5jbG9uZURlZXAoREVGQVVMVF9NT0RVTEVfT1BUSU9OUyksIHtcbiAgY3VzdG9tQ3VycmVuY3k6IF8uY2xvbmVEZWVwKERFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdXNlTW9kdWxlT3B0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdE9wdGlvbnMpO1xuICBjb25zdCBbb3B0aW9uc0Zvck1vZHVsZSwgc2V0T3B0aW9uc0Zvck1vZHVsZV0gPSBSZWFjdC51c2VTdGF0ZShERUZBVUxUX01PRFVMRV9PUFRJT05TKTtcbiAgY29uc3Qgb3B0aW9uc0RpZmZlcmVuY2VzID0gb2JqZWN0c0RpZmYoREVGQVVMVF9NT0RVTEVfT1BUSU9OUywgb3B0aW9uc0Zvck1vZHVsZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzYXZlT3B0aW9uc0Zvck1vZHVsZShvcHRpb25zKTtcbiAgfSwgW29wdGlvbnNdKVxuXG4gIGNvbnN0IHVwZGF0ZU9wdGlvbnMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShldmVudC50YXJnZXQpO1xuICAgIHVwZGF0ZU9wdGlvblZhbHVlQnlQYXRoKG5hbWUsIHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZSA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCB0eXBlID0gdGFyZ2V0LnR5cGU7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSBjaGVja1ZhbHVlUmFuZ2UodGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHZhbHVlID0gQm9vbGVhbih0YXJnZXQuY2hlY2tlZCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrVmFsdWVSYW5nZSA9ICh0YXJnZXQpID0+IHtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgaWYgKHRhcmdldC5taW4gIT09ICcnKSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSA+PSBOdW1iZXIodGFyZ2V0Lm1pbikgPyB2YWx1ZSA6IHRhcmdldC5taW47XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0Lm1heCAhPT0gJycpIHtcbiAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpIDw9IE51bWJlcih0YXJnZXQubWluKSA/IHZhbHVlIDogdGFyZ2V0Lm1pbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH07XG5cbiAgY29uc3QgY29udmVydFZhbHVlc1RvVHlwZU51bWJlciA9IChvYmplY3QsIHZhbHVlc1BhdGhzKSA9PiB7XG4gICAgbGV0IHJlc3VsdE9iamVjdCA9IF8uY2xvbmVEZWVwKG9iamVjdCk7XG4gICAgdmFsdWVzUGF0aHMuc29tZSgocGF0aCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWVCeVBhdGggPSBfLmdldChyZXN1bHRPYmplY3QsIHBhdGgpO1xuICAgICAgaWYgKHZhbHVlQnlQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0T2JqZWN0ID0gXy5zZXQocmVzdWx0T2JqZWN0LCBwYXRoLCBOdW1iZXIodmFsdWVCeVBhdGgpKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRPYmplY3RcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVN5bmNlZFZhbHVlcyA9IChvcHRpb25zT2JqZWN0LCBuYW1lLCBuZXdWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBfLmdldChPUFRJT05TX1NZTkNFRF9WQUxVRVNfTUFQLCBbbmFtZV0pO1xuICAgIGlmIChwYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCB1cGRhdGVkT3B0aW9ucyA9IF8uY2xvbmVEZWVwKG9wdGlvbnNPYmplY3QpO1xuICAgICAgdXBkYXRlZE9wdGlvbnMgPSBfLnNldCh1cGRhdGVkT3B0aW9ucywgcGF0aCwgbmV3VmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uc09iamVjdDtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZU9wdGlvblZhbHVlQnlQYXRoID0gKG5hbWUsIG5ld1ZhbHVlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IF8uZ2V0KE9QVElPTlNfTkFNRVNfTUFQLCBbbmFtZV0pO1xuICAgIGlmIChwYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCB1cGRhdGVkT3B0aW9ucyA9IF8uY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgICAgdXBkYXRlZE9wdGlvbnMgPSBfLnNldCh1cGRhdGVkT3B0aW9ucywgcGF0aCwgbmV3VmFsdWUpO1xuICAgICAgc2V0T3B0aW9ucyh1cGRhdGVkT3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNhdmVPcHRpb25zRm9yTW9kdWxlID0gKG9wdGlvbnMpID0+IHtcbiAgICBsZXQgb3B0aW9uc1Jlc3VsdCA9IF8uY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgIGRlbGV0ZSBvcHRpb25zUmVzdWx0LmN1c3RvbUN1cnJlbmN5O1xuICAgIGlmIChvcHRpb25zLmN1cnJlbmN5ID09PSAnY3VzdG9tJykge1xuICAgICAgb3B0aW9uc1Jlc3VsdC5jdXJyZW5jeSA9IG9wdGlvbnMuY3VzdG9tQ3VycmVuY3k7XG4gICAgfVxuICAgIG9wdGlvbnNSZXN1bHQgPSBjb252ZXJ0VmFsdWVzVG9UeXBlTnVtYmVyKG9wdGlvbnNSZXN1bHQsIE9QVElPTlNfVkFMVUVTX1RZUEVfTlVNQkVSKTtcbiAgICBzZXRPcHRpb25zRm9yTW9kdWxlKG9wdGlvbnNSZXN1bHQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgb3B0aW9ucyxcbiAgICBvcHRpb25zRm9yTW9kdWxlLFxuICAgIG9wdGlvbnNEaWZmZXJlbmNlcyxcbiAgICB1cGRhdGVPcHRpb25zLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1vZHVsZU9wdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9