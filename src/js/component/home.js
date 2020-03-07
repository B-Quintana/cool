import React from "react";
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Cards } from "./cards";

let va = [
	"https://cdn.wallpapersafari.com/55/61/qwADp2.jpg",
	"https://images-na.ssl-images-amazon.com/images/I/61dDgJExUAL._SY550_.jpg",
	"https://i.ebayimg.com/images/g/cFMAAOSwQYZWt5KZ/s-l1600.jpg",
	"https://img.ifunny.co/images/57d245e4a6e7be1099e29faf31e62950686156c37a296ea149e75b704cb8aae0_1.jpg",
	"https://i.pinimg.com/originals/a3/51/43/a351438d3fbdafe93ea04ed78dea6a36.jpg",
	"https://i.redd.it/h677ldhjmbp31.jpg",
	"https://www.xcritic.com/newswire/wp-content/uploads/2019/10/1500x500-copy-2.jpg",
	"https://i.redd.it/tnrurew3fww31.png",
	"https://i.redd.it/tnrurew3fww31.png",
	"https://i.redd.it/tnrurew3fww31.png",
	"https://i.redd.it/tnrurew3fww31.png",
	"https://i.redd.it/tnrurew3fww31.png",
	"https://i.redd.it/tnrurew3fww31.png",
	"https://i.redd.it/tnrurew3fww31.png",
	"https://i.redd.it/tnrurew3fww31.png",
	"https://i.redd.it/tnrurew3fww31.png",
	"https://i.redd.it/tnrurew3fww31.png",
	"https://i.redd.it/tnrurew3fww31.png"
];

export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="card-group d-flex justify-content-center">
				{va.map((item, index) => (
					<Cards key={index} myimage={item} />
				))}
			</div>
		</>
	);
}
