import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;  
}

h1,h2,h3,h4,h5,h6{
font-family: ${({ theme }) => theme.fonts.heading};
text-transform: uppercase;
font-weight: 300;
}

h1{
	
	color: ${({ theme }) => theme.colors.white};
	letter-spacing: 5px;

	@media only screen and (max-width: 1100px) {
		font-size: 1rem;
	}
	
}

h4{
	color: ${({ theme }) => theme.colors.orange};
	

	
}

a,p{
	font-family: ${({ theme }) => theme.fonts.body};
}
`;
