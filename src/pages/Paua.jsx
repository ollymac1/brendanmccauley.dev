import { useState } from 'react';
import Pricing from '../components/demos/paua/pricing/Pricing';
import SplashScreen from '../components/demos/paua/splashScreen/SplashScreen';
import { PauaContainer } from './Page.styles';

function Paua() {
	const [auth, setAuth] = useState(false);
	return (
		<PauaContainer>
			{!auth ? <SplashScreen setAuth={setAuth} /> : <Pricing />}
		</PauaContainer>
	);
}

export default Paua;
