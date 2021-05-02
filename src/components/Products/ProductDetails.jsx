import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { productsContext } from '../../contexts/ProductsContext';

const ProductDetails = () => {
    const { id } = useParams()
    const { productDetails, getProductDetails } = useContext(productsContext)
    
    useEffect(() => {
        getProductDetails(id)
    }, [])


    return (
        <div>
            {productDetails.title}

            <div className="details" >
            <ul className="one">
                <li>Главная</li>
                <li>Каталог</li>
            </ul>
            <h1>plants vs. zombies goty edition</h1>
            <div className="main">
                <div className="main_menu_left">

                    <div className="main_img">
                        <p>трейлер и скриншоты</p>
                    </div>
                    <div className="main_info">
                        <p>Жанр <span>Стратегии</span></p>
                        <p>Язык <span>Английский</span></p>
                        <p>Дата выхода <span>18 июня 2012</span></p>
                        <p>Издатель <span>PopCap Games, inc.</span></p>
                        <p>Разработчик <span>PopCap Games, inc.</span></p>
                        <p>Особенности <span>Для одного игрока</span></p>
                        <p>Цель <span>Достижения</span></p>
                        <p>Регион <span>Россия</span></p>
                    </div>

                </div>
                <div className="mains_menu_right">
                    <div className="mains_price_menu">
                        <div className="mains_info">
                            <ul>
                                <li>Наличие: <span>много</span></li>
                                <li>Моментальная доставка</li>
                                <li>Лицензионный <span>ключ</span> активации</li>
                                <li>Регион: Россия</li>
                                <li>Накопительная скидка до 10%</li>
                            </ul>
                        </div>
                        <div className="vse">
                            <div className="mains_price">
                                <div className="mains_price_one">
                                <p>-30%</p> 
                                </div>
                                <div className="main_price_two">
                                    <del>249руб</del>
                                    <h2>175руб</h2>
                                </div>
                            </div>
                            <div className="btn_offset">
                               <button class="offset">В корзину</button>
                            </div>
                            <div className="two_btn">
                            <button class="fill">Как активировать?</button>
                            <button class="fill">Хочу дешевле!</button>
                            </div>
                        </div>
                    
                    </div>

                    <div className="nakonecto">
                        <p>Максимальное время ожидания ключа - до 5 часов. <br/>
                        Если вы приобрели продукт с 21.00 до 10.00 по Московскому времени, то ваш заказ будет <br/> укомплектован после 10.00.</p>
                        <h2>Описание</h2>
                        <p>Неугомонные зомби снова атакуют ваш дом. Не ищите спасительных пушек и мечей, а скорее <br/> сажайте чудо-растения, способные действительно эффективно противостоять лавинам противника.<br/> 
                        Генномодифицированная поросль готова убивать зомби пачками и самыми изысканными <br/> способами, так что не упустите шанс показать врагу, что природа отдохнула не только на них.</p>
                    </div>
                    <div className="nakonecto2">
                        <h2>Минимальные системные требования</h2>
                    </div>
                </div>
            </div>
            

        </div>
        </div>
    );
};

export default ProductDetails;