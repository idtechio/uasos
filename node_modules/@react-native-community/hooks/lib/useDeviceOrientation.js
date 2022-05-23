"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeviceOrientation = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var isOrientationPortrait = function (_a) {
    var width = _a.width, height = _a.height;
    return height >= width;
};
var isOrientationLandscape = function (_a) {
    var width = _a.width, height = _a.height;
    return width >= height;
};
function useDeviceOrientation() {
    var screen = react_native_1.Dimensions.get('screen');
    var initialState = {
        portrait: isOrientationPortrait(screen),
        landscape: isOrientationLandscape(screen),
    };
    var _a = react_1.useState(initialState), orientation = _a[0], setOrientation = _a[1];
    react_1.useEffect(function () {
        var onChange = function (_a) {
            var screen = _a.screen;
            setOrientation({
                portrait: isOrientationPortrait(screen),
                landscape: isOrientationLandscape(screen),
            });
        };
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
    return orientation;
}
exports.useDeviceOrientation = useDeviceOrientation;
//# sourceMappingURL=useDeviceOrientation.js.map