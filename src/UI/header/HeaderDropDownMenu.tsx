import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../../store/hooks/useAction';

interface HDMProps{
    display: boolean;
    setDisplay: (isDisplay: boolean)=> void;
    navItem: string | null;
    setHeadBotMenuItem: (title: any) => void;
    item: any[];
    menuId: number;
}

const HeaderDropdownMenu:FC<HDMProps> = (props: HDMProps) => {

    const { getCatalogNameAction, getProductDescriptionAction } = useActions()

    const getInfo = (name: string, description: string) => {
        getCatalogNameAction(name);
        getProductDescriptionAction(description);
        props.setHeadBotMenuItem(props.navItem);
        props.setDisplay(true);
        setTimeout(() => {
            props.setDisplay(false)
        })
    }


    return (
        <ul style={{ display: props.display ? "none" : "" }} className="dropdown-menu" >
            <li className="dropdown-menu__content">
                <div className="dropdown-menu__img">
                    <img src={require('../../images/header-submenu-1.jpg')} alt="девочка" />
                </div>
                <div className="dropdown-menu__menu-col">
                    <ul className="vertical-menu">
                        {props.item.map((item: any) => {
                            if (item.id <= 4) {
                                return <li key={item.id} className="vertical-menu__item">
                                    {item.type.length <= 0 ? <Link to={`/catalog`}
                                        className="vertical-menu__name"
                                        onClick={() => { getInfo(item.title, item.description) }}>{item.title}</Link>
                                        : <span className="vertical-menu__name">{item.title}</span>}
                                    <ul className="vertical-menu__submenu">
                                        {item.type.map((el: any) => {
                                            return <li key={el.id} className="vertical-menu__submenu-item">
                                                <Link to={`/catalog`} onClick={() => { getInfo(item.title, item.description) }} className={`link vertical-menu__submenu-name`}>{el.title}</Link>
                                            </li>
                                        })}
                                    </ul>
                                </li>
                            }
                        })}
                    </ul>
                </div>
                <div className="dropdown-menu__menu-col">
                    <ul className="vertical-menu">
                        {props.item.map((item: any) => {
                            if (props.menuId === 4 || props.menuId === 7) {
                                if (item.id > 4) {
                                    return <li key={item.id} className="vertical-menu__item">
                                        {item.type.length <= 0 ? <Link to={`/catalog`}
                                            className="vertical-menu__name"
                                            onClick={() => { getInfo(item.title, item.description) }}>{item.title}</Link>
                                            : <span className="vertical-menu__name">{item.title}</span>}
                                        <ul className="vertical-menu__submenu">
                                            {item.type.map((el: any) => {
                                                return <li key={el.id} className="vertical-menu__submenu-item">
                                                    <Link to={`/catalog`}
                                                        className="link vertical-menu__submenu-name"
                                                        onClick={() => { getInfo(item.title, item.description) }}>{el.title}</Link>
                                                </li>
                                            })}
                                        </ul>
                                    </li>
                                }
                            }
                        })}
                    </ul>
                </div>
            </li>
        </ul>
    )
}

export default HeaderDropdownMenu;