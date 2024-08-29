import React from "react";
import "../CSS/Sec4.css";

const Sec4 = () => {
	return (
		<section className="sec-4">
			<div className="heading">
				<h1>Clipboard for iOS and Mac OS</h1>
				<span className="text-gray">
					Available for free on the App Store. Download for Mac or iOS, sync
					with iCloud and you’re ready to start adding to your clipboard
				</span>
			</div>
			<div className="buttons">
				<button className="button-green">Download for iOS</button>
				<button className="button-blue">Download for Mac</button>
			</div>
		</section>
	);
};

export default Sec4;
