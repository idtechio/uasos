import React from 'react';
import { ViewProps, NativeMethods, NativeSyntheticEvent } from 'react-native';
declare type CheckBoxEvent = NativeSyntheticEvent<Readonly<{
    target: number;
    value: boolean;
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
     * @TODO: implement disable prop for IOS
     */
    disabled?: boolean;
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string;
}>;
declare type CheckBoxNativeType = NativeMethods;
export declare type Props = Readonly<CommonProps & {
    tintColor?: string;
    onCheckColor?: string;
    onFillColor?: string;
    onTintColor?: string;
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
     * @TODO: implement disable prop for IOS
     */
    disabled?: boolean | undefined;
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string | undefined;
}> & {
    tintColor?: string | undefined;
    onCheckColor?: string | undefined;
    onFillColor?: string | undefined;
    onTintColor?: string | undefined;
}> & React.RefAttributes<NativeMethods>>;
export default CheckBoxWithRef;
