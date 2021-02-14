webpackHotUpdate_N_E("pages/index",{

/***/ "./components/DeclensionsFields.tsx":
/*!******************************************!*\
  !*** ./components/DeclensionsFields.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var lib_context_moduleParamsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/context/moduleParamsContext */ "./lib/context/moduleParamsContext.tsx");



var _jsxFileName = "C:\\OpenServer\\domains\\projects.local\\_react_projects\\number-to-words-ru_app\\number-to-words-ru_APP(NextJs)\\components\\DeclensionsFields.tsx",
    _this = undefined,
    _s = $RefreshSig$();




 // import styles from "./DeclensionsFields.module.sass"



var DeclensionsFields = function DeclensionsFields(_ref) {
  _s();

  var numberPart = _ref.numberPart,
      declensionsObjectName = _ref.declensionsObjectName;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(lib_context_moduleParamsContext__WEBPACK_IMPORTED_MODULE_5__["ModuleParamsContext"]),
      options = _React$useContext.options,
      updateOptions = _React$useContext.updateOptions;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  console.log('numberPart :>> ', numberPart);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-integer-declension-nominative-plural",
        label: t('options_currency_custom_value_declension_nominative_plural'),
        fullWidth: true,
        placeholder: "\u0420\u0443\u0431\u043B\u0438",
        value: options.customCurrency[declensionsObjectName].nominative[1],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-integer-declension-genitive-singular",
        label: t('options_currency_custom_value_declension_genitive_singular'),
        fullWidth: true,
        placeholder: "\u0420\u0443\u0431\u043B\u044F",
        value: options.customCurrency[declensionsObjectName].genitive[0],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-integer-declension-genitive-plural",
        label: t('options_currency_custom_value_declension_genitive_plural'),
        fullWidth: true,
        placeholder: "\u0420\u0443\u0431\u043B\u0435\u0439",
        value: options.customCurrency[declensionsObjectName].genitive[1],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-integer-declension-dative-singular",
        label: t('options_currency_custom_value_declension_dative_singular'),
        fullWidth: true,
        placeholder: "\u0420\u0443\u0431\u043B\u044E",
        value: options.customCurrency[declensionsObjectName].dative[0],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-integer-declension-dative-plural",
        label: t('options_currency_custom_value_declension_dative_plural'),
        fullWidth: true,
        placeholder: "\u0420\u0443\u0431\u043B\u044F\u043C",
        value: options.customCurrency[declensionsObjectName].dative[1],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-integer-declension-accusative-singular",
        label: t('options_currency_custom_value_declension_accusative_singular'),
        fullWidth: true,
        placeholder: "\u0420\u0443\u0431\u043B\u044E",
        value: options.customCurrency[declensionsObjectName].accusative[0],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-integer-declension-accusative-plural",
        label: t('options_currency_custom_value_declension_accusative_plural'),
        fullWidth: true,
        placeholder: "\u0420\u0443\u0431\u043B\u044F\u043C",
        value: options.customCurrency[declensionsObjectName].accusative[1],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-integer-declension-instrumental-singular",
        label: t('options_currency_custom_value_declension_instrumental_singular'),
        fullWidth: true,
        placeholder: "\u0420\u0443\u0431\u043B\u0451\u043C",
        value: options.customCurrency[declensionsObjectName].instrumental[0],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-integer-declension-instrumental-plural",
        label: t('options_currency_custom_value_declension_instrumental_plural'),
        fullWidth: true,
        placeholder: "\u0420\u0443\u0431\u043B\u044F\u043C\u0438",
        value: options.customCurrency[declensionsObjectName].instrumental[1],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-integer-declension-prepositional-singular",
        label: t('options_currency_custom_value_declension_prepositional_singular'),
        fullWidth: true,
        placeholder: "\u0420\u0443\u0431\u043B\u0435",
        value: options.customCurrency[declensionsObjectName].prepositional[0],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        name: "custom-currency-integer-declension-prepositional-plural",
        label: t('options_currency_custom_value_declension_prepositional_plural'),
        fullWidth: true,
        placeholder: "\u0420\u0443\u0431\u043B\u044F\u0445",
        value: options.customCurrency[declensionsObjectName].prepositional[1],
        onChange: updateOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(DeclensionsFields, "YCAVFLQRe9xGoyZn1b1KC1T2BOU=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"]];
});

