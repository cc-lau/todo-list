/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\nbody {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\n\\n.god-container {\\n  display: flex;\\n  flex-direction: column;\\n  height: 100vh;\\n}\\n\\n.test {\\n  color: red;\\n  font-size: large;\\n}\\n\\n.header {\\n  display: flex;\\n  align-items: center;\\n  background-color: #e74c3c;\\n  height: 100px;\\n  box-shadow: 0px 2.5px 5px rgb(0 0 0 / 12%);\\n}\\n\\n.header-text {\\n  color: #ffffff;\\n  font-size: 2rem;\\n  font-weight: bolder;\\n  padding-left: 50px;\\n}\\n\\n.main-container {\\n  display: flex;\\n  flex-direction: row;\\n  height: 100vh;\\n  width: 100%;\\n}\\n\\n.side-bar {\\n  display: flex;\\n  flex-direction: column;\\n  background-color: #ecf0f1;\\n  width: 350px;\\n}\\n\\n.selection-container {\\n  display: flex;\\n  padding-left: 50px;\\n  padding-top: 50px;\\n  flex-direction: column;\\n}\\n\\n.selection-container > ul > li > img {\\n  height: auto;\\n  width: 35px;\\n}\\n\\n.selection-container > ul {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 10px;\\n  padding-right: 50px;\\n}\\n\\n.selection:hover {\\n  background-color: #dfdfdf;\\n}\\n\\n.selection-container > ul > li {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  column-gap: 10px;\\n  padding: 10px;\\n  border: 0px solid;\\n  border-radius: 10px;\\n}\\n\\n.project-select {\\n  border-top: 1px solid black;\\n  margin-top: 50px;\\n}\\n\\n.project-plus {\\n  margin-left: 35px;\\n}\\n\\n.selection-container > ul > li > p {\\n  font-size: 1.5rem;\\n}\\n\\n.content-container {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 50px;\\n  width: 100%;\\n  padding-right: 200px;\\n}\\n\\n.task-container {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 15px;\\n}\\n\\n.card {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 10px;\\n  border: solid 0px;\\n  border-radius: 10px;\\n  width: 100%;\\n}\\n\\n.card-2 {\\n  display: grid;\\n  align-items: center;\\n  justify-self: center;\\n  grid-column: 1fr;\\n  grid-template-columns: .5fr 2fr 2fr 2fr .5fr .5fr;\\n  max-width: 100%;\\n}\\n/* .card > p {\\n\\tcolor: rgba(78, 78, 78, 0.726);\\n} */\\n\\n.card-strike {\\n  text-decoration: line-through;\\n  transition: 0.1s;\\n  color: rgba(128, 128, 128, 0.502);\\n}\\n\\n\\n\\n.title-para {\\n  grid-column: 2 / 2;\\n  justify-self: center;\\n}\\n\\n.due-date-para {\\n  grid-column: 3 / 3;\\n  justify-self: center;\\n}\\n\\n.priority-para {\\n  grid-column: 4 / 4;\\n  justify-self: center;\\n}\\n\\n.edit-icon {\\n  height: auto;\\n  width: 46.5px;\\n  padding: 10px;\\n  grid-column: 5 / 5;\\n  justify-self: center;\\n\\n}\\n\\n.remove-icon {\\n  height: auto;\\n  width: 46.5px;\\n  padding: 10px;\\n  grid-column: 6 / 6;\\n  justify-self: center;\\n\\n}\\n\\n\\n/* .hide-edit {\\n\\tdisplay: none;\\n} */\\n\\n.default-task-dot {\\n  height: 25px;\\n  width: 25px;\\n  border: solid 2.5px #e74c3c;\\n  transition: 0.5s;\\n  border-radius: 50%;\\n}\\n\\n.focus-task-dot {\\n  background-color: #e74c3c;\\n  transition: 0.5s;\\n}\\n\\n.task-dot:target {\\n  background-color: #e74c3c;\\n}\\n\\n.content-title {\\n  font-size: 2.5rem;\\n}\\n\\n.title-add-container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: baseline;\\n  height: 50px;\\n  width: 100%;\\n  padding-bottom: 80px;\\n}\\n\\n.add-plus-container {\\n  display: flex;\\n  flex-direction: row;\\n  column-gap: 10px;\\n  align-items: center;\\n  padding: 10px;\\n  border: 0px solid;\\n  border-radius: 10px;\\n  white-space: nowrap;\\n}\\n\\n.add-title {\\n  font-size: 1.5rem;\\n  text-overflow: ellipsis;\\n}\\n\\n.plus-icon {\\n  height: auto;\\n  width: 35px;\\n}\\n\\n.pop-up-container {\\n  display: none;\\n  align-items: center;\\n  justify-content: center;\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  z-index: 1;\\n  background-color: #0e0d0d4f;\\n}\\n\\n.project-pop-up-container {\\n  display: none;\\n  align-items: center;\\n  justify-content: center;\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  z-index: 1;\\n  background-color: #0e0d0d4f;\\n}\\n\\n.form-container {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 15px;\\n  width: 350px;\\n  padding: 25px;\\n  background-color: white;\\n  border: 0px solid;\\n  border-radius: 10px;\\n  box-shadow: 0px 5px 10px rgb(0 0 0 / 12%);\\n}\\n\\n.pform-container {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 15px;\\n  width: 350px;\\n  padding: 25px;\\n  background-color: white;\\n  border: 0px solid;\\n  border-radius: 10px;\\n  box-shadow: 0px 5px 10px rgb(0 0 0 / 12%);\\n  margin-bottom: 300px;\\n}\\n\\n.close-div {\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.projectclose-div {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.pform-header {\\n  font-size: 1.5rem;\\n  font-weight: bold;\\n}\\n\\n.close-icon {\\n  height: auto;\\n  width: 40px;\\n  align-items: center;\\n}\\n\\n.close-icon:hover {\\n  transform: rotate(180deg) scale(1.2);\\n  transition: 0.8s;\\n}\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 35px;\\n}\\n\\nform > div > label {\\n  font-size: 1.25rem;\\n}\\n\\nform > div > input {\\n  height: 40px;\\n  font-size: 1.25rem;\\n}\\n\\nform > div > textarea {\\n  height: 100px;\\n  font-size: 0.95rem;\\n  resize: vertical;\\n  max-height: 415px;\\n}\\n\\nform > div {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 10px;\\n}\\n\\n#project-select {\\n  font-size: 1.5rem;\\n}\\n\\n.button-div {\\n  display: flex;\\n  flex-direction: row;\\n  column-gap: 20px;\\n  justify-content: space-evenly;\\n  align-items: center;\\n}\\n\\n.button-div > button {\\n  font-weight: bold;\\n  height: 50px;\\n  width: 100px;\\n  border-style: solid;\\n  border-radius: 10px;\\n}\\n\\n.low-button {\\n  border-color: #2ecc71;\\n  background-color: transparent;\\n}\\n\\n.low-button-focus {\\n  color: white;\\n  background-color: #2ecc71;\\n}\\n\\n.low-button-non-focus {\\n  background-color: transparent;\\n}\\n\\n.med-button {\\n  border-color: #f39c12;\\n  background-color: transparent;\\n}\\n\\n.med-button-focus {\\n  background-color: #f39c12;\\n  color: white;\\n}\\n\\n.med-button-non-focus {\\n  background-color: transparent;\\n}\\n\\n.high-button {\\n  border-color: #e74c3c;\\n  background-color: transparent;\\n}\\n\\n.high-button-focus {\\n  background-color: #e74c3c;\\n  color: white;\\n}\\n\\n.high-button-non-focus {\\n  background-color: transparent;\\n}\\n\\n.submit-container {\\n  padding-top: 25px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-top: solid 2px rgba(144, 144, 144, 0.243);\\n}\\n\\n.submit-button {\\n  padding: 10px;\\n  width: 200px;\\n  border: solid 2px #e74c3c;\\n  border-radius: 10px;\\n  font-weight: bold;\\n  background-color: rgba(255, 255, 255, 0);\\n}\\n\\n.submit-button:hover {\\n  background-color: #e74c3c;\\n  color: white;\\n}\\n\\n.footer {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: #e74c3c;\\n  height: 45px;\\n  width: 100%;\\n}\\n\\n.footer-text {\\n  color: #0e0d0d;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDefaultOptions\": () => (/* binding */ getDefaultOptions),\n/* harmony export */   \"setDefaultOptions\": () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nvar defaultOptions = {};\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/defaultOptions/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"daysInWeek\": () => (/* binding */ daysInWeek),\n/* harmony export */   \"daysInYear\": () => (/* binding */ daysInYear),\n/* harmony export */   \"maxTime\": () => (/* binding */ maxTime),\n/* harmony export */   \"millisecondsInHour\": () => (/* binding */ millisecondsInHour),\n/* harmony export */   \"millisecondsInMinute\": () => (/* binding */ millisecondsInMinute),\n/* harmony export */   \"millisecondsInSecond\": () => (/* binding */ millisecondsInSecond),\n/* harmony export */   \"minTime\": () => (/* binding */ minTime),\n/* harmony export */   \"minutesInHour\": () => (/* binding */ minutesInHour),\n/* harmony export */   \"monthsInQuarter\": () => (/* binding */ monthsInQuarter),\n/* harmony export */   \"monthsInYear\": () => (/* binding */ monthsInYear),\n/* harmony export */   \"quartersInYear\": () => (/* binding */ quartersInYear),\n/* harmony export */   \"secondsInDay\": () => (/* binding */ secondsInDay),\n/* harmony export */   \"secondsInHour\": () => (/* binding */ secondsInHour),\n/* harmony export */   \"secondsInMinute\": () => (/* binding */ secondsInMinute),\n/* harmony export */   \"secondsInMonth\": () => (/* binding */ secondsInMonth),\n/* harmony export */   \"secondsInQuarter\": () => (/* binding */ secondsInQuarter),\n/* harmony export */   \"secondsInWeek\": () => (/* binding */ secondsInWeek),\n/* harmony export */   \"secondsInYear\": () => (/* binding */ secondsInYear)\n/* harmony export */ });\n/**\n * Days in 1 week.\n *\n * @name daysInWeek\n * @constant\n * @type {number}\n * @default\n */\nvar daysInWeek = 7;\n/**\n * Days in 1 year\n * One years equals 365.2425 days according to the formula:\n *\n * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.\n * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days\n *\n * @name daysInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar daysInYear = 365.2425;\n/**\n * Maximum allowed time.\n *\n * @name maxTime\n * @constant\n * @type {number}\n * @default\n */\n\nvar maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n/**\n * Milliseconds in 1 minute\n *\n * @name millisecondsInMinute\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInMinute = 60000;\n/**\n * Milliseconds in 1 hour\n *\n * @name millisecondsInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInHour = 3600000;\n/**\n * Milliseconds in 1 second\n *\n * @name millisecondsInSecond\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInSecond = 1000;\n/**\n * Minimum allowed time.\n *\n * @name minTime\n * @constant\n * @type {number}\n * @default\n */\n\nvar minTime = -maxTime;\n/**\n * Minutes in 1 hour\n *\n * @name minutesInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar minutesInHour = 60;\n/**\n * Months in 1 quarter\n *\n * @name monthsInQuarter\n * @constant\n * @type {number}\n * @default\n */\n\nvar monthsInQuarter = 3;\n/**\n * Months in 1 year\n *\n * @name monthsInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar monthsInYear = 12;\n/**\n * Quarters in 1 year\n *\n * @name quartersInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar quartersInYear = 4;\n/**\n * Seconds in 1 hour\n *\n * @name secondsInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInHour = 3600;\n/**\n * Seconds in 1 minute\n *\n * @name secondsInMinute\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInMinute = 60;\n/**\n * Seconds in 1 day\n *\n * @name secondsInDay\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInDay = secondsInHour * 24;\n/**\n * Seconds in 1 week\n *\n * @name secondsInWeek\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInWeek = secondsInDay * 7;\n/**\n * Seconds in 1 year\n *\n * @name secondsInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInYear = secondsInDay * daysInYear;\n/**\n * Seconds in 1 month\n *\n * @name secondsInMonth\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInMonth = secondsInYear / 12;\n/**\n * Seconds in 1 quarter\n *\n * @name secondsInQuarter\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInQuarter = secondsInMonth * 3;\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/constants/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day (and year and month)?\n *\n * @description\n * Are the given dates in the same day (and year and month)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day (and year and month)\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n *\n * @example\n * // Are 4 September and 4 October in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))\n * //=> false\n *\n * @example\n * // Are 4 September, 2014 and 4 September, 2015 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))\n * //=> false\n */\n\nfunction isSameDay(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameWeek)\n/* harmony export */ });\n/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ \"./node_modules/date-fns/esm/startOfWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name isSameWeek\n * @category Week Helpers\n * @summary Are the given dates in the same week (and month and year)?\n *\n * @description\n * Are the given dates in the same week (and month and year)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the dates are in the same week (and month and year)\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // Are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))\n * //=> true\n *\n * @example\n * // If week starts with Monday,\n * // are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {\n *   weekStartsOn: 1\n * })\n * //=> false\n *\n * @example\n * // Are 1 January 2014 and 1 January 2015 in the same week?\n * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))\n * //=> false\n */\nfunction isSameWeek(dirtyDateLeft, dirtyDateRight, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft, options);\n  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight, options);\n  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isThisWeek)\n/* harmony export */ });\n/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ \"./node_modules/date-fns/esm/isSameWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name isThisWeek\n * @category Week Helpers\n * @summary Is the given date in the same week as the current date?\n * @pure false\n *\n * @description\n * Is the given date in the same week as the current date?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @param {Object} [options] - the object with options\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the date is in this week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // If today is 25 September 2014, is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21))\n * //=> true\n *\n * @example\n * // If today is 25 September 2014 and week starts with Monday\n * // is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })\n * //=> false\n */\nfunction isThisWeek(dirtyDate, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now(), options);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isThisWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ \"./node_modules/date-fns/esm/isSameDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is today\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * const result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\n\nfunction isToday(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now());\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseISO)\n/* harmony export */ });\n/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ \"./node_modules/date-fns/esm/constants/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n\n\n\n/**\n * @name parseISO\n * @category Common Helpers\n * @summary Parse ISO string\n *\n * @description\n * Parse the given string in ISO 8601 format and return an instance of Date.\n *\n * Function accepts complete ISO 8601 formats as well as partial implementations.\n * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601\n *\n * If the argument isn't a string, the function cannot parse the string or\n * the values are invalid, it returns Invalid Date.\n *\n * @param {String} argument - the value to convert\n * @param {Object} [options] - an object with options.\n * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2\n *\n * @example\n * // Convert string '2014-02-11T11:30:30' to date:\n * const result = parseISO('2014-02-11T11:30:30')\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert string '+02014101' to date,\n * // if the additional number of digits in the extended year format is 1:\n * const result = parseISO('+02014101', { additionalDigits: 1 })\n * //=> Fri Apr 11 2014 00:00:00\n */\n\nfunction parseISO(argument, options) {\n  var _options$additionalDi;\n\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);\n\n  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {\n    throw new RangeError('additionalDigits must be 0, 1 or 2');\n  }\n\n  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {\n    return new Date(NaN);\n  }\n\n  var dateStrings = splitDateString(argument);\n  var date;\n\n  if (dateStrings.date) {\n    var parseYearResult = parseYear(dateStrings.date, additionalDigits);\n    date = parseDate(parseYearResult.restDateString, parseYearResult.year);\n  }\n\n  if (!date || isNaN(date.getTime())) {\n    return new Date(NaN);\n  }\n\n  var timestamp = date.getTime();\n  var time = 0;\n  var offset;\n\n  if (dateStrings.time) {\n    time = parseTime(dateStrings.time);\n\n    if (isNaN(time)) {\n      return new Date(NaN);\n    }\n  }\n\n  if (dateStrings.timezone) {\n    offset = parseTimezone(dateStrings.timezone);\n\n    if (isNaN(offset)) {\n      return new Date(NaN);\n    }\n  } else {\n    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone\n    // but we need it to be parsed in our timezone\n    // so we use utc values to build date in our timezone.\n    // Year values from 0 to 99 map to the years 1900 to 1999\n    // so set year explicitly with setFullYear.\n\n    var result = new Date(0);\n    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());\n    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());\n    return result;\n  }\n\n  return new Date(timestamp + time + offset);\n}\nvar patterns = {\n  dateTimeDelimiter: /[T ]/,\n  timeZoneDelimiter: /[Z ]/i,\n  timezone: /([Z+-].*)$/\n};\nvar dateRegex = /^-?(?:(\\d{3})|(\\d{2})(?:-?(\\d{2}))?|W(\\d{2})(?:-?(\\d{1}))?|)$/;\nvar timeRegex = /^(\\d{2}(?:[.,]\\d*)?)(?::?(\\d{2}(?:[.,]\\d*)?))?(?::?(\\d{2}(?:[.,]\\d*)?))?$/;\nvar timezoneRegex = /^([+-])(\\d{2})(?::?(\\d{2}))?$/;\n\nfunction splitDateString(dateString) {\n  var dateStrings = {};\n  var array = dateString.split(patterns.dateTimeDelimiter);\n  var timeString; // The regex match should only return at maximum two array elements.\n  // [date], [time], or [date, time].\n\n  if (array.length > 2) {\n    return dateStrings;\n  }\n\n  if (/:/.test(array[0])) {\n    timeString = array[0];\n  } else {\n    dateStrings.date = array[0];\n    timeString = array[1];\n\n    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {\n      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];\n      timeString = dateString.substr(dateStrings.date.length, dateString.length);\n    }\n  }\n\n  if (timeString) {\n    var token = patterns.timezone.exec(timeString);\n\n    if (token) {\n      dateStrings.time = timeString.replace(token[1], '');\n      dateStrings.timezone = token[1];\n    } else {\n      dateStrings.time = timeString;\n    }\n  }\n\n  return dateStrings;\n}\n\nfunction parseYear(dateString, additionalDigits) {\n  var regex = new RegExp('^(?:(\\\\d{4}|[+-]\\\\d{' + (4 + additionalDigits) + '})|(\\\\d{2}|[+-]\\\\d{' + (2 + additionalDigits) + '})$)');\n  var captures = dateString.match(regex); // Invalid ISO-formatted year\n\n  if (!captures) return {\n    year: NaN,\n    restDateString: ''\n  };\n  var year = captures[1] ? parseInt(captures[1]) : null;\n  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both\n\n  return {\n    year: century === null ? year : century * 100,\n    restDateString: dateString.slice((captures[1] || captures[2]).length)\n  };\n}\n\nfunction parseDate(dateString, year) {\n  // Invalid ISO-formatted year\n  if (year === null) return new Date(NaN);\n  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string\n\n  if (!captures) return new Date(NaN);\n  var isWeekDate = !!captures[4];\n  var dayOfYear = parseDateUnit(captures[1]);\n  var month = parseDateUnit(captures[2]) - 1;\n  var day = parseDateUnit(captures[3]);\n  var week = parseDateUnit(captures[4]);\n  var dayOfWeek = parseDateUnit(captures[5]) - 1;\n\n  if (isWeekDate) {\n    if (!validateWeekDate(year, week, dayOfWeek)) {\n      return new Date(NaN);\n    }\n\n    return dayOfISOWeekYear(year, week, dayOfWeek);\n  } else {\n    var date = new Date(0);\n\n    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {\n      return new Date(NaN);\n    }\n\n    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));\n    return date;\n  }\n}\n\nfunction parseDateUnit(value) {\n  return value ? parseInt(value) : 1;\n}\n\nfunction parseTime(timeString) {\n  var captures = timeString.match(timeRegex);\n  if (!captures) return NaN; // Invalid ISO-formatted time\n\n  var hours = parseTimeUnit(captures[1]);\n  var minutes = parseTimeUnit(captures[2]);\n  var seconds = parseTimeUnit(captures[3]);\n\n  if (!validateTime(hours, minutes, seconds)) {\n    return NaN;\n  }\n\n  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;\n}\n\nfunction parseTimeUnit(value) {\n  return value && parseFloat(value.replace(',', '.')) || 0;\n}\n\nfunction parseTimezone(timezoneString) {\n  if (timezoneString === 'Z') return 0;\n  var captures = timezoneString.match(timezoneRegex);\n  if (!captures) return 0;\n  var sign = captures[1] === '+' ? -1 : 1;\n  var hours = parseInt(captures[2]);\n  var minutes = captures[3] && parseInt(captures[3]) || 0;\n\n  if (!validateTimezone(hours, minutes)) {\n    return NaN;\n  }\n\n  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);\n}\n\nfunction dayOfISOWeekYear(isoWeekYear, week, day) {\n  var date = new Date(0);\n  date.setUTCFullYear(isoWeekYear, 0, 4);\n  var fourthOfJanuaryDay = date.getUTCDay() || 7;\n  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;\n  date.setUTCDate(date.getUTCDate() + diff);\n  return date;\n} // Validation functions\n// February is null to handle the leap year (using ||)\n\n\nvar daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\n\nfunction isLeapYearIndex(year) {\n  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;\n}\n\nfunction validateDate(year, month, date) {\n  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));\n}\n\nfunction validateDayOfYearDate(year, dayOfYear) {\n  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);\n}\n\nfunction validateWeekDate(_year, week, day) {\n  return week >= 1 && week <= 53 && day >= 0 && day <= 6;\n}\n\nfunction validateTime(hours, minutes, seconds) {\n  if (hours === 24) {\n    return minutes === 0 && seconds === 0;\n  }\n\n  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;\n}\n\nfunction validateTimezone(_hours, minutes) {\n  return minutes >= 0 && minutes <= 59;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/parseISO/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\n\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ \"./node_modules/date-fns/esm/_lib/defaultOptions/index.js\");\n\n\n\n\n/**\n * @name startOfWeek\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the start of a week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })\n * //=> Mon Sep 01 2014 00:00:00\n */\n\nfunction startOfWeek(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');\n  }\n\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dirtyDate);\n  var day = date.getDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setDate(date.getDate() - diff);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPlus\": () => (/* binding */ addPlus),\n/* harmony export */   \"contentContainer\": () => (/* binding */ contentContainer),\n/* harmony export */   \"contentTitle\": () => (/* binding */ contentTitle),\n/* harmony export */   \"importantSelect\": () => (/* binding */ importantSelect),\n/* harmony export */   \"inboxSelect\": () => (/* binding */ inboxSelect),\n/* harmony export */   \"mainContainer\": () => (/* binding */ mainContainer),\n/* harmony export */   \"popUpContainer\": () => (/* binding */ popUpContainer),\n/* harmony export */   \"projectPopUpContainer\": () => (/* binding */ projectPopUpContainer),\n/* harmony export */   \"projectSelect\": () => (/* binding */ projectSelect),\n/* harmony export */   \"selectionContainer\": () => (/* binding */ selectionContainer),\n/* harmony export */   \"sideBarList\": () => (/* binding */ sideBarList),\n/* harmony export */   \"taskContainer\": () => (/* binding */ taskContainer),\n/* harmony export */   \"todaySelect\": () => (/* binding */ todaySelect),\n/* harmony export */   \"weekSelect\": () => (/* binding */ weekSelect)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _inbox_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox.png */ \"./src/inbox.png\");\n/* harmony import */ var _calendar_today_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-today.png */ \"./src/calendar-today.png\");\n/* harmony import */ var _calendar_star_outline_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-star-outline.png */ \"./src/calendar-star-outline.png\");\n/* harmony import */ var _calendar_week_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-week.png */ \"./src/calendar-week.png\");\n/* harmony import */ var _package_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./package.png */ \"./src/package.png\");\n/* harmony import */ var _chevron_down_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chevron-down.png */ \"./src/chevron-down.png\");\n/* harmony import */ var _plus_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plus.png */ \"./src/plus.png\");\n/* harmony import */ var _loadToday_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loadToday.js */ \"./src/loadToday.js\");\n/* harmony import */ var _loadImportant_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loadImportant.js */ \"./src/loadImportant.js\");\n/* harmony import */ var _loadWeek_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loadWeek.js */ \"./src/loadWeek.js\");\n/* harmony import */ var _loadInbox_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loadInbox.js */ \"./src/loadInbox.js\");\n/* harmony import */ var _loadForm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loadForm.js */ \"./src/loadForm.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\n\n\n\n\n\n\n//import upArrow from './chevron-up.png';\n\n\n\n\n\n\n\n\n\n\nconst godContainer = document.createElement(\"div\")\ngodContainer.classList.add(\"god-container\")\ndocument.body.appendChild(godContainer)\n//HEADER\nconst header = document.createElement(\"div\")\nheader.classList.add(\"header\")\ngodContainer.appendChild(header)\nconst headerText = document.createElement(\"h1\")\nheaderText.classList.add(\"header-text\")\nheaderText.innerHTML = \"Best To-Do App Ever\"\nheader.appendChild(headerText)\n/****************************/\n//MAIN CONTAINER\nconst mainContainer = document.createElement(\"div\")\nmainContainer.classList.add(\"main-container\")\ngodContainer.appendChild(mainContainer)\n/****************************/\n//SIDEBAR\nconst sideBar = document.createElement(\"div\")\nsideBar.classList.add(\"side-bar\")\nmainContainer.appendChild(sideBar)\nconst selectionContainer = document.createElement(\"div\")\nselectionContainer.classList.add(\"selection-container\")\nsideBar.appendChild(selectionContainer)\nconst sideBarList = document.createElement(\"ul\")\nselectionContainer.appendChild(sideBarList)\n//SIDEBAR SELECTIONS\nconst inboxSelect = document.createElement(\"li\")\ninboxSelect.classList.add(\"selection\", \"inbox\")\nsideBarList.appendChild(inboxSelect)\nconst inboxIcon = new Image();\ninboxIcon.src = _inbox_png__WEBPACK_IMPORTED_MODULE_1__;\ninboxSelect.appendChild(inboxIcon);\nconst inboxTitle = document.createElement(\"p\")\ninboxTitle.innerHTML = \"Inbox\"\ninboxSelect.appendChild(inboxTitle)\ninboxSelect.addEventListener('click', function() {\n\t;(0,_loadInbox_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n})\nconst todaySelect = document.createElement(\"li\")\ntodaySelect.classList.add(\"selection\", \"today\")\nsideBarList.appendChild(todaySelect)\nconst todayIcon = new Image();\ntodayIcon.src = _calendar_today_png__WEBPACK_IMPORTED_MODULE_2__;\ntodaySelect.appendChild(todayIcon);\nconst todayTitle = document.createElement(\"p\")\ntodayTitle.innerHTML = \"Today\"\ntodaySelect.appendChild(todayTitle)\ntodaySelect.addEventListener('click', function() {\n\t;(0,_loadToday_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n})\nconst weekSelect = document.createElement(\"li\")\nweekSelect.classList.add(\"selection\", \"week\")\nsideBarList.appendChild(weekSelect)\nconst weekIcon = new Image();\nweekIcon.src = _calendar_week_png__WEBPACK_IMPORTED_MODULE_4__;\nweekSelect.appendChild(weekIcon);\nconst weekTitle = document.createElement(\"p\")\nweekTitle.innerHTML = \"Week\"\nweekSelect.appendChild(weekTitle)\nweekSelect.addEventListener('click', function() {\n\t;(0,_loadWeek_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n})\nconst importantSelect = document.createElement(\"li\")\nimportantSelect.classList.add(\"selection\", \"important\")\nsideBarList.appendChild(importantSelect)\nconst importantIcon = new Image();\nimportantIcon.src = _calendar_star_outline_png__WEBPACK_IMPORTED_MODULE_3__;\nimportantSelect.appendChild(importantIcon);\nconst importantTitle = document.createElement(\"p\")\nimportantTitle.innerHTML = \"Important\"\nimportantSelect.appendChild(importantTitle)\nimportantSelect.addEventListener('click', function() {\n\t;(0,_loadImportant_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n})\nconst projectSelect = document.createElement(\"li\")\nprojectSelect.classList.add(\"selection\")\nprojectSelect.classList.add(\"project-select\")\nprojectSelect.setAttribute(\"id\", \"project-value\")\nsideBarList.appendChild(projectSelect)\nconst projectIcon = new Image();\nprojectIcon.src = _package_png__WEBPACK_IMPORTED_MODULE_5__;\nprojectSelect.appendChild(projectIcon);\nconst projectTitle = document.createElement(\"p\")\nprojectTitle.innerHTML = \"Projects\"\nprojectSelect.appendChild(projectTitle)\nconst projectPlus = new Image();\nprojectPlus.src = _plus_png__WEBPACK_IMPORTED_MODULE_7__;\nprojectSelect.appendChild(projectPlus);\nprojectPlus.classList.add(\"project-plus\")\nconst projectPopUpContainer = document.createElement(\"div\")\nprojectPopUpContainer.classList.add(\"project-pop-up-container\")\ngodContainer.appendChild(projectPopUpContainer);\nprojectSelect.addEventListener('click', function() {\n\tprojectPopUpContainer.style.display = \"flex\";\n})\n/****************************/\n//CONTENT CONTAINER \nconst contentContainer = document.createElement(\"div\")\ncontentContainer.classList.add(\"content-container\")\nmainContainer.appendChild(contentContainer)\nconst titleAndAddContainer = document.createElement(\"div\")\ntitleAndAddContainer.classList.add(\"title-add-container\")\ncontentContainer.appendChild(titleAndAddContainer)\nconst contentTitle = document.createElement(\"div\")\ncontentTitle.classList.add(\"content-title\")\ncontentTitle.innerHTML = \"Inbox\"\ntitleAndAddContainer.appendChild(contentTitle)\nconst addPlus = document.createElement(\"div\")\naddPlus.classList.add(\"add-plus-container\", \"selection\")\ntitleAndAddContainer.appendChild(addPlus)\nconst addTitle = document.createElement(\"h1\")\naddTitle.innerHTML = \"Add Task\"\naddTitle.classList.add(\"add-title\")\naddPlus.appendChild(addTitle)\nconst plusIcon = new Image();\nplusIcon.classList.add(\"plus-icon\")\nplusIcon.src = _plus_png__WEBPACK_IMPORTED_MODULE_7__;\naddPlus.appendChild(plusIcon);\nconst taskContainer = document.createElement(\"div\")\ntaskContainer.classList.add(\"task-container\")\ncontentContainer.appendChild(taskContainer)\nconst popUpContainer = document.createElement(\"div\")\npopUpContainer.classList.add(\"pop-up-container\")\ngodContainer.appendChild(popUpContainer);\naddPlus.addEventListener('click', function() {\n\tdocument.querySelector(\".submit-button\").textContent = \"Add\"\n\tpopUpContainer.style.display = \"flex\";\n})\n/****************************/\n//FOOTER\nconst footer = document.createElement(\"div\")\nfooter.classList.add(\"footer\")\ngodContainer.appendChild(footer)\nconst footerText = document.createElement(\"p\")\nfooter.classList.add(\"footer-text\")\nfooter.innerHTML = \"&#169; cc-lau 2022\"\nfooter.appendChild(footerText)\n;(0,_loadForm_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\n(0,_projects_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"])();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/loadForm.js":
/*!*************************!*\
  !*** ./src/loadForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadForm)\n/* harmony export */ });\n/* harmony import */ var _close_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close.png */ \"./src/close.png\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\n\nfunction loadForm() {\n\tconst formContainer = document.createElement(\"div\")\n\tformContainer.classList.add(\"form-container\")\n\t_index_js__WEBPACK_IMPORTED_MODULE_1__.popUpContainer.appendChild(formContainer)\n\tconst closeDiv = document.createElement(\"div\")\n\tcloseDiv.classList.add(\"close-div\")\n\tformContainer.appendChild(closeDiv)\n\tconst closeIcon = new Image();\n\tcloseIcon.classList.add(\"close-icon\")\n\tcloseIcon.src = _close_png__WEBPACK_IMPORTED_MODULE_0__;\n\tcloseDiv.appendChild(closeIcon)\n\tcloseIcon.addEventListener('click', closeForm)\n\tconst taskForm = document.createElement(\"form\")\n\ttaskForm.classList.add(\"task-form\")\n\tformContainer.appendChild(taskForm)\n\tconst titleDiv = document.createElement(\"div\")\n\ttaskForm.appendChild(titleDiv)\n\tconst titleLabel = document.createElement(\"label\")\n\ttitleLabel.setAttribute(\"for\", \"title\")\n\ttitleLabel.innerHTML = \"Title: \"\n\tconst titleInput = document.createElement(\"input\")\n\ttitleInput.setAttribute(\"type\", \"text\")\n\ttitleInput.setAttribute(\"id\", \"title\")\n\ttitleInput.setAttribute(\"name\", \"title\")\n\ttitleDiv.appendChild(titleLabel)\n\ttitleDiv.appendChild(titleInput)\n\tconst descDiv = document.createElement(\"div\")\n\ttaskForm.appendChild(descDiv)\n\tconst descLabel = document.createElement(\"label\")\n\tdescLabel.setAttribute(\"for\", \"description\")\n\tdescLabel.innerHTML = \"Description: \"\n\tconst descText = document.createElement(\"textarea\")\n\tdescText.setAttribute(\"type\", \"text\")\n\tdescText.setAttribute(\"id\", \"description\")\n\tdescText.setAttribute(\"name\", \"description\")\n\tdescDiv.appendChild(descLabel)\n\tdescDiv.appendChild(descText)\n\tconst dateDiv = document.createElement(\"div\")\n\ttaskForm.appendChild(dateDiv)\n\tconst dateLabel = document.createElement(\"label\")\n\tdateLabel.setAttribute(\"for\", \"dueDate\")\n\tdateLabel.innerHTML = \"Due Date: \"\n\tconst dateInput = document.createElement(\"input\")\n\tdateInput.setAttribute(\"type\", \"date\")\n\tdateInput.setAttribute(\"id\", \"dueDate\")\n\tdateInput.setAttribute(\"name\", \"dueDate\")\n\tdateDiv.appendChild(dateLabel)\n\tdateDiv.appendChild(dateInput)\n\tconst priorityDiv = document.createElement(\"div\")\n\tpriorityDiv.setAttribute(\"id\", \"priority\")\n\ttaskForm.appendChild(priorityDiv)\n\tconst priorityLabel = document.createElement(\"label\")\n\tpriorityLabel.setAttribute(\"for\", \"priority\")\n\tpriorityLabel.innerHTML = \"Priority: \"\n\tpriorityDiv.appendChild(priorityLabel)\n\tconst buttonDiv = document.createElement(\"div\")\n\tbuttonDiv.classList.add(\"button-div\")\n\tpriorityDiv.appendChild(buttonDiv)\n\tconst lowButton = document.createElement(\"button\")\n\tlowButton.setAttribute(\"type\", \"button\")\n\tlowButton.classList.add(\"low-button\")\n\tlowButton.innerHTML = \"Low\"\n\tbuttonDiv.appendChild(lowButton)\n\tconst medButton = document.createElement(\"button\")\n\tmedButton.setAttribute(\"type\", \"button\")\n\tmedButton.classList.add(\"med-button\")\n\tmedButton.innerHTML = \"Medium\"\n\tbuttonDiv.appendChild(medButton)\n\tconst highButton = document.createElement(\"button\")\n\thighButton.setAttribute(\"type\", \"button\")\n\thighButton.classList.add(\"high-button\")\n\thighButton.innerHTML = \"High\"\n\tbuttonDiv.appendChild(highButton)\n\tlowButton.addEventListener('click', function() {\n\t\tpriorityDiv.setAttribute(\"data-value\", \"Low\")\n\t\tlowButton.classList.toggle(\"low-button-focus\")\n\t\tmedButton.classList.remove(\"med-button-focus\")\n\t\thighButton.classList.remove(\"high-button-focus\")\n\t})\n\tmedButton.addEventListener('click', function() {\n\t\tpriorityDiv.setAttribute(\"data-value\", \"Medium\")\n\t\tmedButton.classList.toggle(\"med-button-focus\")\n\t\tlowButton.classList.remove(\"low-button-focus\")\n\t\thighButton.classList.remove(\"high-button-focus\")\n\t})\n\thighButton.addEventListener('click', function() {\n\t\tpriorityDiv.setAttribute(\"data-value\", \"High\")\n\t\thighButton.classList.toggle(\"high-button-focus\")\n\t\tlowButton.classList.remove(\"low-button-focus\")\n\t\tmedButton.classList.remove(\"med-button-focus\")\n\t})\n\tconst projectSelectDiv = document.createElement(\"div\")\n\ttaskForm.appendChild(projectSelectDiv)\n\tconst projectSelectLabel = document.createElement(\"label\")\n\tprojectSelectLabel.setAttribute(\"for\", \"project-select\")\n\tprojectSelectLabel.innerHTML = \"Project: \"\n\tconst projectSelectInput = document.createElement(\"select\")\n\tprojectSelectInput.setAttribute(\"type\", \"select\")\n\tprojectSelectInput.setAttribute(\"id\", \"project-select\")\n\tprojectSelectInput.setAttribute(\"name\", \"project-select\")\n\tprojectSelectDiv.appendChild(projectSelectLabel)\n\tprojectSelectDiv.appendChild(projectSelectInput)\n\tconst defaultProjectOption = document.createElement(\"option\")\n\tdefaultProjectOption.setAttribute(\"value\", \"none\")\n\tdefaultProjectOption.setAttribute(\"data-value\", \"none\")\n\tdefaultProjectOption.setAttribute(\"id\", \"project-option\")\n\tdefaultProjectOption.innerHTML = \"-\"\n\tprojectSelectInput.appendChild(defaultProjectOption)\n\tconst submitDiv = document.createElement(\"div\")\n\tsubmitDiv.classList.add(\"submit-container\")\n\ttaskForm.appendChild(submitDiv)\n\tconst subButton = document.createElement(\"button\")\n\tsubButton.innerHTML = \"Add\"\n\tsubButton.classList.add(\"submit-button\")\n\tsubButton.setAttribute(\"type\", \"button\")\n\tsubmitDiv.appendChild(subButton)\n\tsubButton.addEventListener('click', function() {\n\t\tlowButton.classList.remove(\"low-button-focus\")\n\t\tmedButton.classList.remove(\"med-button-focus\")\n\t\thighButton.classList.remove(\"high-button-focus\")\n\t\t;(0,_task_js__WEBPACK_IMPORTED_MODULE_2__.addTask)()\n\t\tdocument.querySelector(\".task-form\").reset()\n\t})\n\n\tfunction closeForm() {\n\t\tdocument.querySelector(\".pop-up-container\").style.display = \"none\";\n\t}\n}\n\n//# sourceURL=webpack://todo-list/./src/loadForm.js?");

