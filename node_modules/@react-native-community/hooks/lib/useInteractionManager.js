"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInteractionManager = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
function useInteractionManager() {
    var _a = react_1.useState(false), complete = _a[0], updateInteractionStatus = _a[1];
    react_1.useEffect(function () {
        react_native_1.InteractionManager.runAfterInteractions(function () {
            updateInteractionStatus(true);
        });
    }, []);
    return complete;
}
exports.useInteractionManager = useInteractionManager;
//# sourceMappingURL=useInteractionManager.js.map