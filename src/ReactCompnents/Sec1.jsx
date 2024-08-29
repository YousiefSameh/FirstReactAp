import React from "react";
import "../CSS/Sec1.css";
import Img from "../images/image-computer.png";

const Sec1 = () => {
	return (
		<section className="sec-1">
			<div className="heading">
				<h1>Keep track of your snippets</h1>
				<span className="text-gray">
					Clipboard instantly stores any item you copy in the cloud, meaning you
					can access your snippets immediately on all your devices. Our Mac and
					iOS apps will help you organize everything
				</span>
			</div>
			<div className="container">
				<div className="left-section">
					<img src={Img} />
				</div>
				<div className="right-section">
					<ul>
						<li>
							<h1>Quick Search</h1>
							<span className="text-gray">
								Easily search your snippets by content, category, web address,
								application, and more.
							</span>
						</li>
						<li>
							<h1>iCloud Sync</h1>
							<span className="text-gray">
								Instantly saves and syncs snippets across all your devices
							</span>
						</li>
						<li>
							<h1>Complete History</h1>
							<span className="text-gray">
								Retrieve any snippets from the first moment you started using
								the app
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Sec1;