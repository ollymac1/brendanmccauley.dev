import { KeyPointsContainer, KeyPoint, List } from './KeyPoints.styles';
import img1 from '../../../../assets/img/paua/Paua_card_management_image.svg';
import img2 from '../../../../assets/img/paua/Cards_pink.png';
import img3 from '../../../../assets/img/paua/Paua-single-invoice.svg';
import img4 from '../../../../assets/img/paua/Paua-mobile-car-ev-charging.svg';

function KeyPoints() {
	return (
		<KeyPointsContainer>
			<h3>Every Plan Includes</h3>
			<List>
				<KeyPoint>
					<img src={img1} alt='' />
					<h4>Paua fleet manager dashboard</h4>
					<p>
						One single dashboard to manage all your drivers. Manage cards and
						users, review expenses, monitor charging in real time, detect fraud
						and much more.
					</p>
				</KeyPoint>
				<KeyPoint>
					<img src={img2} alt='' />
					<h4>5 free Paua electric fuel cards</h4>
					<p>
						Paua electric fuel card enables drivers to start and stop a charge
						in the Paua network.
					</p>
				</KeyPoint>
				<KeyPoint>
					<img src={img3} alt='' />
					<h4>One single invoice</h4>
					<p>
						One single invoice for all your drivers so you can easily claim back
						VAT. No need to collect driver’s charging receipts.
					</p>
				</KeyPoint>
				<KeyPoint>
					<img src={img4} alt='' />
					<h4>Paua driver mobile app</h4>
					<p>
						The app enables drivers to find charge and pay in our network, even
						when you don’t have your paua electric fuel card with you.
					</p>
				</KeyPoint>
			</List>
		</KeyPointsContainer>
	);
}

export default KeyPoints;
