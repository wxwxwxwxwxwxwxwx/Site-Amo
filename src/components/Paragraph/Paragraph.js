import classNames from "classnames";
import "./Paragraph.scss";

const Paragraph = ({className, children, ...props}) => {
  return (
    <p className={classNames(className, "paragraph")} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
