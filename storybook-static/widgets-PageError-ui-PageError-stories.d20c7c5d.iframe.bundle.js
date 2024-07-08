"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[445],{"./src/widgets/PageError/ui/PageError.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PageError_stories});var ThemeProviders=__webpack_require__("./src/app/providers/ThemeProviders/index.tsx"),ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),useTranslation=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js")),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PageError_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PageError_module.A,options);const ui_PageError_module=PageError_module.A&&PageError_module.A.locals?PageError_module.A.locals:void 0;function PageError(param){var className=param.className,t=(0,useTranslation.B)().t;return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.x)(ui_PageError_module.PageError,{},[className]),children:[(0,jsx_runtime.jsx)("p",{children:t("Произошла непредвиденная ошибка")}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){location.reload()},children:t("Обновить страницу")})]})}try{PageError.displayName="PageError",PageError.__docgenInfo={description:"",displayName:"PageError",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/PageError/ui/PageError.tsx#PageError"]={docgenInfo:PageError.__docgenInfo,name:"PageError",path:"src/widgets/PageError/ui/PageError.tsx#PageError"})}catch(__react_docgen_typescript_loader_error){}const PageError_stories={title:"Example/PageError",component:PageError,parameters:{layout:"centered"}};var Light={args:{}},Dark={args:{}};Dark.decorators=[(0,ThemeDecorator.n)(ThemeProviders.Sx.DARK)],Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Dark.parameters?.docs?.source}}};const __namedExportsOrder=["Light","Dark"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Button-Button-module__Button{cursor:pointer;color:var(--button-text);border-radius:var(--input-border-radius);padding:10px 15px;background-color:var(--primary-color);text-align:center}.src-shared-ui-Button-Button-module__clear{border:none;background:none;color:var(--primary-color)}.src-shared-ui-Button-Button-module__clearInverted{padding:0;border:none;background:none;outline:none;color:var(--inverted-primary-color)}.src-shared-ui-Button-Button-module__outline{border:var(--input-border-size) solid var(--primary-color);color:var(--primary-color);background-color:var(--bg-color)}.src-shared-ui-Button-Button-module__background{background-color:var(--bg-color);color:var(--primary-color)}.src-shared-ui-Button-Button-module__background_inverted{background-color:var(--inverted-bg-color);color:var(--inverted-primary-color)}.src-shared-ui-Button-Button-module__square{width:30px;height:40px}.src-shared-ui-Button-Button-module__square.src-shared-ui-Button-Button-module__size_m{font-size:var(--font-size-m);line-height:var(--font-line-m);width:var(--font-line-m);height:var(--font-line-m)}.src-shared-ui-Button-Button-module__square.src-shared-ui-Button-Button-module__size_l{font-size:var(--font-size-l);line-height:var(--font-line-l);width:var(--font-line-l);height:var(--font-line-l)}.src-shared-ui-Button-Button-module__square.src-shared-ui-Button-Button-module__size_xl{font-size:var(--font-size-xl);line-height:var(--font-line-xl);width:var(--font-line-xl);height:var(--font-line-xl)}.src-shared-ui-Button-Button-module__size_l{font-size:var(--font-size-l)}.src-shared-ui-Button-Button-module__size_m{font-size:var(--font-size-m)}.src-shared-ui-Button-Button-module__size_xl{font-size:var(--font-size-xl)}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,4CACI,cAAA,CACA,wBAAA,CACA,wCAAA,CACA,iBAAA,CACA,qCAAA,CACA,iBAAA,CAGJ,2CACI,WAAA,CACA,eAAA,CACA,0BAAA,CAGJ,mDACI,SAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CACA,mCAAA,CAGJ,6CACI,0DAAA,CACA,0BAAA,CACA,gCAAA,CAGJ,gDACI,gCAAA,CACA,0BAAA,CAGJ,yDACI,yCAAA,CACA,mCAAA,CAGJ,4CACI,UAAA,CACA,WAAA,CAGJ,uFACI,4BAAA,CACA,8BAAA,CACA,wBAAA,CACA,yBAAA,CAGJ,uFACI,4BAAA,CACA,8BAAA,CACA,wBAAA,CACA,yBAAA,CAGJ,wFACI,6BAAA,CACA,+BAAA,CACA,yBAAA,CACA,0BAAA,CAGJ,4CACI,4BAAA,CAGJ,4CACI,4BAAA,CAGJ,6CACI,6BAAA",sourcesContent:[".Button {\r\n    cursor: pointer;\r\n    color: var(--button-text);\r\n    border-radius: var(--input-border-radius);\r\n    padding: 10px 15px;\r\n    background-color: var(--primary-color);\r\n    text-align: center;\r\n}\r\n\r\n.clear {\r\n    border: none;\r\n    background: none;\r\n    color: var(--primary-color);\r\n}\r\n\r\n.clearInverted {\r\n    padding: 0;\r\n    border: none;\r\n    background: none;\r\n    outline: none;\r\n    color: var(--inverted-primary-color);\r\n}\r\n\r\n.outline {\r\n    border: var(--input-border-size) solid var(--primary-color);\r\n    color: var(--primary-color);\r\n    background-color: var(--bg-color);\r\n}\r\n\r\n.background {\r\n    background-color: var(--bg-color);\r\n    color: var(--primary-color);\r\n}\r\n\r\n.background_inverted {\r\n    background-color: var(--inverted-bg-color);\r\n    color: var(--inverted-primary-color);\r\n}\r\n\r\n.square {\r\n    width: 30px;\r\n    height: 40px;\r\n}\r\n\r\n.square.size_m {\r\n    font-size: var(--font-size-m);\r\n    line-height: var(--font-line-m);\r\n    width: var(--font-line-m);\r\n    height: var(--font-line-m);\r\n}\r\n\r\n.square.size_l {\r\n    font-size: var(--font-size-l);\r\n    line-height: var(--font-line-l);\r\n    width: var(--font-line-l);\r\n    height: var(--font-line-l);\r\n}\r\n\r\n.square.size_xl {\r\n    font-size: var(--font-size-xl);\r\n    line-height: var(--font-line-xl);\r\n    width: var(--font-line-xl);\r\n    height: var(--font-line-xl);\r\n}\r\n\r\n.size_l {\r\n    font-size: var(--font-size-l);\r\n}\r\n\r\n.size_m {\r\n    font-size: var(--font-size-m);\r\n}\r\n\r\n.size_xl {\r\n    font-size: var(--font-size-xl);\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"src-shared-ui-Button-Button-module__Button",clear:"src-shared-ui-Button-Button-module__clear",clearInverted:"src-shared-ui-Button-Button-module__clearInverted",outline:"src-shared-ui-Button-Button-module__outline",background:"src-shared-ui-Button-Button-module__background",background_inverted:"src-shared-ui-Button-Button-module__background_inverted",square:"src-shared-ui-Button-Button-module__square",size_m:"src-shared-ui-Button-Button-module__size_m",size_l:"src-shared-ui-Button-Button-module__size_l",size_xl:"src-shared-ui-Button-Button-module__size_xl"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-PageError-ui-PageError-module__PageError{height:100vh;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px}","",{version:3,sources:["webpack://./src/widgets/PageError/ui/PageError.module.scss"],names:[],mappings:"AAAA,sDACI,YAAA,CACA,UAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA,CACA,QAAA",sourcesContent:[".PageError {\r\n    height: 100vh;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 20px;\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={PageError:"src-widgets-PageError-ui-PageError-module__PageError"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react-i18next/dist/es/useTranslation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}__webpack_require__.d(__webpack_exports__,{B:()=>useTranslation});var react=__webpack_require__("./node_modules/react/index.js");function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,toPropertyKey(o.key),o)}}var matchHtmlEntity=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,htmlEntities={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},unescapeHtmlEntity=function unescapeHtmlEntity(m){return htmlEntities[m]};var i18nInstance,defaultOptions={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function unescape(text){return text.replace(matchHtmlEntity,unescapeHtmlEntity)}},I18nContext=(0,react.createContext)();var ReportNamespaces=function(){function ReportNamespaces(){!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,ReportNamespaces),this.usedNamespaces={}}return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(ReportNamespaces,[{key:"addUsedNamespaces",value:function addUsedNamespaces(namespaces){var _this=this;namespaces.forEach((function(ns){_this.usedNamespaces[ns]||(_this.usedNamespaces[ns]=!0)}))}},{key:"getUsedNamespaces",value:function getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}]),ReportNamespaces}();function getI18n(){return i18nInstance}function warn(){if(console&&console.warn){for(var _console,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];"string"==typeof args[0]&&(args[0]="react-i18next:: ".concat(args[0])),(_console=console).warn.apply(_console,args)}}var alreadyWarned={};function warnOnce(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];"string"==typeof args[0]&&alreadyWarned[args[0]]||("string"==typeof args[0]&&(alreadyWarned[args[0]]=new Date),warn.apply(void 0,args))}function loadNamespaces(i18n,ns,cb){i18n.loadNamespaces(ns,(function(){if(i18n.isInitialized)cb();else{i18n.on("initialized",(function initialized(){setTimeout((function(){i18n.off("initialized",initialized)}),0),cb()}))}}))}function useTranslation_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function useTranslation_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?useTranslation_ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):useTranslation_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var usePrevious=function usePrevious(value,ignore){var ref=(0,react.useRef)();return(0,react.useEffect)((function(){ref.current=ignore?ref.current:value}),[value,ignore]),ref.current};function useTranslation(ns){var props=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i18nFromProps=props.i18n,_ref=(0,react.useContext)(I18nContext)||{},i18nFromContext=_ref.i18n,defaultNSFromContext=_ref.defaultNS,i18n=i18nFromProps||i18nFromContext||getI18n();if(i18n&&!i18n.reportNamespaces&&(i18n.reportNamespaces=new ReportNamespaces),!i18n){warnOnce("You will need to pass in an i18next instance by using initReactI18next");var notReadyT=function notReadyT(k){return Array.isArray(k)?k[k.length-1]:k},retNotReady=[notReadyT,{},!1];return retNotReady.t=notReadyT,retNotReady.i18n={},retNotReady.ready=!1,retNotReady}i18n.options.react&&void 0!==i18n.options.react.wait&&warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var i18nOptions=useTranslation_objectSpread(useTranslation_objectSpread(useTranslation_objectSpread({},function getDefaults(){return defaultOptions}()),i18n.options.react),props),useSuspense=i18nOptions.useSuspense,keyPrefix=i18nOptions.keyPrefix,namespaces=ns||defaultNSFromContext||i18n.options&&i18n.options.defaultNS;namespaces="string"==typeof namespaces?[namespaces]:namespaces||["translation"],i18n.reportNamespaces.addUsedNamespaces&&i18n.reportNamespaces.addUsedNamespaces(namespaces);var ready=(i18n.isInitialized||i18n.initializedStoreOnce)&&namespaces.every((function(n){return function hasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i18n.languages&&i18n.languages.length?void 0!==i18n.options.ignoreJSONStructure?i18n.hasLoadedNamespace(ns,{precheck:function precheck(i18nInstance,loadNotPending){if(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18nInstance.services.backendConnector.backend&&i18nInstance.isLanguageChangingTo&&!loadNotPending(i18nInstance.isLanguageChangingTo,ns))return!1}}):function oldI18nextHasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},lng=i18n.languages[0],fallbackLng=!!i18n.options&&i18n.options.fallbackLng,lastLng=i18n.languages[i18n.languages.length-1];if("cimode"===lng.toLowerCase())return!0;var loadNotPending=function loadNotPending(l,n){var loadState=i18n.services.backendConnector.state["".concat(l,"|").concat(n)];return-1===loadState||2===loadState};return!(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18n.services.backendConnector.backend&&i18n.isLanguageChangingTo&&!loadNotPending(i18n.isLanguageChangingTo,ns)||!i18n.hasResourceBundle(lng,ns)&&i18n.services.backendConnector.backend&&(!i18n.options.resources||i18n.options.partialBundledLanguages)&&(!loadNotPending(lng,ns)||fallbackLng&&!loadNotPending(lastLng,ns)))}(ns,i18n,options):(warnOnce("i18n.languages were undefined or empty",i18n.languages),!0)}(n,i18n,i18nOptions)}));function getT(){return i18n.getFixedT(null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix)}var _useState2=_slicedToArray((0,react.useState)(getT),2),t=_useState2[0],setT=_useState2[1],joinedNS=namespaces.join(),previousJoinedNS=usePrevious(joinedNS),isMounted=(0,react.useRef)(!0);(0,react.useEffect)((function(){var bindI18n=i18nOptions.bindI18n,bindI18nStore=i18nOptions.bindI18nStore;function boundReset(){isMounted.current&&setT(getT)}return isMounted.current=!0,ready||useSuspense||loadNamespaces(i18n,namespaces,(function(){isMounted.current&&setT(getT)})),ready&&previousJoinedNS&&previousJoinedNS!==joinedNS&&isMounted.current&&setT(getT),bindI18n&&i18n&&i18n.on(bindI18n,boundReset),bindI18nStore&&i18n&&i18n.store.on(bindI18nStore,boundReset),function(){isMounted.current=!1,bindI18n&&i18n&&bindI18n.split(" ").forEach((function(e){return i18n.off(e,boundReset)})),bindI18nStore&&i18n&&bindI18nStore.split(" ").forEach((function(e){return i18n.store.off(e,boundReset)}))}}),[i18n,joinedNS]);var isInitial=(0,react.useRef)(!0);(0,react.useEffect)((function(){isMounted.current&&!isInitial.current&&setT(getT),isInitial.current=!1}),[i18n,keyPrefix]);var ret=[t,i18n,ready];if(ret.t=t,ret.i18n=i18n,ret.ready=ready,ready)return ret;if(!ready&&!useSuspense)return ret;throw new Promise((function(resolve){loadNamespaces(i18n,namespaces,(function(){resolve()}))}))}},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupported_iterable_to_array(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupported_iterable_to_array(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_array_like_to_array(o,minLen):void 0}}function classNames(cls){var mods=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return[cls].concat(_to_consumable_array(arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]),_to_consumable_array(Object.entries(mods).filter((function(param){var _param=_sliced_to_array(param,2),value=(_param[0],_param[1]);return Boolean(value)})).map((function(param){var _param=_sliced_to_array(param,2),key=_param[0];_param[1];return key})))).join(" ")}__webpack_require__.d(__webpack_exports__,{x:()=>classNames})},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,Mp:()=>ButtonSize,Ox:()=>ButtonTheme});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classNames=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/shared/lib/classNames/classNames.ts")),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.A,options);const Button_Button_module=Button_module.A&&Button_module.A.locals?Button_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ButtonTheme,ButtonSize;!function(ButtonTheme){ButtonTheme.CLEAR="clear",ButtonTheme.CLEAR_INVERTED="clearInverted",ButtonTheme.OUTLINE="outline",ButtonTheme.BACKGROUND="background",ButtonTheme.BACKGROUND_INVERTED="backgroundInverted"}(ButtonTheme||(ButtonTheme={})),function(ButtonSize){ButtonSize.M="size_m",ButtonSize.L="size_l",ButtonSize.XL="size_xl"}(ButtonSize||(ButtonSize={}));var Button=function(props){var _obj,className=props.className,theme=props.theme,square=props.square,_props_size=props.size,size=void 0===_props_size?"size_m":_props_size,otherProps=_object_without_properties(props,["className","theme","square","size"]),mods=(_define_property(_obj={},Button_Button_module[theme],!0),_define_property(_obj,Button_Button_module.square,square),_define_property(_obj,Button_Button_module[size],!0),_obj);return(0,jsx_runtime.jsx)("button",_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({type:"button"},otherProps),{className:(0,classNames.x)(Button_Button_module.Button,mods,[className,Button_Button_module[theme]])}))};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"clearInverted"'},{value:'"outline"'},{value:'"background"'},{value:'"backgroundInverted"'}]}},square:{defaultValue:null,description:"",name:"square",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"size_m"'},{value:'"size_l"'},{value:'"size_xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);