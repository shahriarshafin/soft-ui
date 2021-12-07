import 'bootstrap/dist/css/bootstrap.min.css';
import BootNav from '../components/BootNav';
import HeroHeading from '../components/HeroHeading';
import GlobalStyle from '../Styles/GlobalStyle';

const contact = () => {
	return (
		<>
			<GlobalStyle />
			<BootNav />
			<HeroHeading Normal={'This is '} Highlight={'contact page'} />
		</>
	);
};

export default contact;
