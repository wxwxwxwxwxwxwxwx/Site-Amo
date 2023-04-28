import classNames from "classnames";
import "./Htag.scss";

const Htag = ({tag, className, children, ...props}) => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={classNames(className, "h1")} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={classNames(className, "h2")} {...props}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={classNames(className, "h3")} {...props}>
          {children}
        </h3>
      );
    default:
      return (
        <h3 className={classNames(className, "h3")} {...props}>
          {children}
        </h3>
      );
  }
};

export default Htag;
