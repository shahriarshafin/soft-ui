import BootNav from '../components/bootnav';
import HeroHeading from '../components/HeroHeading';

const about = () => {
	return (
		<>
			<BootNav />
			<HeroHeading Normal={'This is '} Highlight={'About page'} />
		</>
	);
};

export default about;
