import React from 'react';
import { ViewProps, NativeMethods, NativeSyntheticEvent } from 'react-native';
declare type CheckBoxEvent = NativeSyntheticEvent<Readonly<{
    target: number;
    value: boolean;
    name: 'animation' | 'tap';
}>>;
declare type CommonProps = Readonly<ViewProps & {
    /**
     * Used to get the ref for the native checkbox
     */
    forwardedRef?: React.Ref<CheckBoxNativeType>;
    /**
     * The value of the checkbox.  If true the checkbox will be turned on.
     * Default value is false.
     */
    value?: boolean;
    /**
     * Used in case the props change removes the component.
     */
    onChange?: (event: CheckBoxEvent) => void;
    /**
     * Invoked with the new value when the value changes.
     */
    onValueChange?: (value: boolean) => void;
    /**
     * If true the user won't be able to toggle the checkbox.
     * Default value is false.
     */
    disabled?: boolean;
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string;
}>;
declare type CheckBoxNativeType = NativeMethods;
declare type BoxType = 'circle' | 'square';
declare type AnimationType = 'stroke' | 'fill' | 'bounce' | 'flat' | 'one-stroke' | 'fade';
export declare type Props = Readonly<CommonProps & {
    onAnimationDidStop?: Function;
    lineWidth?: number;
    hideBox?: boolean;
    boxType?: BoxType;
    tintColor?: string;
    onCheckColor?: string;
    onFillColor?: string;
    onTintColor?: string;
    animationDuration?: number;
    onAnimationType?: AnimationType;
    offAnimationType?: AnimationType;
}>;
declare const CheckBoxWithRef: React.ForwardRefExoticComponent<Readonly<Readonly<ViewProps & {
    /**
     * Used to get the ref for the native checkbox
     */
    forwardedRef?: ((instance: NativeMethods | null) => void) | React.RefObject<NativeMethods> | null | undefined;
    /**
     * The value of the checkbox.  If true the checkbox will be turned on.
     * Default value is false.
     */
    value?: boolean | undefined;
    /**
     * Used in case the props change removes the component.
     */
    onChange?: ((event: CheckBoxEvent) => void) | undefined;
    /**
     * Invoked with the new value when the value changes.
     */
    onValueChange?: ((value: boolean) => void) | undefined;
    /**
     * If true the user won't be able to toggle the checkbox.
     * Default value is false.
     */
    disabled?: boolean | undefined;
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string | undefined;
}> & {
    onAnimationDidStop?: Function | undefined;
    lineWidth?: number | undefined;
    hideBox?: boolean | undefined;
    boxType?: "circle" | "square" | undefined;
    tintColor?: string | undefined;
    onCheckColor?: string | undefined;
    onFillColor?: string | undefined;
    onTintColor?: string | undefined;
    animationDuration?: number | undefined;
    onAnimationType?: "fill" | "stroke" | "flat" | "fade" | "bounce" | "one-stroke" | undefined;
    offAnimationType?: "fill" | "stroke" | "flat" | "fade" | "bounce" | "one-stroke" | undefined;
}> & React.RefAttributes<NativeMethods>>;
export default CheckBoxWithRef;
