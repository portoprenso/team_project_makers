import React from 'react';
import './Popular.css'
import foto from '../../assets/img/no-color.jpg'
import foto2 from '../../assets/img/odinochka.jpg'
import foto3 from '../../assets/img/mydrec.jpg'
import foto4 from '../../assets/img/bog.jpg'
import foto5 from '../../assets/img/hans.jpg'
import foto6 from '../../assets/img/ino.jpg'
import foto7 from '../../assets/img/king.jpg'
import foto8 from '../../assets/img/imperia.jpg'
import foto9 from '../../assets/img/lepestok.jpg'
import { Link } from 'react-router-dom';
// import { Grid } from '@material-ui/core';



const Popular = () => {
    return (
        <>
         
        <section className="popular">
            <div className="container-fluid">
                <div className="popular__header">
                    <h2 className="popular__title">Популярные манги</h2>
                    <div className="popular__header-content">
                        <ul className="popular_tabs">
                            <li className="popular__tabs-item popular__tabs-item--active" data-val="100000" role="button"><a href="" alt="">  </a> </li>                                                                                          
                           
                            {/* <li className="popular__tabs-item" data-val="100" role="button">
                                <a href="" alt=""> До 100 руб </a>
                               
                                </li>                                                                                           */}
                           
                            {/* <li className="popular__tabs-item" data-val="300" role="button"><a href="" alt=""> До 300 руб </a></li>                                                            
                            
                            <li className="popular__tabs-item" data-val="500" role="button"><a href="" alt=""> До 500 руб </a></li>                             
                           
                            <li className="popular__tabs-item" data-val="800" role="button"><a href="" alt=""> До 800 руб </a> </li>                               */}
                           
                            
                        </ul>
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
                                <Link to="/Manga3/1">
                                <img className="game__image" src={foto} alt="Resident Evil Village"/>
                                <span className="game__image-color">Бесцветный</span>
                                </Link>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                    {/* <div className="game__price">1745 $</div>
                                    <div className="game__discount">-13%</div> */}
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__i4mage-wrapper">
                                <Link to={`/Manga3/2`} >
                                <img className="game__image" src={foto2} alt="Terraria"/>
                                <span className="game__image-color">Игрок одиночка</span>
                                </Link>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                    {/* <div className="game__price">195 $</div>
                                    <div className="game__discount">-22%</div> */}
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                            <Link to={`/Manga3/3`}>
                            <img className="game__image" src={foto3} alt="Dying Light Enhanced Edition"/>
                            <span className="game__image-color">Великий мудрец</span>
                            </Link>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                {/* <div className="game__price">339 $</div>
                                    <div className="game__discount">-74%</div> */}
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                            <Link to={`/Manga3/4`}>
                            <img className="game__image" src={foto4} alt="Insurgency Sandstorm"/>
                            <span className="game__image-color">Хранитель божественного меча</span>
                            </Link>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                {/* <div className="game__price">545 $</div>
                                    <div className="game__discount">-45%</div> */}
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                            <Link to={`/Manga3/5`}>
                            <img className="game__image" src={foto5} alt="Flashing Lights - Police Fire EMS"/>
                            <span className="game__image-color">Ребёнок По Имени Ханна</span>
                            </Link>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                {/* <div className="game__price">289 $</div>
                                    <div className="game__discount">-34%</div> */}
                                </div>
                            </div>
                        </a>
                    </div>
                   <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                            <Link to={`/Manga3/6`}>
                            <img className="game__image" src={foto6} alt="The Elder Scrolls V: Skyrim - Special Edition"/>
                            <span className="game__image-color">Герой-иномирец начинает с нуля</span>
                            </Link>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                {/* <div className="game__price">595 $</div>
                                    <div className="game__discount">-57%</div> */}
                                </div>
                            </div>
                        </a>
                    </div>
                   <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                            <Link to={`/Manga3/7`}>
                            <img className="game__image" src={foto7} alt="CONAN EXILES"/>
                            <span className="game__image-color">Короли</span>
                            </Link>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                {/* <div className="game__price">395 $</div>
                                    <div className="game__discount">-56%</div> */}
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                            <Link to={`/Manga3/8`}>
                            <img className="game__image" src={foto9} alt="CONAN EXILES"/>
                            <span className="game__image-color">Лепестки реинкарнации</span>
                            </Link>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                {/* <div className="game__price">395 $</div>
                                    <div className="game__discount">-56%</div> */}
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="game-list__item">
                        <a href="" className="game">
                            <div className="game__image-wrapper">
                            <Link to={`/Manga3/9`}>
                            <img className="game__image" src={foto8} alt="DARK SOULS III Deluxe Edition"/>
                            <span className="game__image-color">Метеоритная династия: Империя</span>
                            </Link>
                            </div>
                            <div className="game__desc">
                                <div className="game__price-overlay">
                                {/* <div className="game__price">699 $</div>
                                    <div className="game__discount">-77%</div> */}
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/* <div className="container__nov"> */}
       
            {/* <div class="h-lists__section section paper">
                <div class="section__body">
                    <h2 class="page__title">Последние темы форума</h2>
                    <div class="h-list-items">
                        <div class="h-list-item">
                            <div class="h-list-item__title text-truncate">
                                <a class="link-default" href="">Про семейный бюджет</a>
                            </div>
                            <div class="h-list-item__info">
                                <span class="h-list-item__user">
                                    <i class="fa fa-fw fa-user">

                                    </i>
                                    Vеternum
                                </span>
                                <span class="h-list-item__date">13 секунд назад</span>
                            </div>
                        </div>
                        <div class="h-list-item">
                            <div class="h-list-item__title text-truncate">
                                <a class="link-default" href="">❗️ если ты не гомосек стань рабом за 10 сек ❗️ (ищем тайперов)</a>
                            </div>
                            <div class="h-list-item__info">
                                <span class="h-list-item__user">
                                    <i class="fa fa-fw fa-user">

                                    </i>
                                    s1der

                                </span>
                                <span class="h-list-item__date">14 минут назад</span>
                            </div>
                        </div>
                        <div class="h-list-item">
                            <div class="h-list-item__title text-truncate">
                                <a class="link-default" href="">Я только что узнала лол</a>
                            </div>
                            <div class="h-list-item__info">
                                <span class="h-list-item__user">
                                    <i class="fa fa-fw fa-user">

                                    </i>
                                    Мне_лень,юноу?

                                </span>
                                <span class="h-list-item__date">17 минут назад</span>
                            </div>
                        </div>
                        <div class="h-list-item">
                            <div class="h-list-item__title text-truncate">
                                <a class="link-default" href="">Не чего читать.</a>
                            </div>
                            <div class="h-list-item__info">
                                <span class="h-list-item__user">
                                    <i class="fa fa-fw fa-user">

                                    </i>
                                    Foxik114

                                </span>
                                <span class="h-list-item__date">20 минут назад</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify_between align-items_center">
                        <a href="" class="link-default">
                            Все темы
                            <i class="fa fa-angle-right fa-fw">

                            </i>
                        </a>
                        <a href="" class="discussion-category label" style="background-color: #6f42c1;">
                            <i class="fa fa-user-plus">

                            </i>
                            Помощь переводчикам [ 465 ]

                        </a>
                    </div>
                </div>
            </div> */}
       
        {/* </div> */}
        </>
      
    );
};

export default Popular;