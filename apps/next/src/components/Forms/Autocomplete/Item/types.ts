export type ItemProps = {
  disabled?: boolean;
  label: string;
  onPress?: (value: string | undefined) => void;
  value?: string;
};
