import { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import MainLayout from '../components/mainLayout/MainLayout';
import { Body, Common, Long, Short } from './Page.styles';
import Button from '../components/button/Button';

function About() {
	const [long, setLong] = useState(false);

	dayjs.extend(relativeTime);
	const age = dayjs().from(dayjs('1987-09-25'), true);

	const calcAgeMills = () => {
		const timeOfBirth = 559566000000;
		const timeNow = dayjs().valueOf();
		return timeNow - timeOfBirth;
	};

	const ageMillis = calcAgeMills();

	const handleOnClick = () => {
		setLong(!long);
		console.log('click');
	};
	return (
		<MainLayout>
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
							Management. I gravitated towards the commercial side of Aviation,
							and progressed over a{' '}
							<span>
								ten year+ career as a commercial manager in the UK and the
								Middle East{' '}
							</span>{' '}
							for British Airways and Etihad Airways.{' '}
						</p>
						<p>
							But I always kind of just felt... meh. I yearned to do something
							more creative, yearned for something more technical and exciting.
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
							On the 13th of June 2021 my first son was born. We’d followed all
							the advice; decorating the nursery in good time, packing hospital
							bags and securing a car seat in preparation for his arrival. I
							recall the specific discussions with Amy when deciding on the car
							seat. We opted to spend a little more for a versatile model that
							would see us through for a few years.
						</p>
						<p>
							Never in my wildest thoughts did I think I’d be removing that car
							seat not years, but days later.
						</p>
						<p>
							After a healthy pregnancy, our son, <span>Fox</span> suffered from
							an acute lack of oxygen during labour and never made it out of
							hospital with us. He past away after a short fight a few days
							later in intensive care.
						</p>
						<p>
							When we first discovered Amy’s pregnancy I was absolutely bricking
							it but the emotions quickly transitioned to excitement. For 9
							months I found myself planning his life out; how he’d dress, how I
							could <s>force</s> encourage him to play piano, what sports he’d
							play, when we’d go to Disneyland, when we’d go to DisneyWORLD, how
							much we’d need to start saving for his university fees and so much
							more. I 100% planned on living vicariously through him (don’t
							judge me!), I mean he’d surely love all the same stuff I did,
							right 😏?!
						</p>
						<p>
							<span>There’s no bigger lesson</span> on how precious life is than
							having all that ripped away in a moment. These past few months
							have undoubtedly been the hardest moments of my life but it’s
							really taught me the value of it. How not to become complacent and
							most importantly to follow your passion and make the most of your
							time today.
						</p>
						<p>Time really is precious.</p>
						<h4>Do what you love and love what you do.</h4>
						<p>
							When Foxy was born my plan was to take a couple of months or so
							out and get back into a similar corporate routine but there’s no
							way you’ll catch me back in that space now.
						</p>
						<p>
							I get much more of a kick out of coding a registration form with
							some new technology and seeing it used in production or creating
							new products and seeing the first dollars from paying customers
							stack up.
						</p>
						<p>
							I cut corporate and started my full time ‘developer journey’ by
							working with a local company and putting in to practice everything
							I’ve leaner from the years of side hustling. I’ve worked full time
							with them to brand, plan, develop and push to production a bespoke
							membership management and booking system for a gym and collection
							of private fitness studios.
						</p>

						<p>Learn more about the project here</p>

						<p>Interested in working with me on a project? Get in touch.</p>
					</Long>
				) : (
					<Short>
						<h4>Hi 👋 I'm Brendan</h4>
						<p>
							I'm a self-taught developer from Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿 {age} old or about{' '}
							{ageMillis} milliseconds and lover of anything geeky, dogs and
							learning new things!
						</p>

						<p>
							I'm a massive opportunist. Remember that guy who was always trying
							to sell you something at school? ✋ Hi.
						</p>

						<p>
							I get a massive buzz from capitalising on opportunities. Always
							happy to speak about my long list of side hustles over the years,
							which includes pulling together a home gym eCommerce business in
							Dubai over the course of a few days during COVID (lockdown
							rocketed demand 🚀) and making a healthy profit along the way.
						</p>

						<h4>
							After a significant life event, I decided to stop 'side-husting'
							as a developer for fun.
						</h4>
						<p>
							I quit a successful corporate career in aviation and followed my
							passion for developing technology full-time. If you want to know
							more about why I did this,{' '}
							<span style={{ cursor: 'pointer' }} onClick={handleOnClick}>
								read my full story
							</span>
						</p>

						<p>
							I use HTML, css, and JavaScript. Though constantly changing, my
							focus right now is React.js and Firebase but I'm actively kicking
							off some learning on Next.js and React Native.
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
