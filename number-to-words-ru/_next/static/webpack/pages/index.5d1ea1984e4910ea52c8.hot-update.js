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
  // 'round-number': 'roundNumber',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbnN0YW50cy9vcHRpb25zTmFtZXNNYXAudHMiXSwibmFtZXMiOlsiT1BUSU9OU19OQU1FU19NQVAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sSUFBTUEsaUJBQWlCLEdBQUc7QUFDL0IsY0FBWSxVQURtQjtBQUUvQiw4QkFBNEIscUNBRkc7QUFHL0IsOEJBQTRCLHFDQUhHO0FBSS9CLDhCQUE0QixxQ0FKRztBQUsvQiw0REFBMEQsc0RBTDNCO0FBTS9CLDBEQUF3RCxzREFOekI7QUFPL0IsMERBQXdELG9EQVB6QjtBQVEvQix3REFBc0Qsb0RBUnZCO0FBUy9CLHdEQUFzRCxrREFUdkI7QUFVL0Isc0RBQW9ELGtEQVZyQjtBQVcvQiw0REFBMEQsc0RBWDNCO0FBWS9CLDBEQUF3RCxzREFaekI7QUFhL0IsOERBQTRELHdEQWI3QjtBQWMvQiw0REFBMEQsd0RBZDNCO0FBZS9CLCtEQUE2RCx5REFmOUI7QUFnQi9CLDZEQUEyRCx5REFoQjVCO0FBaUIvQixpQ0FBK0IsMkNBakJBO0FBa0IvQixpQ0FBK0IsMkNBbEJBO0FBbUIvQixpQ0FBK0IsMkNBbkJBO0FBb0IvQiwrREFBNkQsNERBcEI5QjtBQXFCL0IsNkRBQTJELDREQXJCNUI7QUFzQi9CLDZEQUEyRCwwREF0QjVCO0FBdUIvQiwyREFBeUQsMERBdkIxQjtBQXdCL0IsMkRBQXlELHdEQXhCMUI7QUF5Qi9CLHlEQUF1RCx3REF6QnhCO0FBMEIvQiwrREFBNkQsNERBMUI5QjtBQTJCL0IsNkRBQTJELDREQTNCNUI7QUE0Qi9CLGlFQUErRCw4REE1QmhDO0FBNkIvQiwrREFBNkQsOERBN0I5QjtBQThCL0Isa0VBQWdFLCtEQTlCakM7QUErQi9CLGdFQUE4RCwrREEvQi9CO0FBZ0MvQixrQ0FBZ0MsMkNBaENEO0FBaUMvQixxQ0FBbUMsa0RBakNKO0FBa0MvQiwyQ0FBeUMsd0NBbENWO0FBbUMvQjtBQUNBLGdCQUFjLFlBcENpQjtBQXFDL0Isd0JBQXNCLHdCQXJDUztBQXNDL0IsOEJBQTRCLHlCQXRDRztBQXVDL0IsaUNBQStCLDRCQXZDQTtBQXdDL0IsaUNBQStCLCtCQXhDQTtBQXlDL0Isb0NBQWtDLGtDQXpDSDtBQTBDL0IsZ0NBQThCLHNCQTFDQztBQTJDL0IsbUNBQWlDO0FBM0NGLENBQTFCO0FBOENRQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZDFlYTE5ODRlNDkxMGVhNTJjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE9QVElPTlNfTkFNRVNfTUFQID0ge1xuICAnY3VycmVuY3knOiAnY3VycmVuY3knLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXIxJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZUNhc2VzWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyMic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVDYXNlc1sxXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlcjMnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lQ2FzZXNbMl0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1ub21pbmF0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLm5vbWluYXRpdmVbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1ub21pbmF0aXZlLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5ub21pbmF0aXZlWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tZ2VuaXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuZ2VuaXRpdmVbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1nZW5pdGl2ZS1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuZ2VuaXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1kYXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuZGF0aXZlWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tZGF0aXZlLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5kYXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1hY2N1c2F0aXZlLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmFjY3VzYXRpdmVbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1hY2N1c2F0aXZlLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5hY2N1c2F0aXZlWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24taW5zdHJ1bWVudGFsLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmN1cnJlbmN5TmFtZURlY2xlbnNpb25zLmluc3RydW1lbnRhbFswXScsXG4gICdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWluc3RydW1lbnRhbC1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMuaW5zdHJ1bWVudGFsWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tcHJlcG9zaXRpb25hbC1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5hbWVEZWNsZW5zaW9ucy5wcmVwb3NpdGlvbmFsWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tcHJlcG9zaXRpb25hbC1wbHVyYWwnOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOYW1lRGVjbGVuc2lvbnMucHJlcG9zaXRpb25hbFsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbDEnOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lQ2FzZXNbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwyJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZUNhc2VzWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsMyc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVDYXNlc1syXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLW5vbWluYXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMubm9taW5hdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLW5vbWluYXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLm5vbWluYXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1nZW5pdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5nZW5pdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWdlbml0aXZlLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5nZW5pdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWRhdGl2ZS1zaW5ndWxhcic6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5kYXRpdmVbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1kYXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmRhdGl2ZVsxXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWFjY3VzYXRpdmUtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMuYWNjdXNhdGl2ZVswXScsXG4gICdjdXN0b20tY3VycmVuY3ktZnJhY3Rpb25hbC1kZWNsZW5zaW9uLWFjY3VzYXRpdmUtcGx1cmFsJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLmFjY3VzYXRpdmVbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1pbnN0cnVtZW50YWwtc2luZ3VsYXInOiAnY3VzdG9tQ3VycmVuY3kuZnJhY3Rpb25hbFBhcnROYW1lRGVjbGVuc2lvbnMuaW5zdHJ1bWVudGFsWzBdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mcmFjdGlvbmFsLWRlY2xlbnNpb24taW5zdHJ1bWVudGFsLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5pbnN0cnVtZW50YWxbMV0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1wcmVwb3NpdGlvbmFsLXNpbmd1bGFyJzogJ2N1c3RvbUN1cnJlbmN5LmZyYWN0aW9uYWxQYXJ0TmFtZURlY2xlbnNpb25zLnByZXBvc2l0aW9uYWxbMF0nLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtZGVjbGVuc2lvbi1wcmVwb3NpdGlvbmFsLXBsdXJhbCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE5hbWVEZWNsZW5zaW9ucy5wcmVwb3NpdGlvbmFsWzFdJyxcbiAgJ2N1c3RvbS1jdXJyZW5jeS1mb3JtLWludGVnZXInOiAnY3VzdG9tQ3VycmVuY3kuY3VycmVuY3lOb3VuR2VuZGVyLmludGVnZXInLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZvcm0tZnJhY3Rpb25hbCc6ICdjdXN0b21DdXJyZW5jeS5jdXJyZW5jeU5vdW5HZW5kZXIuZnJhY3Rpb25hbFBhcnQnLFxuICAnY3VzdG9tLWN1cnJlbmN5LWZyYWN0aW9uYWwtbWluLWxlbmd0aCc6ICdjdXN0b21DdXJyZW5jeS5mcmFjdGlvbmFsUGFydE1pbkxlbmd0aCcsXG4gIC8vICdyb3VuZC1udW1iZXInOiAncm91bmROdW1iZXInLFxuICAnZGVjbGVuc2lvbic6ICdkZWNsZW5zaW9uJyxcbiAgJ2NvbnZlcnQtbWludXMtc2lnbic6ICdjb252ZXJ0TWludXNTaWduVG9Xb3JkJyxcbiAgJ3Nob3ctbnVtYmVyLXBhcnQtaW50ZWdlcic6ICdzaG93TnVtYmVyUGFydHMuaW50ZWdlcicsXG4gICdzaG93LW51bWJlci1wYXJ0LWZyYWN0aW9uYWwnOiAnc2hvd051bWJlclBhcnRzLmZyYWN0aW9uYWwnLFxuICAnY29udmVydC1udW1iZXItcGFydC1pbnRlZ2VyJzogJ2NvbnZlcnROdW1iZXJ0VG9Xb3Jkcy5pbnRlZ2VyJyxcbiAgJ2NvbnZlcnQtbnVtYmVyLXBhcnQtZnJhY3Rpb25hbCc6ICdjb252ZXJ0TnVtYmVydFRvV29yZHMuZnJhY3Rpb25hbCcsXG4gICdzaG93LWN1cnJlbmN5LXBhcnQtaW50ZWdlcic6ICdzaG93Q3VycmVuY3kuaW50ZWdlcicsXG4gICdzaG93LWN1cnJlbmN5LXBhcnQtZnJhY3Rpb25hbCc6ICdzaG93Q3VycmVuY3kuZnJhY3Rpb25hbCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9QVElPTlNfTkFNRVNfTUFQO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==