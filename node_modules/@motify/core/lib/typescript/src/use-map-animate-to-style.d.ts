import type { MotiProps } from './types';
export declare function useMotify<Animate>({ animate: animateProp, from: fromProp, transition: transitionProp, exitTransition: exitTransitionProp, delay: defaultDelay, state, stylePriority, onDidAnimate, exit: exitProp, animateInitialState, }: MotiProps<Animate>): {
    style: {
        transform: (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
    };
};
