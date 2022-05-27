import { useEffect, useState } from "react";

const FilterTest = (props: any) => {

    const filterItems = props.filterItems;
    
    const [filterValue, setFilterValue] = useState([filterItems.type]);
    
    const [checked, setChecked] = useState();

    const handleCheck = (e:any) =>{
       const {value, checked} = e.target;
       if(checked){
        setFilterValue(prev => [...prev, value]);
       } else {
        setFilterValue(prev => prev.filter(el => el !== value));
       }
       setChecked(checked);
    }

    useEffect(() => {
        props.getFilterValue(filterValue, checked);
    }, [filterValue]);
   
    return (
        <>
            <div key={filterItems.id} className="form__row form__row_direction_column">
                <label className="form__label">{filterItems.title}</label>
                {filterItems.type === "color" ?
                    <div className="form__content-group">
                        {filterItems.items.map((item:any) => {
                            return (
                                <div style={{marginRight:"4px"}} key={item.id} className="checkbox-tile checkbox-tile_size_big">
                                    <input onChange={handleCheck} id={`filter-color-${item.id}`} name="Filter[color]" type="checkbox" value={item.title} className="checkbox-tile__elem" />
                                    <label htmlFor={`filter-color-${item.id}`} className={`checkbox-tile__label checkbox-tile__label_color_${item.name} checkbox-tile__label_type_color`}>{item.name}</label>
                                </div>
                            )
                        })}
                    </div> :
                    filterItems.type === "size" ?
                        <div className="form__content-group">
                            {filterItems.items.map((item:any) => {
                                return (
                                    <div style={{marginRight: "4px"}} key={item.id} className="checkbox-tile checkbox-tile_size_big">
                                        <input onChange={handleCheck}  id={`filter-size-${item.id}`} name="Filter[size]" type="checkbox" value={item.title} className="checkbox-tile__elem" />
                                        <label htmlFor={`filter-size-${item.id}`} className={`checkbox-tile__label`}>{item.title}</label>
                                    </div>
                                )
                            })}
                        </div> :
                        filterItems.items.map((item:any) => {
                            return (
                                <div key={item.id} className="checkbox">
                                    <input onChange={handleCheck}  disabled={!item.available} id={`filter-${filterItems.type}-${item.id}`} name={`Filter[${filterItems.type}]`} type="checkbox" value={item.title} className="checkbox__elem" />
                                    <label htmlFor={`filter-${filterItems.type}-${item.id}`} className="checkbox__label form__label">{item.title}</label>
                                </div>
                            )
                        })
                }
            </div>
        </>

    )
}


export default FilterTest;
