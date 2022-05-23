import { useAnimatedProps } from 'react-native-reanimated';
import { useMotiPressableContext } from './context';
import { useFactory } from './use-validate-factory-or-id';
export function useMotiPressableAnimatedProps(factoryOrId, maybeFactoryOrDeps, maybeDeps) {
    const context = useMotiPressableContext();
    const { factory, id, deps } = useFactory('useMotiPressableAnimatedProps', factoryOrId, maybeFactoryOrDeps, maybeDeps);
    return useAnimatedProps(() => {
        return context ? factory(context.containers[id].value) : {};
    }, deps);
}
//# sourceMappingURL=use-moti-pressable-animated-props.js.map