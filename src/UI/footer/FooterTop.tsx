import axios from 'axios';
import { useState, useEffect, FC } from 'react';
import SocialNetworks from './SocialNetworks';
import FooterTopMenu from './FooterTopMenu';

const FooterTop:FC = () => {

    const [purchases, setPurchases] = useState([]);
    const [lassie, setLassie] = useState([]);
    const [lassieClub, setLassieClub] = useState([]);

    useEffect(() => {
        axios.get('/mocks/footerTopMenu.json').then(response => {
            const data = response.data;
            setPurchases(data[0]);
            setLassie(data[1]);
            setLassieClub(data[2]);
        }).catch(err => alert(err));
    }, []);

    return (
        <div className="container footer__container">
            <div className="footer__col">
                <h3 className="footer__title">Покупки</h3>
                {purchases.map((el:any) => {
                    return <FooterTopMenu title={el.title} key={el.id} id={el.id}/>
                })}
            </div>
            <div className="footer__col">
                <h3 className="footer__title">Lassie</h3>
                {lassie.map((el:any) => {
                    return <FooterTopMenu title={el.title} key={el.id} id={el.id}/>
                })}
            </div>
            <div className="footer__col">
                <h3 className="footer__title">Lassie клуб</h3>
                {lassieClub.map((el:any) => {
                    return <FooterTopMenu title={el.title} key={el.id} id={el.id}/>
                })}
            </div>
            <SocialNetworks />
        </div>
    )
}

export default FooterTop;