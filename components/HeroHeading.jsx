import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const HeroHeading = (props) => {
	const { Normal, Highlight } = props;
	return (
		<>
			<Heading>
				{Normal}
				<span>{Highlight}</span>
			</Heading>
		</>
	);
};

export default HeroHeading;

const Heading = styled.h1`
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
