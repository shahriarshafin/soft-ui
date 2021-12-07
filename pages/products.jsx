import BootNav from '../components/bootnav';
import HeroHeading from '../components/HeroHeading';

const products = () => {
	return (
		<>
			<BootNav />
			<HeroHeading Normal={'This is '} Highlight={'products page'} />
		</>
	);
};

export default products;
