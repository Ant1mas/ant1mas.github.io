(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{85928:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(86566)}])},86566:function(e,n,r){"use strict";r.r(n),r.d(n,{Home:function(){return Ge},default:function(){return qe}});var t=r(4637),c=r(51667),a=r(76049),i=r(104),o=r(59496),s=r(59091),l=r(69747),u=r(99709),m=r(59588),d=r(25440);function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function v(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,c,a=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(s){o=!0,c=s}finally{try{i||null==r.return||r.return()}finally{if(o)throw c}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return h(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(){var e=v(o.useState(null),2),n=e[0],r=e[1],t=v(o.useState(null),2),c=t[0],a=t[1],i=function(){r(null)};return{anchorEl:n,onClick:function(e){r(e.currentTarget)},onClose:i,onSelect:function(e,n){a(e),n(e),i()},selected:c,setSelected:a}}function f(e){var n,r=y(),c=r.anchorEl,a=r.onClick,i=r.onClose,l=r.onSelect,u=r.selected,h=r.setSelected,v=Boolean(c);return o.useEffect((function(){h(e.selected)}),[e.selected]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{"aria-controls":"icon-menu","aria-expanded":v?"true":void 0,"aria-haspopup":"true",onClick:a,children:e.iconEl}),(0,t.jsx)(m.Z,{id:"icon-menu",anchorEl:c,keepMounted:!0,open:v,onClose:i,children:null===(n=e.items)||void 0===n?void 0:n.map((function(n){var r=n.toString(),c=e.itemsNames[r];return(0,t.jsx)(d.Z,{selected:u===r,onClick:function(){l(r,e.onChange)},children:c},r)}))})]})}f.defaultProps={};var p=f,_=r(56762),g=r(7938);function x(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function j(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,c,a=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(s){o=!0,c=s}finally{try{i||null==r.return||r.return()}finally{if(o)throw c}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return x(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{loadingComponent:(0,t.jsx)(g.Z,{sx:{minWidth:50},variant:"text"})},c=j(o.useState(!1),2),a=c[0],i=c[1],s=(0,_.$)(e,n),l=s.t,u=s.i18n;o.useEffect((function(){u.resolvedLanguage&&i(!0)}),[u.resolvedLanguage]);var m=function(){return r.loadingComponent};return{t:a?l:m,i18n:u,translationReady:a}};var Z=function(){var e=b().i18n;return(0,t.jsxs)(a.ZP,{container:!0,component:"header",justifyContent:"flex-end",style:{paddingTop:"1rem"},children:[(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(p,{iconEl:(0,t.jsx)(l.Z,{}),items:e.languages,selected:e.language,itemsNames:{ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",en:"English"},onChange:function(n){e.changeLanguage(n)}})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)("a",{href:"https://github.com/Ant1mas/number-to-words-ru",target:"_blank",rel:"noopener noreferrer","aria-label":"Github",children:(0,t.jsx)(s.Z,{children:(0,t.jsx)(u.Z,{})})})})]})},C=r(90562),P=r(23864);var N=function(){var e=b().t;return(0,t.jsx)(a.ZP,{container:!0,component:"footer",style:{paddingBottom:"2rem",textAlign:"center"},children:(0,t.jsxs)(a.ZP,{item:!0,xs:12,children:[(0,t.jsxs)(C.Z,{variant:"caption",display:"block",children:[e("info_module_version_text")," ",(0,t.jsx)("strong",{children:"number-to-words-ru"})," ","(2.3.3)"]}),(0,t.jsxs)(C.Z,{variant:"caption",display:"block",children:["\xa9 ",(new Date).getFullYear()," ",e("author_name_anton_moskovskiy")]}),(0,t.jsxs)(C.Z,{variant:"caption",display:"block",children:[e("made_by_project")+" ",(0,t.jsx)(P.Z,{href:"https://github.com/Ant1mas",target:"_blank",rel:"noreferrer",underline:"always",variant:"caption",children:e("author_name_anton_moskovskiy")})]})]})})};var w,k=function(e){var n=e.children;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(Z,{})}),(0,t.jsx)(a.ZP,{item:!0,component:"main",sx:{flexGrow:1},children:(0,t.jsx)(a.ZP,{container:!0,spacing:3,children:n})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(N,{})})]})})};function S(){return(S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var W=function(e){return o.createElement("svg",S({"data-name":"\\u0421\\u043B\\u043E\\u0439 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 786.83 615"},e),w||(w=o.createElement("path",{d:"M328.49 455.29h252.09l57.26 157h81.41L489.25 11h-69.43L190.24 612.24h81.82ZM454.54 109 557 390.4H352.46ZM192.53 542.91a93.88 93.88 0 0 1-18.12-13.65Q144 499.92 144 448.68T175.24 366q31.19-31.39 82.85-31.41 7.07 0 13.75.61l26.7-69.91q-17.71 6.46-39.62 6.49-45.87 0-73.35-28.31t-27.49-74.18q0-47.94 27.9-75.84t72.94-27.89q43.8 0 72.32 28.93a95 95 0 0 1 20.6 31.23l31.29-81.95q-48.15-41-124.21-41-79.76 0-128.52 44.64T81.63 168.07q0 44.63 23.14 79.76t63.23 55Q120.9 323 94.24 362.3t-26.66 88q0 77.7 52.28 124.18a170.61 170.61 0 0 0 49 30.43Z"})))};var D=function(){var e=b().t;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(W,{style:{width:100}})})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(C.Z,{variant:"h2",align:"center",children:"number-to-words-ru"})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(C.Z,{variant:"h5",align:"center",children:e("main_module_description")})})]})},A=r(54146),O=r(19135),T=r(89358);var E=function(){var e=(0,O.TL)(),n=(0,O.CG)(T.vv),r=b().t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(A.Z,{id:"input-number",label:r("module_number_input_label"),margin:"normal",variant:"outlined",fullWidth:!0,value:n,placeholder:"12345.6789",helperText:r("module_number_input_helper_text"),onChange:function(n){e((0,T.F8)(n.target.value))}})})},F=r(88661),I=r(82135),M=r.n(I),L=r(54110),G=r(32222),q=r.n(G),R=r(65439),U=r.n(R),B=r(35609),H=r.n(B),$=r(45551),X=r(3806),z={currency:"currency","custom-currency-integer1":"customCurrency.currencyNameCases[0]","custom-currency-integer2":"customCurrency.currencyNameCases[1]","custom-currency-integer3":"customCurrency.currencyNameCases[2]","custom-currency-integer-declension-nominative-singular":"customCurrency.currencyNameDeclensions.nominative[0]","custom-currency-integer-declension-nominative-plural":"customCurrency.currencyNameDeclensions.nominative[1]","custom-currency-integer-declension-genitive-singular":"customCurrency.currencyNameDeclensions.genitive[0]","custom-currency-integer-declension-genitive-plural":"customCurrency.currencyNameDeclensions.genitive[1]","custom-currency-integer-declension-dative-singular":"customCurrency.currencyNameDeclensions.dative[0]","custom-currency-integer-declension-dative-plural":"customCurrency.currencyNameDeclensions.dative[1]","custom-currency-integer-declension-accusative-singular":"customCurrency.currencyNameDeclensions.accusative[0]","custom-currency-integer-declension-accusative-plural":"customCurrency.currencyNameDeclensions.accusative[1]","custom-currency-integer-declension-instrumental-singular":"customCurrency.currencyNameDeclensions.instrumental[0]","custom-currency-integer-declension-instrumental-plural":"customCurrency.currencyNameDeclensions.instrumental[1]","custom-currency-integer-declension-prepositional-singular":"customCurrency.currencyNameDeclensions.prepositional[0]","custom-currency-integer-declension-prepositional-plural":"customCurrency.currencyNameDeclensions.prepositional[1]","custom-currency-fractional1":"customCurrency.fractionalPartNameCases[0]","custom-currency-fractional2":"customCurrency.fractionalPartNameCases[1]","custom-currency-fractional3":"customCurrency.fractionalPartNameCases[2]","custom-currency-fractional-declension-nominative-singular":"customCurrency.fractionalPartNameDeclensions.nominative[0]","custom-currency-fractional-declension-nominative-plural":"customCurrency.fractionalPartNameDeclensions.nominative[1]","custom-currency-fractional-declension-genitive-singular":"customCurrency.fractionalPartNameDeclensions.genitive[0]","custom-currency-fractional-declension-genitive-plural":"customCurrency.fractionalPartNameDeclensions.genitive[1]","custom-currency-fractional-declension-dative-singular":"customCurrency.fractionalPartNameDeclensions.dative[0]","custom-currency-fractional-declension-dative-plural":"customCurrency.fractionalPartNameDeclensions.dative[1]","custom-currency-fractional-declension-accusative-singular":"customCurrency.fractionalPartNameDeclensions.accusative[0]","custom-currency-fractional-declension-accusative-plural":"customCurrency.fractionalPartNameDeclensions.accusative[1]","custom-currency-fractional-declension-instrumental-singular":"customCurrency.fractionalPartNameDeclensions.instrumental[0]","custom-currency-fractional-declension-instrumental-plural":"customCurrency.fractionalPartNameDeclensions.instrumental[1]","custom-currency-fractional-declension-prepositional-singular":"customCurrency.fractionalPartNameDeclensions.prepositional[0]","custom-currency-fractional-declension-prepositional-plural":"customCurrency.fractionalPartNameDeclensions.prepositional[1]","custom-currency-form-integer":"customCurrency.currencyNounGender.integer","custom-currency-form-fractional":"customCurrency.currencyNounGender.fractionalPart","custom-currency-fractional-min-length":"customCurrency.fractionalPartMinLength","round-number":"roundNumber",declension:"declension","convert-minus-sign":"convertMinusSignToWord","show-number-part-integer":"showNumberParts.integer","show-number-part-fractional":"showNumberParts.fractional","convert-number-part-integer":"convertNumbertToWords.integer","convert-number-part-fractional":"convertNumbertToWords.fractional","show-currency-part-integer":"showCurrency.integer","show-currency-part-fractional":"showCurrency.fractional"},Q=["roundNumber","currency.currencyNounGender.integer","currency.currencyNounGender.fractionalPart","currency.fractionalPartMinLength"],Y={"custom-currency-integer1":"customCurrency.currencyNameDeclensions.nominative[0]","custom-currency-integer2":"customCurrency.currencyNameDeclensions.genitive[0]","custom-currency-integer3":"customCurrency.currencyNameDeclensions.genitive[1]","custom-currency-integer-declension-nominative-singular":"customCurrency.currencyNameCases[0]","custom-currency-integer-declension-genitive-singular":"customCurrency.currencyNameCases[1]","custom-currency-integer-declension-genitive-plural":"customCurrency.currencyNameCases[2]","custom-currency-fractional1":"customCurrency.fractionalPartNameDeclensions.nominative[0]","custom-currency-fractional2":"customCurrency.fractionalPartNameDeclensions.genitive[0]","custom-currency-fractional3":"customCurrency.fractionalPartNameDeclensions.genitive[1]","custom-currency-fractional-declension-nominative-singular":"customCurrency.fractionalPartNameCases[0]","custom-currency-fractional-declension-genitive-singular":"customCurrency.fractionalPartNameCases[1]","custom-currency-fractional-declension-genitive-plural":"customCurrency.fractionalPartNameCases[2]"},J=function(e,n){if(!n||"[object Object]"!==Object.prototype.toString.call(n))return e;var r,t={},c=function(e,n,r){var c=Object.prototype.toString.call(e),a=Object.prototype.toString.call(n);if("[object Undefined]"!==a)if(c===a)if("[object Object]"!==c)"[object Array]"!==c?"[object Function]"===c?e.toString()!==n.toString()&&(t[r]=n):e!==n&&(t[r]=n):function(e,n){if(e.length!==n.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==n[r])return!1;return!0}(e,n)||(t[r]=n);else{var i=J(e,n);Object.keys(i).length>0&&(t[r]=i)}else t[r]=n;else t[r]=null};for(r in e)e.hasOwnProperty(r)&&c(e[r],n[r],r);for(r in n)n.hasOwnProperty(r)&&(e[r]||e[r]===n[r]||(t[r]=n[r]));return t},K=J;function V(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function ee(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,c,a=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(s){o=!0,c=s}finally{try{i||null==r.return||r.return()}finally{if(o)throw c}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return V(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return V(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(){var e=(0,O.TL)(),n=(0,O.CG)($.cL),r=ee(o.useState(X.Z),2),t=r[0],c=r[1],a=ee(o.useState({}),2),i=a[0],s=a[1];o.useEffect((function(){h(n)}),[n]),o.useEffect((function(){s(K(X.Z,t))}),[t]);var l=function(e){var n=e.type,r=e.value;return"number"===n?r=u(e):"checkbox"===n&&(r=Boolean(e.checked)),r},u=function(e){var n=e.value;return""!==n&&(""!==e.min&&(n=Number(n)>=Number(e.min)?n:e.min),""!==e.max&&(n=Number(n)<=Number(e.min)?n:e.min)),n},m=function(r,t){var c=U()(z,[r]);if(void 0!==c){var a=q()(n);a=H()(a,c,t),a=d(a,r,t),e((0,$.CP)({value:a}))}},d=function(e,n,r){var t=U()(Y,[n]);if(void 0!==t){var c=q()(e);return c=H()(c,t,r)}return e},h=function(e){var n=q()(e);delete n.customCurrency,"custom"===e.currency&&(n.currency=e.customCurrency),n=v(n,Q),c(n)},v=function(e,n){var r=q()(e);return n.some((function(e){var n=U()(r,e);void 0!==n&&(r=H()(r,e,Number(n)))})),r};return{options:n,formattedOptions:t,optionsDifferences:i,updateOptions:function(e){var n=e.target.name,r=l(e.target);m(n,r)}}}var re=ne,te=function(e){var n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)};var ce=function(){var e=(0,O.CG)(T.vv),n=re().formattedOptions,r=(0,L.Ds)().enqueueSnackbar,c=b().t,i=M().convert(""!==e&&"-"!==e?e:"0",n);return(0,t.jsxs)(a.ZP,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(C.Z,{variant:"h4",children:c("result_block_title")})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,style:{width:"100%",textAlign:"center",borderRadius:4},children:(0,t.jsx)(C.Z,{id:"result-text",style:{padding:"1rem",backgroundColor:"#efecf4",overflowX:"hidden"},children:i})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(F.Z,{variant:"contained",color:"inherit",onClick:function(){te(i),r(c("result_block_button_copy_snackbar_text"),{autoHideDuration:2e3})},children:c("result_block_button_copy")})})]})},ae=r(60492),ie=r(54896),oe=r(38211),se=r(81626),le=r(34499);function ue(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(oe.Z,{style:{minWidth:e.minWidth},fullWidth:e.fullWidth,variant:"standard",children:[(0,t.jsx)(se.Z,{id:"label-select",children:e.label}),(0,t.jsx)(le.Z,{name:e.name,labelId:"label-select",value:e.value,onChange:e.onChange,children:e.items.map((function(e){return(0,t.jsx)(d.Z,{value:e.value,children:e.name},e.value)}))})]})})}ue.defaultProps={value:"",items:[],minWidth:100,fullWidth:!1};var me=ue,de=r(40507),he=r.n(de),ve=r(89601);function ye(e){var n=e.numberPart,r=e.declensionsObjectName,c=ne(),i=c.options,o=c.updateOptions,s=b().t;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(A.Z,{name:"custom-currency-".concat(n,"-declension-nominative-singular"),label:s("options_currency_custom_value_declension_nominative_singular"),variant:"standard",fullWidth:!0,placeholder:ve.Z[r].nominative[0],value:i.customCurrency[r].nominative[0],onChange:o})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(A.Z,{name:"custom-currency-".concat(n,"-declension-nominative-plural"),label:s("options_currency_custom_value_declension_nominative_plural"),variant:"standard",fullWidth:!0,placeholder:ve.Z[r].nominative[1],value:i.customCurrency[r].nominative[1],onChange:o})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(A.Z,{name:"custom-currency-".concat(n,"-declension-genitive-singular"),label:s("options_currency_custom_value_declension_genitive_singular"),variant:"standard",fullWidth:!0,placeholder:ve.Z[r].genitive[0],value:i.customCurrency[r].genitive[0],onChange:o})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(A.Z,{name:"custom-currency-".concat(n,"-declension-genitive-plural"),label:s("options_currency_custom_value_declension_genitive_plural"),variant:"standard",fullWidth:!0,placeholder:ve.Z[r].genitive[1],value:i.customCurrency[r].genitive[1],onChange:o})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(A.Z,{name:"custom-currency-".concat(n,"-declension-dative-singular"),label:s("options_currency_custom_value_declension_dative_singular"),variant:"standard",fullWidth:!0,placeholder:ve.Z[r].dative[0],value:i.customCurrency[r].dative[0],onChange:o})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(A.Z,{name:"custom-currency-".concat(n,"-declension-dative-plural"),label:s("options_currency_custom_value_declension_dative_plural"),variant:"standard",fullWidth:!0,placeholder:ve.Z[r].dative[1],value:i.customCurrency[r].dative[1],onChange:o})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(A.Z,{name:"custom-currency-".concat(n,"-declension-accusative-singular"),label:s("options_currency_custom_value_declension_accusative_singular"),variant:"standard",fullWidth:!0,placeholder:ve.Z[r].accusative[0],value:i.customCurrency[r].accusative[0],onChange:o})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(A.Z,{name:"custom-currency-".concat(n,"-declension-accusative-plural"),label:s("options_currency_custom_value_declension_accusative_plural"),variant:"standard",fullWidth:!0,placeholder:ve.Z[r].accusative[1],value:i.customCurrency[r].accusative[1],onChange:o})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(A.Z,{name:"custom-currency-".concat(n,"-declension-instrumental-singular"),label:s("options_currency_custom_value_declension_instrumental_singular"),variant:"standard",fullWidth:!0,placeholder:ve.Z[r].instrumental[0],value:i.customCurrency[r].instrumental[0],onChange:o})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(A.Z,{name:"custom-currency-".concat(n,"-declension-instrumental-plural"),label:s("options_currency_custom_value_declension_instrumental_plural"),variant:"standard",fullWidth:!0,placeholder:ve.Z[r].instrumental[1],value:i.customCurrency[r].instrumental[1],onChange:o})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(A.Z,{name:"custom-currency-".concat(n,"-declension-prepositional-singular"),label:s("options_currency_custom_value_declension_prepositional_singular"),variant:"standard",fullWidth:!0,placeholder:ve.Z[r].prepositional[0],value:i.customCurrency[r].prepositional[0],onChange:o})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(A.Z,{name:"custom-currency-".concat(n,"-declension-prepositional-plural"),label:s("options_currency_custom_value_declension_prepositional_plural"),variant:"standard",fullWidth:!0,placeholder:ve.Z[r].prepositional[1],value:i.customCurrency[r].prepositional[1],onChange:o})})]})}ye.propTypes={numberPart:he().string,declensionsObjectName:he().string},ye.defaultProps={numberPart:"integer",declensionsObjectName:"currencyNameDeclensions"};var fe=ye;var pe=function(){var e=ne(),n=e.options,r=e.updateOptions,c=b().t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(ie.Z,{sx:{borderLeft:2,borderColor:"rgb(85, 108, 214, 0.5)",marginY:1,paddingX:1},children:(0,t.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(C.Z,{variant:"h5",display:"block",children:c("options_currency_custom_integer_block_title")})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:4,children:(0,t.jsx)(A.Z,{name:"custom-currency-integer1",label:c("options_currency_custom_value_form1"),variant:"standard",fullWidth:!0,placeholder:"\u0420\u0443\u0431\u043b\u044c",value:n.customCurrency.currencyNameCases[0],onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:4,children:(0,t.jsx)(A.Z,{name:"custom-currency-integer2",label:c("options_currency_custom_value_form2"),variant:"standard",fullWidth:!0,placeholder:"\u0420\u0443\u0431\u043b\u044f",value:n.customCurrency.currencyNameCases[1],onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:4,children:(0,t.jsx)(A.Z,{name:"custom-currency-integer3",label:c("options_currency_custom_value_form3"),variant:"standard",fullWidth:!0,placeholder:"\u0420\u0443\u0431\u043b\u0435\u0439",value:n.customCurrency.currencyNameCases[2],onChange:r})}),(0,t.jsx)(fe,{numberPart:"integer",declensionsObjectName:"currencyNameDeclensions"}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(me,{name:"custom-currency-form-integer",fullWidth:!0,label:c("options_currency_custom_value_currency_name_form"),value:n.customCurrency.currencyNounGender.integer,items:[{value:0,name:c("options_currency_custom_value_word_form1")},{value:1,name:c("options_currency_custom_value_word_form2")},{value:2,name:c("options_currency_custom_value_word_form3")}],onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,style:{marginTop:"1.5rem"},children:(0,t.jsx)(C.Z,{variant:"h5",display:"block",children:c("options_currency_custom_fractional_block_title")})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:4,children:(0,t.jsx)(A.Z,{name:"custom-currency-fractional1",label:c("options_currency_custom_value_form1"),variant:"standard",fullWidth:!0,placeholder:"\u041a\u043e\u043f\u0435\u0439\u043a\u0430",value:n.customCurrency.fractionalPartNameCases[0],onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:4,children:(0,t.jsx)(A.Z,{name:"custom-currency-fractional2",label:c("options_currency_custom_value_form2"),variant:"standard",fullWidth:!0,placeholder:"\u041a\u043e\u043f\u0435\u0439\u043a\u0438",value:n.customCurrency.fractionalPartNameCases[1],onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:4,children:(0,t.jsx)(A.Z,{name:"custom-currency-fractional3",label:c("options_currency_custom_value_form3"),variant:"standard",fullWidth:!0,placeholder:"\u041a\u043e\u043f\u0435\u0435\u043a",value:n.customCurrency.fractionalPartNameCases[2],onChange:r})}),(0,t.jsx)(fe,{numberPart:"fractional",declensionsObjectName:"fractionalPartNameDeclensions"}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(me,{name:"custom-currency-form-fractional",fullWidth:!0,label:c("options_currency_custom_value_currency_name_form"),value:n.customCurrency.currencyNounGender.fractionalPart,items:[{value:0,name:c("options_currency_custom_value_word_form1")},{value:1,name:c("options_currency_custom_value_word_form2")},{value:2,name:c("options_currency_custom_value_word_form3")}],onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,style:{marginTop:"1.5rem"},children:(0,t.jsx)(C.Z,{variant:"h5",display:"block",children:c("options_currency_custom_common_block_title")})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(A.Z,{name:"custom-currency-fractional-min-length",label:c("options_currency_fractionalPartMinLength"),variant:"standard",fullWidth:!0,type:"number",inputProps:{min:0},placeholder:"2",value:n.customCurrency.fractionalPartMinLength,onChange:r})})]})})})},_e=r(48161),ge=r(52934);function xe(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(_e.Z,{control:(0,t.jsx)(ge.Z,{name:e.name,checked:e.checked,onChange:e.onChange,color:"primary"}),label:e.label})})}xe.defaultProps={};var je=xe,be=function(e,n){return e.roundNumber<=-1?n("options_round_number_helper_disabled"):("rub"===e.currency||"usd"===e.currency||"eur"===e.currency)&&Number(e.roundNumber)>2?n("options_round_number_helper_currency_max"):void 0};var Ze=function(){var e=ne(),n=e.options,r=e.updateOptions,c=b().t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.ZP,{container:!0,direction:"column",spacing:1,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,t.jsx)(me,{name:"currency",label:c("options_currency_select_label"),fullWidth:!0,value:n.currency,onChange:r,items:[{value:"rub",name:c("options_currency_select_value_rub")},{value:"usd",name:c("options_currency_select_value_usd")},{value:"eur",name:c("options_currency_select_value_eur")},{value:"number",name:c("options_currency_select_value_number")},{value:"custom",name:c("options_currency_select_value_custom")}]})}),(0,t.jsx)(ae.Z,{xsUp:"custom"!==n.currency,children:(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(pe,{})})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,t.jsx)(me,{name:"declension",label:c("options_declension_label"),fullWidth:!0,value:n.declension,onChange:r,items:[{value:"nominative",name:c("options_declension_select_value_nominative")},{value:"genitive",name:c("options_declension_select_value_genitive")},{value:"dative",name:c("options_declension_select_value_dative")},{value:"accusative",name:c("options_declension_select_value_accusative")},{value:"instrumental",name:c("options_declension_select_value_instrumental")},{value:"prepositional",name:c("options_declension_select_value_prepositional")}]})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,t.jsx)(A.Z,{name:"round-number",label:c("options_round_number"),variant:"standard",fullWidth:!0,placeholder:"2",type:"number",inputProps:{min:-1},helperText:be(n,c),value:n.roundNumber,onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(je,{name:"convert-minus-sign",label:c("options_convert_minus_sign"),checked:n.convertMinusSignToWord,onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(je,{name:"show-number-part-integer",label:c("options_show_integer_part"),checked:n.showNumberParts.integer,onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(je,{name:"show-number-part-fractional",label:c("options_show_fractional_part"),checked:n.showNumberParts.fractional,onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(je,{name:"convert-number-part-integer",label:c("options_convert_integer_part"),checked:n.convertNumbertToWords.integer,onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(je,{name:"convert-number-part-fractional",label:c("options_convert_fractional_part"),checked:n.convertNumbertToWords.fractional,onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(je,{name:"show-currency-part-integer",label:c("options_show_currency_integer_part"),checked:n.showCurrency.integer,onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(je,{name:"show-currency-part-fractional",label:c("options_show_currency_fractional_part"),checked:n.showCurrency.fractional,onChange:r})})]})})};var Ce=function(){var e=b().t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.ZP,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(C.Z,{variant:"h4",children:e("options_block_title")})}),(0,t.jsx)(a.ZP,{style:{width:"100%"},children:(0,t.jsx)(Ze,{})})]})})},Pe=function(e){return JSON.stringify(e,null,2).replace(/{/,"").split("").reverse().join("").replace(/}/,"").split("").reverse().join("").replace(/("[a-zA-Z]+"[:])/g,(function(e){return e.replace(/"/g,"")})).trim()},Ne=function(e){var n=e.substring(1).split("").findIndex((function(e){if(" "!==e)return!0}));return e.replace(new RegExp("\n".concat(" ".repeat(n)),"gi"),"\n").trim()};var we=function(e,n){return e.replace(/\n/g,"\n".concat(" ".repeat(n)))};function ke(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function Se(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,c,a=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(s){o=!0,c=s}finally{try{i||null==r.return||r.return()}finally{if(o)throw c}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return ke(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ke(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function We(){var e=(0,O.CG)(T.vv),n=re().optionsDifferences,r=Se(o.useState("\n    const numberToWordsRu = require('number-to-words-ru');\n\n    numberToWordsRu.convert('".concat(e,"');\n  ")),2),t=r[0],c=r[1],a=we(Pe(n),14);o.useEffect((function(){i()}),[e,n]);var i=function(){c(Ne("\n      const numberToWordsRu = require('number-to-words-ru');\n\n      ".concat(a.length>0?Ne("\n        numberToWordsRu.convert('".concat(e,"', {\n          ").concat(Ne(a),"\n        })\n      ")):"numberToWordsRu.convert('".concat(e,"');"),"\n    ")))};return{code:t}}var De=r(12727),Ae=r(23627);function Oe(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(De.Z,{language:e.language,style:Ae.Z,customStyle:{padding:"1rem"},children:e.code})})}Oe.defaultProps={};var Te=Oe;var Ee=function(){var e=We().code,n=(0,L.Ds)().enqueueSnackbar,r=b().t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.ZP,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[(0,t.jsx)(a.ZP,{item:!0,sx:{width:"100%",maxWidth:"100%"},children:(0,t.jsx)(Te,{code:e,language:"javascript"})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(F.Z,{variant:"contained",color:"inherit",onClick:function(){te(Ne(e)),n(r("code_block_button_copy_snackbar_text"),{autoHideDuration:2e3})},children:r("code_block_button_copy")})})]})})};var Fe=function(){var e=b().t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.ZP,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(C.Z,{variant:"h4",children:e("code_block_title")})}),(0,t.jsx)(a.ZP,{sx:{width:"100%"},children:(0,t.jsx)(Ee,{})})]})})},Ie=r(82774);var Me=function(){var e=b().t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.ZP,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,sx:{textAlign:"center"},children:(0,t.jsx)(C.Z,{variant:"h4",children:e("links_block_title")})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(C.Z,{align:"center",children:(0,t.jsxs)(P.Z,{href:"https://github.com/Ant1mas/number-to-words-ru/blob/master/README.md#api",target:"_blank",rel:"noreferrer",sx:{color:"#000000de"},children:[(0,t.jsx)(Ie.Z,{fontSize:"small",sx:{verticalAlign:"text-top"}}),e("links_block_link_api")]})})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(C.Z,{align:"center",children:(0,t.jsxs)(P.Z,{href:"https://codesandbox.io/s/t0dbl?file=/index.js:51-63",target:"_blank",rel:"noreferrer",sx:{color:"#000000de"},children:[(0,t.jsx)(Ie.Z,{fontSize:"small",sx:{verticalAlign:"text-top"}}),e("links_block_link_example_codesandbox")]})})})]})})};var Le=function(){var e=b().t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(C.Z,{variant:"h4",align:"center",children:e("installation_block_title")})}),(0,t.jsxs)(a.ZP,{item:!0,xs:12,lg:4,children:[(0,t.jsx)(C.Z,{variant:"body1",children:e("installation_npm_title")}),(0,t.jsx)(Te,{code:"npm install number-to-words-ru",language:"bash"})]}),(0,t.jsxs)(a.ZP,{item:!0,xs:12,lg:4,children:[(0,t.jsx)(C.Z,{variant:"body1",children:e("installation_yarn_title")}),(0,t.jsx)(Te,{code:"yarn add number-to-words-ru",language:"bash"})]}),(0,t.jsxs)(a.ZP,{item:!0,xs:12,lg:4,children:[(0,t.jsx)(C.Z,{variant:"body1",children:e("installation_pnpm_title")}),(0,t.jsx)(Te,{code:"pnpm add number-to-words-ru",language:"bash"})]})]})})};function Ge(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.default,{children:[(0,t.jsx)("title",{children:"number-to-words-ru node module - convert number to russian words"}),(0,t.jsx)("meta",{name:"description",content:"Node.js module to convert number to words in russian"})]}),(0,t.jsxs)(k,{children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(D,{})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(a.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(E,{})})})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(ce,{})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,lg:6,children:(0,t.jsx)(Ce,{})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,lg:6,children:(0,t.jsxs)(a.ZP,{container:!0,direction:"column",spacing:6,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,sx:{width:"100%"},children:(0,t.jsx)(Fe,{})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(Me,{})})]})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(Le,{})})]})]})}var qe=Ge}},function(e){e.O(0,[713,774,888,179],(function(){return n=85928,e(e.s=n);var n}));var n=e.O();_N_E=n}]);