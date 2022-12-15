import freshchowlogo from "../images/logo/freshchowlogo.png";
const Navbar = () => {
	return (
		<nav class="navbar">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<img src={freshchowlogo} alt="freshchowlogo" className="w-50" />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
