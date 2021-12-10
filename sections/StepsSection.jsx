import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Steps from '../components/Steps';
import GlobalStyle from '../Styles/GlobalStyle';
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
			<GlobalStyle />

			<section>
				<div className='container'>
					<FormSteps>
						{Step.map((i) => {
							return (
								<Steps key={i} StepNo={i.stepNo} StepTitle={i.stepTitle} />
							);
						})}
					</FormSteps>
				</div>
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
