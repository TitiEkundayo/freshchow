// social media component

export const SocialMediaIcon = ({ icon, altText, link }) => {
	return (
		<div className="text-center">
			<a href={link}>
				<img
					src={icon}
					alt={altText}
					width="53px"
					className="d-md-block d-none d-sm-none"
				/>
				<img
					src={icon}
					alt={altText}
					width="30px"
					className="d-md-none d-sm-block"
				/>
			</a>
		</div>
	);
};

export const ForwardArrowIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			className="bi bi-arrow-right"
			viewBox="0 0 16 16">
			<path
				fill-rule="evenodd"
				d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
			/>
		</svg>
	);
};
