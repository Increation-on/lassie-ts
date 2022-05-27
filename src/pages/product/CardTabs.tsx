import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import capcha from "../../images/capcha.jpg";
import RequestService from "../../api/RequestService";



interface cardTabsProps {
    prod: any;
}

const CardTabs: FC<cardTabsProps> = (props: cardTabsProps) => {

    const product = props.prod;
    let key = 1;

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
        watch
    } = useForm({
        mode: 'onBlur'
    });

    // useEffect( () => {
    //     console.log(errors);
    // }, [errors])

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [spamProtect, setSpamProtect] = useState<string>('');

    const resetForm = () => {
        setName('');
        setMessage('');
        setEmail('');
        setSpamProtect('');
    }

    const [postValue, setPostValue] = useState<any>({});

    useEffect(() => {
        setPostValue({
            name: name,
            email: email,
            message: message,
            spamProtect: spamProtect
        })
    }, [name, email, spamProtect, email]);

    const onFormSubmit = async (e: any) => {
        e.preventDefault();
        const response = await RequestService.postReviewData(postValue);
        const data = await response.json;
        console.log(data);
    };

    return (
        <div className="card__tabs tabs">
            <ul className="tabs__nav">
                <li data-tab='1' className="tabs__nav-item tabs__nav-item_active">
                    <a style={{ cursor: "pointer" }} className="tabs__nav-link">Описание</a>
                </li>
                <li data-tab='2' className="tabs__nav-item">
                    <a style={{ cursor: "pointer" }} className="tabs__nav-link">Состав</a>
                </li>
                <li data-tab='3' className="tabs__nav-item">
                    <a style={{ cursor: "pointer" }} className="tabs__nav-link">Уход</a>
                </li>
                <li data-tab='4' className="tabs__nav-item">
                    <a style={{ cursor: "pointer" }} className="tabs__nav-link">Отзывы <span className="card__reviews-num">74</span></a>
                </li>
            </ul>
            <div className="tabs__content-wrapper">
                {product ?
                    <div key={key++} data-tab='1' className="tabs__content tabs__content_active">
                        {product && product.description ?
                            product.description.map((el: any) => {
                                return (
                                    <div key={key++} className="card__content-block">
                                        <p className="text">{el.main}</p>
                                    </div>
                                )
                            }) : null
                        }
                        <ul className="list list_markers">
                            {product && product.description ?
                                product.description[1].thesis.map((el: any) => {
                                    return <li key={el.id} className="list__item list__item_marker_orange text">{el.title}</li>
                                }) : null
                            }
                        </ul>
                    </div> : null
                }
                <div data-tab='2' className="tabs__content">
                    <ul className="list list_markers">
                        {product ?
                            product.material.map((el: any) => {
                                return <li key={el.id} className="list__item list__item_marker_orange text">{el.title}</li>
                            }) : null
                        }
                    </ul>
                </div>
                <div data-tab='3' className="tabs__content">
                    {product ?
                        product.description.map((el: any) => {
                            return <p key={key++} className="text">{el.care}</p>
                        }) : null
                    }
                </div>
                <div data-tab='4' className="tabs__content">
                    <div className="reviews">
                        <div className="reviews__other">
                            <article className="review reviews__item">
                                <div className="raiting review__raiting"><span className="raiting__star">5 звезда</span><span className="raiting__star raiting__star_active">4 звезды</span><span className="raiting__star">3 звезды</span><span className="raiting__star">2 звезды</span><span className="raiting__star">1 звёзд</span>
                                </div>
                                <div className="review__message">
                                    <p className="text">Отличная одежда для активного отдыха и игр на улице.</p>
                                </div>
                                <footer className="review__footer">
                                    <p>Добавил(а) Наталья,
                                        <time dateTime="2015-03-15T21:07">15.03.2015 в 21:07</time>
                                    </p>
                                </footer>
                            </article>
                            <article className="review reviews__item">
                                <div className="raiting review__raiting">
                                    <span className="raiting__star raiting__star_active">5 звезд</span>
                                    <span className="raiting__star">4 звезды</span>
                                    <span className="raiting__star">3 звезды</span>
                                    <span className="raiting__star">2 звезды</span>
                                    <span className="raiting__star">1 звёзда</span>
                                </div>
                                <div className="review__message">
                                    <p className="text">Очень теплая и качественная одежда. Рекомендую!</p>
                                </div>
                                <footer className="review__footer">
                                    <p>Добавил(а) Роберт,
                                        <time dateTime="2015-03-15T21:04">15.03.2015 в 21:04</time>
                                    </p>
                                </footer>
                            </article>
                        </div>
                        <div className="reviews__own">
                            <article className="review-form">
                                <h3 className="title">Оставить отзыв</h3>
                                <form onSubmit={onFormSubmit} action="" className="form js-form-validate">
                                    <div className="form__row">
                                        <div className="form__col form__col_width_130">
                                            <label className="form__label">Оцените товар</label>
                                        </div>
                                        <div className="form__col">
                                            <div className="raiting">
                                                <input id="raiting1-item5" name="Review[raiting]" type="radio" value="5" required className="raiting__check" />
                                                <label htmlFor="raiting1-item5" className="raiting__star raiting__star_choose">5 звезда</label>
                                                <input id="raiting1-item4" name="Review[raiting]" type="radio" value="4" required className="raiting__check" />
                                                <label htmlFor="raiting1-item4" className="raiting__star raiting__star_choose">4 звезды</label>
                                                <input id="raiting1-item3" name="Review[raiting]" type="radio" value="3" required className="raiting__check" />
                                                <label htmlFor="raiting1-item3" className="raiting__star raiting__star_choose">3 звезды</label>
                                                <input id="raiting1-item2" name="Review[raiting]" type="radio" value="2" required className="raiting__check" />
                                                <label htmlFor="raiting1-item2" className="raiting__star raiting__star_choose">2 звезды</label>
                                                <input id="raiting1-item1" name="Review[raiting]" type="radio" value="1" required className="raiting__check" />
                                                <label htmlFor="raiting1-item1" className="raiting__star raiting__star_choose">1 звёзд</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form__row">
                                        <div className="form__col form__col_width_130">
                                            <label htmlFor="review-name" className="form__label">Ваше имя</label>
                                        </div>
                                        <div className="form__col form__col_width_260">
                                            <input onChange={(e) => setName(e.target.value)} value={name} required id="review-name" name="Review[name]" className="input" type="text" />
                                        </div>
                                    </div>
                                    <div className="form__row">
                                        <div className="form__col form__col_width_130">
                                            <label htmlFor="review-email" className="form__label">Электронная почта</label>
                                        </div>
                                        <div className="form__col form__col_width_260">
                                            <input onChange={(e) => setEmail(e.target.value)} required value={email} id="review-email" name="Review[email]" type="email" className="input" />
                                        </div>
                                    </div>
                                    <div className="form__row">
                                        <div className="form__col form__col_width_130">
                                            <label htmlFor="review-message" className="form__label">Ваше сообщение</label>
                                        </div>
                                        <div className="form__col form__col_width_400">
                                            <textarea onChange={(e) => { setMessage(e.target.value) }} value={message} id="review-message" name="Review[message]" required className="textarea"></textarea>
                                        </div>
                                    </div>
                                    <div className="form__row review-form__antispam-row">
                                        <div className="form__col form__col_width_130">
                                            <label htmlFor="review-spam" className="form__label">Защита от спама</label>
                                        </div>
                                        <div className="form__col form__col_width_130">
                                            <input onChange={(e) => setSpamProtect(e.target.value)} value={spamProtect} id="review-spam" name="Review[spam]" required className="input" type="text" />
                                            <a style={{ cursor: "pointer" }} className="link review-form__refresh-captcha text">Обновить картинку</a>
                                        </div>
                                        <div className="form__col form__col_width_130">
                                            <img src={capcha} alt="защита от спама" />
                                        </div>
                                    </div>
                                    <div className="form__row review-form__btn-row">
                                        <div className="form__col form__col_width_280">
                                            <button type="submit" className="btn review-form__submit">Оставить отзыв</button>
                                        </div>
                                        <div className="form__col review-form__reset-col">
                                            <button onClick={resetForm} type="reset" className="form__reset link text">Очистить форму</button>
                                        </div>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTabs;