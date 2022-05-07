import React from 'react';

export default function OverviewTodoCount({text, num}) {
	return (
		<div className='overview-todo__count'>
			<strong className='overview-todo__text'>{text}</strong>
			<p className='overview-todo__number'>{num}</p>
		</div>
	);
}
