import Paragraph from '@components/Paragraph'
import styled from 'styled-components'


export const StyledPageInner = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	position: absolute;
	z-index: 5;

	user-select: none;

	overflow-y: scroll;
`

export const StyledPageContent = styled.div`
	width: 100%;
	// height: calc(100% - 108px);
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	// overflow-y: auto;

	padding-bottom: 108px;
`

export const StyledPageHeader = styled.div`
	width: 100%;
	height: 32px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	padding: 0 20px;

	margin: 20px 0;
`

export const StyledSelectImgWrapper = styled.div`
	width: 100%;
	height: 256px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	padding: 0 20px;

	margin-bottom: 20px;
`

export const StyledTokenPreviewWrapper = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 0 20px;

	margin-top: 64px;
	margin-bottom: 32px;
`

export const StyledDetailsWrapper = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	padding: 0 20px;

	gap: 12px;
`

export const StyledDetailWrapper = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

export const StyledTokenPreview = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 32px 16px;

	border-radius: 24px;
	border: 1px solid rgba(255, 255, 255, 0.10);
	background: linear-gradient(293deg, rgba(255, 255, 255, 0.00) 10.22%, rgba(255, 255, 255, 0.07) 48.56%, rgba(255, 255, 255, 0.00) 89.81%), #171717;
	box-shadow: 0px 612px 171px 0px rgba(0, 0, 0, 0.00), 0px 392px 157px 0px rgba(0, 0, 0, 0.02), 0px 220px 132px 0px rgba(0, 0, 0, 0.08), 0px 98px 98px 0px rgba(0, 0, 0, 0.13), 0px 24px 54px 0px rgba(0, 0, 0, 0.15);
`

export const StyledFormWrapper = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	gap: 12px;

	padding: 0 20px;

	margin-bottom: 23px;
`

export const StyledAiAdviseWrapper = styled.div`
	width: 100%;
	height: 124px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	padding: 0 20px;

	margin-top: 24px;
	margin-bottom: 26px;
`

export const StyledButtonWrapper = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	padding: 0 20px;

	margin: 12px 0 40px 0;

	position: fixed;
	bottom: 0;
`

export const StyledAiAdviseItem = styled.div`
	width: 100%;
	height: 124px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	border-radius: 16px;
	background: linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.07) 120.68%), rgba(255, 255, 255, 0.03);
`
