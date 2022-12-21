import {
	GreenBgPurchaseChoiceBtn,
	WhiteBgPurchaseChoiceBtn,
} from "../components/Buttons";
import Navbar from "../components/Navbar";
import SocialMediaIcons from "../components/SocialMediaIcons";

import homepage from "../images/heroImages/homepage_hero_bg.png";

const Home = () => {
	// push to github and deploy
	// mobile view
	return (
		<div className="HomeBg container">
			<SocialMediaLinks />
			<Navbar />
			<Hero />
		</div>
	);
};

const Hero = () => {
	return (
		<div className="ms-4 my-5 py-5">
			{/* <div className="row"> */}
			<div className="col-md-7">
				<div className="w-75">
					<p className="text-black mb-0 text-opacity-100">LOREM IPSUM</p>

					<h1 className="text-opacity-100">
						Fastest <span className="greenText">Delivery</span> and{" "}
						<span className="greenText">Easy Pickup</span>
					</h1>

					<p className="text-black text-opacity-100 w-75">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolore
						possimus sequi assumenda nemo? Illo consequuntur aliquam illum vitae
						porro?
					</p>
				</div>

				<div className="d-flex">
					<div className="me-3">
						<GreenBgPurchaseChoiceBtn
							text="Soup/Lunch"
							link={
								"https://docs.google.com/forms/d/e/1FAIpQLSd1uQcGEOA2AUZGqdqPcaI3SIG5d9mIL2EOKSXZz1xGCUfwkQ/viewform?usp=sharing"
							}
						/>
					</div>
					<WhiteBgPurchaseChoiceBtn
						text="Foodstuff"
						link={"https://forms.gle/Mvz2DNsXWG5xi6iR8"}
					/>
				</div>
			</div>
		</div>
		// </div>
	);
};

const SocialMediaLinks = () => {
	return (
		<>
			<div className="d-flex flex-column position-fixed top-50 end-0 translate-middle-y me-2 d-md-block d-none d-sm-none">
				<SocialMediaIcons />
			</div>
			<div className="d-flex flex-column position-fixed top-50 start-0 ms-2 translate-middle-y d-md-none d-sm-block">
				<SocialMediaIcons />
			</div>
		</>
	);
};

export default Home;
