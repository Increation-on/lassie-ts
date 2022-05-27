import { useState, useEffect, FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useActions } from "../../../store/hooks/useAction";

interface productCardProps {
    productData: any;
    key: number;
}

const ProductCard: FC<productCardProps> = (props: productCardProps) => {

    const product = props.productData;
    const { sumTotalAmountAction, sumTotalPriceAction, setLikesAction, addProductInfoAction } = useActions()

    const [count, setCount] = useState(0);
    const [productPrice, setProductPrice] = useState<any>(0);
    const [productSize, setProductSize] = useState<any>(null);
    const [likeCounter, setLikeCounter] = useState(0);
    const [likeToggle, setLikeToggle] = useState(false);

    const likeHandler = () => {
        setLikeToggle(!likeToggle);
        setLikeCounter(Number(!likeCounter));
    }

    let discounted: number | undefined = product.discount ? Math.trunc(product.price - (product.price * (product.discount / 100))) : undefined;

    const increment = () => {
        setCount(count + 1);
        product.discount ? setProductPrice(productPrice + discounted) : setProductPrice(productPrice + product.price);
    }

    const decrement = () => {
        setCount(count - 1);
        setProductPrice(productPrice - product.price);
        if (count === 0) {
            setCount(0);
            setProductPrice(null)
        }
    }


    const setBasket = (
        price: number,
        amount: number,
        size: number,
        likes: number,
        title: string = product.title,
        image: string = product.img,
        currentPrice: number = product.price,
        code: string = product.code,
        discount: number = product.discount,
        id: number = product.id) => {

        sumTotalPriceAction(price);
        sumTotalAmountAction(amount);

        const prodInfo = {
            price: price,
            amount: amount,
            size: size,
            likes: likes,
            title: title,
            image: image,
            currentPrice: currentPrice,
            code: code,
            discount: discount,
            id: id
        }


        addProductInfoAction(prodInfo);

        setCount(0);
        setProductPrice(null);
    }

    const activeLike = {
        cursor: "pointer",
        color: "red"
    }

    const inactiveLike = {
        cursor: "pointer"
    }

    const navigate = useNavigate();

    // const customNavigate = () => {
    //     navigate(`${product.url}/${product.id}`)
    //     window.location.reload()
    // }

    // onClick={()=>customNavigate()}

    return (
        <li className="goods__item">
            <article className="good">
                <div className="good__content">
                    <Link to={`${product.url}/${product.id}`} className="good__link">
                        <img src={product.img} alt="Товар" className="good__img" title={product.title} />
                        {product.mark.map((el: any) => {
                            return el.new ?
                                <span key={product.id} className="flag flag_type_new">new</span> :
                                el.hit ?
                                    <span key={product.id} className="flag flag_type_hit">hit</span> :
                                    el.sale ?
                                        <span key={product.id} className="flag flag_type_sale">sale</span> :
                                        null
                        })}
                    </Link>
                    <a style={likeToggle ? activeLike : inactiveLike} onClick={likeHandler} className="like">Мне нравится</a>
                    <h4 className="good__name">{product.title}</h4>
                    <div className="good__price-wrapper">
                        {product.discount ?
                            <>
                                <span className="good__price good__price_new">{discounted} р.</span>
                                <span className="good__price good__price_old">{product.price} р.</span>
                                <span className="good__discount">Скидка {product.discount}%</span>
                            </>
                            : <span className="good__price">{product.price} р.</span>
                        }
                    </div>
                </div>
                <div className="good__hover">
                    <form method="post" action="" className="form good__order">
                        <div className="good__order-row">
                            <label className="good__order-label">Выберите размер</label>
                            {product.sizes.map((el: any) => {
                                return (
                                    <div key={el.id} style={{ marginLeft: "4px" }} className="checkbox-tile">
                                        <input
                                            disabled={!el.available}
                                            id={`good${product.id - 1}-size${el.id - 1}`}
                                            name="Good[size]" type="radio"
                                            value={el.num}
                                            required
                                            className="checkbox-tile__elem" />
                                        <label onClick={() => setProductSize(el.num)} htmlFor={`good${product.id - 1}-size${el.id - 1}`} className="checkbox-tile__label">{el.num}</label>
                                    </div>

                                )
                            })}
                        </div>
                        <div className="good__order-row">
                            <label htmlFor="good0-num" className="good__order-label">Количество</label>
                            <div className="input-number">
                                <input disabled={true} onChange={e => e.target.value} value={count} id="good0-num" name="Good[number]" type="number" step="1" min="1" required className="input-number__elem" />
                                <div className="input-number__counter">
                                    <span onClick={increment} className="input-number__counter-spin input-number__counter-spin_more">Больше</span>
                                    <span onClick={decrement} className="input-number__counter-spin input-number__counter-spin_less">Меньше</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setBasket(productPrice, count, productSize, likeCounter)}
                            type="button"
                            disabled={!count || !productSize}
                            style={!count || !productSize ? { backgroundColor: "gray" } : { backgroundColor: "#0076bd" }}
                            className="btn">{!productSize ? "Выберите размер" : "Добавить в корзину"}</button>
                    </form>
                </div>
            </article>
        </li>
    )
}

export default ProductCard;