import "./navbar.scss";
import Logo from "@/assets/Logo.svg";
import SpenseIcon from "@/assets/Spense_Icon.svg";
import BoyIcon from "@/assets/Fiber_Icon.svg";
import BookIcon from "@/assets/Gradie_Icon.svg";
import CloseIcon from "@/assets/Close.svg";
import FloatingBoxItem from "./FloatingBoxItem";
import { IItemProps } from "./FloatingBoxItem";
import { useState } from "react";

const items: IItemProps[] = [
	{
		title: "Spense",
		subtitle:
			"Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts.",
		icon: SpenseIcon,
	},
	{
		title: "Fiber Landing Page",
		subtitle:
			"An online portfolio generator. Great to practice flex/grid layouts, and absolute positioning.",
		icon: BoyIcon,
	},
	{
		title: "Gradie Sign Up Page",
		subtitle:
			"Gradie is a simple sign up page, great to practice centering layouts.",
		icon: BookIcon,
	},
];

const Navbar = () => {
	const [show, setShow] = useState<boolean>(false);

	return (
		<div className="navbar">
			<div className="logoContainer">
				<img src={Logo} alt="Logo" />
			</div>
			<div className="navbar__links">
				<div
					onMouseEnter={() => {
						setShow(true);
					}}
					onMouseLeave={() => {
						setShow(false);
					}}
				>
					<div className="navbar__item">Products</div>
					{show && (
						<div className="floatingBox">
							<div className="floatingBox__container">
								<div>
									<div className="closeDiv">
										<div></div>
										<div className="closeBtnDiv">
											<img
												src={CloseIcon}
												alt="Close Button"
												onClick={() => {
													setShow(false);
												}}
											/>
										</div>
									</div>
									{items.map((item, index) => (
										<FloatingBoxItem
											key={index}
											title={item.title}
											subtitle={item.subtitle}
											icon={item.icon}
										/>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
				<div className="navbar__item">Challenges</div>
				<div className="navbar__item">Resources</div>
				<div className="navbar__item">Other links</div>
			</div>
			<div className="navbar__buttons">
				<div className="navbar__button">Sign In</div>
				<div className="navbar__button__signUp">
					Sign Up
				</div>
			</div>
		</div>
	);
};

export default Navbar;
