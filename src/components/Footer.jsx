import Facebook from "../img/facebook.svg";
import Instagram from "../img/instagram.svg";
import Telegram from "../img/telegram.svg";
import Mail from "../img/mail.svg";
import What from "../img/whatsup.svg";
import { Context } from "../context/Context";
import { useContext } from "react";

function Footer() {
    const { lang } = useContext(Context);
  return (
    <div>
         <footer className="footer">
        <div className="container">
            <p className="footer__title">{lang.contactMe}</p>
            <div className="footer__contact">
                <a href="" className="footer__link">
                    <img src={Facebook} alt="facebook"/>
                </a>
                <a href="" className="footer__link">
                    <img src={Instagram} alt="instagram"/>
                </a>
                <a href="" className="footer__link">
                    <img src={Telegram} alt="telegram"/>
                </a>
                <a href="" className="footer__link">
                    <img src={Mail} alt="mail"/>
                </a>
                <a href="" className="footer__link">
                    <img src={What} alt="whatsup"/>
                </a>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer