import React from "react";
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Cards } from "./cards";

let va = [
	"https://isdb.pw/upload2/24610068/1869350902324566159.jpg",
	"https://images-na.ssl-images-amazon.com/images/I/61dDgJExUAL._SY550_.jpg",
	"https://i.ebayimg.com/images/g/cFMAAOSwQYZWt5KZ/s-l1600.jpg",
	"https://img.ifunny.co/images/57d245e4a6e7be1099e29faf31e62950686156c37a296ea149e75b704cb8aae0_1.jpg",
	"https://i.pinimg.com/originals/a3/51/43/a351438d3fbdafe93ea04ed78dea6a36.jpg",
	"https://i.redd.it/h677ldhjmbp31.jpg",
	"https://www.xcritic.com/newswire/wp-content/uploads/2019/10/1500x500-copy-2.jpg",
	"https://i.redd.it/tnrurew3fww31.png",
	"https://m.media-amazon.com/images/M/MV5BN2RhZjcxNzItNmU3ZC00NmE4LWJkN2UtZTk4NTRmZjQ3YjQwXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY1200_CR130,0,630,1200_AL_.jpg",
	"https://pbs.twimg.com/media/CX0V2iLUEAA8IC7.jpg",
	"https://i.pinimg.com/originals/04/23/75/042375f5415b565482a879f5540e4a16.jpg",
	"https://media.gettyimages.com/photos/adult-film-actress-dani-daniels-attends-the-2016-avn-adult-expo-at-picture-id506025928?s=612x612",
	"https://cdn.yostagram.com/2019/11/laci-kay-somers-219.jpg",
	"https://66.media.tumblr.com/a01a34dd4bb9a1789ffe2176421f4ba8/534734b2dc50da2e-ff/s1280x1920/cd00ed701b107e9bafcbc38ce34c20cef2404806.jpg",
	"https://cdn.yostagram.com/2019/02/joselyn-cano-108.jpg",
	"https://s-media-cache-ak0.pinimg.com/736x/61/29/b8/6129b8973916501c7d6659fda950ab3f.jpg",
	"https://cdn.yostagram.com/2019/06/eva-lovia-370.jpg",
	"https://media.santabanta.com/gallery/global%20celebrities(f)/abigail%20mac/abigail-mac-3-d.jpg",
	"https://i.pinimg.com/originals/fa/3d/34/fa3d3416d34ed8cfe230180bacda2491.jpg",
	"https://cloud10.todocoleccion.online/coleccionismo-adultos-otros/tc/2018/06/24/01/126140143.jpg",
	"https://pbs.twimg.com/media/DLQevBtUMAATApD.jpg"
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
