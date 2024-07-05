import React from 'react';
import { observer } from 'mobx-react'
import StoreContext from '@store/RootStore'
import { StyledPageInner } from './styles';

import { useNavigate } from 'react-router-dom';
import Paragraph from '@components/Paragraph';

const Main = () => {
	const { MainStore } = StoreContext();

	const navigate = useNavigate();

	return (
		<>
			<StyledPageInner>
				<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-SemiBold'} fontSize={'24px'} lineHeight={'32px'} customStyle={{ letterSpacing: '-0.48px' }}>
					Meme Tokens
				</Paragraph>

			</StyledPageInner>
		</>
	)
}

export default observer(Main);