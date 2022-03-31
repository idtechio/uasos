import { DataWrapper, Label, Value } from "./style";

type DataFieldProps = {
  Icon?: React.ElementType;
  iconWidth?: number;
  iconHeight?: number;
  label: string;
  value?: string | number;
  isBlue?: boolean;
};

const blueStyle = {
  borderColor: "#0057B8",
  backgroundColor: "#E7F2FF",
};

const blueTextStyle = { color: "#0057B8" };

export default function DataField({
  Icon,
  iconWidth,
  iconHeight,
  label,
  value,
  isBlue,
}: DataFieldProps) {
  return (
    <>
      <DataWrapper style={isBlue && blueStyle}>
        {Icon ? (
          <Icon
            width={iconWidth}
            height={iconHeight}
            style={isBlue && { color: "#0057B8" }}
          />
        ) : null}
        <Label style={isBlue && blueTextStyle}>{label}</Label>
        {value && <Value style={isBlue && blueTextStyle}>{value}</Value>}
      </DataWrapper>
    </>
  );
}
