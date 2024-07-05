import React from 'react';
import {
	StyledContentWrapper,
	StyledPageWrapper,
} from './styles'
import { ReactNode } from 'react'
import { observer } from "mobx-react";


const PageLayout = ({ children }: { children: ReactNode }) => {

	return (
		<StyledContentWrapper>
			<StyledPageWrapper>
				{children}
			</StyledPageWrapper>
		</StyledContentWrapper>
	)
}

export default observer(PageLayout);