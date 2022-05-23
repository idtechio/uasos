/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
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
// @ts-ignore setAndForwardRef type does not exist in @types/react-native
var setAndForwardRef_1 = __importDefault(require("react-native/Libraries/Utilities/setAndForwardRef"));
var AndroidCheckBoxNativeComponent_1 = __importDefault(require("./AndroidCheckBoxNativeComponent"));
/**
 * Renders a boolean input (Android only).
 *
 * This is a controlled component that requires an `onValueChange` callback that
 * updates the `value` prop in order for the component to reflect user actions.
 * If the `value` prop is not updated, the component will continue to render
 * the supplied `value` prop instead of the expected result of any user actions.
 *
 * ```
 * import React from 'react';
 * import { AppRegistry, StyleSheet, Text, View, CheckBox } from 'react-native';
 *
 * export default class App extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       checked: false
 *     }
 *   }
 *
 *   toggle() {
 *     this.setState(({checked}) => {
 *       return {
 *         checked: !checked
 *       };
 *     });
 *   }
 *
 *   render() {
 *     const {checked} = this.state;
 *     return (
 *       <View style={styles.container}>
 *         <Text>Checked</Text>
 *         <CheckBox value={checked} onChange={this.toggle.bind(this)} />
 *       </View>
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     flexDirection: 'row',
 *     alignItems: 'center',
 *     justifyContent: 'center',
 *   },
 * });
 *
 * // skip this line if using Create React Native App
 * AppRegistry.registerComponent('App', () => App);
 * ```
 *
 * @keyword checkbox
 * @keyword toggle
 */
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
            var value = _this.props.value || false;
            // @ts-ignore
            nullthrows_1.default(_this._nativeRef).setNativeProps({ value: value });
            // Change the props after the native props are set in case the props
            // change removes the component
            _this.props.onChange && _this.props.onChange(event);
            _this.props.onValueChange &&
                _this.props.onValueChange(event.nativeEvent.value);
        };
        return _this;
    }
    CheckBox.prototype.getTintColors = function (tintColors) {
        return tintColors
            ? {
                true: react_native_1.processColor(tintColors.true),
                false: react_native_1.processColor(tintColors.false),
            }
            : undefined;
    };
    CheckBox.prototype.render = function () {
        var _a = this.props, tintColors = _a.tintColors, style = _a.style, props = __rest(_a, ["tintColors", "style"]);
        var disabled = this.props.disabled || false;
        var value = this.props.value || false;
        var nativeProps = __assign(__assign({}, props), { onStartShouldSetResponder: function () { return true; }, onResponderTerminationRequest: function () { return false; }, enabled: !disabled, on: value, tintColors: this.getTintColors(tintColors), style: [styles.rctCheckBox, style] });
        return (react_1.default.createElement(AndroidCheckBoxNativeComponent_1.default, __assign({}, nativeProps, { ref: this._setNativeRef, 
            // @ts-ignore TODO: implement the type of AndroidCheckBoxNativeComponent
            onChange: this._onChange })));
    };
    return CheckBox;
}(react_1.default.Component));
var styles = react_native_1.StyleSheet.create({
    rctCheckBox: {
        height: 32,
        width: 32,
    },
});
var CheckBoxWithRef = react_1.default.forwardRef(function CheckBoxWithRef(props, ref) {
    return react_1.default.createElement(CheckBox, __assign({}, props, { forwardedRef: ref }));
});
exports.default = CheckBoxWithRef;
