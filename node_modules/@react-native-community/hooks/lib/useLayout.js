"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayout = void 0;
var react_1 = require("react");
function useLayout() {
    var _a = react_1.useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    }), layout = _a[0], setLayout = _a[1];
    var onLayout = react_1.useCallback(function (e) { return setLayout(e.nativeEvent.layout); }, []);
    return __assign({ onLayout: onLayout }, layout);
}
exports.useLayout = useLayout;
//# sourceMappingURL=useLayout.js.map