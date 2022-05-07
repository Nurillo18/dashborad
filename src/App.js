import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Overview from './Pages/Overview';
import Tickets from './Pages/Tickets';
import Ideas from './Pages/Ideas';
import Contact from "./Pages/Contact";
import Agents from "./Pages/Agent";
import Articles from "./Pages/Articles"
import Settings from "./Pages/Settings"
import Subscription from "./Pages/Subscription"
import SiteBar from './Components/SiteBar/SiteBar';
import "./Assets/main.css"

function App() {
	return (
		<div className='dashboard'>
			<SiteBar />
			<Routes>
				<Route path='/' element={<Overview />} />
				<Route path='/tickets' element={<Tickets />} />
				<Route path='/ideas' element={<Ideas />} />
				<Route path='/contacts' element={<Contact/>} />
				<Route path='/agents' element={<Agents/>} />
				<Route path='/articles' element={<Articles/>} />
				<Route path='/settings' element={<Settings/>} />
				<Route path='/subscription' element={<Subscription/>} />
			</Routes>
		</div>
	);
}

export default App;
