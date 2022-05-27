import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';
import { midInfoFirst, midInfoSecond, midTelFirst, midTelSecond } from '../../configs/contacts';
import HeaderMidContatcs from './HeaderMidContacts';
import { FC } from 'react';
import { useAppSelector } from '../../store/hooks/hooks';



const HeaderMiddle: FC = () => {

    const location = useLocation();

    const { totalPrice, totalAmount } = useAppSelector(state => state.productInfo);

    return (
        <div className="header__middle">
            <div className="container header__container header__container_middle">
                <Logo location={location.pathname} />
                <div className="header__contacts">
                    <span className="header__icon icon-comment"></span>
                    <HeaderMidContatcs tel={midTelFirst} info={midInfoFirst} />
                    <HeaderMidContatcs tel={midTelSecond} info={midInfoSecond} />
                    <div className="header__col header__col_contacts">
                        <div className="contacts">
                            <a href="#" className="link">Контактная иформация</a>
                        </div>
                    </div>
                </div>
                <div className="header__col header__col_basket">
                    <span className="header__icon icon-bag"></span>
                    <div className="header__basket">
                        <div className="text">
                            {!totalAmount && !totalPrice ? <span style={{ marginTop: "10px", display: "block" }}>Ваша корзина пуста</span> : "В вашей корзине"}
                        </div>
                        {!totalAmount && !totalPrice ? null : <Link to="/order" className="link">
                            {totalAmount} {totalAmount == 1 ? "товар" :
                                totalAmount > 1 && totalAmount <= 4 ? "товара" :
                                    totalAmount > 4 ? "товаров" : null} на {totalPrice} руб.</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMiddle;