import React from "react";
// import { Jumboton } from "/.jumboton";
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
			{/* <Jumboton />
            <Jumboton />
            <Jumboton />
            <Jumboton /> */}
			<Card />
			<Card />
			<Card />
			<Card />
		</>
	);
}
