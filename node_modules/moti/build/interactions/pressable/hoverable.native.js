import React from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { HoveredContext } from './hoverable-context';
export function Hoverable({ children }) {
    return (React.createElement(HoveredContext.Provider, { value: useSharedValue(false) }, React.Children.only(children)));
}
//# sourceMappingURL=hoverable.native.js.map