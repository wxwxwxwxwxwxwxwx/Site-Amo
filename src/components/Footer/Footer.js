import Paragraph from "../Paragraph/Paragraph";
import {v4 as uuidv4} from "uuid";

import "./Footer.scss";
import Socials from "../Socials/Socials";

const Footer = () => {
  const footerLinks = [
    {
      title: {name: "О компании"},
      links: [{name: "Партнёрская программа"}, {name: "Вакансии"}],
    },
    {
      title: {name: "Меню"},
      links: [
        {name: "Расчёт стоимости"},
        {name: "Услуги"},
        {name: "Виджеты"},
        {name: "Интеграции"},
        {name: "Наши клиенты"},
        {name: "Кейсы"},
        {name: "Благодарственные письма"},
        {name: "Сертификаты"},
        {name: "Блог на Youtube"},
        {name: "Вопрос / Ответ"},
      ],
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__navigation">
          {footerLinks.map(item => {
            return (
              <ul key={uuidv4()} className="footer__firstLevelList">
                <li>
                  <Paragraph className="footer__link" href="#">
                    {item.title.name}
                  </Paragraph>
                  <div className="footer__wrapper">
                    <ul className="footer__secondLevelList">
                      {item.links.slice(0, 5).map(({name}) => {
                        return (
                          <li key={uuidv4()}>
                            <a className="footer__anchor" href="#">
                              {name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                    <ul className="footer__secondLevelList">
                      {item.links.slice(5).map(({name}) => {
                        return (
                          <li key={uuidv4()}>
                            <a className="footer__anchor" href="#">
                              {name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            );
          })}
          <ul className="footer__firstLevelList">
            <li>
              <Paragraph className="footer__link" href="#">
                Контакты
              </Paragraph>
              <ul>
                <li>
                  <a href="tel:+75555555555">+7 555 555-55-55</a>
                </li>
                <li>
                  <Socials className="footer__icons" />
                </li>
                <li>
                  <address className="footer__address">
                    <a
                      className="footer__anchor"
                      target="_blank"
                      href="https://yandex.ru/maps/213/moscow/house/putevoy_proyezd_3s1/Z04YcwFpQUUHQFtvfXR2eXRrbQ==/?ll=37.569800%2C55.878890&z=17">
                      Москва, Путевой проезд 3с1, к 902
                    </a>
                  </address>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="footer__terms">
          <Paragraph className="footer__rights">©WELBEX 2023. Все права защищены.</Paragraph>
          <a className="footer__privacy" href="#">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
