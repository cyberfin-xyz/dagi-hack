import { HTMLAttributes } from 'react'


interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
	fontType?: FontTypes,
	fontSize?: any
	margin?: any
	padding?: any
	textAlign?: any
	lineHeight?: any
	fontFamily?: any
	fontWeight?: any
	customStyle?: any
}