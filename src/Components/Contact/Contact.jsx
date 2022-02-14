import "./Contact.scss";

function Contact() {
  
  return (
    <section className="contact" id="#contact">
      <div className="container">
      <h5 className="contact__title">Напишите нам.</h5>
    
        <div className="contact-body">
            <div className="contact-body__left">
                <h5 className="contact-body__left__title">
                    Подпишитесь на нашу рассылку со скидкой 10%
                </h5>

                <p className="contact-body__left__info">
                    Связаться с нами. Введите свой номер телефона и наши операторы свяжутся с вами в ближайшее время.
                </p>

                <form className="contact-form">
                    <input type="text" className="contact-form__num-input" placeholder="Телефон номер"/>
                    <button className="contact-form__btn">Отправить</button>
                </form>
            </div>

            <div className="contact-body__right">
                <h5 className="contact-body__right__title">
                  Хотите получать уникальные предложения?
                </h5>

                <p className="contact-body__right__info">
                    Подпишитесь на наш канал в TELEGRAM
                </p>

                <button className="contact-body__right__btn">подробнее</button>
            </div>
        </div>


      </div>
    </section>
  );
}

export default Contact;
