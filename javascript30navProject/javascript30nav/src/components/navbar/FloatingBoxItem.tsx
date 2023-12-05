import React from "react";

export interface IItemProps {
	title: string;
	icon: string;
	subtitle: string;
}

const FloatingBoxItem: React.FC<IItemProps> = ({
	title,
	icon,
	subtitle,
}) => {
	return (
		<div className="floatingBox__item">
			<img
				src={icon}
				alt="Spense Icon"
				className="floatingBox__icon"
			/>
			<div className="floatingBox__subItem">
				<div className="floatingBox__subItem__title">
					{title}
				</div>
				<div className="floatingBox__subItem__subtitle">
					{subtitle}
				</div>
			</div>
		</div>
	);
};

export default FloatingBoxItem;
