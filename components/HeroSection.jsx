import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const HeroSection = () => {
	return (
		<>
			<section>
				<Container>
					<HeroHeading>
						HEY, I am <span>Shahriar Shafin</span>
					</HeroHeading>
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

const HeroHeading = styled.h1`
	margin-top: 50px;
	font-size: 4rem;
	text-transform: uppercase;
	letter-spacing: 3px;
	text-align: center;
	font-weight: 700;
	color: #dddddd;
	text-shadow: 4px -4px 8px #a8a8a8, -4px 4px 8px #ffffff;
	-webkit-text-stroke: 2px #5068e2;
	span {
		color: #5068e2;
	}
`;
const HeroDescription = styled.p`
	color: #303030;
	font-size: 1.5rem;
	text-align: center;
	line-height: 1.6;
`;
