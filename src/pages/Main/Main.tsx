import React from 'react';
import { observer } from 'mobx-react'
import StoreContext from '@store/RootStore'
import { StyledFilterItem, StyledFiltersInner, StyledFiltersWrapper, StyledPageHeader, StyledPageInner, StyledRecentCreateItem, StyledRecentCreateWrapper, StyledSearchWrapper } from './styles';

import { useNavigate } from 'react-router-dom';
import Paragraph from '@components/Paragraph';
import { PlusIconComp } from '@assets/images';
import { ROUTES } from '../../routes';

const Main = () => {
	const { MainStore } = StoreContext();

	const navigate = useNavigate();

	return (
		<>
			<StyledPageInner>
				<StyledPageHeader>
					<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-SemiBold'} fontSize={'24px'} lineHeight={'32px'} customStyle={{ letterSpacing: '-0.48px' }}>
						Meme Tokens
					</Paragraph>

					<Paragraph
						color={'#DAFF00'}
						fontFamily={'WorkSans'}
						fontSize={'14px'}
						lineHeight={'20px'}
						customStyle={{ letterSpacing: '-0.14px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', cursor: 'pointer' }}
						onClick={() => navigate(`${ROUTES.CREATE}`)}
					>
						Create

						<PlusIconComp style={{ marginLeft: '4px' }} />
					</Paragraph>
				</StyledPageHeader>

				<StyledSearchWrapper>
					<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-SemiBold'} fontSize={'14px'} lineHeight={'20px'} customStyle={{ letterSpacing: '-0.48px' }}>
						Search tokens
					</Paragraph>
				</StyledSearchWrapper>

				<StyledFiltersWrapper>
					<StyledFiltersInner>
						{['Hot 🔥', 'Top MCAP 💰', 'New 👶', 'My Tokens 🤑'].map((title: string, index: number) => {
							return (
								<StyledFilterItem
									key={title + index} color={'#E6E6E6'}
									fontFamily={'WorkSans'} fontSize={'14px'}
									lineHeight={'20px'}
									customStyle={{ letterSpacing: '-0.14px', marginLeft: index === 0 ? '20px' : 0 }}
								>
									{title}
								</StyledFilterItem>
							)
						})}
					</StyledFiltersInner>
				</StyledFiltersWrapper>

				<StyledRecentCreateWrapper>
					<StyledRecentCreateItem>

					</StyledRecentCreateItem>
				</StyledRecentCreateWrapper>


			</StyledPageInner>
		</>
	)
}

export default observer(Main);