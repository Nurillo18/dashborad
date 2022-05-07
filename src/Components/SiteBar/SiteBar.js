import { NavLink } from 'react-router-dom';
import {
	OverviewIcon,
	TicketsIcon,
	IdeasIcon,
	ContactsIcon,
	AgentsIcon,
	ArticlesIcon,
	SettingsIcon,
	SubscriptionIcon,
} from '../../Assets/Icons/Icons';

import './site-bar.css';

const SiteBar = () => {
	return (
		<div className='site-bar'>
			<div className='site-bar__logo'>
				<a href='/'>
					<svg
						width='32'
						height='32'
						viewBox='0 0 32 32'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<circle cx='16' cy='16' r='16' fill='#3751FF' />
						<path
							d='M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z'
							fill='url(#paint0_linear_584_285)'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_584_285'
								x1='11'
								y1='9'
								x2='23'
								y2='23'
								gradientUnits='userSpaceOnUse'>
								<stop stop-color='white' stop-opacity='0.7' />
								<stop offset='1' stop-color='white' />
							</linearGradient>
						</defs>
					</svg>
				</a>
				<a href='/'>
					<h1 className='site-bar__title'>Dashboard Kit</h1>
				</a>
			</div>
			<ul className='site-bar__list'>
				<NavLink className='site-bar__text' to='/'>
					<OverviewIcon />
					Overview
				</NavLink>

				<NavLink className='site-bar__text' to='/tickets'>
					<TicketsIcon />
					Tickets
				</NavLink>

				<NavLink className='site-bar__text' to='/ideas'>
					<IdeasIcon />
					Ideas
				</NavLink>

				<NavLink className='site-bar__text' to='/contacts'>
					<ContactsIcon />
					Contacts
				</NavLink>

				<NavLink className='site-bar__text' to='/agents'>
					<AgentsIcon />
					Agents
				</NavLink>

				<NavLink className='site-bar__text' to='/articles'>
					<ArticlesIcon />
					Articles
				</NavLink>
				<span className='line'></span>
				<NavLink className='site-bar__text line1' to='/settings'>
					<SettingsIcon />
					Settings
				</NavLink>

				<NavLink className='site-bar__text' to='/subscription'>
					<SubscriptionIcon />
					Subscription
				</NavLink>
			</ul>
		</div>
	);
};

export default SiteBar;