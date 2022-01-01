import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;  
	font-family: ${({ theme }) => theme.fonts.body};
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

h2{
	color: ${({ theme }) => theme.colors.orange};
	
}

h3{
	color: ${({ theme }) => theme.colors.orange};
	letter-spacing: 1px;
}

h4{
	color: ${({ theme }) => theme.colors.orange2};
	letter-spacing: 1px;
}



a{
	text-decoration: none;
	color: inherit;
}

p, ul{
	color: ${({ theme }) => theme.colors.white}
}

ul{
	margin-left:15px;
}



`;
