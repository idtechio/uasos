/// <reference types="react" />
import type { MotiPressableInteractionState } from './types';
import type Animated from 'react-native-reanimated';
export declare const INTERACTION_CONTAINER_ID: "__INTERACTION_CONTAINER_ID";
export interface MotiPressableInteractionIds {
    id: string;
}
export declare type MotiPressableContext = {
    containers: Record<MotiPressableInteractionIds['id'] | typeof INTERACTION_CONTAINER_ID, Animated.SharedValue<MotiPressableInteractionState>>;
};
export declare const MotiPressableContext: import("react").Context<MotiPressableContext>;
export declare const useMotiPressableContext: () => MotiPressableContext;
