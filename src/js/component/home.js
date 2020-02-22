import React from "react";
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Card } from "./card";

//include images into your bundle
// https://i.pinimg.com/474x/97/1c/22/971c2282a34ef7351eac07016a7a2b0b.jpg
// https://i.redd.it/h677ldhjmbp31.jpg
// https://images-na.ssl-images-amazon.com/images/I/61dDgJExUAL._SY550_.jpg
// https://i.ebayimg.com/images/g/cFMAAOSwQYZWt5KZ/s-l1600.jpg
//create your first component

export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />

			<Card myimage="https://i.pinimg.com/474x/97/1c/22/971c2282a34ef7351eac07016a7a2b0b.jpg" />

			<Card myimage="https://i.redd.it/h677ldhjmbp31.jpg" />
			<Card myimage="https://images-na.ssl-images-amazon.com/images/I/61dDgJExUAL._SY550_.jpg" />
			<Card myimage="https://i.ebayimg.com/images/g/cFMAAOSwQYZWt5KZ/s-l1600.jpg" />
		</>
	);
}
