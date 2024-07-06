import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react'
import StoreContext from '@store/RootStore'
import { StyledDivider, StyledFilterItem, StyledFiltersInner, StyledFiltersWrapper, StyledPageHeader, StyledPageInner, StyledRecentCreateItem, StyledRecentCreateWrapper, StyledSearchWrapper, StyledTokenDescription, StyledTokenIcon, StyledTokensListWrapper, StyledTokenWrapper } from './styles';

import { useNavigate } from 'react-router-dom';
import Paragraph from '@components/Paragraph';
import { blakMonkeTokenIcon, bobbyTokenIcon, jacqueFrescoTokenIcon, miniTokenIcon, PlusIconComp, swappyTokenIcon, userAvatarMock } from '@assets/images';
import { ROUTES } from '../../routes';
import useDebounce from '@utils/useDebounce';
import SearchField from '@components/SearchField';

const Main = () => {
	const { MainStore } = StoreContext();

	const navigate = useNavigate();

	const [searchText, setSearchText] = useState('');
	const debouncedSearchText = useDebounce(searchText, 300);
	const [requestState, setRequestState] = useState('');
	const handleSearchChange = (value: string) => setSearchText(value);

	useEffect(() => {
		const makeRequest = async () => {
			if (debouncedSearchText) {
				//TODO АРІ call
				setRequestState(`Searching for ${debouncedSearchText}...`);
				setTimeout(() => {
					setRequestState(`Results for ${debouncedSearchText}`);
				}, 1000);
			} else {
				setRequestState('');
			}
		};

		makeRequest();
	}, [debouncedSearchText]);

	const tokenList = [
		{
			name: 'Swappy',
			ticker: 'SWAP',
			description: 'Swappy is on Base now',
			tgChannel: '',
			tgChat: '',
			twitter: '',
			website: '',
			icon: swappyTokenIcon,
			cratedBy: 'swappydev',
			mc: 3899.33
		},
		{
			name: 'Bobby',
			ticker: 'BOBBY',
			description: 'So tiny, but yet so cute',
			tgChannel: '',
			tgChat: '',
			twitter: '',
			website: '',
			icon: bobbyTokenIcon,
			cratedBy: 'bobbydev',
			mc: 31098
		},
		{
			name: 'mini',
			ticker: 'mini',
			description: 'miniest meme in the memecoin',
			tgChannel: '',
			tgChat: '',
			twitter: '',
			website: '',
			icon: miniTokenIcon,
			cratedBy: 'homyak999999',
			mc: 80511.48
		},
		{
			name: 'BLAK MONKE',
			ticker: 'BMLM',
			description: 'BLAK MONKE LIVES MATTER U KNOW?',
			tgChannel: '',
			tgChat: '',
			twitter: '',
			website: '',
			icon: blakMonkeTokenIcon,
			cratedBy: 'whitebosston',
			mc: 3934.55
		},
		{
			name: 'Jacque Fresco',
			ticker: 'JAC',
			description: 'Jacque Fresco will make you feel cool.',
			tgChannel: '',
			tgChat: '',
			twitter: '',
			website: '',
			icon: jacqueFrescoTokenIcon,
			cratedBy: 'serinedev',
			mc: 13277.3
		},
	]


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
					{/* <Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-SemiBold'} fontSize={'14px'} lineHeight={'20px'} customStyle={{ letterSpacing: '-0.48px' }}>
						Search tokens
					</Paragraph> */}

					<SearchField
						value={searchText}
						onChange={handleSearchChange}
						placeholder={'Search tokens'}
						withFocus
					/>
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
						<StyledTokenIcon src={userAvatarMock} style={{
							width: '56px',
							height: '56px',
							borderRadius: '12px'
						}} />

						<StyledTokenDescription>
							<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-Medium'} fontSize={'16px'} lineHeight={'20px'} customStyle={{}}>
								@Barov1k
							</Paragraph>

							<Paragraph color={'rgba(242, 242, 242, 0.5)'} fontFamily={'WorkSans'} fontSize={'14px'} lineHeight={'16px'} customStyle={{}}>
								Sold 0.38 ETH of SWAPPY
							</Paragraph>

							<Paragraph color={'rgba(242, 242, 242, 0.5)'} fontFamily={'WorkSans'} fontSize={'14px'} lineHeight={'16px'} customStyle={{
								position: 'absolute',
								top: '14px',
								right: '12px'
							}}>
								4s ago
							</Paragraph>
						</StyledTokenDescription>
					</StyledRecentCreateItem>
				</StyledRecentCreateWrapper>


				<StyledTokensListWrapper>
					{tokenList.map((tokenData: any, index: number) => {

						return <>
							<StyledTokenWrapper>
								<StyledTokenIcon src={tokenData?.icon} />

								<StyledTokenDescription>
									<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-Medium'} fontSize={'16px'} lineHeight={'20px'} customStyle={{}}>
										{`${tokenData?.name} • ${tokenData?.ticker}`}
									</Paragraph>

									<Paragraph color={'rgba(218, 255, 0, 0.5)'} fontFamily={'WorkSans'} fontSize={'14px'} lineHeight={'16px'} customStyle={{}}>
										Market cap: ${tokenData?.mc || 0}
									</Paragraph>

									<Paragraph color={'rgba(242, 242, 242, 0.5)'} fontFamily={'WorkSans'} fontSize={'14px'} lineHeight={'16px'} customStyle={{}}>
										{tokenData?.description}
									</Paragraph>

									<Paragraph color={'rgba(242, 242, 242, 0.5)'} fontFamily={'WorkSans'} fontSize={'14px'} lineHeight={'16px'} customStyle={{}}>
										Created by: @{tokenData?.cratedBy}
									</Paragraph>
								</StyledTokenDescription>
							</StyledTokenWrapper>

							{tokenList.length > index ? <StyledDivider /> : ''}
						</>
					})}
				</StyledTokensListWrapper>
			</StyledPageInner>
		</>
	)
}

export default observer(Main);