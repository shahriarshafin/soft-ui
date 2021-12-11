import 'bootstrap/dist/css/bootstrap.min.css';
import BootNav from '../components/BootNav';
import Head from '../components/Head';
import HeroHeading from '../components/HeroHeading';
import GlobalStyle from '../Styles/GlobalStyle';

const services = () => {
	return (
		<>
			<Head title={'Services | Soft UI'} />
			<GlobalStyle />

			<BootNav />
			<HeroHeading Normal={'This is '} Highlight={'services page'} />
		</>
	);
};

export default services;