/***/ }),

/***/ "./src/loadImportant.js":
/*!******************************!*\
  !*** ./src/loadImportant.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadImportant)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nfunction loadImportant() {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.contentTitle.innerHTML = \"Important\"    \n}\n\n//# sourceURL=webpack://todo-list/./src/loadImportant.js?");

/***/ }),

/***/ "./src/loadInbox.js":
/*!**************************!*\
  !*** ./src/loadInbox.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadInbox)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nfunction loadInbox() {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.contentTitle.innerHTML = \"Inbox\"    \n}\n\n\n//# sourceURL=webpack://todo-list/./src/loadInbox.js?");

/***/ }),

/***/ "./src/loadToday.js":
/*!**************************!*\
  !*** ./src/loadToday.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadToday)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nfunction loadToday() {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.contentTitle.innerHTML = \"Today\"    \n}\n\n//# sourceURL=webpack://todo-list/./src/loadToday.js?");

/***/ }),

/***/ "./src/loadWeek.js":
/*!*************************!*\
  !*** ./src/loadWeek.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadWeek)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nfunction loadWeek() {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.contentTitle.innerHTML = \"Week\"    \n}\n\n//# sourceURL=webpack://todo-list/./src/loadWeek.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"default\": () => (/* binding */ loadProjectForm),\n/* harmony export */   \"userProjects\": () => (/* binding */ userProjects)\n/* harmony export */ });\n/* harmony import */ var _close_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close.png */ \"./src/close.png\");\n/* harmony import */ var _list_box_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-box-outline.png */ \"./src/list-box-outline.png\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\nconst userProjects = []\nfunction loadProjectForm() {\n\t_index_js__WEBPACK_IMPORTED_MODULE_2__.projectPopUpContainer.style.display = \"none\";\n\tconst formContainer = document.createElement(\"div\")\n\tformContainer.classList.add(\"pform-container\")\n\t_index_js__WEBPACK_IMPORTED_MODULE_2__.projectPopUpContainer.appendChild(formContainer)\n\tconst closeDiv = document.createElement(\"div\")\n\tcloseDiv.classList.add(\"projectclose-div\")\n\tformContainer.appendChild(closeDiv)\n\tconst formHeader = document.createElement(\"div\")\n\tformHeader.textContent = \"Add Project\"\n\tformHeader.classList.add(\"pform-header\")\n\tcloseDiv.appendChild(formHeader)\n\tconst closeIcon = new Image();\n\tcloseIcon.classList.add(\"close-icon\")\n\tcloseIcon.src = _close_png__WEBPACK_IMPORTED_MODULE_0__;\n\tcloseDiv.appendChild(closeIcon)\n\tcloseIcon.addEventListener('click', closeForm)\n\tconst projectForm = document.createElement(\"form\")\n\tprojectForm.classList.add(\"project-form\")\n\tformContainer.appendChild(projectForm)\n\tconst titleDiv = document.createElement(\"div\")\n\tprojectForm.appendChild(titleDiv)\n\tconst titleLabel = document.createElement(\"label\")\n\ttitleLabel.setAttribute(\"for\", \"project-title\")\n\ttitleLabel.innerHTML = \"Title: \"\n\tconst titleInput = document.createElement(\"input\")\n\ttitleInput.setAttribute(\"type\", \"text\")\n\ttitleInput.setAttribute(\"id\", \"project-title\")\n\ttitleInput.setAttribute(\"name\", \"project-title\")\n\ttitleDiv.appendChild(titleLabel)\n\ttitleDiv.appendChild(titleInput)\n\tconst submitDiv = document.createElement(\"div\")\n\tsubmitDiv.classList.add(\"submit-container\")\n\tprojectForm.appendChild(submitDiv)\n\tconst subButton = document.createElement(\"button\")\n\tsubButton.innerHTML = \"Add\"\n\tsubButton.classList.add(\"submit-button\")\n\tsubButton.setAttribute(\"type\", \"button\")\n\tsubmitDiv.appendChild(subButton)\n\tsubButton.addEventListener('click', function() {\n\t\taddProject()\n\t\tcloseForm()\n\t})\n\n\tfunction closeForm() {\n\t\tdocument.querySelector(\".project-pop-up-container\").style.display = \"none\";\n\t\tdocument.querySelector(\".project-form\").reset();\n\t}\n}\nfunction addProject() {\n\tconst project = (() => {\n\t\tconst title = document.getElementById(\"project-title\").value\n\t\treturn {\n\t\t\ttitle,\n\t\t};\n\t})();\n\tuserProjects.push(project);\n\tdisplayProject()\n\n\tfunction displayProject(index) {\n\t\t//CREATE CARD\n\t\tconst card = document.createElement(\"li\")\n\t\tcard.setAttribute(\"id\", \"project-card-select\")\n\t\tcard.setAttribute(\"value\", `${project.title}`)\n\t\tcard.setAttribute(\"data-value\", `${project.title}`)\n\t\tcard.classList.add(\"selection\", \"project-card-select\")\n\t\t_index_js__WEBPACK_IMPORTED_MODULE_2__.sideBarList.appendChild(card);\n\t\tconst projectIcon = new Image();\n\t\tprojectIcon.src = _list_box_outline_png__WEBPACK_IMPORTED_MODULE_1__;\n\t\tcard.appendChild(projectIcon);\n\t\t//DISPLAY TASK CONTENTS\n\t\tconst titlePara = document.createElement(\"p\");\n\t\ttitlePara.textContent = (`${project.title}`);\n\t\tcard.appendChild(titlePara);\n\t\tconsole.log(userProjects)\n\t\tconst projectOption = document.createElement(\"option\")\n\t\tprojectOption.setAttribute(\"value\", (`${project.title}`))\n\t\tprojectOption.setAttribute(\"id\", \"project-option\")\n\t\tprojectOption.innerHTML = (`${project.title}`)\n\t\tdocument.getElementById(\"project-select\").appendChild(projectOption)\n\t\tcard.addEventListener('click', function() {\n\t\t\t_index_js__WEBPACK_IMPORTED_MODULE_2__.contentTitle.innerHTML = `${project.title}`\n\t\t\t_index_js__WEBPACK_IMPORTED_MODULE_2__.projectSelect.setAttribute(\"data-value\", `${project.title}`)\n\t\t})\n\t}\n}\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"userTasks\": () => (/* binding */ userTasks)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/parseISO/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isToday/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isThisWeek/index.js\");\n/* harmony import */ var _pencil_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pencil.png */ \"./src/pencil.png\");\n/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.png */ \"./src/delete.png\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _loadForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadForm */ \"./src/loadForm.js\");\n\n\n\n\n\n\nconst userTasks = []\n\n/* localStorage.setItem(\"tasks\", JSON.stringify(userTasks))\nlet storedTasks = JSON.parse(localStorage.getItem(\"tasks\"))\nfunction displayLocalStorage() {\ndisplayTask(storedTasks)\n} */\n\nfunction addTask() {\n\t//TASK OBJECT\n\tconst Task = (() => {\n\t\tconst title = document.getElementById(\"title\").value\n\t\tconst description = document.getElementById(\"description\").value\n\t\tconst dueDate = document.getElementById(\"dueDate\").value\n\t\tconst priority = document.getElementById(\"priority\").dataset.value\n\t\tconst projectOption = document.getElementById(\"project-select\").value\n\t\tconst id = Math.floor(Math.random() * 1000000)\n\t\treturn {\n\t\t\ttitle,\n\t\t\tdescription,\n\t\t\tdueDate,\n\t\t\tpriority,\n\t\t\tid,\n\t\t\tprojectOption\n\t\t};\n\t})();\n\t//ADD TASK TO ARRAY\n\tuserTasks.push(Task);\n\tcloseForm();\n\tdisplayTask();\n\tconsole.log(Task)\n\tconsole.log(userTasks)\n\n\tfunction displayTask(index) {\n\t\t//CREATE CARD\n\t\tconst card = document.createElement(\"div\")\n\t\tcard.setAttribute(\"id\", index)\n\t\tcard.setAttribute(\"data-value\", Task.projectOption)\n\t\tcard.classList.add(\"card\", \"task-card\")\n\t\tcard.style.display = \"flex\"\n\t\t_index_js__WEBPACK_IMPORTED_MODULE_2__.taskContainer.appendChild(card);\n\t\tconst card2 = document.createElement(\"div\")\n\t\tcard2.classList.add(\"card-2\")\n\t\tcard.appendChild(card2)\n\t\t//CREATE TASK DOT\n\t\tconst taskDot = document.createElement(\"span\")\n\t\ttaskDot.classList.add(\"default-task-dot\")\n\t\tcard2.appendChild(taskDot)\n\t\t//DISPLAY TASK CONTENTS\n\t\tconst titlePara = document.createElement(\"p\");\n\t\ttitlePara.textContent = (`${Task.title}`);\n\t\tcard2.appendChild(titlePara)\n\t\ttitlePara.classList.add(\"title-para\")\n\t\t/* \t\tconst descPara = document.createElement(\"p\");\n\t\tdescPara.textContent = (`${Task.description}`);\n\t\tcard.appendChild(descPara) */\n\t\tconst dueDatePara = document.createElement(\"p\");\n\t\tdueDatePara.textContent = (`${Task.dueDate}`);\n\t\tcard2.appendChild(dueDatePara)\n\t\tdueDatePara.classList.add(\"due-date-para\")\n\t\tconst priorityPara = document.createElement(\"p\")\n\t\tpriorityPara.textContent = (`${Task.priority}`);\n\t\tcard2.appendChild(priorityPara)\n\t\tpriorityPara.classList.add(\"priority-para\")\n/* \t\t//FOR TESTING PURPOSES\n\t\tconst projectPara = document.createElement(\"p\")\n\t\tprojectPara.textContent = (`${Task.projectOption}`);\n\t\tcard.appendChild(projectPara) */\n\t\t//RESET PRIORITY\n\t\t_index_js__WEBPACK_IMPORTED_MODULE_2__.addPlus.addEventListener('click', function() {\n\t\t\tdocument.getElementById(\"priority\").dataset.value = \"none\"\n\t\t})\n\t\t//CREATE EDIT ICON\n\t\tconst editIcon = new Image();\n\t\teditIcon.src = _pencil_png__WEBPACK_IMPORTED_MODULE_0__;\n\t\teditIcon.classList.add(\"edit-icon\")\n\t\tcard2.appendChild(editIcon);\n\t\t//CREATE REMOVE ICON\n\t\tconst removeTaskIcon = new Image();\n\t\tremoveTaskIcon.src = _delete_png__WEBPACK_IMPORTED_MODULE_1__;\n\t\tremoveTaskIcon.classList.add(\"remove-icon\")\n\t\tcard2.appendChild(removeTaskIcon);\n\t\t//REMOVE TASK\n\t\tremoveTaskIcon.addEventListener('click', function() {\n\t\t\tcard.remove();\n\t\t\tuserTasks.splice(index, 1);\n\t\t\tconsole.log(userTasks)\n\t\t})\n\t\t//POPULATE FORM FOR EDIT\n\t\tfunction populateForm() {\n\t\t\tdocument.getElementById(\"title\").value = Task.title\n\t\t\tdocument.getElementById(\"description\").value = Task.description\n\t\t\tdocument.getElementById(\"dueDate\").value = Task.dueDate\n\t\t\tdocument.getElementById(\"priority\").value = Task.priority\n\t\t}\n\t\t//EDIT TASK\n\t\teditIcon.addEventListener('click', function() {\n\t\t\t_index_js__WEBPACK_IMPORTED_MODULE_2__.popUpContainer.style.display = \"flex\";\n\t\t\tdocument.querySelector(\".submit-button\").textContent = \"Edit\"\n\t\t\tcard.remove();\n\t\t\tuserTasks.splice(index, 1);\n\t\t\tpopulateForm(Task)\n\t\t})\n\t\t//TASK STRIKETHROUGH TOGGLE\t\t\n\t\ttaskDot.addEventListener('click', function() {\n\t\t\ttaskDot.classList.toggle(\"focus-task-dot\")\n\t\t\tcard.classList.toggle(\"card-strike\")\n\t\t})\n\t\t_index_js__WEBPACK_IMPORTED_MODULE_2__.inboxSelect.addEventListener('click', function() {\n\t\t\tcard.style.display = \"flex\"\n\t\t})\n\t\t_index_js__WEBPACK_IMPORTED_MODULE_2__.todaySelect.addEventListener('click', function() {\n\t\t\tconst parseDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Task.dueDate)\n\t\t\tif ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(parseDueDate) === true) {\n\t\t\t\tconsole.log(\"is today\")\n\t\t\t\tcard.style.display = \"flex\"\n\t\t\t} else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(parseDueDate) != true) {\n\t\t\t\tcard.style.display = \"none\"\n\t\t\t} {}\n\t\t})\n\t\t_index_js__WEBPACK_IMPORTED_MODULE_2__.weekSelect.addEventListener('click', function() {\n\t\t\tconst parseDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Task.dueDate)\n\t\t\tif ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(parseDueDate) === true) {\n\t\t\t\tconsole.log(\"is this week\")\n\t\t\t\tcard.style.display = \"flex\"\n\t\t\t} else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(parseDueDate) != true) {\n\t\t\t\tcard.style.display = \"none\"\n\t\t\t} {}\n\t\t})\n\t\t_index_js__WEBPACK_IMPORTED_MODULE_2__.importantSelect.addEventListener('click', function() {\n\t\t\tif (Task.priority === \"High\") {\n\t\t\t\tcard.style.display = \"flex\"\n\t\t\t} else {\n\t\t\t\tcard.style.display = \"none\"\n\t\t\t}\n\t\t})\n\t\tconst projectCard = document.querySelectorAll(\".project-card-select\")\n\t\tif (projectCard) {\n\t\t\tprojectCard.forEach(project => {\n\t\t\t\tproject.addEventListener('click', function() {\n\t\t\t\t\tconst projectValue = document.getElementById(\"project-value\").dataset.value\n\t\t\t\t\tif (projectValue !== Task.projectOption || Task.projectOption === \"none\") {\n\t\t\t\t\t\tcard.style.display = \"none\"\n\t\t\t\t\t} else if (projectValue === Task.projectOption) {\n\t\t\t\t\t\tcard.style.display = \"flex\"\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t})\n\t\t}\n\t}\n}\n\nfunction closeForm() {\n\tdocument.querySelector(\".pop-up-container\").style.display = \"none\";\n\tdocument.querySelector(\".task-form\").reset();\n}\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/calendar-star-outline.png":
