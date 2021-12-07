import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import HeroHeading from '../components/HeroHeading';

const HeroSection = () => {
	return (
		<>
			<section>
				<Container>
					<HeroHeading Normal={'hey, I am '} Highlight={'SHAHRIAR SHFIN'} />
					<HeroDescription>
						Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Molestiae, odit. ipsum dolor sit amet consectetur adipisicing elit.
						Amet, maxime?
					</HeroDescription>
				</Container>
			</section>
		</>
	);
};

export default HeroSection;

const HeroDescription = styled.p`
	color: #303030;
	font-size: 1.5rem;
	text-align: center;
	line-height: 1.6;
`;
