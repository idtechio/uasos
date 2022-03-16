export type InputControlStylesProps = {
  wrapper?: {
    maxWidth?: string;
    width?: string;
  };
};

export type InputControlProps = {
  children: React.ReactNode;
  zIndex?: number;
  styles?: InputControlStylesProps;
};
