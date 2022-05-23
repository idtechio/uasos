"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppState = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
function useAppState() {
    var currentState = react_native_1.AppState.currentState;
    var _a = react_1.useState(currentState), appState = _a[0], setAppState = _a[1];
    react_1.useEffect(function () {
        function onChange(newState) {
            setAppState(newState);
        }
        var subscription = react_native_1.AppState.addEventListener('change', onChange);
        return function () {
            // @ts-expect-error - React Native >= 0.65
            if (typeof (subscription === null || subscription === void 0 ? void 0 : subscription.remove) === 'function') {
                // @ts-expect-error - need update @types/react-native@0.65.x
                subscription.remove();
            }
            else {
                // React Native < 0.65
                react_native_1.AppState.removeEventListener('change', onChange);
            }
        };
    }, []);
    return appState;
}
exports.useAppState = useAppState;
//# sourceMappingURL=useAppState.js.map