import type { MotiPressableInteractionState } from './types';
import { MotiPressableInteractionIds } from './context';
declare type Factory<Props> = (interaction: MotiPressableInteractionState) => Props;
/**
 * Replacement for `useAnimatedProps`, which receives the interaction state as the first argument.
 * @param factory function that receives the interaction state and returns the props
 */
export declare function useMotiPressableAnimatedProps<Props>(id: MotiPressableInteractionIds['id'], factory: Factory<Props>, deps?: readonly any[]): Partial<Props>;
export declare function useMotiPressableAnimatedProps<Props>(factory: Factory<Props>, deps?: readonly any[]): Partial<Props>;
export {};
