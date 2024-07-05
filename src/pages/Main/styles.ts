import styled from 'styled-components'


export const StyledPageInner = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 24px 16px 48px 16px;
	// padding: 16px;
	// padding: 48px 16px;

	justify-content: space-between;

	position: absolute;
	z-index: 5;

	user-select: none;

	overflow-y: scroll;
`


export const StyledPageHeader = styled.div`
	width: 100%;
	height: 32px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 0 20px;

	margin: 20px 0;
`