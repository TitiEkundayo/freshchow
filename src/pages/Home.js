import {
	GreenBgPurchaseChoiceBtn,
	WhiteBgPurchaseChoiceBtn,
} from "../components/Buttons";
import Navbar from "../components/Navbar";
import whatsapp from "../images/SocialMediaIcons/whatsapp.svg";
import instagram from "../images/SocialMediaIcons/instagram.svg";
import facebook from "../images/SocialMediaIcons/facebook.svg";
import linkedin from "../images/SocialMediaIcons/linkedin.svg";
import email from "../images/SocialMediaIcons/email.svg";
import { SocialMediaIcon } from "../components/Icons";
// import SocialMediaIcons from "../components/SocialMediaIcons";

import homepage from "../images/heroImages/homepage_hero_bg.png";

const Home = () => {
	// push to github and deploy
	// mobile view
	return (
		<div className="HomeBg container">
			{/* <SocialMediaShowHide />
			<Navbar />
			<Hero /> */}

			<div className="row">
				<div className="">
					<SocialMediaShowHide />
				</div>
				<div className="">
					<Navbar />
					<Hero />
				</div>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<div className="ms-4 my-5 py-5">
			{/* <div className="row"> */}
			<div className="col-md-7">
				<div className="w-75 ms-3">
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

const SocialMediaShowHide = () => {
	return (
		<>
			<div>
				<div className="d-md-block d-none d-sm-none position-fixed top-50 end-0">
					<SocialMediaLinks />
				</div>
				<div className="d-md-none d-sm-block position-fixed top-50 start-1">
					<SocialMediaLinks />
				</div>
			</div>
		</>
	);
};
const SocialMediaLinks = () => {
	return (
		<div className="d-flex flex-column">
			{/* <div className="d-flex flex-column social_links"> */}
			<SocialMediaIcon icon={whatsapp} altText="whatsapp icon" />
			<SocialMediaIcon icon={instagram} altText="instagram icon" />
			<SocialMediaIcon icon={facebook} altText="facebook icon" />
			<SocialMediaIcon icon={linkedin} altText="linkedin icon" />
			<SocialMediaIcon icon={email} altText="email icon" />
		</div>
	);
};

// const SocialMediaLinks = () => {
// 	return (
// 		<>
// 			<div className="d-flex flex-column position-fixed top-50 end-0 translate-middle-y me-2 d-md-block d-none d-sm-none">
// 				<SocialMediaIcons />
// 			</div>
// 			<div className="d-flex flex-column position-fixed top-50 start-0 ms-2 translate-middle-y d-md-none d-sm-block">
// 				<SocialMediaIcons />
// 			</div>
// 		</>
// 	);
// };

export default Home;
