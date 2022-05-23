import { createContext, useContext } from 'react';
export const INTERACTION_CONTAINER_ID = '__INTERACTION_CONTAINER_ID';
export const MotiPressableContext = createContext({
    containers: {},
});
export const useMotiPressableContext = () => useContext(MotiPressableContext);
//# sourceMappingURL=context.js.map