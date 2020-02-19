import React from "react";
// import Proptypes from "prop-types";

// https://i.redd.it/9eabxyhpefb11.jpg

export function Card() {
	return (
		<>
			<div className="card" style={{ width: "300px" }}>
				<img
					src="https://i.ebayimg.com/images/g/cFMAAOSwQYZWt5KZ/s-l1600.jpg
                https://images-na.ssl-images-amazon.com/images/I/61dDgJExUAL._SL1129_.jpg
                https://i.pinimg.com/originals/a7/0d/03/a70d03a1c15d95e4daa83a7084f4e9c3.jpg
                https://i.redd.it/h677ldhjmbp31.jpg"
					className="card-img-top"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go Somewhere
					</a>
				</div>
			</div>
		</>
	);
}
// Card.propTypes = {
// 	imgUrl: PropTypes.string,
// 	title: PropTypes.string
// };
