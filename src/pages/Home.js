import {
	GreenBgPurchaseChoiceBtn,
	WhiteBgPurchaseChoiceBtn,
} from "../components/Buttons";
import Navbar from "../components/Navbar";

import homepage from "../images/heroImages/homepage_hero_bg.png";

const Home = () => {
	// push to github and deploy
	// mobile view
	return (
		<div className="HomeBg">
			<Navbar />
			<Hero />
		</div>
	);
};

const Hero = () => {
	return (
		<div className="ms-4 my-5 py-5">
			{/* <div className="row"> */}
			<div className="col-md-6 col-sm-12">
				<div className="">
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

			<div className="col-md-6"></div>
			{/* </div> */}
		</div>
	);
};

export default Home;
