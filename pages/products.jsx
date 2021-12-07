import 'bootstrap/dist/css/bootstrap.min.css';
import BootNav from '../components/BootNav';
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
