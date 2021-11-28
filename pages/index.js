import 'bootstrap/dist/css/bootstrap.min.css';
import BootNav from '../components/BootNav';
import HeroSection from '../components/HeroSection';
import SectionInfo from '../components/SectionInfo';
import GlobalStyle from '../Styles/GlobalStyle';
export default function Home() {
	return (
		<>
			<GlobalStyle />
			<BootNav />
			<HeroSection />
			<SectionInfo
				Heading='Know more about Design'
				Description='hfghjfghjfghfhg'
			/>
		</>
	);
}
