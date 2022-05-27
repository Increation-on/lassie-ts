import { Link } from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { useAppSelector } from "../../store/hooks/hooks";
import MainPage from '../../pages/main/MainPage';
import ErrorPage from '../../pages/error/ErrorPage';
import About from '../../pages/about/About';
import Delivery from '../../pages/delivery/Delivery';
import Payment from '../../pages/payment/Payment';
import OrderPage from './../../pages/order/OrderPage';
import Catalog from "../../pages/catalog/Catalog";
import ProductPage from "../../pages/product/ProductPage";
import styles from "./headerStyles/breadcrumbs.module.css";
import { FC } from "react";

type BreadcrumbsProps = {
    item: string | null;
}

const Breadcrumbs: FC<BreadcrumbsProps> = (props: BreadcrumbsProps) => {

    const { category } = useAppSelector(state => state.catalog);
    const catalogHead = category;

    const routes = [
        { path: '/main', Component: MainPage, breadcrumb: "Главная", id: 1 },
        { path: '/catalog', Component: Catalog, breadcrumb: props.item, id: 2 },
        { path: "/", Component: MainPage, breadcrumb: "Главная", id: 3 },
        { path: "*", Component: ErrorPage, id: 4 },
        { path: "/about", Component: About, breadcrumb: "О компании", id: 5 },
        { path: "/delivery", Component: Delivery, breadcrumb: "Доставка", id: 6 },
        { path: "/payment", Component: Payment, breadcrumb: "Оплата", id: 7 },
        { path: "/order", Component: OrderPage, breadcrumb: "Корзина", id: 8 },
        { path: "/product/:id", Component: ProductPage, breadcrumb: catalogHead, id: 9 },
        { path: "/product", Component: ProductPage, breadcrumb: props.item, id: 10 },

    ]

    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <ul style={{ marginTop: "20px", marginLeft: "20px" }} className="breadcrumbs">
            {breadcrumbs.map(({ match, breadcrumb }, index) => {
                return <li key={match.pathname} className={index === breadcrumbs.length - 1 ? styles.breadcrumbs__item_last : "breadcrumbs__item"}>
                    <Link to={match.pathname}
                        className={index === breadcrumbs.length - 1 ? styles.last__breadcrumb_dis : "breadcrumbs__name"}>{breadcrumb}</Link>
                </li>
            })}
        </ul>
    )

}
export default Breadcrumbs;

