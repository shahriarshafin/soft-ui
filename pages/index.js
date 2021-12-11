import 'bootstrap/dist/css/bootstrap.min.css';
import BootNav from '../components/BootNav';
import {
	FeaturesSection,
	HeroSection,
	StepsSection,
	TeamSection,
} from '../sections';
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
