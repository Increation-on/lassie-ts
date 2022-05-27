import {
    copyrightWorktimeTel,
    copyrightWorktime,
    copyrightTitle,
    copyrightHotlineNumber,
    copyrightHotline,
    copyrightMail
} from '../../configs/copyright';
import { FC } from 'react';

const FooterBottom: FC = () => {
    return (
        <div className="footer__bottom">
            <div className="container footer__container">
                <div className="footer__bottom-col">
                    <p className="footer__text">{copyrightTitle}</p>
                </div>
                <div className="footer__bottom-col">
                    <div className="footer__text-group">
                        <a href="tel:+78003331204" className="footer__text">{copyrightHotlineNumber}</a>
                        <span className="footer__text">{copyrightHotline}</span>
                    </div>
                    <div className="footer__text-group">
                        <a href="tel:+78003331204" className="footer__text">{copyrightWorktimeTel}</a>
                        <span className="footer__text">{copyrightWorktime}</span>
                    </div>
                    <a href="mailto:order@lassieshop.ru" className="footer__text footer__text_block">{copyrightMail}</a>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom;