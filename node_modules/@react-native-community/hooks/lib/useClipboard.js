"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClipboard = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var listeners = new Set();
function setString(content) {
    react_native_1.Clipboard.setString(content);
    listeners.forEach(function (listener) { return listener(content); });
}
function useClipboard() {
    var _a = react_1.useState(''), data = _a[0], updateClipboardData = _a[1];
    // Get initial data
    react_1.useEffect(function () {
        react_native_1.Clipboard.getString().then(updateClipboardData);
    }, []);
    // Listen for updates
    react_1.useEffect(function () {
        listeners.add(updateClipboardData);
        return function () {
            listeners.delete(updateClipboardData);
        };
    }, []);
    return [data, setString];
}
exports.useClipboard = useClipboard;
//# sourceMappingURL=useClipboard.js.map