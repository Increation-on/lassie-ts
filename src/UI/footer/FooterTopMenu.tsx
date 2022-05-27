import { FC } from 'react';

interface footerTopProps {
    key: number;
    title: string;
    id: number;
}

const FooterTopMenu:FC<footerTopProps> = (props:footerTopProps) => {
    return (       
            <ul className="list">
                <li className="list__item" key={props.id}>
                    <a href="#" className="footer__text">{props.title}</a>
                </li>
            </ul>
    )
}

export default FooterTopMenu;