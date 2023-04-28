import {ReactComponent as LogoIcon} from "../../assets/icons/logo.svg";
import {ReactComponent as TelegramIcon} from "../../assets/icons/telegram.svg";
import {ReactComponent as ViberIcon} from "../../assets/icons/viber.svg";
import {ReactComponent as WhatsappIcon} from "../../assets/icons/whatsapp.svg";

import {v4 as uuidv4} from "uuid";

import "./Header.scss";

const Header = () => {
  const headerLinks = [
    {name: "Услуги"},
    {name: "Виджеты"},
    {name: "Интеграции"},
    {name: "Кейсы"},
    {name: "Сертификаты"},
  ];

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <LogoIcon />
          <div className="header__text">
            крупный интегратор CRM <br /> в Росcии и ещё 8 странах
          </div>
        </div>

        <nav className="header__navigation">
          <ul className="header__list">
            {headerLinks.map(({name}) => (
              <li className="header__link" key={uuidv4()}>
                <a className="header__anchor" href="#">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="header__socials">
        <a href="tel:+75555555555" className="header__phone">
          +7 555 555-55-55
        </a>
        <div className="header__icons">
          <TelegramIcon className="header__icon" />
          <ViberIcon className="header__icon" />
          <WhatsappIcon className="header__icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
