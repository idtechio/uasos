"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBackHandler = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
function useBackHandler(handler) {
    react_1.useEffect(function () {
        react_native_1.BackHandler.addEventListener('hardwareBackPress', handler);
        return function () { return react_native_1.BackHandler.removeEventListener('hardwareBackPress', handler); };
    }, [handler]);
}
exports.useBackHandler = useBackHandler;
//# sourceMappingURL=useBackHandler.js.map