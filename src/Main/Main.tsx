import React from 'react';
import GlobalStyles from '@styles/global'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from '../routes'
import { MainPage } from '../pages'
import { StyledPageWrapper } from './styles'
import { observer } from 'mobx-react'
import RouteWrapper from '@components/RouteWrapper';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const Main = () => {

	useEffect(() => {
		window?.Telegram?.WebApp?.ready();
		window?.Telegram?.WebApp?.expand();
		window?.Telegram?.WebApp?.setBackgroundColor('#101010');
		window?.Telegram?.WebApp?.setHeaderColor('#101010');
	}, [])

	return (
		<>
			<StyledPageWrapper>
				<GlobalStyles />

				<>
					<Routes>
						<Route path={ROUTES.MAIN} element={<RouteWrapper />}>
							<Route path={ROUTES.MAIN} element={<MainPage />} />
						</Route>

						<Route path='*' element={<Navigate to={ROUTES.MAIN} replace />} />
					</Routes>
				</>

			</StyledPageWrapper>
		</>
	);
}

export default observer(Main);