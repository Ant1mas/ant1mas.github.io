webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/constants/optionsNamesMap.ts":
/*!******************************************!*\
  !*** ./lib/constants/optionsNamesMap.ts ***!
  \******************************************/
/*! exports provided: OPTIONS_NAMES_MAP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS_NAMES_MAP", function() { return OPTIONS_NAMES_MAP; });
var OPTIONS_NAMES_MAP = {
  'currency': 'currency',
  'custom-currency-integer1': 'customCurrency.currencyNameCases[0]',
  'custom-currency-integer2': 'customCurrency.currencyNameCases[1]',
  'custom-currency-integer3': 'customCurrency.currencyNameCases[2]',
  'custom-currency-integer-declension-nominative-singular': 'customCurrency.currencyNameDeclensions.nominative[0]',
  'custom-currency-integer-declension-nominative-plural': 'customCurrency.currencyNameDeclensions.nominative[1]',
  'custom-currency-integer-declension-genitive-singular': 'customCurrency.currencyNameDeclensions.genitive[0]',
  'custom-currency-integer-declension-genitive-plural': 'customCurrency.currencyNameDeclensions.genitive[1]',
  'custom-currency-integer-declension-dative-singular': 'customCurrency.currencyNameDeclensions.dative[0]',
  'custom-currency-integer-declension-dative-plural': 'customCurrency.currencyNameDeclensions.dative[1]',
  'custom-currency-integer-declension-accusative-singular': 'customCurrency.currencyNameDeclensions.accusative[0]',
  'custom-currency-integer-declension-accusative-plural': 'customCurrency.currencyNameDeclensions.accusative[1]',
  'custom-currency-integer-declension-instrumental-singular': 'customCurrency.currencyNameDeclensions.instrumental[0]',
  'custom-currency-integer-declension-instrumental-plural': 'customCurrency.currencyNameDeclensions.instrumental[1]',
  'custom-currency-integer-declension-prepositional-singular': 'customCurrency.currencyNameDeclensions.prepositional[0]',
  'custom-currency-integer-declension-prepositional-plural': 'customCurrency.currencyNameDeclensions.prepositional[1]',
  'custom-currency-fractional1': 'customCurrency.fractionalPartNameCases[0]',
  'custom-currency-fractional2': 'customCurrency.fractionalPartNameCases[1]',
  'custom-currency-fractional3': 'customCurrency.fractionalPartNameCases[2]',
  'custom-currency-fractional-declension-nominative-singular': 'customCurrency.fractionalPartNameDeclensions.nominative[0]',
  'custom-currency-fractional-declension-nominative-plural': 'customCurrency.fractionalPartNameDeclensions.nominative[1]',
  'custom-currency-fractional-declension-genitive-singular': 'customCurrency.fractionalPartNameDeclensions.genitive[0]',
  'custom-currency-fractional-declension-genitive-plural': 'customCurrency.fractionalPartNameDeclensions.genitive[1]',
  'custom-currency-fractional-declension-dative-singular': 'customCurrency.fractionalPartNameDeclensions.dative[0]',
  'custom-currency-fractional-declension-dative-plural': 'customCurrency.fractionalPartNameDeclensions.dative[1]',
  'custom-currency-fractional-declension-accusative-singular': 'customCurrency.fractionalPartNameDeclensions.accusative[0]',
  'custom-currency-fractional-declension-accusative-plural': 'customCurrency.fractionalPartNameDeclensions.accusative[1]',
  'custom-currency-fractional-declension-instrumental-singular': 'customCurrency.fractionalPartNameDeclensions.instrumental[0]',
  'custom-currency-fractional-declension-instrumental-plural': 'customCurrency.fractionalPartNameDeclensions.instrumental[1]',
  'custom-currency-fractional-declension-prepositional-singular': 'customCurrency.fractionalPartNameDeclensions.prepositional[0]',
  'custom-currency-fractional-declension-prepositional-plural': 'customCurrency.fractionalPartNameDeclensions.prepositional[1]',
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
/* harmony default export */ __webpack_exports__["default"] = (OPTIONS_NAMES_MAP);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL29wdGlvbnNOYW1lc01hcC50cyJdLCJuYW1lcyI6WyJPUFRJT05TX05BTUVTX01BUCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTyxJQUFNQSxpQkFBaUIsR0FBRztBQUMvQixjQUFZLFVBRG1CO0FBRS9CLDhCQUE0QixxQ0FGRztBQUcvQiw4QkFBNEIscUNBSEc7QUFJL0IsOEJBQTRCLHFDQUpHO0FBSy9CLDREQUEwRCxzREFMM0I7QUFNL0IsMERBQXdELHNEQU56QjtBQU8vQiwwREFBd0Qsb0RBUHpCO0FBUS9CLHdEQUFzRCxvREFSdkI7QUFTL0Isd0RBQXNELGtEQVR2QjtBQVUvQixzREFBb0Qsa0RBVnJCO0FBVy9CLDREQUEwRCxzREFYM0I7QUFZL0IsMERBQXdELHNEQVp6QjtBQWEvQiw4REFBNEQsd0RBYjdCO0FBYy9CLDREQUEwRCx3REFkM0I7QUFlL0IsK0RBQTZELHlEQWY5QjtBQWdCL0IsNkRBQTJELHlEQWhCNUI7QUFpQi9CLGlDQUErQiwyQ0FqQkE7QUFrQi9CLGlDQUErQiwyQ0FsQkE7QUFtQi9CLGlDQUErQiwyQ0FuQkE7QUFvQi9CLCtEQUE2RCw0REFwQjlCO0FBcUIvQiw2REFBMkQsNERBckI1QjtBQXNCL0IsNkRBQTJELDBEQXRCNUI7QUF1Qi9CLDJEQUF5RCwwREF2QjFCO0FBd0IvQiwyREFBeUQsd0RBeEIxQjtBQXlCL0IseURBQXVELHdEQXpCeEI7QUEwQi9CLCtEQUE2RCw0REExQjlCO0FBMkIvQiw2REFBMkQsNERBM0I1QjtBQTRCL0IsaUVBQStELDhEQTVCaEM7QUE2Qi9CLCtEQUE2RCw4REE3QjlCO0FBOEIvQixrRUFBZ0UsK0RBOUJqQztBQStCL0IsZ0VBQThELCtEQS9CL0I7QUFnQy9CLGtDQUFnQywyQ0FoQ0Q7QUFpQy9CLHFDQUFtQyxrREFqQ0o7QUFrQy9CLDJDQUF5Qyx3Q0FsQ1Y7QUFtQy9CLGtCQUFnQixhQW5DZTtBQW9DL0IsZ0JBQWMsWUFwQ2lCO0FBcUMvQix3QkFBc0Isd0JBckNTO0FBc0MvQiw4QkFBNEIseUJBdENHO0FBdUMvQixpQ0FBK0IsNEJBdkNBO0FBd0MvQixpQ0FBK0IsK0JBeENBO0FBeUMvQixvQ0FBa0Msa0NBekNIO0FBMEMvQixnQ0FBOEIsc0JBMUNDO0FBMkMvQixtQ0FBaUM7QUEzQ0YsQ0FBMUI7QUE4Q1FBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJjYTRkZjFjOThhNzQ5MDljZjQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgT1BUSU9OU19OQU1FU19NQVAgPSB7XG4gICdjdXJyZW5jeSc6ICdjdXJyZW5jeScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjEnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMyc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1syXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLW5vbWluYXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMubm9taW5hdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLW5vbWluYXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLm5vbWluYXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1nZW5pdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5nZW5pdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWdlbml0aXZlLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5nZW5pdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWRhdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5kYXRpdmVbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1kYXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmRhdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWFjY3VzYXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuYWNjdXNhdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWFjY3VzYXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmFjY3VzYXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1pbnN0cnVtZW50YWwtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuaW5zdHJ1bWVudGFsWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24taW5zdHJ1bWVudGFsLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5pbnN0cnVtZW50YWxbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1wcmVwb3NpdGlvbmFsLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLnByZXBvc2l0aW9uYWxbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1wcmVwb3NpdGlvbmFsLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5wcmVwb3NpdGlvbmFsWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMSc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1swXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwzJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzJdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tbm9taW5hdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5ub21pbmF0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tbm9taW5hdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMubm9taW5hdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWdlbml0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmdlbml0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tZ2VuaXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmdlbml0aXZlWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tZGF0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmRhdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWRhdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMuZGF0aXZlWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tYWNjdXNhdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5hY2N1c2F0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24tYWNjdXNhdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMuYWNjdXNhdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWluc3RydW1lbnRhbC1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5pbnN0cnVtZW50YWxbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1pbnN0cnVtZW50YWwtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmluc3RydW1lbnRhbFsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLXByZXBvc2l0aW9uYWwtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMucHJlcG9zaXRpb25hbFswXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLXByZXBvc2l0aW9uYWwtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLnByZXBvc2l0aW9uYWxbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZvcm0taW50ZWdlcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuaW50ZWdlcicsXG4gICdjdXN0b20tY3VycmVuY3ktZm9ybS1mcmFjdGlvbmFsJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5Tm91bkdlbmRlci5mcmFjdGlvbmFsUGFydCcsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1taW4tbGVuZ3RoJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TWluTGVuZ3RoJyxcbiAgJ3JvdW5kLW51bWJlcic6ICdyb3VuZE51bWJlcicsXG4gICdkZWNsZW5zaW9uJzogJ2RlY2xlbnNpb24nLFxuICAnY29udmVydC1taW51cy1zaWduJzogJ2NvbnZlcnRNaW51c1NpZ25Ub1dvcmQnLFxuICAnc2hvdy1udW1iZXItcGFydC1pbnRlZ2VyJzogJ3Nob3dOdW1iZXJQYXJ0cy5pbnRlZ2VyJyxcbiAgJ3Nob3ctbnVtYmVyLXBhcnQtZnJhY3Rpb25hbCc6ICdzaG93TnVtYmVyUGFydHMuZnJhY3Rpb25hbCcsXG4gICdjb252ZXJ0LW51bWJlci1wYXJ0LWludGVnZXInOiAnY29udmVydE51bWJlcnRUb1dvcmRzLmludGVnZXInLFxuICAnY29udmVydC1udW1iZXItcGFydC1mcmFjdGlvbmFsJzogJ2NvbnZlcnROdW1iZXJ0VG9Xb3Jkcy5mcmFjdGlvbmFsJyxcbiAgJ3Nob3ctY3VycmVuY3ktcGFydC1pbnRlZ2VyJzogJ3Nob3dDdXJyZW5jeS5pbnRlZ2VyJyxcbiAgJ3Nob3ctY3VycmVuY3ktcGFydC1mcmFjdGlvbmFsJzogJ3Nob3dDdXJyZW5jeS5mcmFjdGlvbmFsJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgT1BUSU9OU19OQU1FU19NQVA7XG4iXSwic291cmNlUm9vdCI6IiJ9