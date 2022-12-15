import { ForwardArrowIcon } from "./Icons";

// option btns
// green background purchase choice button
export const GreenBgPurchaseChoiceBtn = ({ text, link }) => {
	// background-color, text, border-radius, padding
	return (
		<a className="btn GreenBgPurchaseChoiceBtn" href={link}>
			{text} <ForwardArrowIcon />
		</a>
	);
};

// white purchase choice button
export const WhiteBgPurchaseChoiceBtn = ({ text, link }) => {
	// background-color, text, border-radius, padding
	return (
		<a className="btn WhiteBgPurchaseChoiceBtn" href={link}>
			{text} <ForwardArrowIcon />
		</a>
	);
};

// orange purchase choice button
export const OrangeBgPurchaseChoiceBtn = ({ text, link }) => {
	// background-color, text, border-radius, padding
	return (
		<a className="btn" href={link}>
			{text} <ForwardArrowIcon />
		</a>
	);
};
