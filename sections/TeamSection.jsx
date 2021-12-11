import { Container, Row } from 'react-bootstrap';
import ProfileCard from '../components/ProfileCard';
import SectionInfo from '../components/SectionInfo';

const TeamSection = () => {
	const profiles = [
		{
			name: 'Shahriar Shafin',
			designation: 'FOUNDER & CEO',
			dimage:
				'https://raw.githubusercontent.com/shahriarshafin/soft-ui/main/assets/images/profile1.png?token=AHVY5NSBFO3HT47EZPJDEN3BXXZUM',
			quote:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae quasi',
		},
		{
			name: 'Kendall Andrew',
			designation: 'GRAPHIC DESIGNER',
			dimage:
				'https://raw.githubusercontent.com/shahriarshafin/soft-ui/main/assets/images/profile2.png?token=AHVY5NWFERY5Y5DMLXOUW2TBXXZVE',

			quote:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae quasi',
		},
		{
			name: 'Gina Andrew',
			designation: 'UI/UX DESIGNER',
			dimage:
				'https://raw.githubusercontent.com/shahriarshafin/soft-ui/main/assets/images/profile3.png?token=AHVY5NVITFGAENSHTZFAVVTBXXZVS',
			quote:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae quasi',
		},
		{
			name: 'Alec Thompson',
			designation: 'FRONT-END DEVELOPER',
			dimage:
				'https://raw.githubusercontent.com/shahriarshafin/soft-ui/main/assets/images/profile4.png?token=AHVY5NVM3UXTE3TTHJHG25DBXXZWA',
			quote:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae quasi',
		},
	];

	return (
		<>
			<section>
				<Container>
					<SectionInfo
						Heading='Meet our Team'
						Description='lorem ipsum dolor sit amet aliquip ex ea commodo consequat.'
					/>
					<Row>
						{profiles.map((item) => {
							return (
								<ProfileCard
									key={item}
									ProfileName={item.name}
									Designation={item.designation}
									ProfileImage={item.dimage}
									ProfileQuote={item.quote}
								/>
							);
						})}
					</Row>
				</Container>
			</section>
		</>
	);
};

export default TeamSection;
