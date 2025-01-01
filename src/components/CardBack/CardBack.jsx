import PropTypes from "prop-types";

import s from "./CardBack.module.scss";

export const CardBack = ({ cvc }) => {
  const displayCvc = cvc || "000";

  return (
    <div className={s.card}>
      <p className={s.cvc}>{displayCvc}</p>
    </div>
  );
};

CardBack.propTypes = {
  cvc: PropTypes.string,
};
