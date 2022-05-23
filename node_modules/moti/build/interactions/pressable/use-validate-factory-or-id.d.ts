import { MotiPressableInteractionIds } from './context';
declare type Id = MotiPressableInteractionIds['id'];
declare type Returns<Factory> = {
    id: Id;
    factory: Factory;
    deps?: readonly any[];
};
declare type HookName = 'useMotiPressableAnimatedProps' | 'useMotiPressable' | 'useMotiPressableTransition';
export declare function useFactory<Factory extends (...props: any[]) => any>(hookName: HookName, factoryOrId: Factory | MotiPressableInteractionIds['id'], maybeFactoryOrDeps?: Factory | readonly any[], maybeDeps?: readonly any[]): Returns<Factory>;
export {};
