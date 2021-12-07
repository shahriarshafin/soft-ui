import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvira } from 'react-icons/fa';
import styled from 'styled-components';

const Logo = () => {
	return (
		<>
			<BrandLogo>
				<FaEnvira />
			</BrandLogo>
		</>
	);
};

export default Logo;
const BrandLogo = styled.div`
	border-radius: 50%;
	/* padding: 10px; */
	height: 50px;
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	text-align: center;
	box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
	border: 1px solid #5068e2;
	svg {
		font-size: 2rem;
		color: #5068e2;
	}
`;
