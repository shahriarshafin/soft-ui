import Head from 'next/head';

const Heading = (props) => {
	const { title } = props;
	return (
		<>
			<Head>
				<meta charset='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />

				<title>{title}</title>
			</Head>
		</>
	);
};

export default Heading;
