import {ReactComponent as TelegramIcon} from "../../assets/icons/telegram.svg";
import {ReactComponent as ViberIcon} from "../../assets/icons/viber.svg";
import {ReactComponent as WhatsappIcon} from "../../assets/icons/whatsapp.svg";
import classNames from "classnames";

import "./Socials.scss";

const Socials = ({className, ...props}) => {
  return (
    <div className={classNames(className, "icons")} {...props}>
      <a target="_blank" href="https://t.me/+75555555555">
        <TelegramIcon className="icons__item" />
      </a>
      <a target="_blank" href="viber://chat?number=%2B75555555555">
        <ViberIcon className="icons__item" />
      </a>
      <a target="_blank" href="https://wa.me/75555555555">
        <WhatsappIcon className="icons__item" />
      </a>
    </div>
  );
};

export default Socials;
