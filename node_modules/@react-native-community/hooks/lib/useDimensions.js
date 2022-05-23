"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDimensions = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
function useDimensions() {
    var _a = react_1.useState({
        window: react_native_1.Dimensions.get('window'),
        screen: react_native_1.Dimensions.get('screen'),
    }), dimensions = _a[0], setDimensions = _a[1];
    var onChange = function (_a) {
        var window = _a.window, screen = _a.screen;
        setDimensions({ window: window, screen: screen });
    };
    react_1.useEffect(function () {
        var subscription = react_native_1.Dimensions.addEventListener('change', onChange);
        return function () {
            // @ts-expect-error - React Native >= 0.65
            if (typeof (subscription === null || subscription === void 0 ? void 0 : subscription.remove) === 'function') {
                // @ts-expect-error - need update @types/react-native@0.65.x
                subscription.remove();
            }
            else {
                // React Native < 0.65
                react_native_1.Dimensions.removeEventListener('change', onChange);
            }
        };
    }, []);
    return dimensions;
}
exports.useDimensions = useDimensions;
//# sourceMappingURL=useDimensions.js.map