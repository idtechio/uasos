import { useDerivedValue } from 'react-native-reanimated';
import { useMotiPressableContext } from './context';
import { useFactory } from './use-validate-factory-or-id';
export function useMotiPressableTransition(factoryOrId, maybeFactoryOrDeps, maybeDeps) {
    const context = useMotiPressableContext();
    const { factory, id, deps } = useFactory('useMotiPressableAnimatedProps', factoryOrId, maybeFactoryOrDeps, maybeDeps);
    return useDerivedValue(() => {
        return context && factory(context.containers[id].value);
    }, deps);
}
//# sourceMappingURL=use-moti-pressable-transition.js.map