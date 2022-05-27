import { FC, useEffect, useState } from "react";
import ProductCard from "../main/Content/ProductCard";
import CatalogSort from "./CatalogSort";
import Filter from "./Filter";
import { useNavigate } from 'react-router-dom';
import RequestService from './../../api/RequestService';
import { useActions } from "../../store/hooks/useAction";
import { useAppSelector } from "../../store/hooks/hooks";


const Catalog: FC = () => {

    const { products } = useAppSelector(state => state.productInfo);
    const { sortedProducts, productSortCategory, productDisplayNum } = useAppSelector(state => state.sort);
    const { filteredProducts, filterItems, displayFilteredProducts } = useAppSelector(state => state.filter);
    const { category, description } = useAppSelector(state => state.catalog)

    const {
        fetchSortedByAvailableProductsAction,
        fetchSortedByNewProductsAction,
        fetchSortedByPopularProductsAction,
        fetchSortedByPriceProductsAction,
        fetchFilter,
        sortProductsAction,
        showAllGoodsAction,
        showMoreGoodsAction,
        fetchUnsortedProductsAction,
        fetchFilteredProducts,
        displayFilteredProductsAction
    } = useActions();

    const [seasonValue, setSeasonValue] = useState<any[] | string>([]);
    const [collectionValue, setCollectionValue] = useState<any[] | string>([]);
    const [genderValue, setGenderValue] = useState<any[] | string>([]);
    const [sizeValue, setSizeValue] = useState<any[] | string>([]);
    const [colorValue, setColorValue] = useState<any[] | string>([]);
    const [availableValue, setAvailableValue] = useState<any[] | string>([]);
    const [minPrice, setMinPrice] = useState<any>('');
    const [maxPrice, setMaxPrice] = useState<any>('');

    const [generalFilter, setGeneralFilter] = useState<any>({});


    let convertValue = (arr: any[]) => {
        let objArr = [];
        let str = "";
        if (arr.length === 2) {
            return str = arr[1];
        } else {
            for (let i = 1; i < arr.length; i++) {
                objArr.push(arr[i])
            }
            return objArr;
        }
    }


    const getFilterValue = (val: any) => {
        switch (val[0]) {
            case "season":
                if (convertValue(val).length === 0) {
                    setSeasonValue("")
                } else {
                    setSeasonValue(convertValue(val))
                }
                break
            case "collection":
                if (convertValue(val).length === 0) {
                    setCollectionValue("")
                } else {
                    setCollectionValue(convertValue(val))
                }
                break
            case "gender":
                if (convertValue(val).length === 0) {
                    setGenderValue("")
                } else
                    setGenderValue(convertValue(val))
                break
            case "size":
                if (convertValue(val).length === 0) {
                    setSizeValue("")
                } else
                    setSizeValue(convertValue(val))
                break
            case "color":
                if (convertValue(val).length === 0) {
                    setColorValue("")
                } else
                    setColorValue(convertValue(val))
                break
            case "availability":
                if (convertValue(val).length === 0) {
                    setAvailableValue("")
                } else
                    setAvailableValue(convertValue(val))
                break
            default:
                return
        }
    }



    useEffect(() => {
        fetchFilter();
        fetchSortedByPriceProductsAction();
        fetchSortedByPopularProductsAction();
        fetchSortedByNewProductsAction();
        fetchSortedByAvailableProductsAction();
        fetchUnsortedProductsAction();
        fetchFilteredProducts();
    }, []);

    useEffect(() => {
        setGeneralFilter({
            season: seasonValue,
            collection: collectionValue,
            gender: genderValue,
            size: sizeValue,
            available: availableValue,
            color: colorValue,
            minPrice: Number(minPrice),
            maxPrice: Number(maxPrice)
        });
    }, [seasonValue, collectionValue, genderValue, sizeValue, availableValue, colorValue, minPrice, maxPrice]);



    useEffect(() => {
        sortProductsAction(productSortCategory);
    }, [productSortCategory]);



    // const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     alert(JSON.stringify(generalFilter))
    // }

    const navigate = useNavigate();

    const onFormSubmit = async (e:any) => {
        e.preventDefault();
        const response = await RequestService.postFilterData(generalFilter);
        const data = await response;
        console.log(data)
        if (data) {
            displayFilteredProductsAction(true)
        } else {
            navigate("/error");
        }
    };

    const [showFilter, setShowFilter] = useState(false);
    const [showText, setShowText] = useState(false);

    return (
        <main className="content catalog-page">
            <div className="container">
                <h1>{category}</h1>
                <p data-block='0' className={showText ? "catalog-page__text block-show" : "catalog-page__text"}>{description}</p>
                <a style={{ cursor: "pointer" }} onClick={() => setShowText(!showText)} data-btn='0' data-text="Скрыть текст" className="js-block-show link text">{showText ? "Скрыть текст" : "Читать далее"}</a>
                <a style={{ cursor: "pointer" }} onClick={() => setShowFilter(!showFilter)} data-btn='1' data-text="Скрыть фильтр" className="js-block-show link text">{showFilter ? "Скрыть фильтр" : "Показать фильтр"}</a>
                <div className="catalog catalog-page__catalog">
                    <form onSubmit={onFormSubmit} method="post" data-block='1'
                        className={showFilter ? "catalog-page__filter catalog__filter form block-show" : "catalog-page__filter catalog__filter form"}>
                        <fieldset className="form__fieldset">
                            <legend className="form__title form__title_align_center">Фильтр</legend>
                            {filterItems.map((el: any) => {
                                return <Filter getFilterValue={getFilterValue} key={el.id} filterItems={filterItems[el.id - 1]} />
                            })}
                            <div className="form__row form__row_direction_column">
                                <label className="form__label">Цена, руб.</label>
                                <div className="range-slider">
                                    <input className="range-slider__elem" type="text" />
                                    <div className="range-slider__output-row">
                                        от<input onChange={(e) => { setMinPrice(e.target.value) }} name="Filter[price-min]" data-type="min" className="input range-slider__output" type="number" />
                                        до<input onChange={(e) => { setMaxPrice(e.target.value) }} name="Filter[price-max]" data-type="max" className="input range-slider__output" type="number" />
                                    </div>
                                </div>
                            </div>
                            <button disabled={!minPrice && !maxPrice && !seasonValue.length && !collectionValue.length && !genderValue.length && !colorValue.length && !sizeValue.length && !availableValue.length}
                                style={!minPrice && !maxPrice && !seasonValue.length && !collectionValue.length && !genderValue.length && !colorValue.length && !sizeValue.length && !availableValue.length ? { backgroundColor: "gray" } : { backgroundColor: "#0076bd" }}
                                // onClick={()=>dispatch(displayFilteredProductsAction(true))}  
                                type="submit" className="btn">Показать товары</button>
                        </fieldset>
                    </form>
                    <div className="catalog__main">
                        <CatalogSort />
                        <div className="catalog__goods-wrapper">
                            <ul className="goods">
                                {displayFilteredProducts ?
                                    filteredProducts.map((el: any) => {
                                        while (el.id <= productDisplayNum) {
                                            return <ProductCard
                                                key={el.id}
                                                productData={filteredProducts[el.id - 1]}
                                            />
                                        }
                                    })
                                    :
                                    productSortCategory ?
                                        sortedProducts.map((el: any) => {
                                            while (el.id <= productDisplayNum) {
                                                return <ProductCard key={el.id} productData={sortedProducts[el.id - 1]} />
                                            }
                                        }) :
                                        products.map((el: any) => {
                                            while (el.id <= productDisplayNum) {
                                                return <ProductCard key={el.id} productData={products[el.id - 1]} />
                                            }
                                        })
                                }
                            </ul>
                        </div>
                        <div className="catalog__more">
                            <span onClick={() => showMoreGoodsAction(productDisplayNum + 12)} style={{ cursor: "pointer" }} className="catalog__more-btn link">
                                <span className="icon-load"></span>
                                Загрузить еще 12 товаров
                            </span>
                            <span onClick={() => showAllGoodsAction(products.length)} style={{ cursor: 'pointer' }} className="link text">Показать все</span>
                        </div>
                    </div>
                </div>
                <p data-block='2' className="catalog-page__text">
                    Шапочки, кепки и шляпы Lassie® защищают круглый год. Выбирайте подходящий головной убор: шляпку с полями или кепку с козырьком на лето, тоненькую шапочку без подкладки на осень или весну, и шапку с подкладкой из флиса или джерси на зиму. Многие наши
                    шапочки имеют специальные ветронепроницаемые вставки в области ушей для дополнительной защиты. Для самых маленьких лучшим выбором во время метели и снежной бури станут наши ветрозащитные зимние шапки или шапки из искусственного меха.</p>
                <a href="#" data-btn='2' data-text="Скрыть текст" className="js-block-show link text">Читать далее</a>
            </div>
        </main>
    )
}

export default Catalog;