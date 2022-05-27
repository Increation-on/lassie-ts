import HeaderDropdownMenu from './HeaderDropDownMenu';
import { useState, useEffect, FC } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

interface headerBottomProps {
    getNav: (title:string|null)=>void;
}

const HeaderBottom:FC<headerBottomProps> = ({getNav}) => {

    const [menu, setMenu] = useState<any>([]);

    const [navItem, setNavItem] = useState(null);

    const [bottomMenuItem, setBottomMenuItem] = useState(null);

    const [displayDropdown, setDisplayDropdown] = useState(false);

    const [showCollapse, setShowCollapse] = useState(false);

    useEffect(() => {
        getNav(bottomMenuItem);
    }, [bottomMenuItem])


    useEffect(() => {
        axios.get(`/mocks/hBN.json`).then(response => {
            const data = response.data;
            setMenu(data);
        })
    }, []);

    const buttonMenu = [...menu].reverse();

    const setItemAndHideDropdown = (title:any) => {
        setBottomMenuItem(title);
        setDisplayDropdown(true);
        setShowCollapse(true)
        setTimeout(() => {
            setDisplayDropdown(false);
            // setShowCollapse(false);   
        }, 1500)
    }


    return (
        <div className="header__bottom">
            <div className="container">
                <nav className="header__nav navigation">
                    <ul className="header__menu menu menu_width_full">
                        {menu.map((el:any) => {
                            return <li key={el.id} className="menu__item">
                                {el.sale ?
                                    <Link to={el.path} onClick={() => setItemAndHideDropdown(el.title)}
                                        onMouseMove={() => setNavItem(el.title)} className="header__sale-wrapper menu__name">
                                        <span className="header__sale">{el.title}</span>
                                    </Link>
                                    : <Link to={el.path} onClick={() => setItemAndHideDropdown(el.title)}
                                        onMouseMove={() => setNavItem(el.title)} className="menu__name">
                                        {el.title}
                                    </Link>
                                }
                                <HeaderDropdownMenu
                                    display={displayDropdown}
                                    setDisplay={setDisplayDropdown}
                                    navItem={navItem}
                                    setHeadBotMenuItem={setBottomMenuItem}
                                    item={el.item}
                                    menuId={el.id}
                                />
                            </li>
                        })}
                    </ul>
                    <button className="burger-btn header__nav-btn js-nav-btn">
                        <span className="burger-btn__switch">Развернуть меню </span>
                    </button>
                    <div style={showCollapse ? { zIndex: "2000", display: "none" } : { zIndex: "2000", display: "block" }} className="navigation__collapse">
                        <ul className="navigation__collapse-menu vertical-menu">
                            {buttonMenu.map(el => {
                                return <li key={el.id} className="navigation__collapse-item vertical-menu__item">
                                    <Link onClick={() => setItemAndHideDropdown(el.title)} onMouseMove={() => setNavItem(el.title)} to={el.path} className="vertical-menu__name">{el.title}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default HeaderBottom;
