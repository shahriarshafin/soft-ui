import 'bootstrap/dist/css/bootstrap.min.css';
import BootNav from '../components/BootNav';
import HeroHeading from '../components/HeroHeading';
import GlobalStyle from '../Styles/GlobalStyle';

const about = () => {
	return (
		<>
			<GlobalStyle />
			<BootNav />
			<HeroHeading Normal={'This is '} Highlight={'About page'} />
		</>
	);
};

export default about;
