import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import helpImg from "../assets/help.jpg";
import help2Img from "../assets/help2.jpg"


class CarouselBox2 extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={helpImg}
                        alt="help"
                    />
                    <Carousel.Caption>
                        <h3>help image</h3>
                        <p>fvjgjhj</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={help2Img}
                        alt="help2"
                    />
                    <Carousel.Caption>
                        <h3>help2 image</h3>
                        <p>fvjgjhj</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox2;