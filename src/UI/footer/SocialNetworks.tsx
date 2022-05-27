import { FC } from "react";

const SocialNetworks:FC = () => {
    return (
        <div className="footer__col">
            <h3 className="footer__title">Социальные сети</h3>
            <ul className="footer__socials socials">
                <li className="socials__item">
                    <a href="#" className="socials__name socials__name_vk">
                        <span className="icon-vkontakte"></span>
                    </a>
                </li>
                <li className="socials__item">
                    <a href="#" className="socials__name socials__name_ok">
                        <span className="icon-odnoklassniki"></span>
                    </a>
                </li>
                <li className="socials__item">
                    <a href="#" className="socials__name socials__name_fb">
                        <span className="icon-facebook"></span>
                    </a>
                </li>
                <li className="socials__item">
                    <a href="#" className="socials__name socials__name_tw">
                        <span className="icon-twitter-bird"></span>
                    </a>
                </li>
            </ul>
            <p className="footer__text">Следи за новостями и акциями
                <br />в социальных сетях. Будь первым!
            </p>
        </div>
    )
} 

export default SocialNetworks;