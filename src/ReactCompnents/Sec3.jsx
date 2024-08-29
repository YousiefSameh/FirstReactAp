import React from "react";
import "../CSS/Sec3.css";
import icon1 from "../images/icon-blacklist.svg";
import icon2 from "../images/icon-text.svg";
import icon3 from "../images/icon-preview.svg";
import Logo1 from "../images/logo-google.png";
import Logo2 from "../images/logo-ibm.png";
import Logo3 from "../images/logo-microsoft.png";
import Logo4 from "../images/logo-hp.png";
import Logo5 from "../images/logo-vector-graphics.png";

const Sec3 = () => {
	return (
		<section className="sec-3">
			<div className="heading">
				<h1>Supercharge your workflow</h1>
				<span className="text-gray">
					We’ve got the tools to boost your productivity
				</span>
			</div>
			<div className="cards">
				<div className="card">
					<img src={icon1} />
					<h2>Create blacklists</h2>
					<span className="text-gray">
						Ensure sensitive information never makes its way to your clipboard
						by excluding certain sources
					</span>
				</div>
				<div className="card">
					<img src={icon2} />
					<h2>Plain text snippets</h2>
					<span className="text-gray">
						Remove unwanted formatting from copied text for a consistent look
					</span>
				</div>
				<div className="card">
					<img src={icon3} />
					<h2>Sneak preview</h2>
					<span className="text-gray">
						Quick preview of all snippets on your Clipboard for easy access
					</span>
				</div>
			</div>
			<div className="brands">
				<img src={Logo1} />
				<img src={Logo2} />
				<img src={Logo3} />
				<img src={Logo4} />
				<img src={Logo5} />
			</div>
		</section>
	);
};

export default Sec3;
