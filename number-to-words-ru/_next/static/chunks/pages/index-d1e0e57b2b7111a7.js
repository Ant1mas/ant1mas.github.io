(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{85928:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1092)}])},1092:function(e,n,r){"use strict";r.r(n),r.d(n,{Home:function(){return Ee},default:function(){return Fe}});var t=r(4637),c=r(51667),a=r(62804),o=r(2579),i=r(59496),s=r(58305),u=r(30971),l=r(71100),m=r(54645),d=r(92466),h=r(14306);function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,c,a=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);o=!0);}catch(s){i=!0,c=s}finally{try{o||null==r.return||r.return()}finally{if(i)throw c}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return v(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(){var e=y(i.useState(null),2),n=e[0],r=e[1],t=y(i.useState(null),2),c=t[0],a=t[1],o=function(){r(null)};return{anchorEl:n,onClick:function(e){r(e.currentTarget)},onClose:o,onSelect:function(e,n){a(e),n(e),o()},selected:c,setSelected:a}}function f(e){var n,r=p(),c=r.anchorEl,a=r.onClick,o=r.onClose,u=r.onSelect,l=r.selected,m=r.setSelected,v=Boolean(c);return i.useEffect((function(){m(e.selected)}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{"aria-controls":"icon-menu","aria-expanded":v?"true":void 0,"aria-haspopup":"true",onClick:a,children:e.iconEl}),(0,t.jsx)(d.Z,{id:"icon-menu",anchorEl:c,keepMounted:!0,open:v,onClose:o,children:null===(n=e.items)||void 0===n?void 0:n.map((function(n){var r=n.toString(),c=e.itemsNames[r];return(0,t.jsx)(h.Z,{selected:l===r,onClick:function(){u(r,e.onChange)},children:c},r)}))})]})}f.defaultProps={};var _=f;var g=function(){var e=(0,m.$)("common",{useSuspense:!1}).i18n;return(0,t.jsxs)(a.ZP,{container:!0,component:"header",justifyContent:"flex-end",style:{paddingTop:"1rem"},children:[(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(_,{iconEl:(0,t.jsx)(u.Z,{}),items:e.languages,selected:e.language,itemsNames:{ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",en:"English"},onChange:function(n){e.changeLanguage(n)}})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)("a",{href:"https://github.com/Ant1mas/number-to-words-ru",target:"_blank",rel:"noopener noreferrer","aria-label":"Github",children:(0,t.jsx)(s.Z,{children:(0,t.jsx)(l.Z,{})})})})]})},x=r(24646),j=r(68685);var b=function(){var e=(0,m.$)("common",{useSuspense:!1}).t;return(0,t.jsx)(a.ZP,{container:!0,component:"footer",style:{paddingBottom:"2rem",textAlign:"center"},children:(0,t.jsxs)(a.ZP,{item:!0,xs:12,children:[(0,t.jsxs)(x.Z,{variant:"caption",display:"block",children:[e("info_module_version_text")," ",(0,t.jsx)("strong",{children:"number-to-words-ru"})," ","(2.3.3)"]}),(0,t.jsxs)(x.Z,{variant:"caption",display:"block",children:["\xa9 ",(new Date).getFullYear()," ",e("author_name_anton_moskovskiy")]}),(0,t.jsxs)(x.Z,{variant:"caption",display:"block",children:[e("made_by_project")+" ",(0,t.jsx)(j.Z,{href:"https://github.com/Ant1mas",target:"_blank",rel:"noreferrer",underline:"always",variant:"caption",children:e("author_name_anton_moskovskiy")})]})]})})};var Z,C=function(e){var n=e.children;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(g,{})}),(0,t.jsx)(a.ZP,{item:!0,component:"main",sx:{flexGrow:1},children:(0,t.jsx)(a.ZP,{container:!0,spacing:3,children:n})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(b,{})})]})})};function P(){return(P=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var N=function(e){return i.createElement("svg",P({"data-name":"\\u0421\\u043B\\u043E\\u0439 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 786.83 615"},e),Z||(Z=i.createElement("path",{d:"M328.49 455.29h252.09l57.26 157h81.41L489.25 11h-69.43L190.24 612.24h81.82ZM454.54 109 557 390.4H352.46ZM192.53 542.91a93.88 93.88 0 0 1-18.12-13.65Q144 499.92 144 448.68T175.24 366q31.19-31.39 82.85-31.41 7.07 0 13.75.61l26.7-69.91q-17.71 6.46-39.62 6.49-45.87 0-73.35-28.31t-27.49-74.18q0-47.94 27.9-75.84t72.94-27.89q43.8 0 72.32 28.93a95 95 0 0 1 20.6 31.23l31.29-81.95q-48.15-41-124.21-41-79.76 0-128.52 44.64T81.63 168.07q0 44.63 23.14 79.76t63.23 55Q120.9 323 94.24 362.3t-26.66 88q0 77.7 52.28 124.18a170.61 170.61 0 0 0 49 30.43Z"})))};var w=function(){var e=(0,m.$)("common",{useSuspense:!1}).t;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(N,{style:{width:100}})})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(x.Z,{variant:"h2",align:"center",children:"number-to-words-ru"})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(x.Z,{variant:"h5",align:"center",children:e("main_module_description")})})]})},k=r(40105),S=r(19135),W=r(89358);var D=function(){var e=(0,S.TL)(),n=(0,S.CG)(W.vv),r=(0,m.$)("common",{useSuspense:!1}).t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(k.Z,{id:"input-number",label:r("module_number_input_label"),margin:"normal",variant:"outlined",fullWidth:!0,value:n,placeholder:"12345.6789",helperText:r("module_number_input_helper_text"),onChange:function(n){e((0,W.F8)(n.target.value))}})})},O=r(81573),A=r(82135),T=r.n(A),E=r(64391),F=r(32222),I=r.n(F),$=r(65439),M=r.n($),G=r(35609),q=r.n(G),L=r(45551),R=r(3806),B={currency:"currency","custom-currency-integer1":"customCurrency.currencyNameCases[0]","custom-currency-integer2":"customCurrency.currencyNameCases[1]","custom-currency-integer3":"customCurrency.currencyNameCases[2]","custom-currency-integer-declension-nominative-singular":"customCurrency.currencyNameDeclensions.nominative[0]","custom-currency-integer-declension-nominative-plural":"customCurrency.currencyNameDeclensions.nominative[1]","custom-currency-integer-declension-genitive-singular":"customCurrency.currencyNameDeclensions.genitive[0]","custom-currency-integer-declension-genitive-plural":"customCurrency.currencyNameDeclensions.genitive[1]","custom-currency-integer-declension-dative-singular":"customCurrency.currencyNameDeclensions.dative[0]","custom-currency-integer-declension-dative-plural":"customCurrency.currencyNameDeclensions.dative[1]","custom-currency-integer-declension-accusative-singular":"customCurrency.currencyNameDeclensions.accusative[0]","custom-currency-integer-declension-accusative-plural":"customCurrency.currencyNameDeclensions.accusative[1]","custom-currency-integer-declension-instrumental-singular":"customCurrency.currencyNameDeclensions.instrumental[0]","custom-currency-integer-declension-instrumental-plural":"customCurrency.currencyNameDeclensions.instrumental[1]","custom-currency-integer-declension-prepositional-singular":"customCurrency.currencyNameDeclensions.prepositional[0]","custom-currency-integer-declension-prepositional-plural":"customCurrency.currencyNameDeclensions.prepositional[1]","custom-currency-fractional1":"customCurrency.fractionalPartNameCases[0]","custom-currency-fractional2":"customCurrency.fractionalPartNameCases[1]","custom-currency-fractional3":"customCurrency.fractionalPartNameCases[2]","custom-currency-fractional-declension-nominative-singular":"customCurrency.fractionalPartNameDeclensions.nominative[0]","custom-currency-fractional-declension-nominative-plural":"customCurrency.fractionalPartNameDeclensions.nominative[1]","custom-currency-fractional-declension-genitive-singular":"customCurrency.fractionalPartNameDeclensions.genitive[0]","custom-currency-fractional-declension-genitive-plural":"customCurrency.fractionalPartNameDeclensions.genitive[1]","custom-currency-fractional-declension-dative-singular":"customCurrency.fractionalPartNameDeclensions.dative[0]","custom-currency-fractional-declension-dative-plural":"customCurrency.fractionalPartNameDeclensions.dative[1]","custom-currency-fractional-declension-accusative-singular":"customCurrency.fractionalPartNameDeclensions.accusative[0]","custom-currency-fractional-declension-accusative-plural":"customCurrency.fractionalPartNameDeclensions.accusative[1]","custom-currency-fractional-declension-instrumental-singular":"customCurrency.fractionalPartNameDeclensions.instrumental[0]","custom-currency-fractional-declension-instrumental-plural":"customCurrency.fractionalPartNameDeclensions.instrumental[1]","custom-currency-fractional-declension-prepositional-singular":"customCurrency.fractionalPartNameDeclensions.prepositional[0]","custom-currency-fractional-declension-prepositional-plural":"customCurrency.fractionalPartNameDeclensions.prepositional[1]","custom-currency-form-integer":"customCurrency.currencyNounGender.integer","custom-currency-form-fractional":"customCurrency.currencyNounGender.fractionalPart","custom-currency-fractional-min-length":"customCurrency.fractionalPartMinLength","round-number":"roundNumber",declension:"declension","convert-minus-sign":"convertMinusSignToWord","show-number-part-integer":"showNumberParts.integer","show-number-part-fractional":"showNumberParts.fractional","convert-number-part-integer":"convertNumbertToWords.integer","convert-number-part-fractional":"convertNumbertToWords.fractional","show-currency-part-integer":"showCurrency.integer","show-currency-part-fractional":"showCurrency.fractional"},H=["roundNumber","currency.currencyNounGender.integer","currency.currencyNounGender.fractionalPart","currency.fractionalPartMinLength"],U={"custom-currency-integer1":"customCurrency.currencyNameDeclensions.nominative[0]","custom-currency-integer2":"customCurrency.currencyNameDeclensions.genitive[0]","custom-currency-integer3":"customCurrency.currencyNameDeclensions.genitive[1]","custom-currency-integer-declension-nominative-singular":"customCurrency.currencyNameCases[0]","custom-currency-integer-declension-genitive-singular":"customCurrency.currencyNameCases[1]","custom-currency-integer-declension-genitive-plural":"customCurrency.currencyNameCases[2]","custom-currency-fractional1":"customCurrency.fractionalPartNameDeclensions.nominative[0]","custom-currency-fractional2":"customCurrency.fractionalPartNameDeclensions.genitive[0]","custom-currency-fractional3":"customCurrency.fractionalPartNameDeclensions.genitive[1]","custom-currency-fractional-declension-nominative-singular":"customCurrency.fractionalPartNameCases[0]","custom-currency-fractional-declension-genitive-singular":"customCurrency.fractionalPartNameCases[1]","custom-currency-fractional-declension-genitive-plural":"customCurrency.fractionalPartNameCases[2]"},X=function(e,n){if(!n||"[object Object]"!==Object.prototype.toString.call(n))return e;var r,t={},c=function(e,n,r){var c=Object.prototype.toString.call(e),a=Object.prototype.toString.call(n);if("[object Undefined]"!==a)if(c===a)if("[object Object]"!==c)"[object Array]"!==c?"[object Function]"===c?e.toString()!==n.toString()&&(t[r]=n):e!==n&&(t[r]=n):function(e,n){if(e.length!==n.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==n[r])return!1;return!0}(e,n)||(t[r]=n);else{var o=X(e,n);Object.keys(o).length>0&&(t[r]=o)}else t[r]=n;else t[r]=null};for(r in e)e.hasOwnProperty(r)&&c(e[r],n[r],r);for(r in n)n.hasOwnProperty(r)&&(e[r]||e[r]===n[r]||(t[r]=n[r]));return t},Q=X;function Y(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function z(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,c,a=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);o=!0);}catch(s){i=!0,c=s}finally{try{o||null==r.return||r.return()}finally{if(i)throw c}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Y(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(){var e=(0,S.TL)(),n=(0,S.CG)(L.cL),r=z(i.useState(R.Z),2),t=r[0],c=r[1],a=z(i.useState({}),2),o=a[0],s=a[1];i.useEffect((function(){h(n)}),[n]),i.useEffect((function(){s(Q(R.Z,t))}),[t]);var u=function(e){var n=e.type,r=e.value;return"number"===n?r=l(e):"checkbox"===n&&(r=Boolean(e.checked)),r},l=function(e){var n=e.value;return""!==n&&(""!==e.min&&(n=Number(n)>=Number(e.min)?n:e.min),""!==e.max&&(n=Number(n)<=Number(e.min)?n:e.min)),n},m=function(r,t){var c=M()(B,[r]);if(void 0!==c){var a=I()(n);a=q()(a,c,t),a=d(a,r,t),e((0,L.CP)({value:a}))}},d=function(e,n,r){var t=M()(U,[n]);if(void 0!==t){var c=I()(e);return c=q()(c,t,r)}return e},h=function(e){var n=I()(e);delete n.customCurrency,"custom"===e.currency&&(n.currency=e.customCurrency),n=v(n,H),c(n)},v=function(e,n){var r=I()(e);return n.some((function(e){var n=M()(r,e);void 0!==n&&(r=q()(r,e,Number(n)))})),r};return{options:n,formattedOptions:t,optionsDifferences:o,updateOptions:function(e){var n=e.target.name,r=u(e.target);m(n,r)}}}var K=J,V=function(e){var n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)};var ee=function(){var e=(0,S.CG)(W.vv),n=K().formattedOptions,r=(0,E.Ds)().enqueueSnackbar,c=(0,m.$)("common",{useSuspense:!1}).t,o=T().convert(""!==e&&"-"!==e?e:"0",n);return(0,t.jsxs)(a.ZP,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(x.Z,{variant:"h4",children:c("result_block_title")})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,style:{width:"100%",textAlign:"center",borderRadius:4},children:(0,t.jsx)(x.Z,{id:"result-text",style:{padding:"1rem",backgroundColor:"#efecf4",overflowX:"hidden"},children:o})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(O.Z,{variant:"contained",color:"inherit",onClick:function(){V(o),r(c("result_block_button_copy_snackbar_text"),{autoHideDuration:2e3})},children:c("result_block_button_copy")})})]})},ne=r(20392),re=r(35668),te=r(5211),ce=r(15745),ae=r(95001);function oe(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(te.Z,{style:{minWidth:e.minWidth},fullWidth:e.fullWidth,variant:"standard",children:[(0,t.jsx)(ce.Z,{id:"label-select",children:e.label}),(0,t.jsx)(ae.Z,{name:e.name,labelId:"label-select",value:e.value,onChange:e.onChange,children:e.items.map((function(e){return(0,t.jsx)(h.Z,{value:e.value,children:e.name},e.value)}))})]})})}oe.defaultProps={value:"",items:[],minWidth:100,fullWidth:!1};var ie=oe,se=r(40507),ue=r.n(se),le=r(89601);function me(e){var n=e.numberPart,r=e.declensionsObjectName,c=J(),o=c.options,i=c.updateOptions,s=(0,m.$)("common",{useSuspense:!1}).t;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(k.Z,{name:"custom-currency-".concat(n,"-declension-nominative-singular"),label:s("options_currency_custom_value_declension_nominative_singular"),variant:"standard",fullWidth:!0,placeholder:le.Z[r].nominative[0],value:o.customCurrency[r].nominative[0],onChange:i})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(k.Z,{name:"custom-currency-".concat(n,"-declension-nominative-plural"),label:s("options_currency_custom_value_declension_nominative_plural"),variant:"standard",fullWidth:!0,placeholder:le.Z[r].nominative[1],value:o.customCurrency[r].nominative[1],onChange:i})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(k.Z,{name:"custom-currency-".concat(n,"-declension-genitive-singular"),label:s("options_currency_custom_value_declension_genitive_singular"),variant:"standard",fullWidth:!0,placeholder:le.Z[r].genitive[0],value:o.customCurrency[r].genitive[0],onChange:i})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(k.Z,{name:"custom-currency-".concat(n,"-declension-genitive-plural"),label:s("options_currency_custom_value_declension_genitive_plural"),variant:"standard",fullWidth:!0,placeholder:le.Z[r].genitive[1],value:o.customCurrency[r].genitive[1],onChange:i})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(k.Z,{name:"custom-currency-".concat(n,"-declension-dative-singular"),label:s("options_currency_custom_value_declension_dative_singular"),variant:"standard",fullWidth:!0,placeholder:le.Z[r].dative[0],value:o.customCurrency[r].dative[0],onChange:i})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(k.Z,{name:"custom-currency-".concat(n,"-declension-dative-plural"),label:s("options_currency_custom_value_declension_dative_plural"),variant:"standard",fullWidth:!0,placeholder:le.Z[r].dative[1],value:o.customCurrency[r].dative[1],onChange:i})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(k.Z,{name:"custom-currency-".concat(n,"-declension-accusative-singular"),label:s("options_currency_custom_value_declension_accusative_singular"),variant:"standard",fullWidth:!0,placeholder:le.Z[r].accusative[0],value:o.customCurrency[r].accusative[0],onChange:i})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(k.Z,{name:"custom-currency-".concat(n,"-declension-accusative-plural"),label:s("options_currency_custom_value_declension_accusative_plural"),variant:"standard",fullWidth:!0,placeholder:le.Z[r].accusative[1],value:o.customCurrency[r].accusative[1],onChange:i})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(k.Z,{name:"custom-currency-".concat(n,"-declension-instrumental-singular"),label:s("options_currency_custom_value_declension_instrumental_singular"),variant:"standard",fullWidth:!0,placeholder:le.Z[r].instrumental[0],value:o.customCurrency[r].instrumental[0],onChange:i})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(k.Z,{name:"custom-currency-".concat(n,"-declension-instrumental-plural"),label:s("options_currency_custom_value_declension_instrumental_plural"),variant:"standard",fullWidth:!0,placeholder:le.Z[r].instrumental[1],value:o.customCurrency[r].instrumental[1],onChange:i})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(k.Z,{name:"custom-currency-".concat(n,"-declension-prepositional-singular"),label:s("options_currency_custom_value_declension_prepositional_singular"),variant:"standard",fullWidth:!0,placeholder:le.Z[r].prepositional[0],value:o.customCurrency[r].prepositional[0],onChange:i})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(k.Z,{name:"custom-currency-".concat(n,"-declension-prepositional-plural"),label:s("options_currency_custom_value_declension_prepositional_plural"),variant:"standard",fullWidth:!0,placeholder:le.Z[r].prepositional[1],value:o.customCurrency[r].prepositional[1],onChange:i})})]})}me.propTypes={numberPart:ue().string,declensionsObjectName:ue().string},me.defaultProps={numberPart:"integer",declensionsObjectName:"currencyNameDeclensions"};var de=me;var he=function(){var e=J(),n=e.options,r=e.updateOptions,c=(0,m.$)("common",{useSuspense:!1}).t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(re.Z,{sx:{borderLeft:2,borderColor:"rgb(85, 108, 214, 0.5)",marginY:1,paddingX:1},children:(0,t.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(x.Z,{variant:"h5",display:"block",children:c("options_currency_custom_integer_block_title")})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:4,children:(0,t.jsx)(k.Z,{name:"custom-currency-integer1",label:c("options_currency_custom_value_form1"),variant:"standard",fullWidth:!0,placeholder:"\u0420\u0443\u0431\u043b\u044c",value:n.customCurrency.currencyNameCases[0],onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:4,children:(0,t.jsx)(k.Z,{name:"custom-currency-integer2",label:c("options_currency_custom_value_form2"),variant:"standard",fullWidth:!0,placeholder:"\u0420\u0443\u0431\u043b\u044f",value:n.customCurrency.currencyNameCases[1],onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:4,children:(0,t.jsx)(k.Z,{name:"custom-currency-integer3",label:c("options_currency_custom_value_form3"),variant:"standard",fullWidth:!0,placeholder:"\u0420\u0443\u0431\u043b\u0435\u0439",value:n.customCurrency.currencyNameCases[2],onChange:r})}),(0,t.jsx)(de,{numberPart:"integer",declensionsObjectName:"currencyNameDeclensions"}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(ie,{name:"custom-currency-form-integer",fullWidth:!0,label:c("options_currency_custom_value_currency_name_form"),value:n.customCurrency.currencyNounGender.integer,items:[{value:0,name:c("options_currency_custom_value_word_form1")},{value:1,name:c("options_currency_custom_value_word_form2")},{value:2,name:c("options_currency_custom_value_word_form3")}],onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,style:{marginTop:"1.5rem"},children:(0,t.jsx)(x.Z,{variant:"h5",display:"block",children:c("options_currency_custom_fractional_block_title")})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:4,children:(0,t.jsx)(k.Z,{name:"custom-currency-fractional1",label:c("options_currency_custom_value_form1"),variant:"standard",fullWidth:!0,placeholder:"\u041a\u043e\u043f\u0435\u0439\u043a\u0430",value:n.customCurrency.fractionalPartNameCases[0],onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:4,children:(0,t.jsx)(k.Z,{name:"custom-currency-fractional2",label:c("options_currency_custom_value_form2"),variant:"standard",fullWidth:!0,placeholder:"\u041a\u043e\u043f\u0435\u0439\u043a\u0438",value:n.customCurrency.fractionalPartNameCases[1],onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:4,children:(0,t.jsx)(k.Z,{name:"custom-currency-fractional3",label:c("options_currency_custom_value_form3"),variant:"standard",fullWidth:!0,placeholder:"\u041a\u043e\u043f\u0435\u0435\u043a",value:n.customCurrency.fractionalPartNameCases[2],onChange:r})}),(0,t.jsx)(de,{numberPart:"fractional",declensionsObjectName:"fractionalPartNameDeclensions"}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(ie,{name:"custom-currency-form-fractional",fullWidth:!0,label:c("options_currency_custom_value_currency_name_form"),value:n.customCurrency.currencyNounGender.fractionalPart,items:[{value:0,name:c("options_currency_custom_value_word_form1")},{value:1,name:c("options_currency_custom_value_word_form2")},{value:2,name:c("options_currency_custom_value_word_form3")}],onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,style:{marginTop:"1.5rem"},children:(0,t.jsx)(x.Z,{variant:"h5",display:"block",children:c("options_currency_custom_common_block_title")})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(k.Z,{name:"custom-currency-fractional-min-length",label:c("options_currency_fractionalPartMinLength"),variant:"standard",fullWidth:!0,type:"number",inputProps:{min:0},placeholder:"2",value:n.customCurrency.fractionalPartMinLength,onChange:r})})]})})})},ve=r(90402),ye=r(20163);function pe(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(ve.Z,{control:(0,t.jsx)(ye.Z,{name:e.name,checked:e.checked,onChange:e.onChange,color:"primary"}),label:e.label})})}pe.defaultProps={};var fe=pe,_e=function(e,n){return e.roundNumber<=-1?n("options_round_number_helper_disabled"):("rub"===e.currency||"usd"===e.currency||"eur"===e.currency)&&Number(e.roundNumber)>2?n("options_round_number_helper_currency_max"):void 0};var ge=function(){var e=J(),n=e.options,r=e.updateOptions,c=(0,m.$)("common",{useSuspense:!1}).t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.ZP,{container:!0,direction:"column",spacing:1,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,t.jsx)(ie,{name:"currency",label:c("options_currency_select_label"),fullWidth:!0,value:n.currency,onChange:r,items:[{value:"rub",name:c("options_currency_select_value_rub")},{value:"usd",name:c("options_currency_select_value_usd")},{value:"eur",name:c("options_currency_select_value_eur")},{value:"number",name:c("options_currency_select_value_number")},{value:"custom",name:c("options_currency_select_value_custom")}]})}),(0,t.jsx)(ne.Z,{xsUp:"custom"!==n.currency,children:(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(he,{})})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,t.jsx)(ie,{name:"declension",label:c("options_declension_label"),fullWidth:!0,value:n.declension,onChange:r,items:[{value:"nominative",name:c("options_declension_select_value_nominative")},{value:"genitive",name:c("options_declension_select_value_genitive")},{value:"dative",name:c("options_declension_select_value_dative")},{value:"accusative",name:c("options_declension_select_value_accusative")},{value:"instrumental",name:c("options_declension_select_value_instrumental")},{value:"prepositional",name:c("options_declension_select_value_prepositional")}]})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,t.jsx)(k.Z,{name:"round-number",label:c("options_round_number"),variant:"standard",fullWidth:!0,placeholder:"2",type:"number",inputProps:{min:-1},helperText:_e(n,c),value:n.roundNumber,onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(fe,{name:"convert-minus-sign",label:c("options_convert_minus_sign"),checked:n.convertMinusSignToWord,onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(fe,{name:"show-number-part-integer",label:c("options_show_integer_part"),checked:n.showNumberParts.integer,onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(fe,{name:"show-number-part-fractional",label:c("options_show_fractional_part"),checked:n.showNumberParts.fractional,onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(fe,{name:"convert-number-part-integer",label:c("options_convert_integer_part"),checked:n.convertNumbertToWords.integer,onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(fe,{name:"convert-number-part-fractional",label:c("options_convert_fractional_part"),checked:n.convertNumbertToWords.fractional,onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(fe,{name:"show-currency-part-integer",label:c("options_show_currency_integer_part"),checked:n.showCurrency.integer,onChange:r})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(fe,{name:"show-currency-part-fractional",label:c("options_show_currency_fractional_part"),checked:n.showCurrency.fractional,onChange:r})})]})})};var xe=function(){var e=(0,m.$)("common",{useSuspense:!1}).t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.ZP,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(x.Z,{variant:"h4",children:e("options_block_title")})}),(0,t.jsx)(a.ZP,{style:{width:"100%"},children:(0,t.jsx)(ge,{})})]})})},je=function(e){return JSON.stringify(e,null,2).replace(/{/,"").split("").reverse().join("").replace(/}/,"").split("").reverse().join("").replace(/("[a-zA-Z]+"[:])/g,(function(e){return e.replace(/"/g,"")})).trim()},be=function(e){var n=e.substring(1).split("").findIndex((function(e){if(" "!==e)return!0}));return e.replace(new RegExp("\n".concat(" ".repeat(n)),"gi"),"\n").trim()};var Ze=function(e,n){return e.replace(/\n/g,"\n".concat(" ".repeat(n)))};function Ce(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function Pe(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,c,a=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);o=!0);}catch(s){i=!0,c=s}finally{try{o||null==r.return||r.return()}finally{if(i)throw c}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Ce(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ce(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ne(){var e=(0,S.CG)(W.vv),n=K().optionsDifferences,r=Pe(i.useState("\n    const numberToWordsRu = require('number-to-words-ru');\n\n    numberToWordsRu.convert('".concat(e,"');\n  ")),2),t=r[0],c=r[1],a=Ze(je(n),14);i.useEffect((function(){o()}),[e,n]);var o=function(){c(be("\n      const numberToWordsRu = require('number-to-words-ru');\n\n      ".concat(a.length>0?be("\n        numberToWordsRu.convert('".concat(e,"', {\n          ").concat(be(a),"\n        })\n      ")):"numberToWordsRu.convert('".concat(e,"');"),"\n    ")))};return{code:t}}var we=r(40733),ke=r(23627);function Se(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(we.Z,{language:e.language,style:ke.Z,customStyle:{padding:"1rem"},children:e.code})})}Se.defaultProps={};var We=Se;var De=function(){var e=Ne().code,n=(0,E.Ds)().enqueueSnackbar,r=(0,m.$)("common",{useSuspense:!1}).t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.ZP,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[(0,t.jsx)(a.ZP,{item:!0,sx:{width:"100%",maxWidth:"100%"},children:(0,t.jsx)(We,{code:e,language:"javascript"})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(O.Z,{variant:"contained",color:"inherit",onClick:function(){V(be(e)),n(r("code_block_button_copy_snackbar_text"),{autoHideDuration:2e3})},children:r("code_block_button_copy")})})]})})};var Oe=function(){var e=(0,m.$)("common",{useSuspense:!1}).t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.ZP,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(x.Z,{variant:"h4",children:e("code_block_title")})}),(0,t.jsx)(a.ZP,{style:{width:"100%"},children:(0,t.jsx)(De,{})})]})})};var Ae=function(){var e=(0,m.$)("common",{useSuspense:!1}).t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.ZP,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(x.Z,{variant:"h4",children:"API"})}),(0,t.jsx)(a.ZP,{style:{width:"100%"},children:(0,t.jsxs)(x.Z,{align:"center",children:["".concat(e("api_block_text")," "),(0,t.jsx)(j.Z,{href:"https://github.com/Ant1mas/number-to-words-ru/blob/master/README.md#api",target:"_blank",rel:"noreferrer",sx:{color:"#000000de"},children:e("api_block_link_text")}),"."]})})]})})};var Te=function(){var e=(0,m.$)("common",{useSuspense:!1}).t;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(x.Z,{variant:"h4",align:"center",children:e("installation_block_title")})}),(0,t.jsxs)(a.ZP,{item:!0,xs:12,lg:4,children:[(0,t.jsx)(x.Z,{variant:"body1",children:e("installation_npm_title")}),(0,t.jsx)(We,{code:"npm install number-to-words-ru",language:"bash"})]}),(0,t.jsxs)(a.ZP,{item:!0,xs:12,lg:4,children:[(0,t.jsx)(x.Z,{variant:"body1",children:e("installation_yarn_title")}),(0,t.jsx)(We,{code:"yarn add number-to-words-ru",language:"bash"})]}),(0,t.jsxs)(a.ZP,{item:!0,xs:12,lg:4,children:[(0,t.jsx)(x.Z,{variant:"body1",children:e("installation_pnpm_title")}),(0,t.jsx)(We,{code:"pnpm add number-to-words-ru",language:"bash"})]})]})})};function Ee(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.default,{children:[(0,t.jsx)("title",{children:"number-to-words-ru node module - convert number to russian words"}),(0,t.jsx)("meta",{name:"description",content:"Node.js module to convert number to words in russian"})]}),(0,t.jsxs)(C,{children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(w,{})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(a.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(D,{})})})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(ee,{})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,lg:6,children:(0,t.jsx)(xe,{})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,lg:6,children:(0,t.jsxs)(a.ZP,{container:!0,direction:"column",spacing:6,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(Oe,{})}),(0,t.jsx)(a.ZP,{item:!0,children:(0,t.jsx)(Ae,{})})]})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(Te,{})})]})]})}var Fe=Ee}},function(e){e.O(0,[581,774,888,179],(function(){return n=85928,e(e.s=n);var n}));var n=e.O();_N_E=n}]);