import { NavLink } from 'react-router-dom';

const Logo = (props: any) => {

    const location = props.location;

    return (
        <div className="header__col header__col-logo">
            <NavLink to="/main" style={{ pointerEvents: location === '/main' || location === '/' ? "none" : "auto" }}>
                <img src={require('../../images/logo.png')} alt="logo" />
            </NavLink>
        </div>
    )
}

export default Logo;     
