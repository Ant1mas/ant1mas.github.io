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
      return updatedOptions;
    }

    return optionsObject;
  };

  var updateOptionValueByPath = function updateOptionValueByPath(name, newValue) {
    var path = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(lib_constants_optionsNamesMap__WEBPACK_IMPORTED_MODULE_6__["default"], [name]);

    if (path !== undefined) {
      var updatedOptions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(options);

      updatedOptions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.set(updatedOptions, path, newValue);
      updatedOptions = updateSyncedValues(updatedOptions, name, newValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZU1vZHVsZU9wdGlvbnMudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRPcHRpb25zIiwiXyIsIm1lcmdlIiwiY2xvbmVEZWVwIiwiREVGQVVMVF9NT0RVTEVfT1BUSU9OUyIsImN1c3RvbUN1cnJlbmN5IiwiREVGQVVMVF9DVVJSRU5DWV9PQkpFQ1QiLCJ1c2VNb2R1bGVPcHRpb25zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwib3B0aW9uc0Zvck1vZHVsZSIsInNldE9wdGlvbnNGb3JNb2R1bGUiLCJvcHRpb25zRGlmZmVyZW5jZXMiLCJvYmplY3RzRGlmZiIsInVzZUVmZmVjdCIsInNhdmVPcHRpb25zRm9yTW9kdWxlIiwidXBkYXRlT3B0aW9ucyIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJ1cGRhdGVPcHRpb25WYWx1ZUJ5UGF0aCIsInR5cGUiLCJjaGVja1ZhbHVlUmFuZ2UiLCJCb29sZWFuIiwiY2hlY2tlZCIsIm1pbiIsIk51bWJlciIsIm1heCIsImNvbnZlcnRWYWx1ZXNUb1R5cGVOdW1iZXIiLCJvYmplY3QiLCJ2YWx1ZXNQYXRocyIsInJlc3VsdE9iamVjdCIsInNvbWUiLCJwYXRoIiwidmFsdWVCeVBhdGgiLCJnZXQiLCJ1bmRlZmluZWQiLCJzZXQiLCJ1cGRhdGVTeW5jZWRWYWx1ZXMiLCJvcHRpb25zT2JqZWN0IiwibmV3VmFsdWUiLCJPUFRJT05TX1NZTkNFRF9WQUxVRVNfTUFQIiwidXBkYXRlZE9wdGlvbnMiLCJPUFRJT05TX05BTUVTX01BUCIsIm9wdGlvbnNSZXN1bHQiLCJjdXJyZW5jeSIsIk9QVElPTlNfVkFMVUVTX1RZUEVfTlVNQkVSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBR0MsNkNBQUMsQ0FBQ0MsS0FBRixDQUFRRCw2Q0FBQyxDQUFDRSxTQUFGLENBQVlDLDBFQUFaLENBQVIsRUFBNkM7QUFDbEVDLGdCQUFjLEVBQUVKLDZDQUFDLENBQUNFLFNBQUYsQ0FBWUcsMkVBQVo7QUFEa0QsQ0FBN0MsQ0FBdkI7O0FBSU8sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQUEsd0JBQ05DLDRDQUFLLENBQUNDLFFBQU4sQ0FBZVQsY0FBZixDQURNO0FBQUE7QUFBQSxNQUM3QlUsT0FENkI7QUFBQSxNQUNwQkMsVUFEb0I7O0FBQUEseUJBRVlILDRDQUFLLENBQUNDLFFBQU4sQ0FBZUwsMEVBQWYsQ0FGWjtBQUFBO0FBQUEsTUFFN0JRLGdCQUY2QjtBQUFBLE1BRVhDLG1CQUZXOztBQUdwQyxNQUFNQyxrQkFBa0IsR0FBR0MseUVBQVcsQ0FBQ1gsMEVBQUQsRUFBeUJRLGdCQUF6QixDQUF0QztBQUVBSiw4Q0FBSyxDQUFDUSxTQUFOLENBQWdCLFlBQU07QUFDcEJDLHdCQUFvQixDQUFDUCxPQUFELENBQXBCO0FBQ0QsR0FGRCxFQUVHLENBQUNBLE9BQUQsQ0FGSDs7QUFJQSxNQUFNUSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUMvQixRQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhRCxJQUExQjtBQUNBLFFBQU1FLEtBQUssR0FBR0MsUUFBUSxDQUFDSixLQUFLLENBQUNFLE1BQVAsQ0FBdEI7QUFDQUcsMkJBQXVCLENBQUNKLElBQUQsRUFBT0UsS0FBUCxDQUF2QjtBQUNELEdBSkQ7O0FBTUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0YsTUFBRCxFQUFZO0FBQzNCLFFBQU1JLElBQUksR0FBR0osTUFBTSxDQUFDSSxJQUFwQjtBQUNBLFFBQUlILEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFuQjs7QUFDQSxRQUFJRyxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQkgsV0FBSyxHQUFHSSxlQUFlLENBQUNMLE1BQUQsQ0FBdkI7QUFDRCxLQUZELE1BRU8sSUFBSUksSUFBSSxLQUFLLFVBQWIsRUFBeUI7QUFDOUJILFdBQUssR0FBR0ssT0FBTyxDQUFDTixNQUFNLENBQUNPLE9BQVIsQ0FBZjtBQUNEOztBQUNELFdBQU9OLEtBQVA7QUFDRCxHQVREOztBQVdBLE1BQU1JLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0wsTUFBRCxFQUFZO0FBQ2xDLFFBQUlDLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFuQjs7QUFDQSxRQUFJQSxLQUFLLEtBQUssRUFBZCxFQUFrQjtBQUNoQixVQUFJRCxNQUFNLENBQUNRLEdBQVAsS0FBZSxFQUFuQixFQUF1QjtBQUNyQlAsYUFBSyxHQUFHUSxNQUFNLENBQUNSLEtBQUQsQ0FBTixJQUFpQlEsTUFBTSxDQUFDVCxNQUFNLENBQUNRLEdBQVIsQ0FBdkIsR0FBc0NQLEtBQXRDLEdBQThDRCxNQUFNLENBQUNRLEdBQTdEO0FBQ0Q7O0FBQ0QsVUFBSVIsTUFBTSxDQUFDVSxHQUFQLEtBQWUsRUFBbkIsRUFBdUI7QUFDckJULGFBQUssR0FBR1EsTUFBTSxDQUFDUixLQUFELENBQU4sSUFBaUJRLE1BQU0sQ0FBQ1QsTUFBTSxDQUFDUSxHQUFSLENBQXZCLEdBQXNDUCxLQUF0QyxHQUE4Q0QsTUFBTSxDQUFDUSxHQUE3RDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBT1AsS0FBUDtBQUNELEdBWEQ7O0FBYUEsTUFBTVUseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDQyxNQUFELEVBQVNDLFdBQVQsRUFBeUI7QUFDekQsUUFBSUMsWUFBWSxHQUFHbEMsNkNBQUMsQ0FBQ0UsU0FBRixDQUFZOEIsTUFBWixDQUFuQjs7QUFDQUMsZUFBVyxDQUFDRSxJQUFaLENBQWlCLFVBQUNDLElBQUQsRUFBVTtBQUN6QixVQUFNQyxXQUFXLEdBQUdyQyw2Q0FBQyxDQUFDc0MsR0FBRixDQUFNSixZQUFOLEVBQW9CRSxJQUFwQixDQUFwQjs7QUFDQSxVQUFJQyxXQUFXLEtBQUtFLFNBQXBCLEVBQStCO0FBQzdCTCxvQkFBWSxHQUFHbEMsNkNBQUMsQ0FBQ3dDLEdBQUYsQ0FBTU4sWUFBTixFQUFvQkUsSUFBcEIsRUFBMEJQLE1BQU0sQ0FBQ1EsV0FBRCxDQUFoQyxDQUFmO0FBQ0Q7QUFDRixLQUxEO0FBTUEsV0FBT0gsWUFBUDtBQUNELEdBVEQ7O0FBV0EsTUFBTU8sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxhQUFELEVBQWdCdkIsSUFBaEIsRUFBc0J3QixRQUF0QixFQUFtQztBQUM1RCxRQUFNUCxJQUFJLEdBQUdwQyw2Q0FBQyxDQUFDc0MsR0FBRixDQUFNTSw0RUFBTixFQUFpQyxDQUFDekIsSUFBRCxDQUFqQyxDQUFiOztBQUNBLFFBQUlpQixJQUFJLEtBQUtHLFNBQWIsRUFBd0I7QUFDdEIsVUFBSU0sY0FBYyxHQUFHN0MsNkNBQUMsQ0FBQ0UsU0FBRixDQUFZd0MsYUFBWixDQUFyQjs7QUFDQUcsb0JBQWMsR0FBRzdDLDZDQUFDLENBQUN3QyxHQUFGLENBQU1LLGNBQU4sRUFBc0JULElBQXRCLEVBQTRCTyxRQUE1QixDQUFqQjtBQUNBLGFBQU9FLGNBQVA7QUFDRDs7QUFDRCxXQUFPSCxhQUFQO0FBQ0QsR0FSRDs7QUFVQSxNQUFNbkIsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDSixJQUFELEVBQU93QixRQUFQLEVBQW9CO0FBQ2xELFFBQU1QLElBQUksR0FBR3BDLDZDQUFDLENBQUNzQyxHQUFGLENBQU1RLHFFQUFOLEVBQXlCLENBQUMzQixJQUFELENBQXpCLENBQWI7O0FBQ0EsUUFBSWlCLElBQUksS0FBS0csU0FBYixFQUF3QjtBQUN0QixVQUFJTSxjQUFjLEdBQUc3Qyw2Q0FBQyxDQUFDRSxTQUFGLENBQVlPLE9BQVosQ0FBckI7O0FBQ0FvQyxvQkFBYyxHQUFHN0MsNkNBQUMsQ0FBQ3dDLEdBQUYsQ0FBTUssY0FBTixFQUFzQlQsSUFBdEIsRUFBNEJPLFFBQTVCLENBQWpCO0FBQ0FFLG9CQUFjLEdBQUdKLGtCQUFrQixDQUFDSSxjQUFELEVBQWlCMUIsSUFBakIsRUFBdUJ3QixRQUF2QixDQUFuQztBQUNBakMsZ0JBQVUsQ0FBQ21DLGNBQUQsQ0FBVjtBQUNEO0FBQ0YsR0FSRDs7QUFVQSxNQUFNN0Isb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDUCxPQUFELEVBQWE7QUFDeEMsUUFBSXNDLGFBQWEsR0FBRy9DLDZDQUFDLENBQUNFLFNBQUYsQ0FBWU8sT0FBWixDQUFwQjs7QUFDQSxXQUFPc0MsYUFBYSxDQUFDM0MsY0FBckI7O0FBQ0EsUUFBSUssT0FBTyxDQUFDdUMsUUFBUixLQUFxQixRQUF6QixFQUFtQztBQUNqQ0QsbUJBQWEsQ0FBQ0MsUUFBZCxHQUF5QnZDLE9BQU8sQ0FBQ0wsY0FBakM7QUFDRDs7QUFDRDJDLGlCQUFhLEdBQUdoQix5QkFBeUIsQ0FBQ2dCLGFBQUQsRUFBZ0JFLDZFQUFoQixDQUF6QztBQUNBckMsdUJBQW1CLENBQUNtQyxhQUFELENBQW5CO0FBQ0QsR0FSRDs7QUFVQSxTQUFPO0FBQ0x0QyxXQUFPLEVBQVBBLE9BREs7QUFFTEUsb0JBQWdCLEVBQWhCQSxnQkFGSztBQUdMRSxzQkFBa0IsRUFBbEJBLGtCQUhLO0FBSUxJLGlCQUFhLEVBQWJBO0FBSkssR0FBUDtBQU1ELENBdEZNOztHQUFNWCxnQjs7QUF3RkVBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU4MTE2YmNjNzUxZDcwNDdmNDQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBvYmplY3RzRGlmZiBmcm9tICdsaWIvZnVuY3Rpb25zL29iamVjdHNEaWZmJ1xuaW1wb3J0IERFRkFVTFRfTU9EVUxFX09QVElPTlMgZnJvbSAnbGliL2NvbnN0YW50cy9kZWZhdWx0TW9kdWxlT3B0aW9ucyc7XG5pbXBvcnQgREVGQVVMVF9DVVJSRU5DWV9PQkpFQ1QgZnJvbSAnbGliL2NvbnN0YW50cy9kZWZhdWx0Q3VycmVuY3lPYmplY3QnO1xuaW1wb3J0IE9QVElPTlNfTkFNRVNfTUFQIGZyb20gJ2xpYi9jb25zdGFudHMvb3B0aW9uc05hbWVzTWFwJztcbmltcG9ydCBPUFRJT05TX1ZBTFVFU19UWVBFX05VTUJFUiBmcm9tICdsaWIvY29uc3RhbnRzL29wdGlvbnNWYWx1ZXNUeXBlTnVtYmVyJztcbmltcG9ydCBPUFRJT05TX1NZTkNFRF9WQUxVRVNfTUFQIGZyb20gJ2xpYi9jb25zdGFudHMvb3B0aW9uc1N5bmNlZFZhbHVlc01hcCc7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0gXy5tZXJnZShfLmNsb25lRGVlcChERUZBVUxUX01PRFVMRV9PUFRJT05TKSwge1xuICBjdXN0b21DdXJyZW5jeTogXy5jbG9uZURlZXAoREVGQVVMVF9DVVJSRU5DWV9PQkpFQ1QpLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1c2VNb2R1bGVPcHRpb25zID0gKCkgPT4ge1xuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0T3B0aW9ucyk7XG4gIGNvbnN0IFtvcHRpb25zRm9yTW9kdWxlLCBzZXRPcHRpb25zRm9yTW9kdWxlXSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfTU9EVUxFX09QVElPTlMpO1xuICBjb25zdCBvcHRpb25zRGlmZmVyZW5jZXMgPSBvYmplY3RzRGlmZihERUZBVUxUX01PRFVMRV9PUFRJT05TLCBvcHRpb25zRm9yTW9kdWxlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNhdmVPcHRpb25zRm9yTW9kdWxlKG9wdGlvbnMpO1xuICB9LCBbb3B0aW9uc10pXG5cbiAgY29uc3QgdXBkYXRlT3B0aW9ucyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKGV2ZW50LnRhcmdldCk7XG4gICAgdXBkYXRlT3B0aW9uVmFsdWVCeVBhdGgobmFtZSwgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlID0gKHRhcmdldCkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSB0YXJnZXQudHlwZTtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IGNoZWNrVmFsdWVSYW5nZSh0YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgdmFsdWUgPSBCb29sZWFuKHRhcmdldC5jaGVja2VkKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY29uc3QgY2hlY2tWYWx1ZVJhbmdlID0gKHRhcmdldCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICBpZiAodGFyZ2V0Lm1pbiAhPT0gJycpIHtcbiAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpID49IE51bWJlcih0YXJnZXQubWluKSA/IHZhbHVlIDogdGFyZ2V0Lm1pbjtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXQubWF4ICE9PSAnJykge1xuICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSkgPD0gTnVtYmVyKHRhcmdldC5taW4pID8gdmFsdWUgOiB0YXJnZXQubWluO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfTtcblxuICBjb25zdCBjb252ZXJ0VmFsdWVzVG9UeXBlTnVtYmVyID0gKG9iamVjdCwgdmFsdWVzUGF0aHMpID0+IHtcbiAgICBsZXQgcmVzdWx0T2JqZWN0ID0gXy5jbG9uZURlZXAob2JqZWN0KTtcbiAgICB2YWx1ZXNQYXRocy5zb21lKChwYXRoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZUJ5UGF0aCA9IF8uZ2V0KHJlc3VsdE9iamVjdCwgcGF0aCk7XG4gICAgICBpZiAodmFsdWVCeVBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHRPYmplY3QgPSBfLnNldChyZXN1bHRPYmplY3QsIHBhdGgsIE51bWJlcih2YWx1ZUJ5UGF0aCkpO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdE9iamVjdFxuICB9XG5cbiAgY29uc3QgdXBkYXRlU3luY2VkVmFsdWVzID0gKG9wdGlvbnNPYmplY3QsIG5hbWUsIG5ld1ZhbHVlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IF8uZ2V0KE9QVElPTlNfU1lOQ0VEX1ZBTFVFU19NQVAsIFtuYW1lXSk7XG4gICAgaWYgKHBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHVwZGF0ZWRPcHRpb25zID0gXy5jbG9uZURlZXAob3B0aW9uc09iamVjdCk7XG4gICAgICB1cGRhdGVkT3B0aW9ucyA9IF8uc2V0KHVwZGF0ZWRPcHRpb25zLCBwYXRoLCBuZXdWYWx1ZSk7XG4gICAgICByZXR1cm4gdXBkYXRlZE9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zT2JqZWN0O1xuICB9XG5cbiAgY29uc3QgdXBkYXRlT3B0aW9uVmFsdWVCeVBhdGggPSAobmFtZSwgbmV3VmFsdWUpID0+IHtcbiAgICBjb25zdCBwYXRoID0gXy5nZXQoT1BUSU9OU19OQU1FU19NQVAsIFtuYW1lXSk7XG4gICAgaWYgKHBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHVwZGF0ZWRPcHRpb25zID0gXy5jbG9uZURlZXAob3B0aW9ucyk7XG4gICAgICB1cGRhdGVkT3B0aW9ucyA9IF8uc2V0KHVwZGF0ZWRPcHRpb25zLCBwYXRoLCBuZXdWYWx1ZSk7XG4gICAgICB1cGRhdGVkT3B0aW9ucyA9IHVwZGF0ZVN5bmNlZFZhbHVlcyh1cGRhdGVkT3B0aW9ucywgbmFtZSwgbmV3VmFsdWUpO1xuICAgICAgc2V0T3B0aW9ucyh1cGRhdGVkT3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNhdmVPcHRpb25zRm9yTW9kdWxlID0gKG9wdGlvbnMpID0+IHtcbiAgICBsZXQgb3B0aW9uc1Jlc3VsdCA9IF8uY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgIGRlbGV0ZSBvcHRpb25zUmVzdWx0LmN1c3RvbUN1cnJlbmN5O1xuICAgIGlmIChvcHRpb25zLmN1cnJlbmN5ID09PSAnY3VzdG9tJykge1xuICAgICAgb3B0aW9uc1Jlc3VsdC5jdXJyZW5jeSA9IG9wdGlvbnMuY3VzdG9tQ3VycmVuY3k7XG4gICAgfVxuICAgIG9wdGlvbnNSZXN1bHQgPSBjb252ZXJ0VmFsdWVzVG9UeXBlTnVtYmVyKG9wdGlvbnNSZXN1bHQsIE9QVElPTlNfVkFMVUVTX1RZUEVfTlVNQkVSKTtcbiAgICBzZXRPcHRpb25zRm9yTW9kdWxlKG9wdGlvbnNSZXN1bHQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgb3B0aW9ucyxcbiAgICBvcHRpb25zRm9yTW9kdWxlLFxuICAgIG9wdGlvbnNEaWZmZXJlbmNlcyxcbiAgICB1cGRhdGVPcHRpb25zLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1vZHVsZU9wdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9