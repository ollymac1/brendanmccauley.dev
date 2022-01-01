import { ButtonStyles } from './Button.styles';
import { Link } from 'react-router-dom';

function Button({ children, to }) {
	return (
		<ButtonStyles>
			<Link to={to}>{children}</Link>
		</ButtonStyles>
	);
}

export default Button;
