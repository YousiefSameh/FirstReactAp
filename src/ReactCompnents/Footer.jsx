import React from 'react';
import "../CSS/Footer.css";
import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
		<footer>
			<img src={Logo} />
			<ul className="links">
				<li><a href="#">FAQs</a></li>
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Install Guide</a></li>
				<li><a href="#">Contact Us</a></li>
				<li><a href="#">Press Kit</a></li>
			</ul>
			<ul className="icons">
				<li><img src={Facebook} /></li>
				<li><img src={Twitter} /></li>
				<li><img src={Instagram} /></li>
			</ul>
		</footer>
  );
};

export default Footer;