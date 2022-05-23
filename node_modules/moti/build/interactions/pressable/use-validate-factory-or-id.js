import { INTERACTION_CONTAINER_ID, useMotiPressableContext, } from './context';
export function useFactory(hookName, factoryOrId, maybeFactoryOrDeps, maybeDeps) {
    const context = useMotiPressableContext();
    const missingIdError = `

If you're using a container ID, it should look like this:
${hookName}("${factoryOrId}", ({ pressed, hovered }) => {
  'worklet'

  return {
    opacity: pressed ? 1 : 0
  }
})

Otherwise, you could ignore the id and style relative to the closest parent pressable.

${hookName}(({ pressed, hovered }) => {
    'worklet'

    return {
      opacity: pressed ? 1 : 0
    }
  })
  `;
    let factory;
    let id = INTERACTION_CONTAINER_ID;
    let deps;
    if (typeof factoryOrId === 'function') {
        factory = factoryOrId;
        deps = maybeFactoryOrDeps;
    }
    else if (typeof maybeFactoryOrDeps === 'function') {
        id = factoryOrId;
        factory = maybeFactoryOrDeps;
        deps = maybeDeps;
    }
    else {
        throw new Error(`[${hookName}] Invalid arguments. If the first argument is a unique ID string, the second must be a worklet function. Alternatively, the first argument can be a function, without an ID argument. However, received ${factoryOrId} as first argument, and ${maybeFactoryOrDeps} as the second one.` +
            missingIdError);
    }
    if (!context) {
        console.error(`[${hookName}] Missing context. Are you sure this component is the child of a <MotiPressable /> component?`);
    }
    else if (!context.containers[id]) {
        // this error will only happen if you set a unique ID
        // why? because if there is indeed a context, and there's no unique ID
        // ...then we fall back to the default INTERACTION_CONTAINER_ID, which exists if (context) {}
        let error = `[${hookName}] Received id "${id}", but there isn't a <MotiPressable id="${id}" /> component wrapping it. This will result in nothing happening.`;
        const containerKeys = Object.keys(context.containers);
        if (containerKeys.length) {
            if (containerKeys.length === 1 &&
                containerKeys[0] === INTERACTION_CONTAINER_ID) {
                error += ` There is a <MotiPressable /> component as the parent of this hook, but it doesn't have id="${id}" set as a prop. You should either add that prop to the parent <MotiPressable id="${id}" />, or remove the first argument of ${hookName}().`;
            }
            else {
                const possibleIds = containerKeys.filter((key) => key !== INTERACTION_CONTAINER_ID);
                if (possibleIds.length) {
                    error += ` Did you mean to use one of: ${possibleIds.join(', ')}`;
                }
            }
        }
        error = error + missingIdError;
        console.error(error);
    }
    return {
        factory,
        id,
        deps,
    };
}
//# sourceMappingURL=use-validate-factory-or-id.js.map