import Image from 'next/image';
import Link from 'next/link';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import AppStoreIcon from '../assets/images/AppStoreIcon.svg';
import PlayStoreIcon from '../assets/images/PlayStoreIcon.svg';
import FooterLogo from '../components/FooterLogo';

const Footer = () => {
	return (
		<>
			<FooterWrapper>
				<Container>
					<Row>
						<div className='col-12 col-md-6 col-lg-4'>
							<Link href='/' passHref>
								<a className='text-decoration-none'>
									<FooterLogo />
								</a>
							</Link>

							<Description>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
								libero id et, in gravida. Sit diam duis mauris nulla cursus.
								Erat et lectus vel ut sollicitudin amet.
							</Description>
							<StoreWrapper>
								<Image src={PlayStoreIcon} alt='Play Store' />
								<Image src={AppStoreIcon} alt='App Store' />
							</StoreWrapper>
						</div>
						<LinkWrapper className='col-12 col-md-6 col-lg-2'>
							<LinkHeading>About Us</LinkHeading>
							<a href=''>Carrer</a>
							<a href=''>Our Stores</a>
							<a href=''>Our Cares</a>
							<a href=''>Terms & Conditions</a>
							<a href=''>Privacy & Policy</a>
						</LinkWrapper>
						<LinkWrapper className='col-12 col-md-6 col-lg-3'>
							<LinkHeading>Customer Care</LinkHeading>
							<a href=''>Help Center</a>
							<a href=''>How to Buy</a>
							<a href=''>Track Your Order</a>
							<a href=''>Corporate & Bulk Purchasing</a>
							<a href=''>Return & Funds</a>
						</LinkWrapper>
						<LinkWrapper className='col-12 col-md-6 col-lg-3'>
							<LinkHeading>Contact Us</LinkHeading>
							<ContactDetails>
								70 Washington Square South, New York, NY 10012, United States
							</ContactDetails>
							<ContactDetails>
								Email:
								<a href='mailto:connect.shafin@gmail.com'>
									connect.shafin@gmail.com
								</a>
							</ContactDetails>
							<ContactDetails>
								Phone: <a href='tel:+4733378901'>+ 47 3 337 8 901</a>
							</ContactDetails>
						</LinkWrapper>
					</Row>
				</Container>
			</FooterWrapper>
		</>
	);
};

export default Footer;

const FooterWrapper = styled.footer`
	background-color: #5068e2;
	padding-top: 80px;
	padding-bottom: 80px;
`;
const Description = styled.p`
	color: #e6e7ee;
	margin-top: 20px;
	margin-bottom: 15px;
	font-size: 14px;
`;

const StoreWrapper = styled.div`
	cursor: pointer;
	img {
		-webkit-user-drag: none;
		user-select: none;
	}
`;
const LinkHeading = styled.div`
	font-size: 25px;
	font-weight: 600;
	margin-top: 24px;
	margin-bottom: 20px;
	line-height: 1;
	color: white;
`;
const LinkWrapper = styled.div`
	a {
		display: block;
		padding: 0.3rem 0rem;
		color: rgb(230 231 238 / 65%);
		cursor: pointer;
		text-decoration: none;
		font-size: 14px;
		margin-left: 0.5rem;
		&:hover {
			color: rgb(255 255 255);
		}
	}
`;
const ContactDetails = styled.div`
	display: flex;
	align-items: center;
	color: #e6e7ee;
	p {
		padding-top: 3px;
		padding-bottom: 3px;
		font-size: 14px;
	}

	a {
		color:inherit &:hover {
			color: white;
		}
	}
`;
