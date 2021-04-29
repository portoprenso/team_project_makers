import React from 'react';
import './Footer.css'
import Icon from '../../images/free-icon-house-key-69891.png'
import Icon2 from '../../images/settings.png'
import Icon3 from '../../images/percentage2.png'
import Icon4 from '../../images/filled-chat.png'


const Footer = () => {
    return (
        <div className="container">
            <div className="block">
            <div className="main">
                <img className="icons" src={Icon} alt="" />
           <p className="footer">Лицензионные ключи от официальных издателей</p>
            </div>
             <div className="main">
           <img className="icons" src={Icon2} alt=""/>
           <p className="footer">Гарантированная техподдержка вашей покупки</p>
             </div>
             <div className="main">
                <img className="icons" src={Icon3} alt=""/>
           <p className="footer">Регулярные акции, скидки и бонусы</p>
             </div>
             <div className="main">
             <img className="icons" src={Icon4} alt="" />
           <p className="footer">Более 9000 положительных отзывов от реальных клиентов</p>
             </div>
             </div>
             <div className="container-right">
                <div className="footer">

      
                  <div className="href">
                    <h3>
                        © 2012–2021 STEAMPAY

                  <p className="text">Все права защищены. Полное или частичное копирование материалов сайта <br></br> без согласования с администрацией запрещено!<br></br>
      Все названия игр, компаний, торговых марок, логотипы и игровые материалы <br></br> являются собственностью соответствующих владельцев.</p>
                        </h3>
                       <a href=""><h3> Соглашение</h3></a>

            
                        
                        <a href=""><h3>Партнерам</h3></a>
            
                        
                        <a href=""><h3>Поддержка</h3></a>
            
                        
                        <a href=""><h3>О сайте</h3></a>
      
                  </div>
               
                  <div className="footer__left">
                  </div>
              </div>
              </div>
              </div>
        
    );
};

export default Footer;
