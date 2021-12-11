import BootNav from '../components/BootNav';
import Head from '../components/Head';
import HeroHeading from '../components/HeroHeading';

const products = () => {
	return (
		<>
			<Head title={'Products | Soft UI'} />

			<BootNav />
			<HeroHeading Normal={'This is '} Highlight={'products page'} />
		</>
	);
};

export default products;
