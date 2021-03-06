import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Container, Nav, Navbar, NavLink, Offcanvas } from 'react-bootstrap';
import {
	AiOutlineAlignLeft,
	AiOutlineBarChart,
	AiOutlineDatabase,
	AiOutlineHome,
	AiOutlineInfoCircle,
	AiOutlineMessage,
} from 'react-icons/ai';
import { FaDribbble, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
import Logo from './Logo';

const BootNav = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const router = useRouter();

	const NavItems = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'About',
			link: '/about',
		},
		{
			name: 'Contact',
			link: '/contact',
		},
		{
			name: 'Services',
			link: '/services',
		},
		{
			name: 'Products',
			link: '/products',
		},
	];
	const icons = [
		AiOutlineHome,
		AiOutlineInfoCircle,
		AiOutlineMessage,
		AiOutlineBarChart,
		AiOutlineDatabase,
	];
	return (
		<>
			<Navbar expand='lg' className='navbar-light bg-grey sticky-top'>
				<Container>
					<Navbar.Brand>
						<Link href='/' passHref>
							<a className='text-decoration-none'>
								<Logo />
							</a>
						</Link>
					</Navbar.Brand>

					<div className='collapse navbar-collapse'>
						<Nav className='navbar-nav ms-auto me-5 mb-lg-0'>
							{NavItems.map((item, index) => (
								<>
									<Link href={item.link} className='nav-link' passHref>
										<NavLink key={index} active={router.pathname === item.link}>
											{item.name}
										</NavLink>
									</Link>
								</>
							))}
						</Nav>
					</div>

					<div className='d-flex align-items-center'>
						<a
							href='https://github.com/shahriarshafin/leaf'
							target='_blank'
							rel='noopener noreferrer'
						>
							<NavLogo>
								<FaGithub />
							</NavLogo>
						</a>
						<a
							href='https://dribbble.com/shahriarshafin'
							target='_blank'
							rel='noopener noreferrer'
						>
							<NavLogo>
								<FaDribbble />
							</NavLogo>
						</a>
						<SignUpBtn>Sign Up</SignUpBtn>
						<ToggleBtn onClick={handleShow}>
							<AiOutlineAlignLeft />
						</ToggleBtn>
					</div>
				</Container>

				{/* .............SIDEBAR............ */}
				<Offcanvas show={show} onHide={handleClose}>
					<Offcanvas.Header closeButton>
						<Navbar.Brand href='/'>
							<Logo />
						</Navbar.Brand>
					</Offcanvas.Header>
					<CanvasHeader />
					<Offcanvas.Body>
						<Nav className='justify-content-end flex-grow-1 pe-3'>
							<ul className='nav nav-pills flex-column mb-auto'>
								{NavItems.map((item, index) => {
									const Icon = icons[index];
									return (
										<>
											<SideNavItem>
												<Link href={item.link}>
													<a
														className={
															router.pathname === item.link
																? 'active-nav-link'
																: ''
														}
														key={index}
													>
														{<Icon />}
														{item.name}
													</a>
												</Link>
											</SideNavItem>
										</>
									);
								})}
							</ul>
						</Nav>
					</Offcanvas.Body>
				</Offcanvas>
				{/* .............SIDEBAR............ */}
			</Navbar>
		</>
	);
};

export default BootNav;

const NavLogo = styled.div`
	svg {
		font-size: 1.5rem;
		color: rgba(107, 114, 128, 1);
		margin-right: 1rem;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out;
		&:hover {
			color: rgba(0, 0, 0, 0.7);
		}
	}
`;

const SignUpBtn = styled.button`
	transition: all 0.2s ease;
	letter-spacing: 0.025em;
	font-size: 1rem;
	font-weight: 600;
	color: #5068e2;
	border-color: #d1d9e6 !important;
	box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	border-radius: 0.25rem;
	margin-right: 1rem;

	&:hover {
		border-color: #5068e2 !important;
	}
`;

const ToggleBtn = styled.button`
	padding: 0.25rem 0.75rem;
	font-size: 1.25rem;
	line-height: 1;
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	border-color: rgba(0, 0, 0, 0.1);
	@media (min-width: 992px) {
		display: none;
	}
	&:focus {
		box-shadow: 0 0 0 0rem;
		border-color: #5068e2;
	}
	svg {
		color: #5068e2;
		font-weight: 300;
		font-size: 28px;
	}
`;

const CanvasHeader = styled.div`
	border-bottom: 2px solid #5068e2;
`;

const SideNavItem = styled.li`
	margin-top: 0.25rem;
	a {
		color: rgba(0, 0, 0, 0.7);
		display: block;
		background: 0px 0px;
		border: 0px;
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		text-decoration: none;
		user-select: none;
		transition: color 0.15s ease-in-out 0s,
			background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s;
		&:hover {
			color: #5068e2;
		}
	}
	svg {
		font-size: 1.25rem;
		margin-right: 0.35rem;
	}
`;
