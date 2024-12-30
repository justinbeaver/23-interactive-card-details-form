import PropTypes from "prop-types";

import s from "./Btn.module.scss";

export const Btn = ({ type = "button", className, children }) => {
  const btnClass = s.btn + " " + className;

  return (
    <button className={btnClass} type={type}>
      {children}
    </button>
  );
};

Btn.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
