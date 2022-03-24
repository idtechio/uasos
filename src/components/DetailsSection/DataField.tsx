import { DataWrapper, Label, Value } from "./style";

type DataFieldProps = {
  Icon?: React.ElementType;
  iconWidth?: number;
  iconHeight?: number;
  label: string;
  value?: string;
};

export default function DataField({
  Icon,
  iconWidth,
  iconHeight,
  label,
  value,
}: DataFieldProps) {
  return (
    <>
      <DataWrapper>
        {Icon ? <Icon width={iconWidth} height={iconHeight} /> : null}
        <Label>{label}</Label>
        {value && <Value>{value}</Value>}
      </DataWrapper>
    </>
  );
}
