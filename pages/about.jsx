import 'bootstrap/dist/css/bootstrap.min.css';
import BootNav from '../components/BootNav';
import Head from '../components/Head';
import HeroHeading from '../components/HeroHeading';
import GlobalStyle from '../Styles/GlobalStyle';

const about = () => {
	return (
		<>
			<Head title={'About | Soft UI'} />
			<GlobalStyle />

			<BootNav />
			<HeroHeading Normal={'This is '} Highlight={'About page'} />
		</>
	);
};

export default about;
