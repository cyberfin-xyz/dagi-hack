import styled from 'styled-components'


export const StyledParagraph = styled.p<{ $fontSize?: any, $lineHeight?: any, $fontFamily?: any, $color?: any, $margin?: any, $padding?: any, $textAlign?: any, $customStyle?: any }>`
	${({ $fontSize, $lineHeight }) => `
			font-size: ${$fontSize || '18px'};
			line-height: ${$lineHeight || $fontSize || '22px'};
		`
	};

	margin: ${({ $margin }) => $margin
		? $margin
		: '0'
	};

	padding: ${({ $padding }) => $padding
		? $padding
		: '0'
	};

	color: ${({ $color }) => $color
		? $color
		: 'rgba(255, 255, 255, 0.8)'
	};

	font-family: ${({ $fontFamily }) => $fontFamily
		? $fontFamily
		: 'SplineSans'
	};
	text-align: justify;

	text-align: ${({ $textAlign }) => $textAlign
		? $textAlign
		: 'center'
	};

	${({ $customStyle }) => $customStyle};
`