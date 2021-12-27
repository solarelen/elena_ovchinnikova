import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import girlImg from "../assets/girl.jpg";
import word2 from "../assets/word2.jpg";
class CarouselBox extends Component {
    render() {
        return (
           <Carousel>
               <Carousel.Item>
               <img
               className="d-block w-100"
               src={girlImg}
               alt="Girl"
               />

               </Carousel.Item>
               <Carousel.Item>
                   <img
                       className="d-block w-100"
                       src={word2}
                       alt="Word2"
                   />

               </Carousel.Item>
           </Carousel>
        );
    }
}

export default CarouselBox;