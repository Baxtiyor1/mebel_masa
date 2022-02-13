

//SASS
import './Main.scss'

//Images
import masa1 from '../../assets/img/masa1.jpg'
import masa2 from '../../assets/img/masa2.jpg'
import masa4 from '../../assets/img/masa4.jpg'
import masa5 from '../../assets/img/masa5.jpg'
import masa8 from '../../assets/img/masa8.jpg'
import masa9 from '../../assets/img/masa9.jpg'
import masa14 from '../../assets/img/masa14.jpg'

function Main() {
    return (
        <main>
            <section className='intro' id='#home'>
                <div className="container">
                    <div className="intro__wrapper">
                        <h1 className='intro__title'>Будущее мебели только с нами</h1>
                        <p className='intro__text'>Найдите элегантный и роскошный интерьер, разработанный профессиональным дизайнером интерьеров.</p>
                    </div>
                </div>
            </section>
            <section className='product' id='#product'>
                <div className="container">
                    <div className="product__wrapper">
                        <div className="product__box">
                            <h2 className="product__box--title">Продукты .</h2>
                            <p className="product__box--text">Мы решаем самые большие проблемы в мебели. Вы можете легко найти нужный продукт</p>
                        </div>
                        <ul className='product__list'>
                            <li className='product__item'>
                                <img className='product__img' src={masa1} alt="masa1" />
                                <div className='product__price'>
                                    <p className='product__price--name'>Название мебели</p>
                                    <p className='product__price--amount'>$ 450</p>
                                </div>
                            </li>
                            <li className='product__item'>
                                <img className='product__img' src={masa2} alt="masa2" />
                                <div className='product__price'>
                                    <p className='product__price--name'>Название мебели</p>
                                    <p className='product__price--amount'>$ 1150</p>
                                </div>
                            </li>
                            <li className='product__item'>
                                <img className='product__img' src={masa4} alt="masa4" />
                                <div className='product__price'>
                                    <p className='product__price--name'>Название мебели</p>
                                    <p className='product__price--amount'>$ 850</p>
                                </div>
                            </li>
                            <li className='product__item'>
                                <img className='product__img' src={masa5} alt="masa5" />
                                <div className='product__price'>
                                    <p className='product__price--name'>Название мебели</p>
                                    <p className='product__price--amount'>$ 550</p>
                                </div>
                            </li>
                            <li className='product__item'>
                                <img className='product__img' src={masa8} alt="masa8" />
                                <div className='product__price'>
                                    <p className='product__price--name'>Название мебели</p>
                                    <p className='product__price--amount'>$ 275</p>
                                </div>
                            </li>
                            <li className='product__item'>
                                <img className='product__img' src={masa9} alt="masa9" />
                                <div className='product__price'>
                                    <p className='product__price--name'>Название мебели</p>
                                    <p className='product__price--amount'>$ 250</p>
                                </div>
                            </li>
                        </ul>
                        <div className='product_btnbox'>
                            <button className='product_btn'>Более</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='about' id='#about'>
                <div className="container">
                    <div className="about__wrapper">
                        <div className="product__box">
                            <h2 className="product__box--title">О нас.</h2>
                        </div>
                        <div className='about__list'>
                            <div className="about__aside">
                                <h3 className='about__title'>Furniture — молодой амбициозный бренд в европейском стиле, выпускающий мебель под собственной торговой маркой.</h3>
                                <p className='about__text'>Наша команда много времени уделяет дизайну и качеству продукции, созданию стильного пространства в интерьере дома или офиса. Каждое изделие изготавливается на месте в Москве, с большим вниманием к деталям и особым вниманием к отдельным процессам. Долговечность и мастерство являются приоритетными благодаря выбору только материалов самого высокого качества.</p>
                            </div>
                            <div className='about__box'>
                                <img className='about__img' src={masa14} alt="masa14" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main