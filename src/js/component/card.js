import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
    let list = {
        pic1: "https://images-na.ssl-images-amazon.com/images/I/61dDgJExUAL._SY550_.jpg",
        pic2: "https://i.ebayimg.com/images/g/cFMAAOSwQYZWt5KZ/s-l1600.jp"
        pic3: "https://img.ifunny.co/images/57d245e4a6e7be1099e29faf31e62950686156c37a296ea149e75b704cb8aae0_1.jpg"
        pic4: "https://i.pinimg.com/originals/a3/51/43/a351438d3fbdafe93ea04ed78dea6a36.jpg,"
        pic5: "https://img.ifunny.co/images/57d245e4a6e7be1099e29faf31e62950686156c37a296ea149e75b704cb8aae0_1.jpg "
    }
	return (
		<>
			<div className="card-deck" style={{ width: "300px" }}>
				<img
					src={props.myimage}
					className="card-img-top"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="Top Ladies">Top Ladies</h5>
					<p className="card-text">Top Ladies</p>
					<a href="#" className="btn btn-primary">
						Go Somewhere
					</a>
				</div>
			</div>
		</>
	);
}

Card.PropTypes
      myimage  
                  

