import 'bootstrap/dist/css/bootstrap.min.css';
import BootNav from '../components/BootNav';
// import ProfileCard from '../components/ProfileCard';
import FeaturesSection from '../sections/FeaturesSection';
import HeroSection from '../sections/HeroSection';
import StepsSection from '../sections/StepsSection';
import GlobalStyle from '../Styles/GlobalStyle';

// ....

export default function Home() {
	return (
		<>
			<GlobalStyle />
			<BootNav />
			<HeroSection />
			<FeaturesSection />
			<StepsSection />
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
