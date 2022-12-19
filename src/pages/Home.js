import {
	GreenBgPurchaseChoiceBtn,
	WhiteBgPurchaseChoiceBtn,
} from "../components/Buttons";
import Navbar from "../components/Navbar";
import whatsapp from "../images/social_media_icon/whatsapp.svg";
import instagram from "../images/social_media_icon/instagram.svg";
import facebook from "../images/social_media_icon/facebook.svg";
import linkedin from "../images/social_media_icon/linkedin.svg";
import email from "../images/social_media_icon/mail.svg";
import { SocialMediaIcon } from "../components/Icons";

import homepage from "../images/heroImages/homepage_hero_bg.png";

const Home = () => {
	// push to github and deploy
	// mobile view
	return (
		<div className="HomeBg container">
			<div className="row">
				<div className="">
					<SocialMediaLinks />
				</div>
				<div className="">
					<Navbar />
					<Hero />
				</div>
			</div>
			{/* <div className="">
				<Navbar />
				<Hero />
			</div>
			<SocialMediaLinks /> */}
		</div>
	);
};

const Hero = () => {
	return (
		<div className="ms-4 my-5 py-5 ps-3">
			{/* <div className="row"> */}
			<div className="col-md-8 ">
				<div className="w-75">
					<p className="text-black mb-0">LOREM IPSUM</p>

					<h1 className="">
						Fastest <span className="greenText">Delivery</span> and{" "}
						<span className="greenText">Easy Pickup</span>
					</h1>

					<p className="text-black">
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
		<div className="d-flex flex-column position-fixed top-50 start-0">
			{/* <div className="d-flex flex-column social_links"> */}
			<SocialMediaIcon icon={whatsapp} altText="whatsapp icon" />
			<SocialMediaIcon icon={instagram} altText="instagram icon" />
			<SocialMediaIcon icon={facebook} altText="facebook icon" />
			<SocialMediaIcon icon={linkedin} altText="linkedin icon" />
			<SocialMediaIcon icon={email} altText="email icon" />
		</div>
	);
};

export default Home;
