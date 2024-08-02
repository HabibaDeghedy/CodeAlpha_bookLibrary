import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
	return (
		<section className="about">
			<div className="container">
				<div className="section-title">
					<h2>About</h2>
				</div>

				<div className="about-content grid">
					<div className="about-img">
						<img src={aboutImg} alt="" />
					</div>
					<div className="about-text">
						<h2 className="about-title fs-26 ls-1">About BookHub</h2>
						<p className="fs-17">
							Welcome to BookHub, your gateway to a world of literature! This
							app is designed for book lovers who want to explore, discover, and
							learn about books across various genres, time periods, and places.
						</p>
						<p className="fs-17">
							At BookHub, we believe that books are more than just stories; they
							are windows into different worlds, sources of knowledge, and
							inspirations for our imagination. Our platform offers detailed
							information on a wide range of books, including descriptions,
							subjects, and more, helping you find your next great read.
						</p>
						<p className="fs-17">
							Whether you're looking for a classic novel, a historical epic, or
							just curious about what the world of literature has to offer,
							BookHub is here to guide you.
						</p>
						<p className="fs-17">
							Thank you for being a part of our community. Dive in and let the
							adventure begin!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
