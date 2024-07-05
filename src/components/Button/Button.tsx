import React, { useCallback, useState } from 'react';

import { StyledButton, StyledLoader } from "./styles";
import { BtnProps } from "./types";


const Button = ({
	disabled = false,
	onClick = () => { },
	customStyle = {},
	styleType = 1,
	isLoad = false,
	children,
	loaderSize = '64px',
	...props
}: BtnProps) => {

	const [loading, setLoading] = useState<boolean>(false)

	const onClickHandler = useCallback((props: any) => {
		if (loading) return
		if (disabled) return

		const result: any = onClick?.(props)

		if (result instanceof Promise) {
			setLoading(true)

			result.finally(() => setLoading(false))
		}
	}, [onClick, loading, disabled])

	return (
		<StyledButton
			disabled={disabled || isLoad || loading}
			onClick={onClickHandler}
			$customStyle={customStyle}
			$styleType={styleType}
			{...props}
		>
			{disabled &&(customStyle === SecondaryButtonStyle ? <LockWhiteIcon/> :  <LockIcon/>  )  }
			{children}
			{isLoad || loading ? <StyledLoader
				$fillColor={customStyle === SecondaryButtonStyle ? '#F2F2F2' :'#101010'}
				style={{ width: loaderSize, height: loaderSize}}
			/> : ''}
		</StyledButton>
	)
}

const commonButtonStyle = {
	padding: '18px 32px',
	height: '56px',
	borderRadius: '16px',
	fontFamily: 'WorkSans',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: '600',
	lineHeight: '20px',
};

export const MainButtonStyle = {
	...commonButtonStyle,
	background: '#DAFF00',
	color: '#101010',
	'&:hover': {
		background: '#AF0',
		color: '#101010',
	},
	'&:pressed': {
		background: '#DAFF00',
		color: '#101010',
		opacity: '0.9',
	},
	'&:disabled': {
		background: 'rgba(218, 255, 0, 0.50)',
		color: '#101010',
	},
	'&:active': {
		background: '#ECEC34',
		color: '#101010',
	},
};

export const SecondaryButtonStyle = {
	...commonButtonStyle,
	background: 'rgba(242, 242, 242, 0.10)',
	color: '#F2F2F2',
	'&:hover': {
		background: 'rgba(242, 242, 242, 0.13)',
		color: '#F2F2F2',
	},
	'&:pressed': {
		background: 'rgba(242, 242, 242, 0.10)',
		color: '#F2F2F2',
		opacity: '0.9',
	},
	'&:disabled': {
		background: 'rgba(242, 242, 242, 0.10)',
		color: '#F2F2F2',
		opacity: '0.5',
	},
	'&:active': {
		background: 'rgba(242, 242, 242, 0.10)',
		color: '#F2F2F2',
	},
};


const LockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" style={{marginRight: '8px'}}>
	<path d="M12.5001 17.3498C13.4003 17.3498 14.1301 16.6201 14.1301 15.7198C14.1301 14.8196 13.4003 14.0898 12.5001 14.0898C11.5999 14.0898 10.8701 14.8196 10.8701 15.7198C10.8701 16.6201 11.5999 17.3498 12.5001 17.3498Z" fill="#101010"/>
	<path d="M18.78 9.53V8.28C18.78 5.58 18.13 2 12.5 2C6.87 2 6.22 5.58 6.22 8.28V9.53C3.42 9.88 2.5 11.3 2.5 14.79V16.65C2.5 20.75 3.75 22 7.85 22H17.15C21.25 22 22.5 20.75 22.5 16.65V14.79C22.5 11.3 21.58 9.88 18.78 9.53ZM12.5 18.74C10.83 18.74 9.48 17.38 9.48 15.72C9.48 14.05 10.84 12.7 12.5 12.7C14.16 12.7 15.52 14.06 15.52 15.72C15.52 17.39 14.17 18.74 12.5 18.74ZM7.85 9.44C7.77 9.44 7.7 9.44 7.62 9.44V8.28C7.62 5.35 8.45 3.4 12.5 3.4C16.55 3.4 17.38 5.35 17.38 8.28V9.45C17.3 9.45 17.23 9.45 17.15 9.45H7.85V9.44Z" fill="#101010"/>
</svg>


const LockWhiteIcon =()=> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" style={{marginRight: '8px'}}>
	<path d="M12.5001 17.3498C13.4003 17.3498 14.1301 16.6201 14.1301 15.7198C14.1301 14.8196 13.4003 14.0898 12.5001 14.0898C11.5999 14.0898 10.8701 14.8196 10.8701 15.7198C10.8701 16.6201 11.5999 17.3498 12.5001 17.3498Z" fill="#F2F2F2"/>
	<path d="M18.78 9.53V8.28C18.78 5.58 18.13 2 12.5 2C6.87 2 6.22 5.58 6.22 8.28V9.53C3.42 9.88 2.5 11.3 2.5 14.79V16.65C2.5 20.75 3.75 22 7.85 22H17.15C21.25 22 22.5 20.75 22.5 16.65V14.79C22.5 11.3 21.58 9.88 18.78 9.53ZM12.5 18.74C10.83 18.74 9.48 17.38 9.48 15.72C9.48 14.05 10.84 12.7 12.5 12.7C14.16 12.7 15.52 14.06 15.52 15.72C15.52 17.39 14.17 18.74 12.5 18.74ZM7.85 9.44C7.77 9.44 7.7 9.44 7.62 9.44V8.28C7.62 5.35 8.45 3.4 12.5 3.4C16.55 3.4 17.38 5.35 17.38 8.28V9.45C17.3 9.45 17.23 9.45 17.15 9.45H7.85V9.44Z" fill="#F2F2F2"/>
</svg>

export default Button;