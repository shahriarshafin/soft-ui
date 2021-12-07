import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const SectionInfo = (props) => {
	return (
		<>
			<Heading>{props.Heading}</Heading>
			<Description> {props.Description}</Description>
		</>
	);
};

export default SectionInfo;
const Heading = styled.h4`
	color: rgb(33, 33, 33);
	font-weight: 700;
	font-size: 1.5rem;
`;
const Description = styled.p`
	font-weight: 400;
	color: rgb(97, 97, 97);
	font-size: 0.875rem;
`;
