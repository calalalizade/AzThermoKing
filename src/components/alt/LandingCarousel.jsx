import React from "react";
import Carousel from "react-bootstrap/Carousel";

function LandingCarousel() {
  return (
    <div>
      <Carousel fade={true}>
        <Carousel.Item interval={5000}>
          <img
            style={{ height: "100vh", objectFit: "cover" }}
            className="d-block w-100"
            src="https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            style={{ height: "100vh", objectFit: "cover" }}
            className="d-block w-100"
            src="https://images.pexels.com/photos/691569/pexels-photo-691569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            style={{ height: "100vh", objectFit: "cover" }}
            className="d-block w-100"
            src="https://images.pexels.com/photos/314860/pexels-photo-314860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default LandingCarousel;
