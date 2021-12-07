import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
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
import FeatureCard from '../components/FeatureCard';
import SectionInfo from '../components/SectionInfo';
import GlobalStyle from '../Styles/GlobalStyle';

const FeaturesSection = () => {
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
			<Container>
				<SectionInfo
					Heading='Know more about Design'
					Description='lorem ipsum dolor sit amet aliquip ex ea commodo consequat.'
				/>
				<Row>
					{FeatureData.map((item, idx) => {
						const Icon = icons[idx];
						return (
							<>
								<FeatureCard Title={item.title} icon={<Icon />} />
							</>
						);
					})}
				</Row>
			</Container>
		</>
	);
};

export default FeaturesSection;
