import { useLocation } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';
import Breadcrumbs from './Breadcrumbs';
import { useState, useEffect, FC } from 'react';
import { useActions } from '../../store/hooks/useAction';


const Header: FC = () => {

    const [navValue, setNavValue] = useState(null);

    const { addLocationAction } = useActions()

    const getNavItem = (value: any) => {
        setNavValue(value)
    }

    const location = useLocation();


    const pathName = location.pathname;

    const [route, setRoute] = useState({ from: pathName, to: pathName })



    useEffect(() => {
        setRoute(prev => ({ to: location.pathname, from: prev.to }));
    }, [location]);


    useEffect(() => {
        addLocationAction(route);
    }, [route]);



    return (
        <div className='header'>
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom getNav={getNavItem} />
            {pathName !== "/main" && pathName !== "/"?
                <Breadcrumbs item={navValue}/>
            :null}
        </div>
    )
}

export default Header;