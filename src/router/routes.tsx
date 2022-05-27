import MainPage from '../pages/main/MainPage';
import { FC } from 'react';
import ErrorPage from '../pages/error/ErrorPage';
import About from '../pages/about/About';
import Delivery from '../pages/delivery/Delivery';
import Payment from '../pages/payment/Payment';
import OrderPage from './../pages/order/OrderPage';
import Catalog from '../pages/catalog/Catalog';
import ProductPage from '../pages/product/ProductPage';

interface IRoutes {
    path: string;
    Component: FC;
    id: number;
}

export const router: IRoutes[] = [
    { path: '/main', Component: MainPage, id: 1 },
    { path:'/catalog', Component: Catalog, id:2 },
    { path: "/", Component: MainPage, id: 3 },
    { path:"*", Component: ErrorPage, id:4 },
    { path:"/about", Component: About, id:5 },
    { path:"/delivery", Component: Delivery, id: 6 },
    { path:"/payment", Component: Payment, id: 7 },
    { path:"/order", Component: OrderPage, id:8 },
    { path:"/product/:id", Component: ProductPage, id:9 },
    { path:"/product", Component: ProductPage, id:10 },
    { path:"/error", Component: ErrorPage, id:11 },

]


