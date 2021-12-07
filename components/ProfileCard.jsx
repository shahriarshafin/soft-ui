import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import Profile1 from '../assets/images/profile1.png';

const ProfileCard = (props) => {
	const { ProfileName, Designation, ProfileQuote } = props;
	return (
		<>
			<Col xm={12} md={6}>
				<Card className='card'>
					<Row className='g-0'>
						<FlexAlignJustifyCenter>
							<Col md={4}>
								<TeamImage>
									<Image src={Profile1} alt='member' />
								</TeamImage>
							</Col>
							<Col md={8}>
								<div className='card-body'>
									<CardTitle>{ProfileName}</CardTitle>

									<p className='card-text'>
										<small className='text-muted fw-bold'>{Designation}</small>
									</p>

									<CardText>{ProfileQuote}</CardText>

									<IconWrapper>
										<a href='' target='_blank'>
											<FaFacebook />
										</a>
										<a href='' target='_blank'>
											<FaTwitter />
										</a>
										<a href='' target='_blank'>
											<FaLinkedinIn />
										</a>
										<a href='' target='_blank'>
											<FaFacebook />
										</a>
									</IconWrapper>
								</div>
							</Col>
						</FlexAlignJustifyCenter>
					</Row>
				</Card>
			</Col>
		</>
	);
};

export default ProfileCard;

const Card = styled.div`
	background-color: transparent;
	max-width: 540px;
	margin-bottom: 1rem;
	border: 0px !important;
`;
const FlexAlignJustifyCenter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const TeamImage = styled.div`
	img {
		border-radius: 0.3rem;
		box-shadow: 6px 6px 12px #b8b9be, -6px -6px 12px #fff;
		max-width: 100%;
		height: auto;
		cursor: pointer;
		-webkit-user-drag: none;
		user-select: none;
		filter: grayscale(100%);
		transition: 0.3s ease-in-out;
		&:hover {
			-webkit-filter: grayscale(0);
			filter: grayscale(0);
		}
	}
`;
const CardTitle = styled.h5`
	margin-bottom: 0.5rem;
	color: #3c4858;
`;
const CardText = styled.p`
	font-size: 0.875em;
	margin-bottom: 0.5rem;
	color: #6c757d;
	margin-bottom: 1rem;
`;
const IconWrapper = styled.div`
	svg {
		font-size: 1.25rem;
		color: rgba(107, 114, 128, 1);
		margin-right: 0.5rem;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out;
		&:hover {
			color: rgba(0, 0, 0, 0.7);
		}
	}
`;
