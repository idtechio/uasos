import type { MotiPressableInteractionState } from './types';
import type Animated from 'react-native-reanimated';
import { MotiPressableInteractionIds } from './context';
declare type Factory<Props> = (interaction: MotiPressableInteractionState) => Props;
/**
 * `useInterpolateMotiPressable` lets you access the pressable state, and create a reanimated derived value from it.
 *
 * You probably won't need this hook often. `useMotiPressable`, `useMotiPressables`, and `useMotiPressableAnimatedProps` should cover most use-cases
 *
 * Example:
 * ```tsx
 * import { useSharedValue } from 'react-native-reanimated'
 *
 * const mySharedValue = useSharedValue(0)
 * useInterpolateMotiPressable(({ pressed }) => {
 *   'worklet'
 *
 *   mySharedValue.value = pressed ? 1 : 0
 * })
 * ```
 *
 * If you're passing a unique `id` prop to your pressable, you can also isolate this hook to that pressable.
 *
 * Say the parent pressable has `id="list"`, and you want to isolate this hook to the `list` pressable:
 *
 * ```tsx
 * <MotiPressable id="menu">
 *   <Item />
 * </MotiPressable>
 * ```
 *
 * Then, in the `Item` component:
 *
 * ```tsx
 * const mySharedValue = useSharedValue(0)
 * useInterpolateMotiPressable("list", ({ pressed }) => {
 *   'worklet'
 *
 *   mySharedValue.value = pressed ? 1 : 0
 * })
 * ```
 *
 * It returns an `Animated.DerivedValue`. You can also type it with a generic:
 *
 * ```tsx
 * const swipePosition = useSharedValue(0)
 * const state = useInterpolateMotiPressable<{ done: boolean }>("list", ({ pressed }) => {
 *   'worklet'
 *
 *   return {
 *     done: swipePosition.value > 50 && !pressed,
 *   }
 * })
 * ```
 *
 * Just like any derived value, you can read the value it returns with `.value`:
 *
 * ```tsx
 * const state = useInterpolateMotiPressable<{ done: boolean }>("list", ({ pressed }) => {
 *   'worklet'
 *
 *   return {
 *     done: swipePosition.value > 50 && !pressed,
 *   }
 * })
 *
 * // then in some worklet
 * const done = state.value.done
 */
export declare function useInterpolateMotiPressable<Props>(id: MotiPressableInteractionIds['id'], factory: Factory<Props>, deps?: readonly any[]): Readonly<Animated.SharedValue<Props>>;
export declare function useInterpolateMotiPressable<Props>(factory: Factory<Props>, deps?: readonly any[]): Readonly<Animated.SharedValue<Props>>;
export {};
