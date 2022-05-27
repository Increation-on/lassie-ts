import { useNavigate } from 'react-router-dom';
import { FC, useEffect } from "react";
import { useActions } from '../../../store/hooks/useAction';
import { useAppSelector } from '../../../store/hooks/hooks';

const OrderList: FC = () => {


    const { totalPrice, productInfo } = useAppSelector(state => state.productInfo)
    const { resetTotalAmountAction, resetTotalPriceAction, resetProductInfoAction } = useActions();

    const storageExist = localStorage.getItem("persist:root");

    const navigate = useNavigate();

    const clearBasket = () => {
        localStorage.clear();
        resetTotalPriceAction();
        resetTotalAmountAction();
        resetProductInfoAction();
        navigate('/main');
    }

    let key: number = 1;

    const nds = Math.trunc(totalPrice * 0.2);

    return (
        <fieldset className="form__fieldset">
            <legend className="form__title">Состав заказа</legend>
            <button
                type="button"
                style={{ marginBottom: "40px", borderRadius: "10px", backgroundColor: "#f29625" }}
                className="btn form__btn form__btn_align_right"
                onClick={() => clearBasket()}>Очистить корзину</button>
            <div className="goods-table">
                <div className="goods-table__header">
                    <div className="goods-table__header-row">
                        <div className="goods-table__heading">Товары</div>
                        <div className="goods-table__heading">Скидка</div>
                        <div className="goods-table__heading">Цена</div>
                        <div className="goods-table__heading">Количество</div>
                        <div className="goods-table__heading">Сумма</div>
                    </div>
                </div>
                {storageExist ?
                    <div className="goods-table__main">
                        {productInfo.map((el: any) => {
                            return <div key={key++} className="goods-table__row">
                                <div className="goods-table__cell">
                                    <div className="goods-table__col">
                                        <div className="goods-table__img-wrapper">
                                            <img src={el.image} alt="product" className="goods-table__img" />
                                            {el.discount ? <span className="flag flag_type_sale">sale</span> : null}
                                        </div>
                                    </div>
                                    <div className="goods-table__col">
                                        <div className="goods-table__text">{el.title}</div>
                                        <div className="goods-table__info">{el.code}</div>
                                        <div className="goods-table__info">Размер: 0{el.size}</div>
                                    </div>
                                </div>
                                <div className="goods-table__cell">
                                    {el.discount ? <div className="goods-table__text goods-table__text_discount">{el.discount}%</div> : null}
                                </div>
                                <div className="goods-table__cell">
                                    <div className="goods-table__text">{el.currentPrice} руб.</div>
                                </div>
                                <div className="goods-table__cell">
                                    <div className="goods-table__text">{el.amount} шт.</div>
                                </div>
                                <div className="goods-table__cell">
                                    {el.discount
                                        ? <div className="goods-table__text goods-table__text_discount">{el.price} руб.</div>
                                        : <div className="goods-table__text">{el.price} руб.</div>
                                    }
                                </div>
                            </div>
                        })}
                    </div> : <div>В корзине ничего нет</div>}
            </div>
            {storageExist ? <>
                <div className="form__total">
                    <div className="form__col-right">
                        <div className="form__total-row form__total-row_goods-cost"><span className="form__total-item">Товаров на сумму:</span><span className="form__total-item">{totalPrice} руб.</span>
                        </div>
                        <div className="form__total-row form__total-row_tax"><span className="form__total-item">В том числе НДС:</span><span className="form__total-item">{nds} руб.</span>
                        </div>
                        <div className="form__total-row form__total-row_general"><span className="form__total-item">Итого</span>
                            <div className="form__total-item form__total-item_sum">{totalPrice} руб.</div>
                        </div>
                        <p>Заполнение вышеуказанных данных является необходимым для оформления Заказа и осуществления доставки. Все данные находятся на территории РФ, согласно Законодательству РФ.</p>
                        <p>Предоставляя свои персональные данные при оформлении Заказа, подтверждаю свое согласие на обработку моих персональных данных, а также на аудиозапись своего общения с представителями Сайта в период оформления Заказа и исполнения обязательств согласно
                            <a href="#" className="link">Пользовательскому Соглашению.</a>
                        </p>
                    </div>
                </div>
                <button type="submit" className="btn form__btn form__btn_align_right">Оформить заказ</button>
            </> : null
            }

        </fieldset>
    )
}


export default OrderList;