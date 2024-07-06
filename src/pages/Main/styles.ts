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

export const StyledSearchWrapper = styled.div`
	width: 100%;
	height: 56px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 0 20px;

	margin-bottom: 12px;
`

export const StyledFiltersWrapper = styled.div`
	width: 100%;
	height: 36px;
	min-height: 36px;

	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;

	overflow-y: auto;

	&::-webkit-scrollbar {
		height: 0;
		background-color: transparent;
    }

    &::-webkit-scrollbar-track {
		height: 0;
		background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
		background: transparent;
		height: 0;
    }
`

export const StyledTokensListWrapper = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	padding: 0 20px;

	margin-top: 20px;

	gap: 16px;
`

export const StyledTokenIcon = styled.img`
	width: 64px;
	height: 64px;

	border-radius: 18.286px;
	border: 1.143px solid rgba(255, 255, 255, 0.03);
`

export const StyledTokenWrapper = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	gap: 12px;
`

export const StyledTokenDescription = styled.div`
	width: calc(100% - 76px);
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	gap: 4px;
`

export const StyledRecentCreateWrapper = styled.div`
	width: 100%;
	height: 64px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	padding: 0 20px;

	margin-top: 24px;
`

export const StyledRecentCreateItem = styled.div`
	width: 100%;
	height: 64px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	border-radius: 16px;
	background: rgba(242, 242, 242, 0.10);

	padding: 4px 12px 4px 4px;

	gap: 8px;

	position: relative;
`

export const StyledFiltersInner = styled.div`
	width: fit-content;
	height: 36px;

	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	
	gap: 4px;
`

export const StyledFilterItem = styled(Paragraph)`
	width: fit-content;
	height: 36px;

	display: flex;
	padding: 0 16px;
	justify-content: center;
	align-items: center;

	white-space: nowrap;

	border-radius: 8px;
	background: rgba(242, 242, 242, 0.10);
`

export const StyledDivider = styled.div`
	width: 100%;
	height: 1px;

	background: rgba(242, 242, 242, 0.1);
`