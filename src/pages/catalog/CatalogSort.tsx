import { FC } from "react";
import { useActions } from "../../store/hooks/useAction";
import { useAppSelector } from "../../store/hooks/hooks";

const CatalogSort: FC = () => {

    const { productDisplayNum, productSortCategory } = useAppSelector(state => state.sort);
    const { changeSortCategoryAction, displayFilteredProductsAction, changeDisplayNumAction } = useActions()

    const handleChange = (value: string) => {
        changeSortCategoryAction(value);
        displayFilteredProductsAction(false);
    }

    return (
        <div className="catalog__sort">
            <div className="catalog__sort-group"><span className="catalog__sort-text text">Сортировать по:</span>
                <select value={productSortCategory} onChange={(e) => handleChange(e.target.value)} name="sort" className="js-select select">
                    <option value="popular">Популярности</option>
                    <option value="price">Цене</option>
                    <option value="new">Новизне</option>
                    <option value="available">Наличию</option>
                </select>
            </div>
            <div className="catalog__sort-group"><span className="catalog__sort-text text">Отображать по:</span>
                <select value={productDisplayNum} onChange={(e) => { changeDisplayNumAction(e.target.value) }} name="display" className="js-select select">
                    <option value={12}>12</option>
                    <option value={9}>9</option>
                    <option value={6}>6</option>
                    <option value={3}>3</option>
                </select>
            </div>
        </div>
    )
}

export default CatalogSort;