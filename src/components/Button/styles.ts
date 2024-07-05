import { LoaderComp } from '@assets/images'
import styled from 'styled-components'


export const StyledButton = styled.button<{ $customStyle?: any, $styleType: 1 | 2 }>`
	// width: fit-content;
	width: 100%;
	height: 48px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;

	position: relative;

	outline: none;
	border: none;

	cursor: pointer;
	transition: all 0.2s ease-in-out;

	text-align: center;

	font-family: WorkSans-SemiBold;
	color: rgba(16, 16, 16, 1);
	font-size: 16px;
	font-weight: 600;
	line-height: 16px;

	border-radius: 8px;
	background: linear-gradient(rgba(254, 215, 2, 1), rgba(255, 245, 65, 1));
	padding: 16px 32px;

	user-select: none;

	&:hover {
		background: linear-gradient(rgba(255, 245, 65, 1), rgba(254, 255, 193, 1));
	}
	
	&:active {
		background: linear-gradient(rgba(208, 158, 0, 1), rgba(254, 215, 2, 1));
	}

	&:disabled {
		color: rgba(16, 16, 16, 0.5);

		background: rgba(255, 255, 255, 0.2);

		cursor: default;
		pointer-events: none;

		&:hover {}
		
		&:active {}
	}

	${({ $styleType }) => $styleType === 2
		? `
		box-shadow: 0 8px 16px -8px rgba(68, 38, 4, 0.64);
		background: linear-gradient(225deg, #feffc1 0%, #fffe86 100%);
	
		&:hover {
			background: linear-gradient(225deg, #ffffe7 0%, #feffc1 100%);
		}
		
		&:active {
			background: linear-gradient(225deg, #fffe86 0%, #fff541 100%);
		}
		`
		: ''
	};
	${({ $customStyle }) => $customStyle};
`

export const StyledLoader = styled(LoaderComp)<{$fillColor:string}>`
	width: 64px;
	height: 64px;

	display: flex;
	position: absolute;
	top: 50%;
	left: 50%;

	transform: translate(-50%, -50%);

	z-index: 3;

	path {
		fill: ${props => props.$fillColor};
	}
`