import React  from 'react';
import './Thank.css'
import Smail from '../../assets/img/smail1.png'
import Smail2 from '../../assets/img/u1hl0qfc.png'
import Smail3 from '../../assets/img/smail3.webp'
import {Link} from 'react-router-dom'

const Thank = () => {
    return (
        <div className="container__thank">
            <div className="thank__box">
                <p className="text__thank">Thank you for your purchase!</p>
                  <div className="smail">
                      <img className="smail__img" src={Smail} alt="" />
                      <img className="smail__img" src={Smail2} alt="" />
                      <img className="smail__img" src={Smail3} alt="" />
                  </div>
                  <div className="thank__home">
                      <Link to="/?_limit=8">
                    <button className="home__h2">Home</button>
                    </Link>
                  </div>
            </div>
            
        </div>
    );
};

export default Thank;