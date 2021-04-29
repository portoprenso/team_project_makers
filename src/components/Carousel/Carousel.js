import React, { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import Albion from '../../assets/img/Albion-900x444.jpg'

import './Carousel.css'

const MainCarousel = () => {
    return (
        <Carousel showThumbs={false}>
        <div className="video">
            {/* <img className="foto" src={Dota} alt="logo" /> */}
            <video autoplay="autoplay" src="https://cdn-prod.mortalkombat.com/roster/spawn/video.mp4" muted loop></video>
        </div>

        <div className="video">
            
            <video autoplay="autoplay" src="https://cdn-prod.mortalkombat.com/roster/kabal/video.mp4" muted loop></video>
        </div>
      
        
    </Carousel>
        );
};

export default MainCarousel;