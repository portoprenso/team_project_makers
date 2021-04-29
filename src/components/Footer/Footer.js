import React from 'react';
import './Footer.css'
import Icon from '../../assets/img/free-icon-house-key-69891.png'
import Icon2 from '../../assets/img/settings.png'
import Icon3 from '../../assets/img/percentage2.png'
import Icon4 from '../../assets/img/filled-chat.png'


const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__container__block">
            <div className="footer__container__main">
                <img className="icons" src={Icon} alt="" />
           <p className="footer__container__footer">Лицензионные ключи от официальных издателей</p>
            </div>
             <div className="footer__container__main">
           <img className="footer__container__icons" src={Icon2} alt=""/>
           <p className="footer__container__footer">Гарантированная техподдержка вашей покупки</p>
             </div>
             <div className="footer__container__main">
                <img className="footer__container__icons" src={Icon3} alt=""/>
           <p className="footer__container__footer">Регулярные акции, скидки и бонусы</p>
             </div>
             <div className="footer__container__main">
             <img className="footer__container__icons" src={Icon4} alt="" />
           <p className="footer__container__footer">Более 9000 положительных отзывов от реальных клиентов</p>
             </div>
             </div>
             <div className="footer__container-right">
                <div className="footer__container__footer">

      
                  <div className="footer__container__href">
                    <h3>
                        © 2012–2021 STEAMPAY

                  <p className="footer__container__text">Все права защищены. Полное или частичное копирование материалов сайта <br></br> без согласования с администрацией запрещено!<br></br>
      Все названия игр, компаний, торговых марок, логотипы и игровые материалы <br></br> являются собственностью соответствующих владельцев.</p>
                        </h3>
                       <a href=""><h3> Соглашение</h3></a>

            
                        
                        <a href=""><h3>Партнерам</h3></a>
            
                        
                        <a href=""><h3>Поддержка</h3></a>
            
                        
                        <a href=""><h3>О сайте</h3></a>
      
                  </div>
               
                  <div className="footer__container__footer__left">
                  </div>
              </div>
              </div>
              </div>
        
    );
};

export default Footer;
