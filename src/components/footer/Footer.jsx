import { FooterStyles } from './Footer.styles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdOutlineAlternateEmail } from 'react-icons/md';

function Footer() {
	return (
		<FooterStyles>
			<a target='_blank' rel='noreferrer' href='https://github.com/ollymac1'>
				<AiFillGithub color={'white'} />
			</a>
			<a
				target='_blank'
				rel='noreferrer'
				href='https://www.linkedin.com/in/brendanmccauley1/'
			>
				<AiFillLinkedin color={'white'} />
			</a>
			<a
				rel='noreferrer'
				target='_blank'
				href='mailto:brenmcc1@gmail.com?subject=I really need to hire you!'
			>
				<MdOutlineAlternateEmail color={'white'} />
			</a>
		</FooterStyles>
	);
}

export default Footer;
