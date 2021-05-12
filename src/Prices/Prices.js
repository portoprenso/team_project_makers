import React from 'react';
import './Prices.css'
import foto from '../assets/img/kniga.jpg'
import foto2 from '../assets/img/kniga2.jpg'
import foto3 from '../assets/img/kniga3.jpg'


const Prices = () => {
    return (
        <>
                 <section className="reduction-prices">
                     <div className="container-fluid__contain">
                      <div className="reduction-prices__header">
                          <h2 className="reduction-prices__title">Популярные книги</h2>
                          <div className="reduction-prices__buttons section-arrows">
                              <div className="section-arrows__prev section-arrows__disabled"></div>
                              <div className="section-arrows__next"></div>
                          </div>
                      </div>
                      <div className="reduction-prices__list game-list">
                          <div className="game-list__item">
                              <a href="" className="game">
                                  <div className="game__image-wrapper">
                                      <img className="game__image" src={foto} alt="Total War: Three Kingdoms" />
                                  </div>
                                  <div className="game__desc">
                                      <div className="game__price-overlay">
                                          <div className="game__price">
                                              
                                          </div>
                                          <div className="game__discount">
                                              
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </div>
                          <div className="game-list__item">
                              <a href="" className="game">
                                  <div className="game__image-wrapper">
                                      <img className="game__image" src={foto2} alt="Star Wars : Rebellion"/>
                                  </div>
                                  <div className="game__desc">
                                      <div className="game__price-overlay">
                                          <div className="game__price">
                                              
                                          </div>
                                          <div className="game__discount">
                                             
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </div>
                          <div className="game-list__item">
                              <a href="" className="game">
                                  <div className="game__image-wrapper">
                                      <img className="game__image" src={foto3} alt="LEGO Pirates of the Caribbean"/>
                                  </div>
                                  <div className="game__desc">
                                      <div className="game__price-overlay">
                                          <div className="game__price">
                                              
                                          </div>
                                          <div className="game__discount">
                                            
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </div>
                         
                      </div>
                     </div>
                 </section>
                 {/* <section className="page-text">
                     <div className="container__fluid">
                         <div className="page-text__blocks">
                             <div className="page-text__content">
                                 <h1 className="page-text__title">Что такое Стимпей?</h1>
                                 <div className="parag">
                                 <p>
                                 В нашем интернет-магазине вы сможете гарантированно приобрести ключи к играм от Steam, Uplay, Battle.net и прочих популярных игровых платформ. Наш магазин делает все для того, чтобы ваши покупки проходили быстро, с максимальным удобством и безопасностью, а цены оставались максимально доступными.
                                 </p>

                                 </div>
                                 <div className="parag">
                                 <p>
                                 Для покупки достаточно лишь указать электронный адрес при оформлении заказа и выбрать удобный способ оплаты. После этого Вам на почту придет пароль доступа в личный кабинет, в котором Вы получите ключ активации.
                                 </p>

                                 </div>
                                 <div className="page-text__hidden">
                                     <input type="checkbox" className="read-more-checker" id="read-more-checker"/>
                                     <div className="limited">
                                     <br/>
                                     <h3 className="page-text__title">Наши преимущества</h3>
                                     <ul className="ul-orange">
                                      <ol>широкий ассортимент игр – более 2 000 позиций в каталоге</ol>
                                      <ol>техническая поддержка сайта поможет ответить на возникшие вопросы и решить их. </ol>
                                      <ol>
                                          <p>
                                              наша аттестация в электронных платежных системах позволяет работать с самыми распространенными электронными кошельками: Вебмани, Киви, Яндекс
                                          </p>
                                          <p>принимаем и оплату по банковской карте (Visa, MasterCard)</p>
                                          <p>Мобильные операторы (Билайн, ТЕЛЕ2, Мегафон и МТС)</p>
                                          <p>
                                              Интернет-банкинг (Сбербанк.Онлайн, Альфа, Русский стандарт, ВТБ24, Промсвязьбанк)
                                          </p>
                                      </ol>
                                      <ol>
                                          накопительная система скидок до 10%. Чем больше сумма покупок - тем больше скидка на последующие покупки. 
                                      </ol>
                                      <ol>
                                          Мы приобретаем ключи оптом у официальных дилеров, работающих напрямую с издателями
                                      </ol>
                                      <ol>
                                          Регулярно мониторим другие крупные онлайн-магазины и готовы предложить самую низкую цену.
                                      </ol>
                                     </ul>
                                     <p>
                                         <br/>
                                         
                                         Работая на рынке компьютерных игр с 2012 года, мы приобретали бесценный опыт, внимательно выслушивали все мнения и пожелания покупателей. В результате наш сервис стал максимально простым и удобным, а процедура покупки невероятно легкой. Сегодня нас знают и доверяют сотни тысяч игроков в России и соседних странах. Свидетельство тому – свыше 8 000 положительных отзывов на нашей страничке Отзывы.
         И это – огромный стимул для нас расти и развиваться дальше.
                                         
                                     </p>
                                     <div className="bottom"></div>
                                     </div>
                                     <label htmlFor="read-more-checker" className="read-more-button"></label>
                                 </div>
                                 
                             </div>
                         
                             </div>
                         </div>
                   
        
                 </section> */}
                 </>
    );
};

export default Prices;