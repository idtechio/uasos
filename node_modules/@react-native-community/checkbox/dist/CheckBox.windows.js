/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nullthrows_1 = __importDefault(require("nullthrows"));
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var WindowsCheckBoxComponent_1 = __importDefault(require("./WindowsCheckBoxComponent"));
// @ts-ignore setAndForwardRef type does not exist in @types/react-native
var setAndForwardRef_1 = __importDefault(require("react-native/Libraries/Utilities/setAndForwardRef"));
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nativeRef = null;
        _this._setNativeRef = setAndForwardRef_1.default({
            getForwardedRef: function () { return _this.props.forwardedRef; },
            setLocalRef: function (ref) {
                _this._nativeRef = ref;
            },
        });
        _this._onChange = function (event) {
            var onValueChange = _this.props.onValueChange;
            var value = event.nativeEvent.value;
            // @ts-ignore
            nullthrows_1.default(_this._nativeRef).setNativeProps({ value: value });
            onValueChange && onValueChange(value);
        };
        return _this;
    }
    CheckBox.prototype.render = function () {
        // Do not use onValueChange directly from props
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _a = this.props, style = _a.style, onValueChange = _a.onValueChange, props = __rest(_a, ["style", "onValueChange"]);
        return (react_1.default.createElement(WindowsCheckBoxComponent_1.default, __assign({}, props, { 
            // @ts-ignore TODO: implement the type of WindowsCheckBoxNativeComponent
            style: [styles.rctCheckBox, style], ref: this._setNativeRef, onChange: this._onChange })));
    };
    return CheckBox;
}(react_1.default.Component));
var styles = react_native_1.StyleSheet.create({
    rctCheckBox: {
        height: 32,
        width: 32,
        backgroundColor: 'transparent',
    },
});
var CheckBoxWithRef = react_1.default.forwardRef(function CheckBoxWithRef(props, ref) {
    return react_1.default.createElement(CheckBox, __assign({}, props, { forwardedRef: ref }));
});
exports.default = CheckBoxWithRef;
