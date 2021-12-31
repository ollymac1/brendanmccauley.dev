import { ReactComponent as Logo } from '../../assets/img/fox.svg';

function FoxLogo({ height, mb }) {
	return <Logo style={{ height: `${height}`, marginBottom: `${mb}` }} />;
}

export default FoxLogo;
