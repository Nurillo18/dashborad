import './tickets-last.css';

export default function TicketsLats() {
	return (
		<div className='tickets-main-last-box'>
			<div className='first'>
				<p className='text'>Rows per page:</p>
				<p className='num'>8</p>
			</div>
			<div className='secound'>
				<p className='big-text'>1-8 of 1240</p>
			</div>
			<div className='turns'>
				<svg
					className='left'
					width='8'
					height='14'
					viewBox='0 0 8 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M7 13L1.07071 7.07071C1.03166 7.03166 1.03166 6.96834 1.07071 6.92929L7 1'
						stroke='#9FA2B4'
						stroke-width='2'
						stroke-linecap='round'
					/>
				</svg>
				<svg
                 className='right'
					width='8'
					height='14'
					viewBox='0 0 8 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M1 13L6.92929 7.07071C6.96834 7.03166 6.96834 6.96834 6.92929 6.92929L1 1'
						stroke='#9FA2B4'
						stroke-width='2'
						stroke-linecap='round'
					/>
				</svg>
			</div>
		</div>
	);
}
