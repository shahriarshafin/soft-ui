import { FaEnvira } from 'react-icons/fa';
import styled from 'styled-components';

const FooterLogo = () => {
	return (
		<>
			<LogoWrapper>
				<BrandLogo>
					<FaEnvira />
				</BrandLogo>
				<h4>Soft UI</h4>
			</LogoWrapper>
		</>
	);
};

export default FooterLogo;

const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	h4 {
		margin-top: 0.5rem;
		margin-left: 1rem;
		color: white;
	}
`;
const BrandLogo = styled.div`
	border-radius: 50%;
	height: 50px;
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	text-align: center;
	border: 1px solid #e6e7ee;
	svg {
		font-size: 2rem;
		color: #e6e7ee;
	}
`;
