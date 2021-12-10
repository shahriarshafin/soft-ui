import 'bootstrap/dist/css/bootstrap.min.css';
import BootNav from '../components/BootNav';
import FeaturesSection from '../sections/FeaturesSection';
import HeroSection from '../sections/HeroSection';
import StepsSection from '../sections/StepsSection';
import TeamSection from '../sections/TeamSection';
import GlobalStyle from '../Styles/GlobalStyle';

export default function Home() {
	return (
		<>
			<GlobalStyle />

			<BootNav />
			<HeroSection />
			<FeaturesSection />
			<StepsSection />
			<TeamSection />
		</>
	);
}
