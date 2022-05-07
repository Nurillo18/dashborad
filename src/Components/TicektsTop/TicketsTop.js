import './ticekts-top.css';
import OverviewTopLeft from "../OverviewTopLeft/OverviewTopLeft"
export default function TicketsTop() {
	return (
		<div className='tickets-top'>
			<h1 className='tickets-top__title'>Tickets</h1>
			<OverviewTopLeft/>
		</div>
	);
}
