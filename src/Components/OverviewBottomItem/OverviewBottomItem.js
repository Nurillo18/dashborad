export default function OverviewBottomItem({text, num}) {
	return (
		<li className='overview-bottom__item'>
			<strong className='overview-bottom__head'>
				{text}
			</strong>
			<small className='overview-bottom__number'>{num}</small>
		</li>
	);
}
