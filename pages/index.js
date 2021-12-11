import BootNav from '../components/BootNav';
import Head from '../components/Head';
import {
	FeaturesSection,
	Footer,
	HeroSection,
	StepsSection,
	TeamSection,
} from '../sections';

const index = () => {
	return (
		<>
			<Head title={'Home | Soft UI'} />

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
