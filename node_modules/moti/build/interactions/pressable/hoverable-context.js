import { createContext, useContext } from 'react';
const HoveredContext = createContext({
    value: false,
});
const useIsHovered = () => {
    return useContext(HoveredContext);
};
export { HoveredContext, useIsHovered };
//# sourceMappingURL=hoverable-context.js.map