/*!***************************************!*\
  !*** ./src/calendar-star-outline.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"625cb11a78df427709e9.png\";\n\n//# sourceURL=webpack://todo-list/./src/calendar-star-outline.png?");

/***/ }),

/***/ "./src/calendar-today.png":
/*!********************************!*\
  !*** ./src/calendar-today.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b742c034020a1385b26d.png\";\n\n//# sourceURL=webpack://todo-list/./src/calendar-today.png?");

/***/ }),

/***/ "./src/calendar-week.png":
/*!*******************************!*\
  !*** ./src/calendar-week.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6138136d7f521cefb026.png\";\n\n//# sourceURL=webpack://todo-list/./src/calendar-week.png?");

/***/ }),

/***/ "./src/chevron-down.png":
/*!******************************!*\
  !*** ./src/chevron-down.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6603317551ad59805d6.png\";\n\n//# sourceURL=webpack://todo-list/./src/chevron-down.png?");

/***/ }),

/***/ "./src/close.png":
/*!***********************!*\
  !*** ./src/close.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a881a0abcee072ea090a.png\";\n\n//# sourceURL=webpack://todo-list/./src/close.png?");

/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"66e44fcbd80af81b4983.png\";\n\n//# sourceURL=webpack://todo-list/./src/delete.png?");

/***/ }),

/***/ "./src/inbox.png":
/*!***********************!*\
  !*** ./src/inbox.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50b91c9fa089ff4b5f20.png\";\n\n//# sourceURL=webpack://todo-list/./src/inbox.png?");

/***/ }),

/***/ "./src/list-box-outline.png":
/*!**********************************!*\
  !*** ./src/list-box-outline.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"30e6c1a710127cb551fd.png\";\n\n//# sourceURL=webpack://todo-list/./src/list-box-outline.png?");

/***/ }),

/***/ "./src/package.png":
/*!*************************!*\
  !*** ./src/package.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9179e3f9a529c4b19bd8.png\";\n\n//# sourceURL=webpack://todo-list/./src/package.png?");

/***/ }),

/***/ "./src/pencil.png":
/*!************************!*\
  !*** ./src/pencil.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"114955f46406383a04b7.png\";\n\n//# sourceURL=webpack://todo-list/./src/pencil.png?");

/***/ }),

/***/ "./src/plus.png":
/*!**********************!*\
  !*** ./src/plus.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e8914437599cdc74501.png\";\n\n//# sourceURL=webpack://todo-list/./src/plus.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;