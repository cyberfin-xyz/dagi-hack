import React from 'react';
import { observer } from 'mobx-react'
import StoreContext from '@store/RootStore'
import { StyledAiAdviseItem, StyledAiAdviseWrapper, StyledFormWrapper, StyledPageHeader, StyledPageInner, StyledSelectImgWrapper } from './styles';

import { useNavigate } from 'react-router-dom';
import Paragraph from '@components/Paragraph';


const Create = () => {
	const { MainStore } = StoreContext();

	const navigate = useNavigate();

	return (
		<>
			<StyledPageInner>
				<StyledPageHeader>
					<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-SemiBold'} fontSize={'24px'} lineHeight={'32px'} customStyle={{ letterSpacing: '-0.48px' }}>
						Add basic information
					</Paragraph>
				</StyledPageHeader>

				<StyledSelectImgWrapper>
					<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-SemiBold'} fontSize={'14px'} lineHeight={'20px'} customStyle={{ letterSpacing: '-0.48px' }}>
						Select an image for the token
					</Paragraph>
				</StyledSelectImgWrapper>

				<StyledFormWrapper>

				</StyledFormWrapper>

				<StyledAiAdviseWrapper>
					<StyledAiAdviseItem>

					</StyledAiAdviseItem>
				</StyledAiAdviseWrapper>


			</StyledPageInner>
		</>
	)
}

export default observer(Create);