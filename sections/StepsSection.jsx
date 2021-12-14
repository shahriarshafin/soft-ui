import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import SectionInfo from '../components/SectionInfo';
import Steps from '../components/Steps';

const StepsSection = () => {
	const Step = [
		{
			stepNo: '1',
			stepTitle: 'Sidemap',
		},
		{
			stepNo: '2',
			stepTitle: 'Content Creation',
		},
		{
			stepNo: '3',
			stepTitle: 'Visual Elements',
		},
		{
			stepNo: '4',
			stepTitle: 'Testing',
		},
		{
			stepNo: '5',
			stepTitle: 'Going Live',
		},
	];

	return (
		<>
			<section>
				<Container>
					<SectionInfo
						Heading='Steps we Follow'
						Description='lorem ipsum dolor sit amet aliquip ex ea commodo consequat.'
					/>
					<FormSteps>
						{Step.map((i) => {
							return (
								<Steps key={i} StepNo={i.stepNo} StepTitle={i.stepTitle} />
							);
						})}
					</FormSteps>
				</Container>
			</section>
		</>
	);
};

export default StepsSection;

const FormSteps = styled.div`
	display: block;
	width: 100%;
	position: relative;
	margin: 40px 0;
	&:after {
		content: '';
		display: table;
		clear: both;
	}
`;
