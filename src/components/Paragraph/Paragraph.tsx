import React from 'react';
import { ParagraphProps } from './types'
import { StyledParagraph } from './styles'


const Paragraph = ({ fontSize, margin, textAlign, lineHeight, fontFamily, color, padding, fontWeight, customStyle, ...props }: ParagraphProps) => (
	<StyledParagraph $fontSize={fontSize} $fontFamily={fontFamily} $lineHeight={lineHeight} $margin={margin} $padding={padding} $color={color} $textAlign={textAlign} $customStyle={{ fontWeight, ...customStyle }} {...props} />
)

export default Paragraph