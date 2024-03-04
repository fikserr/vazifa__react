import { useContext } from "react";
import ruflag from "../img/ru.svg";
import uzflag from "../img/uz.svg";
import { Context } from "../context/Context";



function Header() {
   const {flag,lang,changeLang} = useContext(Context)
  return (
    <div>
        <header className="header">
        <nav className="header__nav container">
            <a href="" className="header__logo">PROWEB</a>
            <ul className="header__list">
                <li className="header__item">
                    <a href="" className="header__link">{lang.about}</a>
                </li>
                <li className="header__item">
                    <a href="" className="header__link">{lang.work}</a>
                </li>
                <li className="header__item">
                    <a href="" className="header__link">{lang.contact}</a>
                </li>

                <div className="header__item positon">
                        <button className={`ru ${flag === true ? 'active' : ''}`} onClick={()=>changeLang('ru')}>
                            <span>RU</span>
                            <img className="ru__img" src={ruflag} />
                        </button>
                        <button className={`ru ${flag === false ? 'active' : ''}`} onClick={()=>changeLang('uz')}>
                            <span>UZ</span>
                            <img className="uz__img" src={uzflag} />
                        </button>
                    
                </div>

            </ul>
        </nav>
        <div className="header__content">
            <h1 className="header__title">{lang.myWebsite}</h1>
            <button className="header__button">{lang.callMe}</button>
        </div>
    </header>
    </div>
  )
}

export default Header