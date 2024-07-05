import { HTMLAttributes } from 'react'


interface BtnProps extends HTMLAttributes<HTMLButtonElement> {
	disabled?: boolean,
	isLoad?: boolean,
	loaderSize?: string,
	styleType?: 1 | 2,
	customStyle?: any,
}

