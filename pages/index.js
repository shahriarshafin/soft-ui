import 'bootstrap/dist/css/bootstrap.min.css';
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
import SectionInfo from '../components/SectionInfo';
import GlobalStyle from '../Styles/GlobalStyle';
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
			<GlobalStyle />
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
		</>
	);
}
