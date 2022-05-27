import { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/hooks';
import styles from './headerStyles/search.module.css';
import { useActions } from '../../store/hooks/useAction';

const Search: FC = () => {

    const { fetchProducts } = useActions();
    const { products } = useAppSelector(state => state.productInfo)

    useEffect(() => {
        fetchProducts();
    }, []);


    const [value, setValue] = useState<any>('');

    const [searchValue, setSearchValue] = useState('');



    const filteredProducts = products.filter(prod => {
        // const v =prod.title.toLowerCase().includes(value.toLowerCase());
        return prod.title.toLowerCase().includes(value.toLowerCase())
    });

    const navigate = useNavigate();

    const customRedirect = (path: any) => {
        navigate(path);
        window.location.reload();
        setValue('');
    }

    return (
        <form className={`${styles.header__search} ${styles.search}`}>
            <input
                type="search"
                name="seacrh"
                value={value}
                placeholder="Поиск по каталогу"
                className={styles.search__input}
                onChange={e => setValue(e.target.value)}
                autoComplete="off"
            />
            <ul className={styles.autocomplete}>
                {filteredProducts.map(product => {
                    return value ?
                        <li key={product.id} className={styles.autocomplete__item}>
                            <Link onClick={() => customRedirect(`${product.url}/${product.id}`)} style={{ textDecoration: "none", color: "black" }}
                                to={`${product.url}/${product.id}`}> {product.title} </Link>
                        </li>
                        : null
                })}

            </ul>
            <button type="button" className={styles.search__btn}>
                <span className={`${styles.search__btn_icon} ${styles.icon_search}`}></span>
            </button>
        </form>
    )
}

export default Search;