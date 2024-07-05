import { Outlet } from 'react-router-dom'
import PageLayout from "@components/PageLayout";
import { observer } from 'mobx-react';

const RouteWrapper = () => {

	return <PageLayout>
			<Outlet/>
		</PageLayout>
}

export default observer(RouteWrapper);