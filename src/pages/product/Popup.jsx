import { Link } from "react-router-dom";

const Popup = (props) => {

    const product = props.prod;

    return product ? (
        <div data-popup="good" className="popup">
            <div className="popup-good popup__content">
                <div className="popup-good__title">Товар добавлен в корзину</div>
                <img src={product.img} alt="Фото товара" className="popup-good__img" />
                <p className="popup-good__desc text">{product.title}</p>
                <div className="popup-good__row">
                    <Link to="/catalog" className="btn btn_border js-popup-close popup-good__btn">Вернуться в каталог</Link>
                    <Link to="/order" className="btn popup-good__btn">Оформить заказ</Link>
                </div>
            </div>
        </div>
    ) : <div>Loading...</div>
}

export default Popup;