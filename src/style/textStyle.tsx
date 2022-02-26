export type TextStyle = {
  fontFamily?: string;
  fontWeight?: string;
  color?: string;
  fontSize?: string;
};

export const createTextStyle = (props: TextStyle, defaultStyle: TextStyle) => {
  return `
		font-family: ${props.fontFamily ? props.fontFamily : defaultStyle.fontFamily};
		color: ${props.color ? props.color : defaultStyle.color};
		font-size: ${props.fontSize ? props.fontSize : defaultStyle.fontSize};
		font-weight: ${props.fontWeight ? props.fontWeight : defaultStyle.fontWeight}; 
	`;
};
