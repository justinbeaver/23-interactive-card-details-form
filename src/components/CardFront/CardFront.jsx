import PropTypes from "prop-types";

import CardLogoSvg from "@/assets/images/card-logo.svg?react";

import s from "./CardFront.module.scss";

export const CardFront = ({ cardholder, number, month, year }) => {
  return (
    <div className={s.card}>
      <CardLogoSvg className={s["card-logo"]} />
      <p className={s["card-number"]}>{number}</p>
      <p className={s.meta}>
        <span className={s.cardholder}>{cardholder}</span>
        <span>
          {month}/{year}
        </span>
      </p>
    </div>
  );
};

CardFront.propTypes = {
  cardholder: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
