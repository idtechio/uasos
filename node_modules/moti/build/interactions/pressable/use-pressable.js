import { useMotiPressableContext } from './context';
import { useDerivedValue } from 'react-native-reanimated';
import { useMemo } from 'react';
import { useFactory } from './use-validate-factory-or-id';
function useMotiPressable(factoryOrId, maybeFactoryOrDeps, maybeDeps) {
    const context = useMotiPressableContext();
    const { factory, id, deps } = useFactory('useMotiPressable', factoryOrId, maybeFactoryOrDeps, maybeDeps);
    const __state = useDerivedValue(() => {
        const interaction = context.containers[id];
        return interaction && factory(interaction.value);
    }, deps);
    return useMemo(() => ({
        __state,
    }), [__state]);
}
export { useMotiPressable };
//# sourceMappingURL=use-pressable.js.map