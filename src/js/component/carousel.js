import React from "react";

<Carousel>
	<Carousel.Item>
		<img
			className="d-block w-100",
			src="https://www.stylevore.com/wp-content/uploads/2020/02/71340327_182588909444321_3030833370893376633_n-1024x1280.jpg"
			alt="First slide"
		/>
		<Carousel.Caption>
			<h3>First slide label</h3>
			<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
		<img
			className="d-block w-100"
			src="https://images-na.ssl-images-amazon.com/images/I/61dDgJExUAL._SY550_.jpg"
			alt="Third slide holder.js"
		/>

		<Carousel.Caption>
			<h3>Second slide label</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
		<img
			className="d-block w-100"
			src="https://i.ebayimg.com/images/g/cFMAAOSwQYZWt5KZ/s-l1600.jpg"
			alt="Third slide"
		/>

		<Carousel.Caption>
			<h3>Third slide label</h3>
			<p>
				Praesent commodo cursus magna, vel scelerisque nisl consectetur.
			</p>
		</Carousel.Caption>
	</Carousel.Item>
</Carousel>;
function ControlledCarousel() {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(null);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
		setDirection(e.direction);
	};

	return (
		<Carousel
			activeIndex={index}
			direction={direction}
			onSelect={handleSelect}>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="holder.js/800x400?text=First slide&bg=373940"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>
						Nulla vitae elit libero, a pharetra augue mollis
						interdum.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="holder.js/800x400?text=Second slide&bg=282c34"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://i.ebayimg.com/images/g/cFMAAOSwQYZWt5KZ/s-l1600.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl
						consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

render(<ControlledCarousel />);
