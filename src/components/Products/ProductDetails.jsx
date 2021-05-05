import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { productsContext } from '../../contexts/ProductsContext';
import './ProductDetails.css'
import { makeStyles } from '@material-ui/core/styles';


const ProductDetails = (props) => {
    console.log(props);
    const { id } = useParams()
    const { addProductToCart, productDetails, getProductDetails } = useContext(productsContext)

    
    useEffect(() => {
        getProductDetails(id);
    }, [])
    
    const useStyles = makeStyles((theme) => ({
        main_img:{
            alignSelf: 'center',
            width: 375,
            height: 479,
            backgroundImage: `url(${productDetails.imageLarge})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            color: 'chocolate',
            backgroundBlendMode: 'multiply',
            backgroundColor: 'rgba(0, 0, 0, 0.363)',
            textAlign: 'center',
            transition: '0.7s'
        }
        // main__Container:{
        //     display: 'flex',
        //     ['@media(max-width: 1000px)'] : {
        //         display: 'none'
        //   }
        // }
    }));

    const classes = useStyles()

    return (
        <div className="body_details">
            <div className="details" >
            <div className="details__topBackgroung"></div>
            {/* <ul className="one">
                <li>Главная</li>
                <li>Каталог</li>
            </ul> */}
            <h1>{productDetails.title}</h1>
            <div className="main__Container">
                <div className="main_menu_left">

                    <div className={`${classes.main_img} main_img`}>
                    {/* <div className='asd'> */}
                        <p>трейлер и скриншоты</p>
                    </div>
                    <div className="main_info">
                        <p>Жанр <span>{productDetails.category}</span></p>
                        <p>Язык <span>Английский, Русский</span></p>
                        {/* <p>Дата выхода <span>18 июня 2012</span></p> */}
                        <p>Издатель <span>{productDetails.author}</span></p>
                        {/* <p>Особенности <span>Для одного игрока</span></p> */}
                        <p>Цель <span>Достижения</span></p>
                        <p>Регион <span>Россия</span></p>
                    </div>

                </div>
                <div className="mains_menu_right">
                    <div className="mains_price_menu">
                        <div className="mains_info">
                            <ul>
                                <li>Наличие: <span>{
                                productDetails.countInStock>1 ? 
                                ('Много')
                                :
                                ('Ожидается') 
                                }</span></li>
                                <li>Моментальная доставка</li>
                                <li>Лицензионный <span>ключ</span> активации</li>
                                <li>Регион: Россия</li>
                                <li>Накопительная скидка до 10%</li>
                            </ul>
                        </div>
                        <div className="vse">
                            <div className="mains_price">
                                <div className="mains_price_one">
                                <p>-{productDetails.discountPercent}%</p> 
                                </div>
                                <div className="main_price_two">
                                    <del>{productDetails.oldPrice}с</del>
                                    <h2>{productDetails.price}с</h2>
                                </div>
                            </div>
                            <div className="btn_offset">
                               <button 
                               onClick={() => {addProductToCart(productDetails)}} 
                        className="offset">В корзину</button>
                            </div>
                            <div className="two_btn">
                            <button className="fill">Как активировать?</button>
                            <button className="fill">Хочу дешевле!</button>
                            </div>
                        </div>
                    
                    </div>

                    <div className="nakonecto">
                        <p>Максимальное время ожидания ключа - до 5 часов. <br/>
                        Если вы приобрели продукт с 21.00 до 10.00 по Московскому времени, то ваш заказ будет <br/> укомплектован после 10.00.</p>
                        <h2>Описание</h2>
                        <p>{productDetails.description}</p>
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