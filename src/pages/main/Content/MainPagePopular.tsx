import { FC, useEffect } from 'react';
import { useActions } from '../../../store/hooks/useAction';
import { useAppSelector } from '../../../store/hooks/hooks';
import ProductCard from './ProductCard';

const MainPagePopular:FC = () => {
    const {products} = useAppSelector(state=>state.productInfo)
    const {fetchProducts} = useActions();

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <section className="popular">
            <div className="container">
                <h1 className="heading">
                    <span className="heading__text">Популярные товары</span>
                </h1>
                <ul className="goods">
                    {products.map((el:any)=>{
                        return <ProductCard 
                                    key={el.id}
                                    productData = {products[el.id-1]}
                                />
                    })}
                </ul>
            </div>
        </section>
    )
}

export default MainPagePopular;
