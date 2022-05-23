"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKeyboard = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var emptyCoordinates = Object.freeze({
    screenX: 0,
    screenY: 0,
    width: 0,
    height: 0,
});
var initialValue = {
    start: emptyCoordinates,
    end: emptyCoordinates,
};
function useKeyboard() {
    var _a = react_1.useState(false), shown = _a[0], setShown = _a[1];
    var _b = react_1.useState(initialValue), coordinates = _b[0], setCoordinates = _b[1];
    var _c = react_1.useState(0), keyboardHeight = _c[0], setKeyboardHeight = _c[1];
    var handleKeyboardWillShow = function (e) {
        setCoordinates({ start: e.startCoordinates, end: e.endCoordinates });
    };
    var handleKeyboardDidShow = function (e) {
        setShown(true);
        setCoordinates({ start: e.startCoordinates, end: e.endCoordinates });
        setKeyboardHeight(e.endCoordinates.height);
    };
    var handleKeyboardWillHide = function (e) {
        setCoordinates({ start: e.startCoordinates, end: e.endCoordinates });
    };
    var handleKeyboardDidHide = function (e) {
        setShown(false);
        if (e) {
            setCoordinates({ start: e.startCoordinates, end: e.endCoordinates });
        }
        else {
            setCoordinates(initialValue);
            setKeyboardHeight(0);
        }
    };
    react_1.useEffect(function () {
        var subscriptions = [
            react_native_1.Keyboard.addListener('keyboardWillShow', handleKeyboardWillShow),
            react_native_1.Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow),
            react_native_1.Keyboard.addListener('keyboardWillHide', handleKeyboardWillHide),
            react_native_1.Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide),
        ];
        return function () {
            subscriptions.forEach(function (subscription) { return subscription.remove(); });
        };
    }, []);
    return {
        keyboardShown: shown,
        coordinates: coordinates,
        keyboardHeight: keyboardHeight,
    };
}
exports.useKeyboard = useKeyboard;
//# sourceMappingURL=useKeyboard.js.map