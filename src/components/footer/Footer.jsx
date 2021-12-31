import { FooterStyles } from './Footer.styles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdOutlineAlternateEmail } from 'react-icons/md';

function Footer() {
	return (
		<FooterStyles>
			<AiFillGithub color={'white'} />
			<AiFillLinkedin color={'white'} />
			<MdOutlineAlternateEmail color={'white'} />
		</FooterStyles>
	);
}

export default Footer;
