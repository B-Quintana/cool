import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<>
			<div className="card-deck" style={{ width: "300px" }}>
				<img
					src={props.myimage}
					className="card-img-top"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="Top Ladies">"Top Ladies"</h5>
					<p className="card-text">"Top Ladies"</p>
					<a href="#" className="btn btn-primary">
						Go Somewhere
					</a>
				</div>
			</div>
		</>
	);
}

Card.PropTypes = {
	myimage: PropTypes.string
};
