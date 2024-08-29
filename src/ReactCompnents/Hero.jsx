import React from "react";
import Logo from "../images/logo.svg";
import "../CSS/Hero.css";

const Navbar = () => {
  return (
		<section className="hero">
			<div className="container">
				<img className="logo" src={Logo} />
				<div className="text">
					<span>A history of everything you copy</span>
					<p>
						Clipboard allows you to track and organize everything you copy.
						Instantly access your clipboard on all your devices.
					</p>
				</div>
				<div className="buttons">
					<button className="button-green">Download for iOS</button>
					<button className="button-blue">Download for Mac</button>
				</div>
			</div>
		</section>
  )
};

export default Navbar;