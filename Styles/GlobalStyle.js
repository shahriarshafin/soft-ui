import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@100;300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	scroll-behavior: smooth;
}
.bg-grey {
	background-color: #e6e7ee;
	border-bottom: 2px solid #5068e2;
}

body {
	background-color: #e6e7ee;
	font-family: 'Inter', sans-serif;
}

section {
	padding-top: 40px;
	padding-bottom: 40px;
}
${'' /* ...........NAVBAR.......... */}
.navbar-nav {
	color: rgba(17, 24, 39, 1);
	font-weight: 500;
}
.navbar-toggler:focus {
	box-shadow: 0 0 0 0rem;
	border-color: #5068e2;
}
.offcanvas-start {
	width: 261px;
}

.offcanvas-header {
	padding: 0.5rem 1rem;
}
.active-nav-link {
	color: #fff!important;
	background-color: #5068e2!important;
}

`;

export default GlobalStyle;
