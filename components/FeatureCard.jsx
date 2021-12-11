import styled from 'styled-components';
const FeatureCard = (props) => {
	const { icon, Title } = props;
	return (
		<>
			<div className='col-12 col-lg-3 col-md-6'>
				<CardWrapper>
					<WrapChild>
						<Box>{icon}</Box>
						<h5>{Title}</h5>
					</WrapChild>
				</CardWrapper>
			</div>
		</>
	);
};

export default FeatureCard;

const CardWrapper = styled.div`
	background-color: #e6e7ee;
	padding: 20px;
	border-radius: 8px;
	margin-top: 1.5rem !important;
	border: 2px solid #d1d9e6;
	box-shadow: 6px 6px 12px #b8b9be, -6px -6px 12px #fff !important;
	cursor: pointer;
	transition: all 0.2s ease;
	&:hover {
		border: 2px solid #5068e2;
	}
	h5 {
		margin: 10px;
		font-size: 14px;
		color: rgb(33, 33, 33);
		font-weight: 500;
		line-height: 18px;
	}
`;
const Box = styled.div`
	min-width: 72px;
	min-height: 72px;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #5068e2;
	background-color: rgba(155, 164, 211, 0.199);
	svg {
		font-size: 1.3rem;
	}
`;
const WrapChild = styled.div`
	display: flex;
	align-items: center;
`;
