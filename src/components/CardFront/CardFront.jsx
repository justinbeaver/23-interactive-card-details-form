import PropTypes from "prop-types";

import CardLogoSvg from "@/assets/images/card-logo.svg?react";

import s from "./CardFront.module.scss";

export const CardFront = ({ cardholder, number, month, year }) => {
  const displayCardholder = cardholder || "Jane Appleseed";
  const displayNumber = number || "0000 0000 0000 0000";
  const displayMonth = month || "00";
  const displayYear = year || "00";

  return (
    <div className={s.card}>
      <CardLogoSvg className={s["card-logo"]} />
      <p className={s["card-number"]}>{displayNumber}</p>
      <p className={s.meta}>
        <span className={s.cardholder}>{displayCardholder}</span>
        <span>
          {displayMonth}/{displayYear}
        </span>
      </p>
    </div>
  );
};

CardFront.propTypes = {
  cardholder: PropTypes.string,
  number: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string,
};
