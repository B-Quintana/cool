import React from "react";
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Card } from "./card";

//include images into your bundle
// https://i.pinimg.com/474x/97/1c/22/971c2282a34ef7351eac07016a7a2b0b.jpg // https://i.redd.it/h677ldhjmbp31.jp // https://images-na.ssl-images-amazon.com/images/I/61dDgJExUAL._SY550_.jpg / https://i.ebayimg.com/images/g/cFMAAOSwQYZWt5KZ/s-l1600.jpg
// https://i.ebayimg.com/images/g/cFMAAOSwQYZWt5KZ/s-l1600.jpg // https://i.pinimg.com/originals/bc/97/e2/bc97e255bab5dc0f610e273332658314.jpg / https://img.ifunny.co/images/57d245e4a6e7be1099e29faf31e62950686156c37a296ea149e75b704cb8aae0_1.jpg
// https://i.imgur.com/dcTN8L8.jpg //https://img.ifunny.co/images/57d245e4a6e7be1099e29faf31e62950686156c37a296ea149e75b704cb8aae0_1.jpg
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />

			<Card myimage="https://i.pinimg.com/474x/97/1c/22/971c2282a34ef7351eac07016a7a2b0b.jpg"  "https://i.imgur.com/dcTN8L8.jpg" "https://i.redd.it/h677ldhjmbp31.jpg" "https://i.redd.it/h677ldhjmbp31.jpg"
                             "https://i.pinimg.com/originals/bc/97/e2/bc97e255bab5dc0f610e273332658314.jpg""https://i.pinimg.com/originals/bc/97/e2/bc97e255bab5dc0f610e273332658314.jpg"
           "https://i.pinimg.com/originals/bc/97/e2/bc97e255bab5dc0f610e273332658314.jpg" "https://www.hawtcelebs.com/wp-content/uploads/2019/10/nikki-benz-at-ladykiller-premiere-in-las-vegas-10-23-2019-15.jpg" 
                        "https://img.ifunny.co/images/57d245e4a6e7be1099e29faf31e62950686156c37a296ea149e75b704cb8aae0_1.jpg" "https://c4.wallpaperflare.com/wallpaper/779/51/590/blonde-phoenix-marie-big-boobs-portrait-display-wallpaper-preview.jpg" 
        	" https://c4.wallpaperflare.com/wallpaper/779/51/590/blonde-phoenix-marie-big-boobs-portrait-display-wallpaper-preview.jpg" "https://i.imgur.com/dcTN8L8.jpg"/>
		    
		</>
	);
}