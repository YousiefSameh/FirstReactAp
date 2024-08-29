import React from "react";
import "../CSS/Sec2.css";
import Img from "../images/image-devices.png";

const Sec2 = () => {
	return (
		<section className="sec-2">
			<div className="heading">
				<h1>Access Clipboard anywhere</h1>
				<span className="text-gray">
					Whether you’re on the go, or at your computer, you can access all your
					Clipboard snippets in a few simple clicks
				</span>
			</div>
			<div className="img">
				<img src={Img} />
			</div>
		</section>
	);
};

export default Sec2;
