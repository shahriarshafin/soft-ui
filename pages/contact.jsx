import BootNav from '../components/BootNav';
import Head from '../components/Head';
import HeroHeading from '../components/HeroHeading';

const contact = () => {
	return (
		<>
			<Head title={'Contact | Soft UI'} />

			<BootNav />
			<HeroHeading Normal={'This is '} Highlight={'contact page'} />
		</>
	);
};

export default contact;
