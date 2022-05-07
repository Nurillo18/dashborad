import { useState } from 'react';
import img1 from '../../Assets/Images/img1.svg';
import img2 from '../../Assets/Images/img2.svg';
import img3 from '../../Assets/Images/img3.svg';
import img4 from '../../Assets/Images/img4.svg';
import img5 from '../../Assets/Images/img5.svg';
import img6 from '../../Assets/Images/img6.svg';
import img7 from '../../Assets/Images/img7.svg';
import img8 from '../../Assets/Images/img8.svg';
import treeIcon from '../../Assets/Images/three-icon.svg';
import TicketsLats from '../TicketsLast/TicketsLats';
import './tickets-main-list.css';

export default function TicketsMainList() {
	const [todos, setTodos] = useState([
		{
			img: img1,
			name: 'Contact Email not Linked',
			day: 'Updated 1 day ago',
			costumerName: 'Tom Cruise',
			costumerData: 'on 24.05.2019',
			data: 'May 26, 2019',
			time: '6:30 PM',
			btn: 'HIGHT',
			icon: treeIcon,
		},
		{
			img: img2,
			name: 'Adding Images to Featured Posts',
			day: 'Updated 1 day ago',
			costumerName: 'Matt Damon',
			costumerData: 'on 24.05.2019',
			data: 'May 26, 2019',
			time: '8:00 AM',
			btn: 'LOW',
			icon: treeIcon,
		},
		{
			img: img3,
			name: 'When will I be charged this month?',
			day: 'Updated 1 day ago',
			costumerName: 'Robert Downey',
			costumerData: 'on 24.05.2019',
			data: 'May 26, 2019',
			time: '6:30 PM',
			btn: 'HIGHT',
			icon: treeIcon,
		},
		{
			img: img4,
			name: 'Payment not going through',
			day: 'Christian Bale',
			costumerName: 'Tom Cruise',
			costumerData: 'on 24.05.2019',
			data: 'May 25, 2019',
			time: '6:30 PM',
			btn: 'NORMAL',
			icon: treeIcon,
		},
		{
			img: img5,
			name: 'Unable to add replies',
			day: 'Updated 1 day ago',
			costumerName: 'Henry Cavil',
			costumerData: 'on 24.05.2019',
			data: 'May 25, 2019',
			time: '6:30 PM',
			btn: 'HIGHT',
			icon: treeIcon,
		},
		{
			img: img6,
			name: 'Downtime since last week',
			day: 'Updated 1 day ago',
			costumerName: 'Chris Evans',
			costumerData: 'on 24.05.2019',
			data: 'May 25, 2019',
			time: '6:30 PM',
			btn: 'NORMAL',
			icon: treeIcon,
		},
		{
			img: img7,
			name: 'Referral Bonus',
			day: 'Updated 1 day ago',
			costumerName: 'Sam Smith',
			costumerData: 'on 22.05.2019',
			data: 'May 26, 2019',
			time: '6:30 PM',
			btn: 'LOW',
			icon: treeIcon,
		},
		{
			img: img8,
			name: 'How do I change my password?',
			day: 'Updated 6 day ago',
			costumerName: 'Steve Rogers',
			costumerData: 'on 21.05.2019',
			data: 'May 24, 2019',
			time: '1:00 PM',
			btn: 'NORMAL',
			icon: treeIcon,
		},
	]);
	return (
		<ul className='ticket-list'>
			{todos.map((item) => (
				<li className='item'>
					<div className='item-account-left'>
						<img
							className='item-account__img'
							src={item.img}
							alt='img'
							width='44'
							height='44'
						/>
						<div className='item-account__content'>
							<strong className='item-account__name'>{item.name}</strong>
							<small className='item-account__day'>{item.day}</small>
						</div>
					</div>
					<div className='item-costumer'>
						<h4 className='costumer-name'>{item.costumerName}</h4>
						<p className='costumer-day'>{item.costumerData}</p>
					</div>
					<div className='item-data'>
						<strong className='data-may'>{item.data}</strong>
						<small className='may-time'>{item.time}</small>
					</div>
					<div className='last-btn-and-img'>
						<button
							className={
								(item.btn === 'HIGHT' && 'hight') ||
								(item.btn === 'LOW' && 'low') ||
								(item.btn === 'NORMAL' && 'normal')
							}>
							{item.btn}
						</button>
						<img className='icon-tree-dots' src={treeIcon} alt='icon' />
					</div>
				</li>
			))}
			<TicketsLats/>
		</ul>
	);
}
