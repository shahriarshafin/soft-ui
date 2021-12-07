import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '../Styles/GlobalStyle';

const _app = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
};

export default _app;
