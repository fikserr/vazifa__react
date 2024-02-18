

function Header() {
  return (
    <div>
        <header className="header">
        <nav className="header__nav container">
            <a href="" className="header__logo">PROWEB</a>
            <ul className="header__list">
                <li className="header__item">
                    <a href="" className="header__link">Обо мне</a>
                </li>
                <li className="header__item">
                    <a href="" className="header__link">Мои работы</a>
                </li>
                <li className="header__item">
                    <a href="" className="header__link">Контакты</a>
                </li>
            </ul>
        </nav>
        <div className="header__content">
            <h1 className="header__title">Добро пожаловать на мой сайт</h1>
            <button className="header__button">Позвонить</button>
        </div>
    </header>
    </div>
  )
}

export default Header