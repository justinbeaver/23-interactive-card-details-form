import PropTypes from "prop-types";

import s from "./Btn.module.scss";

export const Btn = ({ type = "button", className, children, onClick }) => {
  const btnClass = s.btn + " " + className;

  return (
    <button className={btnClass} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Btn.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
