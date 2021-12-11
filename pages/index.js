import 'bootstrap/dist/css/bootstrap.min.css';
import BootNav from '../components/BootNav';
import Head from '../components/Head';
import {
	FeaturesSection,
	Footer,
	HeroSection,
	StepsSection,
	TeamSection,
} from '../sections';
import GlobalStyle from '../Styles/GlobalStyle';

const index = () => {
	return (
		<>
			<Head title={'Home | Soft UI'} />
			<GlobalStyle />

			<BootNav />
			<HeroSection />
			<FeaturesSection />
			<StepsSection />
			<TeamSection />
			<Footer />
		</>
	);
};

export default index;
