import React, { useState } from 'react';
import './Footer.css'

function play(){
  document.body.style.backgroundColor="red"
  document.body.style.сolor="#fff"

   

}

function color(){
  document.body.style.backgroundColor="#fff"
 

}

function list(){
  document.body.style.сolor="#fff"
}

const Footer = () => {
  const [color, setColor] = useState(false)

  const handleColor = () => {
    setColor(!color)
  }
  return (
    // <footer className="container__footer">
    <footer className={color ? "container__footer" : "footer_black"}>
      <div className="footer__inner paper">
        <div className="footer__theme-toggler">
          <h3>Тема сайта</h3>
          <span className="footer-t-previews">
            {/* <input  type="button" value="A" onClick={color} class="footer-t-preview tooltip" data-toggle-theme="light" data-place="top" aria-label="Светлая"/> */}
            <input  type="button" value="A" onClick={handleColor} class="footer-t-preview tooltip" data-toggle-theme="light" data-place="top" aria-label="Светлая"/>
            <input type="button" value="A" onClick={play} class="footer-t-preview tooltip" data-toggle-theme="dark" data-place="top" aria-label="Темная"/>
          </span>
        </div>
         <div onClick={list} class="pb-10 asd " id="dmca">
         В случаях нарушения авторских прав - обращайтесь на почту info@mangalib.me
         </div>
         <div class="footer__menu clearfix">
           <div class="footer__copyright">
             <span>© 2021</span>
             <a rel="nofollow" href="" >MangaLib</a>
           </div>
           <ul class="footer__nav clearfix">
             <a class="footer__nav-link" rel="nofollow" target="_blank" href="" title="Обратная связь">Обратная связь</a>
             <a class="footer__nav-link" rel="nofollow" target="_blank" href="" title="Для правообладателей">Для правообладателей</a>
             <a class="footer__nav-link" rel="nofollow" target="_blank" href="" title="Пользовательское соглашение">Пользовательское соглашение</a>
             <a class="footer__nav-link" rel="nofollow" target="_blank" href="" title="DMCA">DMCA</a>
             <a class="footer__nav-link" rel="nofollow" target="_blank" href="" title="Список манги">Список манги</a>
             <a class="footer__nav-link" rel="nofollow" target="_blank" href="" title="Лицензия">Лицензия</a>
           </ul>
         </div>
      </div>
    </footer>
  );
};

export default Footer;