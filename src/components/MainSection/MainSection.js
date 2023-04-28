import {v4 as uuidv4} from "uuid";

import Paragraph from "../Paragraph/Paragraph";
import Htag from "../Htag/Htag";

import "./MainSection.scss";

const MainSection = () => {
  const advantages = [
    {title: "Виджеты", description: "30 готовых решений"},
    {title: "Dashboard", description: "с показателями вашего бизнеса"},
    {title: "Skype Аудит", description: "отдела продаж и CRM системы"},
    {title: "35 дней", description: "использования CRM"},
  ];

  const advantagesMobile = [
    {title: "Skype аудит"},
    {title: "30 виджетов"},
    {title: "Dashboard"},
    {title: "Месяц аmoCRM"},
  ];
  return (
    <section className="main">
      <div className="container">
        <div className="main__usp">
          <Htag tag="h1">
            Зарабатывайте больше <span className="main__gradient">с WELBEX</span>
          </Htag>
          <Paragraph className="main__description">Развиваем и контролируем продажи за вас</Paragraph>
        </div>
        <div className="main__advantages">
          <Htag tag="h2">
            Вместе с <span className="main__gradient main__gradient-second">БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:
          </Htag>
          <ul className="main__advantagesList">
            {advantages.map(({title, description}) => {
              return (
                <li className="main__advantagesLi" key={uuidv4()}>
                  <Htag tag="h3" className="main__advantagesTitle">
                    {title}
                  </Htag>
                  <Paragraph className="main__advantagesDescr">{description}</Paragraph>
                </li>
              );
            })}
          </ul>
          <ul className="main__advantagesList main__advantagesList-mobile">
            {advantagesMobile.map(({title}) => {
              return (
                <li className="main__advantagesLi main__advantagesLi-mobile" key={uuidv4()}>
                  <hr className="main__advantagesHr" />
                  <Htag tag="h3" className="main__advantagesTitle main__advantagesTitle-mobile">
                    {title}
                  </Htag>
                </li>
              );
            })}
          </ul>
          <button className="main__button">Получить консультацию</button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
