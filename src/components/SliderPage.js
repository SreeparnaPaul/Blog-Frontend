import React from 'react'
import nature from "../assets/nature.jpg";
import science from "../assets/science.jpg";
import red_mushroom from "../assets/red_mushroom.jpg";
import Carousel from 'react-bootstrap/Carousel';
function SliderPage() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nature}
          alt="First slide"
          style={{height:"600px"}}
        />
        <Carousel.Caption>
          <h3>Peace of Nature</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={science}
          alt="Second slide"
          style={{height:"600px"}}
        />

        <Carousel.Caption>
          <h3>Science! Curse or Bliss !</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={red_mushroom}
          alt="Third slide"
          style={{height:"600px"}}
        />

        <Carousel.Caption>
          <h3>Red Mushroom</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default SliderPage
