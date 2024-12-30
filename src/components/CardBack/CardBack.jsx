import PropTypes from "prop-types";

import s from "./CardBack.module.scss";

export const CardBack = ({ cvc }) => {
  return (
    <div className={s.card}>
      <p className={s.cvc}>{cvc}</p>
    </div>
  );
};

CardBack.propTypes = {
  cvc: PropTypes.string.isRequired,
};
