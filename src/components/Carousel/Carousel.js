import React, { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'
import Popular from '../Popular/Popular';
import Prices from '../../Prices/Prices';
// import { Carousel } from 'react-responsive-carousel';
// import Albion from '../../assets/img/Albion-900x444.jpg'
// import { Grid } from '@material-ui/core';


const MainCarousel = () => {
    return (
        <>
        <Carousel className="carouselContainer" showThumbs={false}>
        <div className="video">
            {/* <img className="foto" src={Dota} alt="logo" /> */}
            <video autoPlay="autoplay" src="https://cdn-prod.mortalkombat.com/roster/spawn/video.mp4" muted loop></video>
        </div>

        <div className="video">
            
            <video autoPlay="autoplay" src="https://cdn-prod.mortalkombat.com/roster/kabal/video.mp4" muted loop></video>
        </div>
      
        
    </Carousel>    
    <Popular />
    <Prices/>


    </>
        );
};

export default MainCarousel;