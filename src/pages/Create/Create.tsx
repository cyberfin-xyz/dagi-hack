import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react'
import StoreContext from '@store/RootStore'
import { StyledAiAdviseHeader, StyledAiAdviseItem, StyledAiAdviseWrapper, StyledButtonWrapper, StyledDetailsWrapper, StyledDetailWrapper, StyledFormWrapper, StyledPageContent, StyledPageHeader, StyledPageInner, StyledSelectImgWrapper, StyledTokenIcon, StyledTokenPreview, StyledTokenPreviewWrapper } from './styles';

import { useNavigate } from 'react-router-dom';
import Paragraph from '@components/Paragraph';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import { MainButtonStyle } from '@components/Button/Button';
import PhotoUploadInput from '@components/PhotoUploadInput';
import { ROUTES } from '../../routes';
import { moonTokenIcon, StarsIconComp } from '@assets/images';

interface FormState {
	name: string;
	ticker: string;
	description: string;
	tgChannel: string;
	tgChat: string;
	twitter: string;
	website: string;
	tokenImg: string | null;
}

interface SocialDesc {
	title: string;
	paramKey: keyof FormState;
}

const Create = () => {
	const { MainStore } = StoreContext();

	const navigate = useNavigate();

	const [currentStep, setCurrentStep] = useState<'basicInfo' | 'socialLinks' | 'finalReview' | 'end'>('basicInfo');

	const [formState, setFormState] = useState<FormState>({
		name: '',
		ticker: '',
		description: '',
		tgChannel: '',
		tgChat: '',
		twitter: '',
		website: '',
		tokenImg: ''
	});

	const finalSocialDescData: SocialDesc[] = [
		{
			title: 'Telegram channel',
			paramKey: 'tgChannel'
		},
		{
			title: 'Telegram chat',
			paramKey: 'tgChat'
		},
		{
			title: 'Twitter',
			paramKey: 'twitter'
		},
		{
			title: 'Website',
			paramKey: 'website'
		},
	]

	const handleChange = (field: string, value: string | null) => {
		setFormState((prevState) => ({
			...prevState,
			[field]: value,
		}));
	};

	const handleNextStep = () => {
		if (currentStep === 'finalReview') {
			handleCreate()
		} else {
			setCurrentStep((prevStep: any) => (prevStep === 'basicInfo') ? 'socialLinks' : (prevStep === 'socialLinks' ? 'finalReview' : 'end'))
		}
	};

	const handleCreate = () => {
		navigate(`${ROUTES.GO_TO_MAIN}`)
	};

	const backButtonHandler = () => {
		if (currentStep === 'basicInfo') {
			navigate(ROUTES.GO_TO_MAIN);
		} else {
			setCurrentStep((prevStep: any) => (prevStep === 'basicInfo') ? 'socialLinks' : (prevStep === 'socialLinks' ? 'basicInfo' : 'basicInfo'))
		}

		window?.Telegram?.WebApp?.BackButton?.hide();
	};

	useEffect(() => {
		if (window?.Telegram?.WebApp) {
			window?.Telegram?.WebApp?.BackButton?.show();
			window?.Telegram?.WebApp?.BackButton?.onClick(backButtonHandler);
		}

		return () => {
			window?.Telegram?.WebApp?.BackButton?.hide();
			window?.Telegram?.WebApp?.BackButton?.offClick(backButtonHandler);
		};
	}, [currentStep]);

	return (
		<>
			<StyledPageInner>
				<StyledPageContent>
					{
						currentStep === 'basicInfo' ? <>
							<StyledPageHeader>
								<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-SemiBold'} fontSize={'24px'} lineHeight={'32px'} customStyle={{ letterSpacing: '-0.48px' }}>
									Add basic information
								</Paragraph>
							</StyledPageHeader>

							<StyledSelectImgWrapper>
								<StyledTokenIcon src={moonTokenIcon} />

								{/* <PhotoUploadInput
									selectedImage={formState.tokenImg}
									onChangeImage={(value: string | null) => handleChange('tokenImg', value)}
								/> */}

								<Paragraph color={'rgba(242, 242, 242, 0.5)'} fontFamily={'WorkSans-SemiBold'} fontSize={'14px'} lineHeight={'20px'} customStyle={{ letterSpacing: '-0.48px', marginTop: '8px' }}>
									Select an image for the token
								</Paragraph>
							</StyledSelectImgWrapper>

							<StyledFormWrapper>
								<TextInput
									value={formState.name}
									onChange={(value: string) => handleChange('name', value)}
									placeholder={'Name'}
									withFocus
								/>
								<TextInput
									value={formState.ticker}
									onChange={(value: string) => handleChange('ticker', value)}
									placeholder={'Ticker'}
								/>
								<TextInput
									value={formState.description}
									onChange={(value: string) => handleChange('description', value)}
									placeholder={'Description'}
								/>
							</StyledFormWrapper>

							<StyledAiAdviseWrapper>
								<StyledAiAdviseItem>
									<StyledAiAdviseHeader>
										<Paragraph
											color={'#DAFF00'}
											fontFamily={'WorkSans'}
											fontSize={'14px'}
											lineHeight={'20px'}
											customStyle={{ letterSpacing: '-0.14px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
										>
											<StarsIconComp style={{ marginRight: '4px' }} />

											AI Advisor
										</Paragraph>

										<Paragraph color={'rgba(242, 242, 242, 0.5)'} fontFamily={'WorkSans-SemiBold'} fontSize={'14px'} lineHeight={'20px'} customStyle={{ letterSpacing: '-0.14px', margin: '0 8px' }}>
											•
										</Paragraph>

										<Paragraph color={'rgba(242, 242, 242, 0.5)'} fontFamily={'WorkSans-SemiBold'} fontSize={'14px'} lineHeight={'20px'} customStyle={{ letterSpacing: '-0.14px' }}>
											Based on experience
										</Paragraph>

									</StyledAiAdviseHeader>


									<Paragraph color={'rgba(242, 242, 242, 1)'} fontFamily={'WorkSans'} fontSize={'14px'} lineHeight={'20px'} textAlign={'start'} customStyle={{ letterSpacing: '-0.14px' }}>
										Memorable and Fun:<br />
										The name should be catchy and easy to remember. Example: MoonCoin, #MOON
									</Paragraph>


								</StyledAiAdviseItem>
							</StyledAiAdviseWrapper>
						</>
							: currentStep === 'socialLinks' ? <>
								<StyledPageHeader style={{ justifyContent: 'space-between' }}>
									<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-SemiBold'} fontSize={'24px'} lineHeight={'32px'} customStyle={{ letterSpacing: '-0.48px' }}>
										Add Social links
									</Paragraph>

									<Paragraph color={'rgba(242, 242, 242, 0.5)'} fontFamily={'WorkSans'} fontSize={'14px'} lineHeight={'20px'} customStyle={{ letterSpacing: '-0.14px' }}>
										Optional
									</Paragraph>
								</StyledPageHeader>

								<StyledFormWrapper>
									<TextInput
										value={formState.tgChannel}
										onChange={(value: string) => handleChange('tgChannel', value)}
										placeholder={'Telegram channel'}
										withFocus
									/>
									<TextInput
										value={formState.tgChat}
										onChange={(value: string) => handleChange('tgChat', value)}
										placeholder={'Telegram chat'}
									/>
									<TextInput
										value={formState.twitter}
										onChange={(value: string) => handleChange('twitter', value)}
										placeholder={'Twitter'}
									/>
									<TextInput
										value={formState.website}
										onChange={(value: string) => handleChange('website', value)}
										placeholder={'Website'}
									/>
								</StyledFormWrapper>

								<StyledAiAdviseWrapper>
									<StyledAiAdviseItem>
										<StyledAiAdviseHeader>
											<Paragraph
												color={'#DAFF00'}
												fontFamily={'WorkSans'}
												fontSize={'14px'}
												lineHeight={'20px'}
												customStyle={{ letterSpacing: '-0.14px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
											>
												<StarsIconComp style={{ marginRight: '4px' }} />

												AI Advisor
											</Paragraph>

											<Paragraph color={'rgba(242, 242, 242, 0.5)'} fontFamily={'WorkSans-SemiBold'} fontSize={'14px'} lineHeight={'20px'} customStyle={{ letterSpacing: '-0.14px', margin: '0 8px' }}>
												•
											</Paragraph>

											<Paragraph color={'rgba(242, 242, 242, 0.5)'} fontFamily={'WorkSans-SemiBold'} fontSize={'14px'} lineHeight={'20px'} customStyle={{ letterSpacing: '-0.14px' }}>
												Based on experience
											</Paragraph>

										</StyledAiAdviseHeader>


										<Paragraph color={'rgba(242, 242, 242, 1)'} fontFamily={'WorkSans'} fontSize={'14px'} lineHeight={'20px'} textAlign={'start'} customStyle={{ letterSpacing: '-0.14px' }}>
											Memorable and Fun:<br />
											The name should be catchy and easy to remember. Example: MoonCoin, #MOON
										</Paragraph>


									</StyledAiAdviseItem>
								</StyledAiAdviseWrapper>
							</>
								: currentStep === 'finalReview' ? <>
									<StyledTokenPreviewWrapper>
										<StyledTokenPreview>

											<StyledTokenIcon src={moonTokenIcon} />
											{/* <PhotoUploadInput
												selectedImage={formState.tokenImg}
												onChangeImage={(value: string | null) => { }}
												disabled={true}
											/> */}

											<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-SemiBold'} fontSize={'24px'} lineHeight={'32px'} customStyle={{ letterSpacing: '-0.48px', fontVariantNumeric: 'lining-nums proportional-nums' }}>
												{`${formState?.name} • ${formState?.ticker}`}
											</Paragraph>

											<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-Medium'} fontSize={'16px'} lineHeight={'20px'} customStyle={{}}>
												{formState?.description}
											</Paragraph>

										</StyledTokenPreview>
									</StyledTokenPreviewWrapper>

									<StyledDetailsWrapper>
										{
											finalSocialDescData.map((socialItem: SocialDesc) => (
												formState?.[socialItem?.paramKey]
													? <StyledDetailWrapper>
														<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-Medium'} fontSize={'16px'} lineHeight={'20px'} customStyle={{}}>
															{socialItem?.title}
														</Paragraph>

														<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-Medium'} fontSize={'16px'} lineHeight={'20px'} customStyle={{}}>
															{formState?.[socialItem?.paramKey]}
														</Paragraph>
													</StyledDetailWrapper>
													: ''
											))
										}

									</StyledDetailsWrapper>
								</>
									: ''
					}
				</StyledPageContent>

				<StyledButtonWrapper>
					<Button
						customStyle={MainButtonStyle}
						onClick={handleNextStep}
					>
						{
							currentStep === 'basicInfo'
								? 'Next Step'
								: currentStep === 'socialLinks'
									? 'Final Review '
									: 'Create a token'
						}
					</Button>
				</StyledButtonWrapper>
			</StyledPageInner>
		</>
	)
}

export default observer(Create);