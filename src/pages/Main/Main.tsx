import { observer } from 'mobx-react'
import StoreContext from '@store/RootStore'
import { StyledPageInner } from './styles';

import { useNavigate } from 'react-router-dom';

const Main = () => {
	const { MainStore } = StoreContext();

	const navigate = useNavigate();

	return (
		<>
			<StyledPageInner>

			</StyledPageInner>
		</>
	)
}

export default observer(Main);