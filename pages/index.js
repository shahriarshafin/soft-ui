import {
	FaClock,
	FaCode,
	FaCodeBranch,
	FaCube,
	FaFolder,
	FaJsSquare,
	FaQrcode,
	FaSeedling,
} from 'react-icons/fa';
import BootNav from '../components/BootNav';
import FeatureCard from '../components/FeatureCard';
import HeroSection from '../components/HeroSection';
import ProfileCard from '../components/profileCard';
import SectionInfo from '../components/SectionInfo';
import Steps from '../components/Steps';
// ....

export default function Home() {
	const icons = [
		FaFolder,
		FaCodeBranch,
		FaQrcode,
		FaCode,
		FaCube,
		FaJsSquare,
		FaClock,
		FaSeedling,
	];
	const FeatureData = [
		{
			title: 'Organized Code',
		},
		{
			title: 'Easy Folder Structure',
		},
		{
			title: 'Code Splitting',
		},
		{
			title: 'The Hassle-free Setup Process',
		},
		{
			title: 'Code Splitting',
		},
		{
			title: 'Organized Code',
		},
		{
			title: 'Flat Design',
		},
		{
			title: 'Intregrated Service',
		},
	];
	return (
		<>
			<BootNav />
			<HeroSection />
			<SectionInfo
				Heading='Know more about Design'
				Description='hfghjfghjfghfhg'
			/>
			<div className='container'>
				<div className='row'>
					{FeatureData.map((item, idx) => {
						const Icon = icons[idx];
						return (
							<>
								<FeatureCard Title={item.title} icon={<Icon />} />
							</>
						);
					})}
				</div>
			</div>

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
