import 'bootstrap/dist/css/bootstrap.min.css';
import BootNav from '../components/BootNav';
import HeroHeading from '../components/HeroHeading';

const contact = () => {
	return (
		<>
			<BootNav />
			<HeroHeading Normal={'This is '} Highlight={'contact page'} />
		</>
	);
};

export default contact;
