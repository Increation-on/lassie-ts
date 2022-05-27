import CardInfo from "./CardInfo"
import CardTabs from "./CardTabs";
import Gallery from "./Gallery";
import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../main/Content/ProductCard";
import Popup from "./Popup";
import { useAppSelector } from "../../store/hooks/hooks";


const ProductPage: FC = () => {

    // const products = useSelector(state => state.products.products);
    // const currentPath = useSelector(state => state.location.location);
    // const sortedProducts = useSelector(state => state.sortedProducts.sortedProducts);
    // const displayFilteredProducts = useSelector(state => state.displayFilteredProducts.displayFilteredProducts);
    // const filteredProducts = useSelector(state => state.filteredProducts.filteredProducts);

    const { products, location } = useAppSelector(state => state.productInfo);
    const { sortedProducts, } = useAppSelector(state => state.sort);
    const { displayFilteredProducts, filteredProducts } = useAppSelector(state => state.filter)


    const params = useParams();
    const paramsId = Number(params.id);

    useEffect(()=>{
        console.log(location.from)
    }, [location])

    // useEffect(()=>{
    //     console.log("from: ", currentPath.from)
    //     console.log("to: ", currentPath.to)
    // },[currentPath.from])

    return products ? (
        <main className="content product-page">
            <div className="container">
                <div className="card product-page__card">
                    <div className="card__top">
                        {location.from === "/catalog" || location.from === `/product/${paramsId}` ?
                            <Gallery prod={displayFilteredProducts ? filteredProducts[paramsId - 1] : sortedProducts[paramsId - 1]} /> :
                            <Gallery prod={products[paramsId - 1]} />
                        }
                        {location.from === "/catalog" || location.from === `/product/${paramsId}` ?
                            <CardInfo prod={displayFilteredProducts ? filteredProducts[paramsId - 1] : sortedProducts[paramsId - 1]} /> :
                            <CardInfo prod={products[paramsId - 1]} />
                        }
                    </div>
                    {location.from === "/catalog" || location.from === `/product/${paramsId}` ?
                        <CardTabs prod={displayFilteredProducts ? filteredProducts[paramsId - 1] : sortedProducts[paramsId - 1]} /> :
                        <CardTabs prod={products[paramsId - 1]} />
                    }
                </div>
                <article className="product-page__section">
                    <h2 className="heading product-page__title">
                        <span className="heading__text">С этим товаром покупают</span>
                    </h2>
                    <ul className="goods product-page__goods">
                        {products.map((el) => {
                            while (el.id <= 5) {
                                return <ProductCard
                                    key={el.id}
                                    productData={products[el.id - 1]}
                                />
                            }
                        })}
                    </ul>
                </article>
                <article className="product-page__section">
                    <h2 className="heading product-page__title">
                        <span className="heading__text">Рекомендуем</span>
                    </h2>
                    <ul className="goods product-page__goods">
                        {products.map((el) => {
                            while (el.id <= 5) {
                                return <ProductCard
                                    key={el.id}
                                    productData={products[el.id - 1]}
                                />
                            }
                        })}
                    </ul>
                </article>
                <Popup prod={products[paramsId - 1]} />
            </div>
        </main>
    ) : <div>Loading...</div>

}

export default ProductPage;