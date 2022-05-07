import React from 'react';
import OverviewTop from '../Components/OverviewTop/OverviewTop';
import OverviewCount from '../Components/OverviewCount/OverviewCount';
import OverviewTodo from '../Components/OverviewTodo/OverviewTodo';
import OverviewBottom from '../Components/OverviewBottom/OverviewBottom';
const Overview = () => {
	return (
		<div className='overview'>
            <OverviewTop/>
			<OverviewCount/>
			<OverviewTodo/>
			<OverviewBottom/>
		</div>
	);
};

export default Overview;
