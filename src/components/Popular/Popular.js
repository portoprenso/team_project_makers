import React from 'react';
import './Popular.css'
import foto from '../../assets/img/resident-evil-village.jpg'
import foto2 from '../../assets/img/terraria.jpg'
import foto3 from '../../assets/img/dying-light-enhanced-edition.jpg'
import foto4 from '../../assets/img/insurgency-sandstorm.jpg'
import foto5 from '../../assets/img/flashing-lights-police-fire-ems.jpg'
import foto6 from '../../assets/img/lego-pirates-of-the-caribbean-the-video-game.jpg'
import foto7 from '../../assets/img/3switched.jpg'
import foto8 from '../../assets/img/total-war-three-kingdoms.jpg'
// import { Grid } from '@material-ui/core';



const Popular = () => {
    return (
        <>
        <section className="popular">
            <div className="container-fluid">
                <div className="popular__header">
                    <h2 className="popular__title">Популярные игры</h2>
                    <div className="popular__header-content">
                        {/* <ul className="popular_tabs">
                            <li className="popular__tabs-item popular__tabs-item--active" data-val="100000" role="button"><a href="" alt=""> Все </a> </li>                                                                                          
                           
                            <li className="popular__tabs-item" data-val="100" role="button">
                                <a href="" alt=""> До 100 руб </a>
                               
                                </li>                                                                                          
                           
                            <li className="popular__tabs-item" data-val="300" role="button"><a href="" alt=""> До 300 руб </a></li>                                                            
                            
                            <li className="popular__tabs-item" data-val="500" role="button"><a href="" alt=""> До 500 руб </a></li>                             
                           
                            <li className="popular__tabs-item" data-val="800" role="button"><a href="" alt=""> До 800 руб </a> </li>                              
                           
                            
                        </ul> */}
                        <div className="popular__buttons section-arrows section-arrows--ligth">
                            <div className="section-arrows__prev section-arrows__disabled"></div>
                            <div className="section-arrows__next"></div>
                        </div>
                    </div>
                </div>
                

                
                <div className="popular__list game-list">
                    <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                                <img className="game__image" src={foto} alt="Resident Evil Village"/>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                    <div className="game__price">1745 $</div>
                                    <div className="game__discount">-13%</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                                <img className="game__image" src={foto2} alt="Terraria"/>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                    <div className="game__price">195 $</div>
                                    <div className="game__discount">-22%</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                            <img className="game__image" src={foto3} alt="Dying Light Enhanced Edition"/>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                <div className="game__price">339 $</div>
                                    <div className="game__discount">-74%</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                            <img className="game__image" src={foto4} alt="Insurgency Sandstorm"/>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                <div className="game__price">545 $</div>
                                    <div className="game__discount">-45%</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                            <img className="game__image" src={foto5} alt="Flashing Lights - Police Fire EMS"/>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                <div className="game__price">289 $</div>
                                    <div className="game__discount">-34%</div>
                                </div>
                            </div>
                        </a>
                    </div>
                   <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                            <img className="game__image" src={foto6} alt="The Elder Scrolls V: Skyrim - Special Edition"/>

                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                <div className="game__price">595 $</div>
                                    <div className="game__discount">-57%</div>
                                </div>
                            </div>
                        </a>
                    </div>
                   <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                            <img className="game__image" src={foto7} alt="CONAN EXILES"/>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                <div className="game__price">395 $</div>
                                    <div className="game__discount">-56%</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                            <img className="game__image" src={foto8} alt="DARK SOULS III Deluxe Edition"/>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                <div className="game__price">699 $</div>
                                    <div className="game__discount">-77%</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
      
    );
};

export default Popular;