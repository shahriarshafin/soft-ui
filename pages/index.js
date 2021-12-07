import BootNav from '../components/BootNav';
import ProfileCard from '../components/profileCard';
import Steps from '../components/Steps';
import FeaturesSection from '../sections/FeaturesSection';
import HeroSection from '../sections/HeroSection';

// ....

export default function Home() {
	return (
		<>
			<BootNav />
			<HeroSection />
			<FeaturesSection />
			<Steps StepNo='1' StepTitle='Design' />
			<div className='container'>
				<div className='row'>
					<ProfileCard
						ProfileName={'Shahriar shafin'}
						Designation={'Founder'}
						ProfileQuote={
							'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae quasi'
						}
					/>
				</div>
			</div>
		</>
	);
}
