import 'bootstrap/dist/css/bootstrap.min.css';
import BootNav from '../components/BootNav';
// import ProfileCard from '../components/ProfileCard';
import Steps from '../components/Steps';
import FeaturesSection from '../sections/FeaturesSection';
import HeroSection from '../sections/HeroSection';
import GlobalStyle from '../Styles/GlobalStyle';

// ....

export default function Home() {
	return (
		<>
			<GlobalStyle />
			<BootNav />
			<HeroSection />
			<FeaturesSection />
			<Steps StepNo='1' StepTitle='Design' />
			<div className='container'>
				<div className='row'>
					{/* <ProfileCard
						ProfileName={'Shahriar shafin'}
						Designation={'Founder'}
						ProfileQuote={
							'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae quasi'
						}
					/> */}
				</div>
			</div>
		</>
	);
}
