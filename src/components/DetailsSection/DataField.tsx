import { sanitize } from "../../helpers/sanitize";
import { DataWrapper } from "./style";
import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

type DataFieldProps = {
  Icon?: React.ElementType;
  iconWidth?: number;
  iconHeight?: number;
  label: string;
  isBlue?: boolean;
};

const blueStyle = {
  borderColor: "#0057B8",
  backgroundColor: "#E7F2FF",
};

type LabelProps = { isBlue: boolean; theme: Theme };

const Label = styled.View<LabelProps>`
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;

  color: ${({ theme, isBlue }) => (isBlue ? "#0057B8" : theme.colors.blue)};
`;

const LabelText = styled.Text``;

export default function DataField({
  Icon,
  iconWidth = 15,
  iconHeight = 15,
  label,
  isBlue = false,
}: DataFieldProps) {
  return (
    <>
      <DataWrapper style={isBlue && blueStyle}>
        {Icon ? (
          <Icon
            width={iconWidth}
            height={iconHeight}
            style={isBlue ? { color: "#0057B8" } : {}}
          />
        ) : null}
        <Label isBlue={isBlue}>
          <LabelText>{sanitize(label)}</LabelText>
        </Label>
      </DataWrapper>
    </>
  );
}
