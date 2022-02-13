import { useRef } from "react";

import "./Header.scss";

//Images
import bar_icon from '../../assets/img/bars.svg'
import logopng from '../../assets/img/logo_black2.png'

function Header() {
  const openModal = useRef()
  const openMenu = useRef()
  const bgHeader = useRef()
  const orderedUserName = useRef()
  const orderedUserPhone = useRef()

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 56) {
      bgHeader.current.classList.add('header__bg')
    } else {
      bgHeader.current.classList.remove('header__bg')
    }
  })

  function sendToBot(e) {
    e.preventDefault()

    let message = "Ismi : " + orderedUserName.current.value + " \nNomeri :" + orderedUserPhone.current.value;
    const token = "5216150088:AAEvp9o2rEnOFlAnHMmSJXryCfKkIihiQnc";

    const chat_id_Otabek = "671538216";

    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id_Otabek}&text=${message}`;

    fetch(url)

    orderedUserName.current.value = null
    orderedUserPhone.current.value = null
  }

  function modalFunc() {
    openModal.current.classList.toggle('header__modal--active')
  }

  function menuFunc() {
    openMenu.current.classList.toggle('header__menu--active')
  }

  return (
    <header ref={bgHeader} className="header">
      <div className="container">
        <div className="header__nav">
          <img className="header__logo--icon" src={logopng} alt="logo" />
          <ul className="header__list">
            <li className="header__item"><a className="header__link" href="#home">Домой</a></li>
            <li className="header__item"><a className="header__link" href="#product">Продукты</a></li>
            <li className="header__item"><a className="header__link" href="#about">О нас</a></li>
            <li className="header__item"><a className="header__link" href="#about">Связь</a></li>
            <li className="header__item"><a className="header__link" href="#https://t.me/masauz">Телеграм</a></li>
          </ul>
          <div>
            <a className="header__btn header__tel" href="tel:+998998259250">+99890 123 45 67</a>
            <button onClick={modalFunc} className="header__btn">Оставить заявку</button>
          </div>
          <button className="header__bar--btn" onClick={menuFunc}>
            <img className="header__bar--icon" src={bar_icon} alt="bar" />
          </button>
        </div>
        <div ref={openMenu} className="header__menu">
          <button className="header__menu--close" onClick={menuFunc}>X</button>
          <ul className="header__list header__menu--list">
            <li className="header__item"><a className="header__link" href="#home">Домой</a></li>
            <li className="header__item"><a className="header__link" href="#product">Продукты</a></li>
            <li className="header__item"><a className="header__link" href="#about">О нас</a></li>
            <li className="header__item"><a className="header__link" href="#about">Связь</a></li>
            <li className="header__item"><a className="header__link" href="https://t.me/masauz">Телеграм</a></li>
            <a className="header__btn" href="tel:+998998259250">+99890 123 45 67</a>
          </ul>
        </div>
        <div ref={openModal} className="header__modal" >
          <div className="header__modal--box">
            <button className="header__modal--close" onClick={modalFunc}>X</button>
            <h2 className="header__modal--title">Zakaz berish</h2>
            <form action="/" className="header__modal--form" onSubmit={sendToBot}>
              <input ref={orderedUserName} className="header__modal--input" type="text" placeholder="Имя" />
              <input ref={orderedUserPhone} className="header__modal--input" type="tel" placeholder="Телефон номер" />
              <button type="submit" className="header__modal--btn">Yuborish</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
