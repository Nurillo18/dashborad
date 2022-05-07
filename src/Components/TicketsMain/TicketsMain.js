import TicketsMainForm from '../TicketsMainForm/TicketsMainForm';
import TicketsMainList from '../TicketsMainList/TicketsMainList';
import './tickets-main.css';

export default function TicketsMain() {
	return (
		<div className='tickets-main'>
			<div className='tickets-main__form-box'>
                <div className='tickets-main__top-hero'>
                    <h2 className='tickets-main__top-title'>All tickets</h2>
                    <div className='tickets-main__top-filter'>
                        <span className='tickets-main__top-element sort'>Sort</span>
                        <span className='tickets-main__top-element filter'>Filter</span>
                    </div>
                </div>
                <TicketsMainForm/>
			</div>
                <TicketsMainList/>
		</div>
	);
}
