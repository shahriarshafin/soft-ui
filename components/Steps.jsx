import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Steps = (props) => {
	const { StepNo, StepTitle } = props;
	return (
		<>
			<section>
				<div className='container'>
					<FormSteps>
						<StepsItem>
							<ItemContent>
								<ItemIcon>{StepNo}</ItemIcon>
								<ItemLine />
								<ItemText>{StepTitle}</ItemText>
							</ItemContent>
						</StepsItem>
					</FormSteps>
				</div>
			</section>
		</>
	);
};

export default Steps;
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
const StepsItem = styled.div`
	padding: 0;
	position: relative;
	display: block;
	float: left;
	width: 20%;
	text-align: center;
`;

const ItemContent = styled.div`
	display: inline-block;
`;
const ItemIcon = styled.span`
	border: 1px solid #d1d9e6;
	cursor: pointer;
	box-shadow: 6px 6px 12px #b8b9be, -6px -6px 12px #fff;
	background: #eceff1;
	color: #8191ab;
	display: block;
	border-radius: 100%;
	text-align: center;
	width: 70px;
	height: 70px;
	line-height: 67px;
	margin: 0 auto 10px auto;
	position: relative;
	font-size: 23px;
	font-weight: 700;
	z-index: 2;
	transition: all 0.2s ease;
	&:hover {
		border: 1px solid #5068e2;
		color: #5068e2;
	}
`;

const ItemText = styled.span`
	font-size: 15px;
	color: #8191ab;
	font-weight: 500;
`;

const ItemLine = styled.span`
	display: inline-block;
	height: 3px;
	width: 100%;
	background: #cfd8dc;
	/* float: left; */
	position: absolute;
	left: -50%;
	top: 34px;
	z-index: 1;
`;
