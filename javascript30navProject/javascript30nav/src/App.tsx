import Navbar from "./components/navbar/Navbar";
import "./index.scss";
import Hero from "@/assets/Hero.png";
import Capterra from "@/assets/Capterra.svg";
import Alternative from "@/assets/AlternativeTo Logo.svg";
import Shopify from "@/assets/Shopify.svg";
import Netflix from "@/assets/Netflix Logo.svg";
import Spotify from "@/assets/Spotify.svg";
import Walmart from "@/assets/Walmart.svg";

function App() {
	return (
		<>
			<Navbar />
			{/* main section */}
			<section className="main">
				<div className="hero">
					<div>
						<h1 className="hero__title">
							Ondeck is your remote{" "}
							<span className="hero__highlight">
								conference calling tool
							</span>
						</h1>
						<p className="hero__subtitle">
							Ondeck is a service that allows you to create
							beautiful, online, and encrypted video calls{" "}
							<br />
							for you and your team.
						</p>
						<div className="hero__btn">Try for free</div>
						<div className="hero__ratingDiv">
							<div>5.0 Rating based on reviews from:</div>
							<div className="hero__ratingIconsDiv">
								<div className="hero__ratingIcons">
									<img src={Capterra} alt="Capterra" />
								</div>
								<div className="hero__ratingIcons">
									<img src={Alternative} alt="Capterra" />
								</div>
								<div className="hero__ratingIcons">
									<img
										src={Shopify}
										alt="Capterra"
										style={{ width: "50%" }}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="heroImage__div">
						<img
							src={Hero}
							alt="Hero"
							className="heroImage"
						/>
					</div>
				</div>
				<div className="companies__title">
					<p>
						Trusted By 3+ million people at companies like
					</p>
				</div>
				<div className="companies__icons">
					<img
						src={Netflix}
						alt="Netflix"
						className="companies__image companies__icon"
					/>
					<img
						src={Shopify}
						alt="Netflix"
						className="companies__image companies__icon"
					/>
					<img
						src={Spotify}
						alt="Netflix"
						className="companies__image companies__icon"
					/>
					<img
						src={Walmart}
						alt="Netflix"
						className="companies__image companies__icon"
					/>
				</div>
			</section>
		</>
	);
}

export default App;
