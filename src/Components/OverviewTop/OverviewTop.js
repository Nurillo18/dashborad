
import OverviewTopLeft from "../OverviewTopLeft/OverviewTopLeft";
import "./overview-top.css"

const OverviewTop = () => {
	return (
		<div className='overview-top'>
			<h2 className="overview-top__title">Overview</h2>
			<OverviewTopLeft/>
		</div>
	);
};

export default OverviewTop