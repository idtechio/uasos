import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'RobotoBlack';
		src: url('fonts/Roboto-Black.ttf');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'RobotoBold';
		src: url('fonts/Roboto-Bold.ttf');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'RobotoItalic';
		src:  url('fonts/Roboto-Italic.ttf');
		font-weight: normal;
		font-style: italic;
	}
	@font-face {
		font-family: 'RobotoLight';
		src: url('fonts/Roboto-Light.ttf');
		font-weight: normal;
		font-style: normal;
	}
    @font-face {
		font-family: 'RobotoMedium';
		src: url('fonts/Roboto-Medium.ttf');
		font-weight: normal;
		font-style: normal;
	}
    @font-face {
		font-family: 'RobotoRegular';
		src: url('fonts/Roboto-Regular.ttf');
		font-weight: normal;
		font-style: normal;
	}
    @font-face {
		font-family: 'RobotoThin';
		src: url('fonts/Roboto-Thin.ttf');
		font-weight: normal;
		font-style: normal;
	}

  
  body {
    font-family: Roboto;
    font-size: 14px;
    line-height: 19px;
    color: #003566;
  }

  h1 {
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
    color: #fff
  }
`;

export default GlobalStyle;
