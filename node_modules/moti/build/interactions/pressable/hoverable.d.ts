import React, { ReactChild } from 'react';
export interface HoverableProps {
    onHoverIn?: () => void;
    onHoverOut?: () => void;
    children: NonNullable<ReactChild>;
    childRef?: React.Ref<any>;
}
export declare function Hoverable({ onHoverIn, onHoverOut, children, childRef, }: HoverableProps): JSX.Element;
