import React from "react";
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Cards } from "./cards";
//import { Carousel } from "./carousel";

let va = [
	"https://www.stylevore.com/wp-content/uploads/2020/02/71340327_182588909444321_3030833370893376633_n-1024x1280.jpg",
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
	"https://pbs.twimg.com/media/DLQevBtUMAATApD.jpg",
	"https://content4.coedcherry.com/briana-lee-cams/213281/briana_lee_03.jpg",
	"https://i.pinimg.com/736x/70/02/f1/7002f1be8795be5ff20fca9dbf5081eb.jpg",
	"https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/69479185_237320840564269_4803101861244884844_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=mnj4pWsullsAX9uUxXr&oh=d85f0198fd4a55b8aecd8e2f367b52bb&oe=5E87CEF2",
	"https://scontent-otp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/75588042_195664878146874_6288507079440898498_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=hB2oiFZ8-lAAX9jK2ne&oh=6f2c909b4a31dd89155c1383f3e777ac&oe=5E7CBFE3",
	"https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/e35/67288117_454207818493693_1816878658577291062_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=H6nZPT7puGsAX-UJetY&oh=3fe163091e1ca71b9d98e34b11859c73&oe=5E8A431A",
	"https://i.pinimg.com/originals/fc/2b/9e/fc2b9ebf40aeaa493228f4fe66d8456d.jpg",
	"https://m.media-amazon.com/images/M/MV5BMGJjMDg2YTItMjFjOS00NTUzLTk0ZjItOTVlMzE4YWYwNTgwXkEyXkFqcGdeQXVyODEwNjkyNjY@._V1_SY1000_CR0,0,684,1000_AL_.jpg"
];

export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />

			<div className="cards-group d-flex justify-content-center">
				{va.map((item, index) => (
					<Cards key={index} myimage={item} />
				))}
			</div>
		</>
	);
}
