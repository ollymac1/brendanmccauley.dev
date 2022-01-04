import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Helmet from 'react-helmet';
import relativeTime from 'dayjs/plugin/relativeTime';
import MainLayout from '../components/mainLayout/MainLayout';
import { Body, Common, Long, Short } from './Page.styles';
import Button from '../components/button/Button';
import { Link } from 'react-router-dom';

function About() {
	const [long, setLong] = useState(false);
	const [ageMillis, setAgeMillis] = useState(0);

	dayjs.extend(relativeTime);
	const age = dayjs().from(dayjs('1987-09-25'), true);

	const calcAgeMills = () => {
		const timeOfBirth = 559566000000;
		const timeNow = dayjs().valueOf();
		return timeNow - timeOfBirth;
	};

	useEffect(() => {
		const interval = setInterval(() => setAgeMillis(calcAgeMills()), 400);
		return () => {
			clearInterval(interval);
		};
	}, []);

	const handleOnClick = () => {
		setLong(!long);
		console.log('click');
	};
	return (
		<MainLayout>
			<Helmet>
				<title>About | Brendan McCauley</title>
				<meta name='description' content='About Brendan McCauley' />
			</Helmet>
			<Body>
				{long ? (
					<Long>
						<h3>I quit corporate to code... here's why... </h3>
						<h4>Aviation</h4>
						<p>
							I always thought my dream was to work for a global airline,
							travelling the world pulling together regional strategies that
							profitably connect people from one continent to another. It seemed
							like an appropriate dream given my BA in Airline & Airport
							Management. I gravitated towards the commercial aspect of the
							industry. As a{' '}
							<span>
								{' '}
								commercial manager for British Airways and Etihad Airways for
								almost 15 years
							</span>
							, I gained a wealth of experience in
							<span>
								{' '}
								pricing, revenue management and commercal strategy
							</span>{' '}
							in the UK and the Middle East.
						</p>
						<p>
							But I always kind of just felt... meh. I yearned to do something
							more creative, something more technical and exciting.
						</p>
						<p>
							I <span>self-taught</span> and ‘side hustled’ my way through{' '}
							WordPress, a little PHP and{' '}
							<span>JavaScript alongside my aviation career.</span> I enrolled
							on a<span> MERN stack bootcamp</span> in my spare time and picked
							up some small paid projects along the way. I loved it, but I was
							never brave enough to jump in with both feet.
						</p>
						<h4>When life has other ideas</h4>
						<p>
							My first son was born in June 2021. The nursery had been decorated
							in time for his arrival; hospital bags had been packed and a car
							seat had been prepared. Amy and I discussed the car seat in
							detail. In the end, we decided to spend a little more on a model
							that would last us for quite a few years.
						</p>
						<p>
							I never imagined I would have to remove that car seat not years,
							but days after installing it.
						</p>
						<p>
							Despite a healthy pregnancy, <span>Fox</span> suffered a severe
							lack of oxygen during labour and was never able to leave the
							hospital with us. After a short struggle in intensive care, he
							passed away a few days later.
						</p>
						<p>
							My reaction to Amy's pregnancy at first was complete shock, but
							the feelings soon evolved into excitement. For 9 months I found
							myself planning his life out; how he’d dress, how I could{' '}
							<s>force</s> encourage him to play piano, what sports he’d play,
							when we’d go to Disneyland, when we’d go to DisneyWORLD, how much
							we’d need to start saving for his university fees, etc. It was
							100% my plan to live vicariously through him (don't judge!), since
							he would surely like all the same things as I did, right?!
						</p>
						<p>
							When all that is taken away in an instant, there is{' '}
							<span>no greater lesson learned than the value of life.</span> The
							past few months have undoubtedly been the toughest of my life but
							I have learned so much from them. <span>Follow your passion</span>{' '}
							and make the most out of your time today.
						</p>
						<p>Time really is precious.</p>
						<h4>Do what you love and love what you do.</h4>
						<p>
							I intended to take a couple of months off after Foxy was born and
							get back into a similar corporate routine, but you won't find me
							back there any time soon.
						</p>
						<p>
							Coding a registration form with new technology and seeing it used
							in production or creating new products and seeing the first
							dollars from paying customers is far more appealing to me.
						</p>
						<p>
							After cutting corporate, I went full-time into software
							development by working with a local company and putting everything
							I'd learned from side hustling into practice. With them,{' '}
							<span>
								I have designed, planned, developed and pushed to production a
								bespoke membership management
							</span>{' '}
							and booking system for a gym and collection of private fitness
							studios.
						</p>

						<p>
							Learn more about the project{' '}
							<u>
								<Link to='/work'>here</Link>
							</u>
						</p>

						<p>
							Interested in working with me on a project?{' '}
							<u>
								<a href='mailto:brenmcc1@gmail.co'> Get in touch.</a>
							</u>
						</p>
					</Long>
				) : (
					<Short>
						<h4>Hi 👋 I'm Brendan</h4>
						<p>A self-taught developer from Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿.</p>
						<p>
							{age} old or about {ageMillis} milliseconds.
						</p>
						<p>Lover of anything geeky, dogs and learning new things!</p>

						<p>
							I am a born opportunist. You remember that guy that always tried
							to sell you something in school? ✋ Hi.
						</p>

						<p>
							Profiting from opportunities is a huge thrill for me. As a side
							hustler, I've had a long list of success stories, including
							putting together an eCommerce business that I made a healthy
							profit from during COVID (lockdown rocketed demand).
						</p>

						<h4>
							Due to a significant event in my life, I stopped side-hustling as
							a developer for fun.
						</h4>
						<p>
							I left my successful corporate career in aviation to pursue my
							passion for technology full-time.{' '}
							<span style={{ cursor: 'pointer' }} onClick={handleOnClick}>
								My full story
							</span>{' '}
							explains why I made this decision.
						</p>

						<p>
							I use HTML, CSS, and JavaScript. Though constantly changing, my
							focus right now is React.js and Firebase but I'm actively
							exploring Next.js and React Native for some future projects.
						</p>
					</Short>
				)}
				<Common>
					<h4>My SKills/Experience</h4>
					<ul>
						<li>Photoshop / Figma</li>
						<li>React.js</li>
						<li>Node.js</li>
						<li>Next.js</li>
						<li>Gatsby</li>
						<li>Firebase - Auth / Firestore / Cloud Functions</li>
						<li>MongoDB</li>
						<li>Redux</li>
						<li>Java</li>
						<li>SASS</li>
						<li>Styled Components</li>
						<li>Git / Github</li>
					</ul>
					<Button onClick={handleOnClick}>
						{!long ? 'Read my full story' : 'Back to the short version'}
					</Button>
					<Button to='/work'>View my work</Button>
				</Common>
			</Body>
		</MainLayout>
	);
}

export default About;
