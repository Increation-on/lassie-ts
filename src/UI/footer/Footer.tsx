import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import { FC } from 'react'

const Footer: FC = () => {
    return (
        <footer className="footer">
            <FooterTop />
            <FooterBottom />
        </footer>
    )
}

export default Footer;