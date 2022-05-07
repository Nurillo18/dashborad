import OverviewTodoCount from '../OverviewTodoCount/OverviewTodoCount';
import './overview-todo.css';

const OverviewTodo = () => {
	return (
		<div className='overview-todo'>
			<div className='overview-todo__todays'>
				<div className='overview-todo__todays-top'>
					<div className='overview-todo__todays-content-left'>
						<strong className='overview-todo__title'>Today’s trends</strong>
						<time className='overview-todo__data' datatime='25.05.2019'>
							as of 25 May 2019, 09:41 PM
						</time>
					</div>
					<div className='overview-todo__todays-content-right'>
						<p className='overview-todo__today'>Today</p>
						<p className='overview-todo__yesterday'>Yesterday</p>
					</div>
				</div>
			</div>
			<div className='overview-todo__count-box'>
                <OverviewTodoCount text="Resolved" num="449" />
                <OverviewTodoCount text="Received" num="426" />
                <OverviewTodoCount text="Average first response time" num="33m" />
                <OverviewTodoCount text="Average response time" num="3h 8m" />
                <OverviewTodoCount text="Resolution within SLA" num="94%" />
			</div>
		</div>
	);
};

export default OverviewTodo;
