import React, {Component} from 'react';
// import { Link, NavLink } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class Slider extends Component{
  
    render(){
        return (
			<Carousel showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src={require('../dummy/slide-1.jpg')} alt="Slide 1"/>
                </div>
                <div>
                    <img src={require('../dummy/slide-2.jpg')} alt="Slide 2"/>
                </div>
                <div>
                    <img src={require('../dummy/slide-3.jpg')} alt="Slide 3"/>
                </div>
            </Carousel>
							
		);
	}
    
}

export default Slider;
