import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

       <div className="social__media">
      <a href="https://www.instagram.com/masa.uz/"  className="social__media__link">
          TELEGRAM
      </a >
      <a href="https://www.instagram.com/masa.uz/"  className="social__media__link">
          FACEBOOK
      </a >
      <a href="https://www.instagram.com/masa.uz/"  className="social__media__link">
          INSTAGRAM
      </a >
      <a href="https://www.instagram.com/masa.uz/"  className="social__media__link">
          mebelchi@gmail.com
      </a >
       </div>
     


      <div className="adress-sec">
        <div className="adress-sec__menu">
          <h5 className="address-sec__menu__title">
            Меню
          </h5>

          <ul className="address-sec__menu__ul">
            <li className="address-sec__menu__link">
              <a href="#home">Домой</a>
              
            </li>
            <li className="address-sec__menu__link">
              <a className="address-sec__a" href="#product">Продукты</a>
            </li>
            <li className="address-sec__menu__link">
               <a className="address-sec__a" href="#about">О нас</a>
            </li>
            <li className="address-sec__menu__link">
               <a className="address-sec__a" href="#contact">Связь </a>
            </li>
            <li className="address-sec__menu__link">
               <a className="address-sec__a" href="https://t.me/masauz">Телеграм </a>
              
            </li>

          </ul>

        </div>


          <div className="address-sec__adress">
            <h5 className="address-sec__adress__title">
              Адрес
            </h5>

         
              <p className="address-sec__address__p">
                Ташкент, Чиланзар 99
              </p>
         

          </div>


          <div className="contact-sec">
            <h5 className="contact-sec__title">
              Контакты
            </h5>

            <div className="contact-div">

              <a href="tel: +998911234567" className="contact-sec__a">
                +998 91 123-45-67
                
              </a>
              <a href="tel: +998911234567" className="contact-sec__a">
                +998 91 123-45-67
                
              </a>
            </div>
          </div>


        </div>


       </div>
  
      
    </footer>
  );
}

export default Footer;
  