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

  var getOptionPath = function getOptionPath(name) {
    if (lib_constants_optionsNamesMap__WEBPACK_IMPORTED_MODULE_6__["default"][name] !== undefined) {
      return lib_constants_optionsNamesMap__WEBPACK_IMPORTED_MODULE_6__["default"][name];
    }

    return undefined;
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
    // const path = getOptionPath(name);
    var path = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZU1vZHVsZU9wdGlvbnMudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRPcHRpb25zIiwiXyIsIm1lcmdlIiwiY2xvbmVEZWVwIiwiREVGQVVMVF9NT0RVTEVfT1BUSU9OUyIsImN1c3RvbUN1cnJlbmN5IiwiREVGQVVMVF9DVVJSRU5DWV9PQkpFQ1QiLCJ1c2VNb2R1bGVPcHRpb25zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwib3B0aW9uc0Zvck1vZHVsZSIsInNldE9wdGlvbnNGb3JNb2R1bGUiLCJvcHRpb25zRGlmZmVyZW5jZXMiLCJvYmplY3RzRGlmZiIsInVzZUVmZmVjdCIsInNhdmVPcHRpb25zRm9yTW9kdWxlIiwidXBkYXRlT3B0aW9ucyIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJ1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCIsInR5cGUiLCJjaGVja1ZhbHVlUmFuZ2UiLCJCb29sZWFuIiwiY2hlY2tlZCIsIm1pbiIsIk51bWJlciIsIm1heCIsImdldE9wdGlvblBhdGgiLCJPUFRJT05TX05BTUVTX01BUCIsInVuZGVmaW5lZCIsImNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIiLCJvYmplY3QiLCJ2YWx1ZXNQYXRocyIsInJlc3VsdE9iamVjdCIsInNvbWUiLCJwYXRoIiwidmFsdWVCeVBhdGgiLCJnZXQiLCJzZXQiLCJ1cGRhdGVTeW5jZWRWYWx1ZXMiLCJuZXdWYWx1ZSIsInVwZGF0ZWRPcHRpb25zIiwib3B0aW9uc1Jlc3VsdCIsImN1cnJlbmN5IiwiT1BUSU9OU19WQUxVRVNfVFlQRV9OVU1CRVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsY0FBYyxHQUFHQyw2Q0FBQyxDQUFDQyxLQUFGLENBQVFELDZDQUFD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QixRQUF6QixFQUFtQztBQUNqQ0QsbUJBQWEsQ0FBQ0MsUUFBZCxHQUF5QnRDLE9BQU8sQ0FBQ0wsY0FBakM7QUFDRDs7QUFDRDBDLGlCQUFhLEdBQUdaLHlCQUF5QixDQUFDWSxhQUFELEVBQWdCRSw2RUFBaEIsQ0FBekM7QUFDQXBDLHVCQUFtQixDQUFDa0MsYUFBRCxDQUFuQjtBQUNELEdBUkQ7O0FBVUEsU0FBTztBQUNMckMsV0FBTyxFQUFQQSxPQURLO0FBRUxFLG9CQUFnQixFQUFoQkEsZ0JBRks7QUFHTEUsc0JBQWtCLEVBQWxCQSxrQkFISztBQUlMSSxpQkFBYSxFQUFiQTtBQUpLLEdBQVA7QUFNRCxDQXpGTTs7R0FBTVgsZ0I7O0FBMkZFQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iOTdmOTczZTllZjY4M2IxNTVkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgb2JqZWN0c0RpZmYgZnJvbSAnbGliL2Z1bmN0aW9ucy9vYmplY3RzRGlmZidcbmltcG9ydCBERUZBVUxUX01PRFVMRV9PUFRJT05TIGZyb20gJ2xpYi9jb25zdGFudHMvZGVmYXVsdE1vZHVsZU9wdGlvbnMnO1xuaW1wb3J0IERFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUIGZyb20gJ2xpYi9jb25zdGFudHMvZGVmYXVsdEN1cnJlbmN5T2JqZWN0JztcbmltcG9ydCBPUFRJT05TX05BTUVTX01BUCBmcm9tICdsaWIvY29uc3RhbnRzL29wdGlvbnNOYW1lc01hcCc7XG5pbXBvcnQgT1BUSU9OU19WQUxVRVNfVFlQRV9OVU1CRVIgZnJvbSAnbGliL2NvbnN0YW50cy9vcHRpb25zVmFsdWVzVHlwZU51bWJlcic7XG5pbXBvcnQgT1BUSU9OU19TWU5DRURfVkFMVUVTX01BUCBmcm9tICdsaWIvY29uc3RhbnRzL29wdGlvbnNTeW5jZWRWYWx1ZXNNYXAnO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IF8ubWVyZ2UoXy5jbG9uZURlZXAoREVGQVVMVF9NT0RVTEVfT1BUSU9OUyksIHtcbiAgY3VzdG9tQ3VycmVuY3k6IF8uY2xvbmVEZWVwKERFRkFVTFRfQ1VSUkVOQ1lfT0JKRUNUKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdXNlTW9kdWxlT3B0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdE9wdGlvbnMpO1xuICBjb25zdCBbb3B0aW9uc0Zvck1vZHVsZSwgc2V0T3B0aW9uc0Zvck1vZHVsZV0gPSBSZWFjdC51c2VTdGF0ZShERUZBVUxUX01PRFVMRV9PUFRJT05TKTtcbiAgY29uc3Qgb3B0aW9uc0RpZmZlcmVuY2VzID0gb2JqZWN0c0RpZmYoREVGQVVMVF9NT0RVTEVfT1BUSU9OUywgb3B0aW9uc0Zvck1vZHVsZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzYXZlT3B0aW9uc0Zvck1vZHVsZShvcHRpb25zKTtcbiAgfSwgW29wdGlvbnNdKVxuXG4gIGNvbnN0IHVwZGF0ZU9wdGlvbnMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShldmVudC50YXJnZXQpO1xuICAgIHVwZGF0ZU9wdGlvblZhbHVlQnlQYXRoKG5hbWUsIHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZSA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCB0eXBlID0gdGFyZ2V0LnR5cGU7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSBjaGVja1ZhbHVlUmFuZ2UodGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHZhbHVlID0gQm9vbGVhbih0YXJnZXQuY2hlY2tlZCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrVmFsdWVSYW5nZSA9ICh0YXJnZXQpID0+IHtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgaWYgKHRhcmdldC5taW4gIT09ICcnKSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSA+PSBOdW1iZXIodGFyZ2V0Lm1pbikgPyB2YWx1ZSA6IHRhcmdldC5taW47XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0Lm1heCAhPT0gJycpIHtcbiAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpIDw9IE51bWJlcih0YXJnZXQubWluKSA/IHZhbHVlIDogdGFyZ2V0Lm1pbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH07XG5cbiAgY29uc3QgZ2V0T3B0aW9uUGF0aCA9IChuYW1lKSA9PiB7XG4gICAgaWYgKE9QVElPTlNfTkFNRVNfTUFQW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBPUFRJT05TX05BTUVTX01BUFtuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfTtcblxuICBjb25zdCBjb252ZXJ0VmFsdWVzVG9UeXBlTnVtYmVyID0gKG9iamVjdCwgdmFsdWVzUGF0aHMpID0+IHtcbiAgICBsZXQgcmVzdWx0T2JqZWN0ID0gXy5jbG9uZURlZXAob2JqZWN0KTtcbiAgICB2YWx1ZXNQYXRocy5zb21lKChwYXRoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZUJ5UGF0aCA9IF8uZ2V0KHJlc3VsdE9iamVjdCwgcGF0aCk7XG4gICAgICBpZiAodmFsdWVCeVBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHRPYmplY3QgPSBfLnNldChyZXN1bHRPYmplY3QsIHBhdGgsIE51bWJlcih2YWx1ZUJ5UGF0aCkpO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdE9iamVjdFxuICB9XG5cbiAgY29uc3QgdXBkYXRlU3luY2VkVmFsdWVzID0gKHBhdGgpID0+IHtcbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZU9wdGlvblZhbHVlQnlQYXRoID0gKG5hbWUsIG5ld1ZhbHVlKSA9PiB7XG4gICAgLy8gY29uc3QgcGF0aCA9IGdldE9wdGlvblBhdGgobmFtZSk7XG4gICAgY29uc3QgcGF0aCA9IF8uZ2V0KCk7XG4gICAgaWYgKHBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHVwZGF0ZWRPcHRpb25zID0gXy5jbG9uZURlZXAob3B0aW9ucyk7XG4gICAgICB1cGRhdGVkT3B0aW9ucyA9IF8uc2V0KHVwZGF0ZWRPcHRpb25zLCBwYXRoLCBuZXdWYWx1ZSk7XG4gICAgICBzZXRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2F2ZU9wdGlvbnNGb3JNb2R1bGUgPSAob3B0aW9ucykgPT4ge1xuICAgIGxldCBvcHRpb25zUmVzdWx0ID0gXy5jbG9uZURlZXAob3B0aW9ucyk7XG4gICAgZGVsZXRlIG9wdGlvbnNSZXN1bHQuY3VzdG9tQ3VycmVuY3k7XG4gICAgaWYgKG9wdGlvbnMuY3VycmVuY3kgPT09ICdjdXN0b20nKSB7XG4gICAgICBvcHRpb25zUmVzdWx0LmN1cnJlbmN5ID0gb3B0aW9ucy5jdXN0b21DdXJyZW5jeTtcbiAgICB9XG4gICAgb3B0aW9uc1Jlc3VsdCA9IGNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIob3B0aW9uc1Jlc3VsdCwgT1BUSU9OU19WQUxVRVNfVFlQRV9OVU1CRVIpO1xuICAgIHNldE9wdGlvbnNGb3JNb2R1bGUob3B0aW9uc1Jlc3VsdCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zLFxuICAgIG9wdGlvbnNGb3JNb2R1bGUsXG4gICAgb3B0aW9uc0RpZmZlcmVuY2VzLFxuICAgIHVwZGF0ZU9wdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTW9kdWxlT3B0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=