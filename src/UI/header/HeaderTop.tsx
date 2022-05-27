import axios from 'axios';
import { useState, useEffect, FC } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';


const HeaderTop: FC = () => {

    const [menu, setMenu] = useState<any>([]);

    useEffect(() => {
        axios.get(`/mocks/headerTopNav.json`).then(response => {
            const data = response.data;
            setMenu(data);
        })
    }, []);

    return (
        <div className="header__top">
            <div className='container header__container header__container_top'>
                <div className='header__col header___col_top-left'>
                    <span className='header__icon icon-mail'></span>
                    <a href="#" className='link'>Подписаться</a>
                </div>
                <div className='header__col header__col_top-right'>
                    <ul className='header__top-menu menu'>
                        {menu.map((el:any) => {
                            return <li key={el.id} className='menu__item'>
                                <NavLink to={el.path} className='link menu__name'>{el.title}</NavLink>
                            </li>
                        })}
                    </ul>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;