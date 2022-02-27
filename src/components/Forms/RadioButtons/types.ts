export type RadioButtonsProps = {
  radios: Array<{
    text: string;
    id: string;
    more?: "text" | "number";
  }>;
};