_c = DeclensionsFields;
DeclensionsFields.propTypes = {
  numberPart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  declensionsObjectName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
DeclensionsFields.defaultProps = {
  numberPart: 'integer',
  declensionsObjectName: 'currencyNameDeclensions'
};
/* harmony default export */ __webpack_exports__["default"] = (DeclensionsFields);

var _c;

$RefreshReg$(_c, "DeclensionsFields");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWNsZW5zaW9uc0ZpZWxkcy50c3giXSwibmFtZXMiOlsiRGVjbGVuc2lvbnNGaWVsZHMiLCJudW1iZXJQYXJ0IiwiZGVjbGVuc2lvbnNPYmplY3ROYW1lIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiTW9kdWxlUGFyYW1zQ29udGV4dCIsIm9wdGlvbnMiLCJ1cGRhdGVPcHRpb25zIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsImNvbnNvbGUiLCJsb2ciLCJjdXN0b21DdXJyZW5jeSIsIm5vbWluYXRpdmUiLCJnZW5pdGl2ZSIsImRhdGl2ZSIsImFjY3VzYXRpdmUiLCJpbnN0cnVtZW50YWwiLCJwcmVwb3NpdGlvbmFsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FNQTs7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQTJDO0FBQUE7O0FBQUEsTUFBeENDLFVBQXdDLFFBQXhDQSxVQUF3QztBQUFBLE1BQTVCQyxxQkFBNEIsUUFBNUJBLHFCQUE0Qjs7QUFBQSwwQkFDaENDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLG1GQUFqQixDQURnQztBQUFBLE1BQzNEQyxPQUQyRCxxQkFDM0RBLE9BRDJEO0FBQUEsTUFDbERDLGFBRGtELHFCQUNsREEsYUFEa0Q7O0FBQUEsd0JBRS9DQyxvRUFBYyxFQUZpQztBQUFBLE1BRTNEQyxDQUYyRCxtQkFFM0RBLENBRjJEO0FBQUEsTUFFeERDLElBRndELG1CQUV4REEsSUFGd0Q7O0FBSW5FQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQlgsVUFBL0I7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHNEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7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QVIsQ0FBdUJYLHFCQUF2QixFQUE4Q2lCLGFBQTlDLENBQTRELENBQTVELENBTFQ7QUFNRSxnQkFBUSxFQUFFWjtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckdGO0FBQUEsa0JBREY7QUFrSEQsQ0F4SEQ7O0dBQU1QLGlCO1VBRWdCUSw0RDs7O0tBRmhCUixpQjtBQTBITkEsaUJBQWlCLENBQUNvQixTQUFsQixHQUE4QjtBQUM1Qm5CLFlBQVUsRUFBRW9CLGlEQUFTLENBQUNDLE1BRE07QUFFNUJwQix1QkFBcUIsRUFBRW1CLGlEQUFTLENBQUNDO0FBRkwsQ0FBOUI7QUFLQXRCLGlCQUFpQixDQUFDdUIsWUFBbEIsR0FBaUM7QUFDL0J0QixZQUFVLEVBQUUsU0FEbUI7QUFFL0JDLHVCQUFxQixFQUFFO0FBRlEsQ0FBakM7QUFLZUYsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWI3NDg1YjgyOTFjYTYzNzg4MWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBHcmlkLFxuICBUZXh0RmllbGQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRGVjbGVuc2lvbnNGaWVsZHMubW9kdWxlLnNhc3NcIlxuaW1wb3J0IHsgTW9kdWxlUGFyYW1zQ29udGV4dCB9IGZyb20gJ2xpYi9jb250ZXh0L21vZHVsZVBhcmFtc0NvbnRleHQnXG5cbmNvbnN0IERlY2xlbnNpb25zRmllbGRzID0gKHsgbnVtYmVyUGFydCwgZGVjbGVuc2lvbnNPYmplY3ROYW1lIH0pID0+IHtcbiAgY29uc3QgeyBvcHRpb25zLCB1cGRhdGVPcHRpb25zIH0gPSBSZWFjdC51c2VDb250ZXh0KE1vZHVsZVBhcmFtc0NvbnRleHQpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc29sZS5sb2coJ251bWJlclBhcnQgOj4+ICcsIG51bWJlclBhcnQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPSdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLW5vbWluYXRpdmUtcGx1cmFsJ1xuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX25vbWluYXRpdmVfcGx1cmFsJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQoNGD0LHQu9C4XCJcbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeVtkZWNsZW5zaW9uc09iamVjdE5hbWVdLm5vbWluYXRpdmVbMV19XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1nZW5pdGl2ZS1zaW5ndWxhcidcbiAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZGVjbGVuc2lvbl9nZW5pdGl2ZV9zaW5ndWxhcicpfVxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KDRg9Cx0LvRj1wiXG4gICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3lbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5nZW5pdGl2ZVswXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPSdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWdlbml0aXZlLXBsdXJhbCdcbiAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZGVjbGVuc2lvbl9nZW5pdGl2ZV9wbHVyYWwnKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCg0YPQsdC70LXQuVwiXG4gICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3lbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5nZW5pdGl2ZVsxXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPSdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLWRhdGl2ZS1zaW5ndWxhcidcbiAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZGVjbGVuc2lvbl9kYXRpdmVfc2luZ3VsYXInKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCg0YPQsdC70Y5cIlxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0uZGF0aXZlWzBdfVxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tZGF0aXZlLXBsdXJhbCdcbiAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZGVjbGVuc2lvbl9kYXRpdmVfcGx1cmFsJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQoNGD0LHQu9GP0LxcIlxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0uZGF0aXZlWzFdfVxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24tYWNjdXNhdGl2ZS1zaW5ndWxhcidcbiAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZGVjbGVuc2lvbl9hY2N1c2F0aXZlX3Npbmd1bGFyJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQoNGD0LHQu9GOXCJcbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeVtkZWNsZW5zaW9uc09iamVjdE5hbWVdLmFjY3VzYXRpdmVbMF19XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1hY2N1c2F0aXZlLXBsdXJhbCdcbiAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZGVjbGVuc2lvbl9hY2N1c2F0aXZlX3BsdXJhbCcpfVxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KDRg9Cx0LvRj9C8XCJcbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5jdXN0b21DdXJyZW5jeVtkZWNsZW5zaW9uc09iamVjdE5hbWVdLmFjY3VzYXRpdmVbMV19XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1pbnN0cnVtZW50YWwtc2luZ3VsYXInXG4gICAgICAgICAgbGFiZWw9e3QoJ29wdGlvbnNfY3VycmVuY3lfY3VzdG9tX3ZhbHVlX2RlY2xlbnNpb25faW5zdHJ1bWVudGFsX3Npbmd1bGFyJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQoNGD0LHQu9GR0LxcIlxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0uaW5zdHJ1bWVudGFsWzBdfVxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVPcHRpb25zfVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIG5hbWU9J2N1c3RvbS1jdXJyZW5jeS1pbnRlZ2VyLWRlY2xlbnNpb24taW5zdHJ1bWVudGFsLXBsdXJhbCdcbiAgICAgICAgICBsYWJlbD17dCgnb3B0aW9uc19jdXJyZW5jeV9jdXN0b21fdmFsdWVfZGVjbGVuc2lvbl9pbnN0cnVtZW50YWxfcGx1cmFsJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQoNGD0LHQu9GP0LzQuFwiXG4gICAgICAgICAgdmFsdWU9e29wdGlvbnMuY3VzdG9tQ3VycmVuY3lbZGVjbGVuc2lvbnNPYmplY3ROYW1lXS5pbnN0cnVtZW50YWxbMV19XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbmFtZT0nY3VzdG9tLWN1cnJlbmN5LWludGVnZXItZGVjbGVuc2lvbi1wcmVwb3NpdGlvbmFsLXNpbmd1bGFyJ1xuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX3ByZXBvc2l0aW9uYWxfc2luZ3VsYXInKX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCg0YPQsdC70LVcIlxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0ucHJlcG9zaXRpb25hbFswXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBuYW1lPSdjdXN0b20tY3VycmVuY3ktaW50ZWdlci1kZWNsZW5zaW9uLXByZXBvc2l0aW9uYWwtcGx1cmFsJ1xuICAgICAgICAgIGxhYmVsPXt0KCdvcHRpb25zX2N1cnJlbmN5X2N1c3RvbV92YWx1ZV9kZWNsZW5zaW9uX3ByZXBvc2l0aW9uYWxfcGx1cmFsJyl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQoNGD0LHQu9GP0YVcIlxuICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmN1c3RvbUN1cnJlbmN5W2RlY2xlbnNpb25zT2JqZWN0TmFtZV0ucHJlcG9zaXRpb25hbFsxXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICA8Lz5cbiAgKVxufVxuXG5EZWNsZW5zaW9uc0ZpZWxkcy5wcm9wVHlwZXMgPSB7XG4gIG51bWJlclBhcnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlY2xlbnNpb25zT2JqZWN0TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkRlY2xlbnNpb25zRmllbGRzLmRlZmF1bHRQcm9wcyA9IHtcbiAgbnVtYmVyUGFydDogJ2ludGVnZXInLFxuICBkZWNsZW5zaW9uc09iamVjdE5hbWU6ICdjdXJyZW5jeU5hbWVEZWNsZW5zaW9ucycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWNsZW5zaW9uc0ZpZWxkcztcbiJdLCJzb3VyY2VSb290IjoiIn0=