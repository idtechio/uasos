"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_consts_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/consts/router */ \"(api)/./src/consts/router.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  // Configure one or more authentication providers\n  providers: [next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_1___default()({\n    clientId: process.env.FACEBOOK_CLIENT_ID,\n    clientSecret: process.env.FACEBOOK_CLIENT_SECRET\n  }), next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    clientSecret: process.env.GOOGLE_CLIENT_SECRET\n  })],\n  secret: process.env.SECRET,\n  pages: {\n    signIn: _src_consts_router__WEBPACK_IMPORTED_MODULE_3__.Routes.SIGN_IN\n  },\n  theme: {\n    colorScheme: \"light\",\n    // \"auto\" | \"dark\" | \"light\"\n    brandColor: \"#1A3764\",\n    // Hex color code\n    logo: \"https://uasos.org/logo.svg\" // Absolute URL to image\n\n  },\n  callbacks: {\n    redirect({\n      url\n    }) {\n      return url !== null && url !== void 0 ? url : _src_consts_router__WEBPACK_IMPORTED_MODULE_3__.Routes.HOMEPAGE;\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZUEsZ0RBQVEsQ0FBQztBQUN0QjtBQUNBSSxFQUFBQSxTQUFTLEVBQUUsQ0FDVEgsbUVBQWdCLENBQUM7QUFDZkksSUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsa0JBRFA7QUFFZkMsSUFBQUEsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGWCxHQUFELENBRFAsRUFLVFIsaUVBQWMsQ0FBQztBQUNiRyxJQUFBQSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxnQkFEVDtBQUViRixJQUFBQSxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZSztBQUZiLEdBQUQsQ0FMTCxDQUZXO0FBWXRCQyxFQUFBQSxNQUFNLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxNQVpFO0FBYXRCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsTUFBTSxFQUFFYiw4REFBY2M7QUFEakIsR0FiZTtBQWdCdEJDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxXQUFXLEVBQUUsT0FEUjtBQUNpQjtBQUN0QkMsSUFBQUEsVUFBVSxFQUFFLFNBRlA7QUFFa0I7QUFDdkJDLElBQUFBLElBQUksRUFBRSw0QkFIRCxDQUcrQjs7QUFIL0IsR0FoQmU7QUFxQnRCQyxFQUFBQSxTQUFTLEVBQUU7QUFDVEMsSUFBQUEsUUFBUSxDQUFDO0FBQUVDLE1BQUFBO0FBQUYsS0FBRCxFQUFVO0FBQ2hCLGFBQU9BLEdBQVAsYUFBT0EsR0FBUCxjQUFPQSxHQUFQLEdBQWNyQiwrREFBZDtBQUNEOztBQUhRO0FBckJXLENBQUQsQ0FBdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBGYWNlYm9va1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2ZhY2Vib29rXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbnN0cy9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHByb3ZpZGVyczogW1xuICAgIEZhY2Vib29rUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gIF0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogUm91dGVzLlNJR05fSU4sXG4gIH0sXG4gIHRoZW1lOiB7XG4gICAgY29sb3JTY2hlbWU6IFwibGlnaHRcIiwgLy8gXCJhdXRvXCIgfCBcImRhcmtcIiB8IFwibGlnaHRcIlxuICAgIGJyYW5kQ29sb3I6IFwiIzFBMzc2NFwiLCAvLyBIZXggY29sb3IgY29kZVxuICAgIGxvZ286IFwiaHR0cHM6Ly91YXNvcy5vcmcvbG9nby5zdmdcIiwgLy8gQWJzb2x1dGUgVVJMIHRvIGltYWdlXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIHJlZGlyZWN0KHsgdXJsIH0pIHtcbiAgICAgIHJldHVybiB1cmwgPz8gUm91dGVzLkhPTUVQQUdFO1xuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkZhY2Vib29rUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIlJvdXRlcyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkZBQ0VCT09LX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkZBQ0VCT09LX0NMSUVOVF9TRUNSRVQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJzZWNyZXQiLCJTRUNSRVQiLCJwYWdlcyIsInNpZ25JbiIsIlNJR05fSU4iLCJ0aGVtZSIsImNvbG9yU2NoZW1lIiwiYnJhbmRDb2xvciIsImxvZ28iLCJjYWxsYmFja3MiLCJyZWRpcmVjdCIsInVybCIsIkhPTUVQQUdFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./src/consts/router.ts":
/*!******************************!*\
  !*** ./src/consts/router.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Routes\": () => (/* binding */ Routes)\n/* harmony export */ });\nlet Routes;\n\n(function (Routes) {\n  Routes[\"HOMEPAGE\"] = \"/\";\n  Routes[\"SIGN_IN\"] = \"/signin\";\n  Routes[\"HOST\"] = \"/host\";\n  Routes[\"GUEST\"] = \"/guest\";\n  Routes[\"DETAILS\"] = \"/details\";\n  Routes[\"REGISTER\"] = \"/register\";\n  Routes[\"REGULATIONS\"] = \"/regulations\";\n  Routes[\"PRIVACY_POLICY\"] = \"/privacy-policy\";\n  Routes[\"PARTNERS\"] = \"/partners\";\n  Routes[\"FAQ\"] = \"/faq\";\n})(Routes || (Routes = {}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29uc3RzL3JvdXRlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sSUFBS0EsTUFBWjs7V0FBWUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7R0FBQUEsV0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RzL3JvdXRlci50cz85YjBkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFJvdXRlcyB7XG4gIEhPTUVQQUdFID0gXCIvXCIsXG4gIFNJR05fSU4gPSBcIi9zaWduaW5cIixcbiAgSE9TVCA9IFwiL2hvc3RcIixcbiAgR1VFU1QgPSBcIi9ndWVzdFwiLFxuICBERVRBSUxTID0gXCIvZGV0YWlsc1wiLFxuICBSRUdJU1RFUiA9IFwiL3JlZ2lzdGVyXCIsXG4gIFJFR1VMQVRJT05TID0gXCIvcmVndWxhdGlvbnNcIixcbiAgUFJJVkFDWV9QT0xJQ1kgPSBcIi9wcml2YWN5LXBvbGljeVwiLFxuICBQQVJUTkVSUyA9IFwiL3BhcnRuZXJzXCIsXG4gIEZBUSA9IFwiL2ZhcVwiLFxufVxuIl0sIm5hbWVzIjpbIlJvdXRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/consts/router.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();