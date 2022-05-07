const OverviewCountBox = ({name, number}) => {
	return (
		<div className='overview-count__box'>
			<h4 className='overview-count__text'>{name}</h4>
			<p className='overview-count__number'>{number}</p>
		</div>
	);
};

export default OverviewCountBox
