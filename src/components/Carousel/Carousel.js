import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'
import Popular from '../Popular/Popular';
import Prices from '../../Prices/Prices';
import Konosuba from '../../assets/img/tetrad.webp'
import mmo from '../../assets/img/mmo.jpg'
import mob from '../../assets/img/mob.jpeg'
import anime from '../../assets/img/zont.jpg'
import Card2 from '../Card2/Card2';



// import { Carousel } from 'react-responsive-carousel';
// import Albion from '../../assets/img/Albion-900x444.jpg'
// import { Grid } from '@material-ui/core';


const MainCarousel = () => {
    return (
        <>
        
        {/* <div className="video"> */}
            {/* <video autoPlay="autoplay" src="https://cdn-prod.mortalkombat.com/roster/spawn/video.mp4" muted loop></video>
        </div>

        <div className="video">
            
            <video autoPlay="autoplay" src="https://cdn-prod.mortalkombat.com/roster/kabal/video.mp4" muted loop></video>
        </div> */}
            <div className="img__carousel">
            <img className="foto" src={mmo} alt=""/>

            </div>


          

      
            
       
        <Card2/>  
        <Popular />
        <Prices/>


    </>
        );
};

export default MainCarousel;