import { useState } from 'react';
import logo from '../../../../assets/img/paua/Paua-50px.png';
import Helmet from 'react-helmet';
import {
	SplashScreenContainer,
	PasswordContainer,
	ShowPasswordContainer,
	SubmitButton,
	FormGroup,
} from './SplashScreen.styles';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function SplashScreen({ setAuth }) {
	const [showPassword, setShowPassword] = useState(false);
	const [input, setInput] = useState('');
	const [error, setError] = useState('');

	const onChange = (e) => {
		setInput(e.target.value);
		setError('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input === 'paua2022') {
			// I know this is not secure! Usually would be a .ENV
			setAuth(true);
		} else {
			setError(' ⚠️ Incorrect password, please try again');
		}
	};
	console.log();

	return (
		<SplashScreenContainer>
			<Helmet>
				<title>PAUA Login</title>
				<meta name='description' content='Login to my PAUA demo' />
			</Helmet>
			<img src={logo} alt='Paua' />
			<FormGroup>
				<PasswordContainer>
					<input
						placeholder='Enter your password to continue'
						type={showPassword ? 'text' : 'password'}
						value={input}
						onChange={onChange}
					/>
					<ShowPasswordContainer onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? (
							<AiFillEye color='#0eb3c2' />
						) : (
							<AiFillEyeInvisible color='#0eb3c2' />
						)}
					</ShowPasswordContainer>
				</PasswordContainer>
				<SubmitButton type='submit' onClick={handleSubmit}>
					ENTER
				</SubmitButton>
				<p style={{ color: '#0eb3c2', fontSize: '.7rem', textAlign: 'center' }}>
					{error}
				</p>
			</FormGroup>
		</SplashScreenContainer>
	);
}

export default SplashScreen;
