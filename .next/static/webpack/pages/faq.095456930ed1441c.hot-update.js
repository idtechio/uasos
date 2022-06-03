"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/faq",{

/***/ "./src/components/Faq/Accordion.tsx":
/*!******************************************!*\
  !*** ./src/components/Faq/Accordion.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components/native */ \"./node_modules/styled-components/native/dist/styled-components.native.esm.js\");\n/* harmony import */ var _style_svgs_arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/svgs/arrow.svg */ \"./src/style/svgs/arrow.svg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Programming\\\\uaplatform\\\\uasos2\\\\uasos\\\\src\\\\components\\\\Faq\\\\Accordion.tsx\",\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Accordion(_ref) {\n  _s2();\n\n  var _this = this,\n      _s = $RefreshSig$();\n\n  var nameCategory = _ref.nameCategory,\n      content = _ref.content;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isOpenCategory = _useState[0],\n      setIsOpenCategory = _useState[1];\n\n  var Accordion = styled_components_native__WEBPACK_IMPORTED_MODULE_1__[\"default\"].View.withConfig({\n    displayName: \"Accordion\",\n    componentId: \"sc-1edlphm-0\"\n  })([\"display:\", \";display:flex;flex-direction:row;justify-content:space-between;align-content:center;margin:\", \";padding:18px;padding-left:\", \"px;font-size:14px;font-weight:bold;text-align:left;letter-spacing:\", \";background-color:\", \";border:none;border-radius:16px;outline:none;box-shadow:\", \";transition:0.4s;cursor:\", \";\"], function (props) {\n    return props.isOpenCategory ? \"flex\" : \"none\";\n  }, function (props) {\n    return props.isMain ? \"0 15px 0\" : \"15px\";\n  }, function (props) {\n    return props.isMain ? 0 : 18;\n  }, function (props) {\n    return props.isMain ? \"0.5px\" : \"normal\";\n  }, function (props) {\n    return props.isMain ? \"none\" : \"#fff\";\n  }, function (props) {\n    return props.isMain ? \"none\" : \"0px 4px 4px rgba(34, 60, 80, 0.2)\";\n  }, function (props) {\n    return props.isMain ? \"auto\" : \"pointer\";\n  });\n  var Panel = styled_components_native__WEBPACK_IMPORTED_MODULE_1__[\"default\"].View.withConfig({\n    displayName: \"Accordion__Panel\",\n    componentId: \"sc-1edlphm-1\"\n  })([\"padding:0 18px;max-height:\", \";font-size:12px;overflow:hidden;transition:max-height 2s ease-out;\"], function (props) {\n    return props.isOpenText ? \"auto\" : 0;\n  });\n  var ArrowIconWrapper = styled_components_native__WEBPACK_IMPORTED_MODULE_1__[\"default\"].View.withConfig({\n    displayName: \"Accordion__ArrowIconWrapper\",\n    componentId: \"sc-1edlphm-2\"\n  })([\"display:flex;justify-content:space-around;\"]);\n  var Hr = styled_components_native__WEBPACK_IMPORTED_MODULE_1__[\"default\"].View.withConfig({\n    displayName: \"Accordion__Hr\",\n    componentId: \"sc-1edlphm-3\"\n  })([\"display:flex;align-self:center;width:324px;height:3px;background:#f8f8f8;\"]);\n  var ContentWrapper = styled_components_native__WEBPACK_IMPORTED_MODULE_1__[\"default\"].View.withConfig({\n    displayName: \"Accordion__ContentWrapper\",\n    componentId: \"sc-1edlphm-4\"\n  })([\"margin-top:5px;margin-bottom:15px;\"]);\n  var QuestionWrapper = styled_components_native__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Text.withConfig({\n    displayName: \"Accordion__QuestionWrapper\",\n    componentId: \"sc-1edlphm-5\"\n  })([\"font-weight:500;font-size:14px;line-height:16px;align-items:center;color:#003566;\"]);\n  var NameCategoryWrapper = styled_components_native__WEBPACK_IMPORTED_MODULE_1__[\"default\"].View.withConfig({\n    displayName: \"Accordion__NameCategoryWrapper\",\n    componentId: \"sc-1edlphm-6\"\n  })([\"\"]);\n\n  var QuestionAccordion = function QuestionAccordion(question, answer) {\n    _s();\n\n    var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n        isOpen = _useState2[0],\n        setIsOpen = _useState2[1];\n\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Accordion, {\n        isOpenCategory: true,\n        onClick: function onClick() {\n          return setIsOpen(!isOpen);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(QuestionWrapper, {\n          children: question\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ArrowIconWrapper, {\n          style: isOpen ? {\n            transform: [{\n              rotate: \"180deg\"\n            }]\n          } : null,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style_svgs_arrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Panel, {\n        isOpenText: isOpen,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Hr, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ContentWrapper, {\n          children: answer\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Hr, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true);\n  };\n\n  _s(QuestionAccordion, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n\n  var renderInnerAccordion = function renderInnerAccordion() {\n    return Object.values(content).map(function (elContentValue) {\n      return QuestionAccordion(elContentValue.question, elContentValue.answer);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Accordion, {\n      isOpenCategory: isOpenCategory,\n      isMain: true,\n      onClick: function onClick() {\n        return setIsOpenCategory(!isOpenCategory);\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(NameCategoryWrapper, {\n        children: nameCategory\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, this)\n    }, nameCategory, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this), renderInnerAccordion()]\n  }, void 0, true);\n}\n\n_s2(Accordion, \"ry57hg8v42cTaLX9PYIKzqhOiZ8=\");\n\n_c = Accordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\n\nvar _c;\n\n$RefreshReg$(_c, \"Accordion\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUQ7QUFBTyxrQkFBVSxFQUFFSCxNQUFuQjtBQUFBLGdDQUNFLDhEQUFDLEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLGNBQUQ7QUFBQSxvQkFBaUJEO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSw4REFBQyxFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQSxvQkFERjtBQWlCRCxHQXBCRDs7QUFsRUMsS0FrRUtGLGlCQWxFTDs7QUF3RkQsTUFBTU8sb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2pDLFdBQU9DLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjdkIsT0FBZCxFQUF1QndCLEdBQXZCLENBQTJCLFVBQUNDLGNBQUQsRUFBb0I7QUFDcEQsYUFBT1gsaUJBQWlCLENBQUNXLGNBQWMsQ0FBQ1YsUUFBaEIsRUFBMEJVLGNBQWMsQ0FBQ1QsTUFBekMsQ0FBeEI7QUFDRCxLQUZNLENBQVA7QUFHRCxHQUpEOztBQU1BLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsU0FBRDtBQUVFLG9CQUFjLEVBQUVmLGNBRmxCO0FBR0UsWUFBTSxFQUFFLElBSFY7QUFJRSxhQUFPLEVBQUU7QUFBQSxlQUFNQyxpQkFBaUIsQ0FBQyxDQUFDRCxjQUFGLENBQXZCO0FBQUEsT0FKWDtBQUFBLDZCQU1FLDhEQUFDLG1CQUFEO0FBQUEsa0JBQXNCRjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkYsT0FDT0EsWUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFTR3NCLG9CQUFvQixFQVR2QjtBQUFBLGtCQURGO0FBYUQ7O0lBakhRdkI7O0tBQUFBO0FBbUhULCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZhcS9BY2NvcmRpb24udHN4PzI1ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzL25hdGl2ZVwiO1xuaW1wb3J0IEFycm93SWNvbiBmcm9tIFwiLi4vLi4vc3R5bGUvc3Zncy9hcnJvdy5zdmdcIjtcblxuZnVuY3Rpb24gQWNjb3JkaW9uKHtcbiAgbmFtZUNhdGVnb3J5LFxuICBjb250ZW50LFxufToge1xuICBuYW1lQ2F0ZWdvcnk6IHN0cmluZztcbiAgY29udGVudDogb2JqZWN0O1xufSkge1xuICBjb25zdCBbaXNPcGVuQ2F0ZWdvcnksIHNldElzT3BlbkNhdGVnb3J5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBBY2NvcmRpb24gPSBzdHlsZWQuVmlldzx7XG4gICAgaXNPcGVuQ2F0ZWdvcnk/OiBib29sZWFuO1xuICAgIGlzTWFpbj86IGJvb2xlYW47XG4gICAgb25DbGljazogKGU6IEV2ZW50KSA9PiB2b2lkO1xuICB9PmBcbiAgICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gKHByb3BzLmlzT3BlbkNhdGVnb3J5ID8gXCJmbGV4XCIgOiBcIm5vbmVcIil9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogJHsocHJvcHMpID0+IChwcm9wcy5pc01haW4gPyBcIjAgMTVweCAwXCIgOiBcIjE1cHhcIil9O1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAkeyhwcm9wcykgPT4gKHByb3BzLmlzTWFpbiA/IDAgOiAxOCl9cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNNYWluID8gXCIwLjVweFwiIDogXCJub3JtYWxcIil9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNNYWluID8gXCJub25lXCIgOiBcIiNmZmZcIil9O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogJHsocHJvcHMpID0+XG4gICAgICBwcm9wcy5pc01haW4gPyBcIm5vbmVcIiA6IFwiMHB4IDRweCA0cHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpXCJ9O1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgY3Vyc29yOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzTWFpbiA/IFwiYXV0b1wiIDogXCJwb2ludGVyXCIpfTtcbiAgYDtcblxuICBjb25zdCBQYW5lbCA9IHN0eWxlZC5WaWV3PHsgaXNPcGVuVGV4dDogYm9vbGVhbiB9PmBcbiAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgbWF4LWhlaWdodDogJHsocHJvcHMpID0+IChwcm9wcy5pc09wZW5UZXh0ID8gXCJhdXRvXCIgOiAwKX07XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAycyBlYXNlLW91dDtcbiAgYDtcblxuICBjb25zdCBBcnJvd0ljb25XcmFwcGVyID0gc3R5bGVkLlZpZXdgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYDtcblxuICBjb25zdCBIciA9IHN0eWxlZC5WaWV3YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiAzMjRweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBgO1xuXG4gIGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLlZpZXdgXG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGA7XG5cbiAgY29uc3QgUXVlc3Rpb25XcmFwcGVyID0gc3R5bGVkLlRleHRgXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwMzU2NjtcbiAgYDtcblxuICBjb25zdCBOYW1lQ2F0ZWdvcnlXcmFwcGVyID0gc3R5bGVkLlZpZXdgYDtcblxuICBjb25zdCBRdWVzdGlvbkFjY29yZGlvbiA9IChxdWVzdGlvbjogc3RyaW5nLCBhbnN3ZXI6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEFjY29yZGlvbiBpc09wZW5DYXRlZ29yeT17dHJ1ZX0gb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cbiAgICAgICAgICA8UXVlc3Rpb25XcmFwcGVyPntxdWVzdGlvbn08L1F1ZXN0aW9uV3JhcHBlcj5cbiAgICAgICAgICA8QXJyb3dJY29uV3JhcHBlclxuICAgICAgICAgICAgc3R5bGU9e2lzT3BlbiA/IHsgdHJhbnNmb3JtOiBbeyByb3RhdGU6IFwiMTgwZGVnXCIgfV0gfSA6IG51bGx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFycm93SWNvbiAvPlxuICAgICAgICAgIDwvQXJyb3dJY29uV3JhcHBlcj5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgIDxQYW5lbCBpc09wZW5UZXh0PXtpc09wZW59PlxuICAgICAgICAgIDxIciAvPlxuICAgICAgICAgIDxDb250ZW50V3JhcHBlcj57YW5zd2VyfTwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgICAgPEhyIC8+XG4gICAgICAgIDwvUGFuZWw+XG4gICAgICA8Lz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlcklubmVyQWNjb3JkaW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKGNvbnRlbnQpLm1hcCgoZWxDb250ZW50VmFsdWUpID0+IHtcbiAgICAgIHJldHVybiBRdWVzdGlvbkFjY29yZGlvbihlbENvbnRlbnRWYWx1ZS5xdWVzdGlvbiwgZWxDb250ZW50VmFsdWUuYW5zd2VyKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QWNjb3JkaW9uXG4gICAgICAgIGtleT17bmFtZUNhdGVnb3J5fVxuICAgICAgICBpc09wZW5DYXRlZ29yeT17aXNPcGVuQ2F0ZWdvcnl9XG4gICAgICAgIGlzTWFpbj17dHJ1ZX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuQ2F0ZWdvcnkoIWlzT3BlbkNhdGVnb3J5KX1cbiAgICAgID5cbiAgICAgICAgPE5hbWVDYXRlZ29yeVdyYXBwZXI+e25hbWVDYXRlZ29yeX08L05hbWVDYXRlZ29yeVdyYXBwZXI+XG4gICAgICA8L0FjY29yZGlvbj5cbiAgICAgIHtyZW5kZXJJbm5lckFjY29yZGlvbigpfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZWQiLCJBcnJvd0ljb24iLCJBY2NvcmRpb24iLCJuYW1lQ2F0ZWdvcnkiLCJjb250ZW50IiwiaXNPcGVuQ2F0ZWdvcnkiLCJzZXRJc09wZW5DYXRlZ29yeSIsIlZpZXciLCJwcm9wcyIsImlzTWFpbiIsIlBhbmVsIiwiaXNPcGVuVGV4dCIsIkFycm93SWNvbldyYXBwZXIiLCJIciIsIkNvbnRlbnRXcmFwcGVyIiwiUXVlc3Rpb25XcmFwcGVyIiwiVGV4dCIsIk5hbWVDYXRlZ29yeVdyYXBwZXIiLCJRdWVzdGlvbkFjY29yZGlvbiIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidHJhbnNmb3JtIiwicm90YXRlIiwicmVuZGVySW5uZXJBY2NvcmRpb24iLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJlbENvbnRlbnRWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Faq/Accordion.tsx\n");

/***/ })

});