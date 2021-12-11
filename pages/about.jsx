import BootNav from '../components/BootNav';
import Head from '../components/Head';
import HeroHeading from '../components/HeroHeading';

const about = () => {
	return (
		<>
			<Head title={'About | Soft UI'} />

			<BootNav />
			<HeroHeading Normal={'This is '} Highlight={'About page'} />
		</>
	);
};

export default about;
