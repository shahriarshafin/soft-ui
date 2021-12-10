import { Container, Row } from 'react-bootstrap';
import ProfileCard from '../components/ProfileCard';
import SectionInfo from '../components/SectionInfo';

const TeamSection = () => {
	const profiles = [
		{
			name: 'Shahriar Shafin',
			designation: 'FOUNDER & CEO',
			dimage:
				'https://raw.githubusercontent.com/shahriarshafin/flat-design/main/assets/images/profile1.png?token=AHVY5NRMKKNTL53PFVTVMJTBXSI6U',
			quote:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae quasi',
		},
		{
			name: 'Kendall Andrew',
			designation: 'GRAPHIC DESIGNER',
			dimage:
				'https://raw.githubusercontent.com/shahriarshafin/flat-design/main/assets/images/profile2.png?token=AHVY5NRAG3AVNYSGEXX64LTBXSJAO',

			quote:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae quasi',
		},
		{
			name: 'Gina Andrew',
			designation: 'UI/UX DESIGNER',
			dimage:
				'https://raw.githubusercontent.com/shahriarshafin/flat-design/main/assets/images/profile3.png?token=AHVY5NQBBHYCWEUCCYMKPKLBXSJA4',
			quote:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae quasi',
		},
		{
			name: 'Alec Thompson',
			designation: 'FRONT-END DEVELOPER',
			dimage:
				'https://raw.githubusercontent.com/shahriarshafin/flat-design/main/assets/images/profile4.png?token=AHVY5NXH3RVOQDPW2OFKKUDBXSJBI',
			quote:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae quasi',
		},
	];

	return (
		<>
			<Container>
				<SectionInfo
					Heading='Meet our Team'
					Description='lorem ipsum dolor sit amet aliquip ex ea commodo consequat.'
				/>
				<Row>
					{profiles.map((i) => {
						return (
							<ProfileCard
								key={i}
								ProfileName={i.name}
								Designation={i.designation}
								ProfileImage={i.dimage}
								ProfileQuote={i.quote}
							/>
						);
					})}
				</Row>
			</Container>
		</>
	);
};

export default TeamSection;
