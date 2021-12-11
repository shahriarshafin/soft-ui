import BootNav from '../components/BootNav';
import Head from '../components/Head';
import HeroHeading from '../components/HeroHeading';

const services = () => {
	return (
		<>
			<Head title={'Services | Soft UI'} />

			<BootNav />
			<HeroHeading Normal={'This is '} Highlight={'services page'} />
		</>
	);
};

export default services;
