import styled from 'styled-components';

export const SplashScreenContainer = styled.div`
	background: #fff;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	img {
		width: 150px;
	}
`;

export const FormGroup = styled.form`
	width: 300px;
`;

export const PasswordContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 5px;
	border: 2px solid #0eb3c2;
	padding: 5px 10px;
	border-radius: 5px;

	svg {
		transform: scale(1.3);
	}
	input {
		border: none;
		padding: 10px;
		background: transparent;
		width: 100%;
		font-size: 16px;

		&:focus {
			outline: none;
		}
	}
`;

export const ShowPasswordContainer = styled.div`
	cursor: pointer;
`;

export const SubmitButton = styled.button`
	cursor: pointer;
	background: #ff35cc;
	width: 100%;
	padding: 15px;
	border-radius: 5px;
	border: none;
	margin-top: 10px;
	color: white;
	transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);

	&:hover {
		background: #d82b87;
		transform: translateY(-1px);
		box-shadow: 0 10px 30px -15px #837b7b;
	}
`;
