import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/fox.svg';

function FoxLogo({ height, mb }) {
	return (
		<Link to='/'>
			<Logo style={{ height: `${height}`, marginBottom: `${mb}` }} />
		</Link>
	);
}

export default FoxLogo;
