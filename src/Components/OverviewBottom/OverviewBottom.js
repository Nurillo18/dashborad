import React, { useEffect } from 'react';
import OverviewBottomItem from '../OverviewBottomItem/OverviewBottomItem';
import './overview-bottom.css';

export default function OverviewBottom() {
	const [todos, setTodos] = React.useState([
		{
			id: 1,
			title: 'Finish ticket update',
			isComplate: false,
		},
		{
			id: 2,
			title: 'Create new ticket example',
			isComplate: false,
		},
		{
			id: 3,
			title: 'Update ticket report',
			isComplate: false,
		},
	]);
	const todoBtn = React.useRef('');
	function handlCreateTodo(evt) {
		evt.preventDefault()
		const newTodo = {
			id: 4,
			title: evt.target.value,
			isComplate: false,
		};
	}

	return (
		<div className='overview-bottom'>
			<div className='overview-bottom__tickets-left-part'>
				<div className='overview-bottom__ticket-top'>
					<div className='overview-bottom__ticket-left-content'>
						<strong className='overview-bottom__title'>
							Unresolved tickets
						</strong>
						<p className='overview-bottom__text'>
							Group:{' '}
							<span className='overview-bottom__next-group'>Support</span>
						</p>
					</div>
					<a className='overview-bottom__view' href='#link'>
						View details
					</a>
				</div>
				<ul className='overview-bottom__list'>
					<OverviewBottomItem text='Waiting on Feature Request' num='4238' />
					<OverviewBottomItem text='Waiting on Feature Request' num='4238' />
					<OverviewBottomItem text='Waiting on Feature Request' num='4238' />
					<OverviewBottomItem text='Waiting on Feature Request' num='4238' />
				</ul>
			</div>
			<div className='overview-bottom__tickets-right-part overview-bottom__tickets-left-part'>
				<div className='overview-bottom__right-top'>
					<div className='overview-bottom__right-content-right'>
						<strong className='overview-bottom__right-title'>Tasks</strong>
						<small className='overview-bottom__right-after-title'>Today</small>
					</div>
					<a className='overview-bottom__view' href='#link'>
						View all
					</a>
				</div>
				<div className='overview-bottom-todo__last'>
					<form className='overview-bottom__form'>
						<input
							onKeyUp={handlCreateTodo}
							className='overview-bottom__input'
							type='text'
							placeholder='Create new task'
						/>
						<button type='submit' className='overview-bottom__btn'>
							<svg
								className='overview-bottom__submit-img'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<rect width='24' height='24' rx='8' fill='#F0F1F7' />
								<path
									d='M12 7V17'
									stroke='#9FA2B4'
									stroke-width='2'
									stroke-linecap='round'
								/>
								<path
									d='M17 12L7 12'
									stroke='#9FA2B4'
									stroke-width='2'
									stroke-linecap='round'
								/>
							</svg>
						</button>
					</form>
					<ul className='overview-bottom__last-list'>
						{todos.map((item) => (
							<li className='overview-bottom__item-last'>
								<div className='oveview-bottom__item-content-last-box'>
									<input
										className='overview-bottom__checkbox'
										type='checkbox'
									/>
									<strong className='overview-bottom__last-title'>
										{item.title}
									</strong>
								</div>
								<button className='overview-bottom__btn-delete'>Default</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
