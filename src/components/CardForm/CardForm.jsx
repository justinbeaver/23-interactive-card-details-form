import PropTypes from "prop-types";
import classNames from "classnames/bind";

import { Btn } from "@/components/Btn/Btn";

import s from "./CardForm.module.scss";
const cx = classNames.bind(s);

export const CardForm = ({
  cardholderText,
  cardholderError,
  numberText,
  numberError,
  monthText,
  monthError,
  yearText,
  yearError,
  cvcText,
  cvcError,
  handleInputChange,
  onSubmit,
}) => {
  const cardholderName = () => {
    // const labelClass = s.label + " " + s["cardholder-label"];
    // const inputClass = `${s["cardholder-input"]} ${
    //   cardholderError ? s["input--error"] : ""
    // }`;
    // const errorClass = s.error + " " + s["cardholder-error"];

    const labelClass = cx({
      [s.label]: true,
      [s["cardholder-label"]]: true,
    });
    const inputClass = cx({
      [s["cardholder-input"]]: true,
      [s["input--error"]]: cardholderError,
    });
    const errorClass = cx({
      [s.error]: true,
      [s["cardholder-error"]]: true,
    });

    return (
      <>
        <label className={labelClass} htmlFor="cardholder">
          CARDHOLDER NAME
        </label>
        <input
          id="cardholder"
          className={inputClass}
          name="cardholder"
          type="text"
          placeholder="e.g. Jane Appleseed"
          value={cardholderText}
          aria-describedby={cardholderError ? "cardholder-error" : undefined}
          onChange={handleInputChange}
        />
        {cardholderError && (
          <p id="cardholder-error" className={errorClass}>
            {cardholderError}
          </p>
        )}
      </>
    );
  };

  const cardNumber = () => {
    // const labelClass = s.label + " " + s["number-label"];
    // const inputClass = `${s["number-input"]} ${
    //   numberError ? s["input--error"] : ""
    // }`;
    // const errorClass = s.error + " " + s["number-error"];

    const labelClass = cx({
      [s.label]: true,
      [s["number-label"]]: true,
    });
    const inputClass = cx({
      [s["number-input"]]: true,
      [s["input--error"]]: numberError,
    });
    const errorClass = cx({
      [s.error]: true,
      [s["number-error"]]: true,
    });

    return (
      <>
        <label className={labelClass} htmlFor="number">
          CARD NUMBER
        </label>
        <input
          id="number"
          className={inputClass}
          name="number"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          value={numberText}
          aria-describedby={numberError ? "number-error" : undefined}
          onChange={handleInputChange}
        />
        {numberError && (
          <p id="number-error" className={errorClass}>
            {numberError}
          </p>
        )}
      </>
    );
  };

  const expDate = () => {
    const expDateError = monthError || yearError || "";

    // const labelClass = s.label + " " + s["exp-date-label"];
    // const monthInputClass = `${s["month-input"]} ${
    //   monthError ? s["input--error"] : ""
    // }`;
    // const yearInputClass = `${s["year-input"]} ${
    //   yearError ? s["input--error"] : ""
    // }`;
    // const errorClass = s.error + " " + s["exp-date-error"];

    const labelClass = cx({
      [s.label]: true,
      [s["exp-date-label"]]: true,
    });
    const monthInputClass = cx({
      [s["month-input"]]: true,
      [s["input--error"]]: monthError,
    });
    const yearInputClass = cx({
      [s["year-input"]]: true,
      [s["input--error"]]: yearError,
    });
    const errorClass = cx({
      [s.error]: true,
      [s["exp-date-error"]]: true,
    });

    return (
      <div className={s["exp-date"]}>
        <p className={labelClass}>EXP. DATE (MM/YY)</p>

        <label className="visually-hidden" htmlFor="month">
          MONTH
        </label>
        <input
          id="month"
          className={monthInputClass}
          name="month"
          type="text"
          placeholder="MM"
          value={monthText}
          aria-describedby={monthError ? "exp-date-error" : undefined}
          onChange={handleInputChange}
        />

        <label className="visually-hidden" htmlFor="year">
          YEAR
        </label>
        <input
          id="year"
          className={yearInputClass}
          name="year"
          type="text"
          placeholder="YY"
          value={yearText}
          aria-describedby={yearError ? "exp-date-error" : undefined}
          onChange={handleInputChange}
        />

        {expDateError && (
          <p id="exp-date-error" className={errorClass}>
            {expDateError}
          </p>
        )}
      </div>
    );
  };

  const cvcField = () => {
    // const labelClass = s.label + " " + s["cvc-label"];
    // const inputClass = `${s["cvc-input"]} ${cvcError ? s["input--error"] : ""}`;
    // const errorClass = s.error + " " + s["cvc-error"];

    const labelClass = cx({
      [s.label]: true,
      [s["cvc-label"]]: true,
    });
    const inputClass = cx({
      [s["cvc-input"]]: true,
      [s["input--error"]]: cvcError,
    });
    const errorClass = cx({
      [s.error]: true,
      [s["cvc-error"]]: true,
    });

    return (
      <>
        <label className={labelClass} htmlFor="cvc">
          CVC
        </label>
        <input
          id="cvc"
          className={inputClass}
          name="cvc"
          type="text"
          placeholder="e.g. 123"
          value={cvcText}
          aria-describedby={cvcError ? "cvc-error" : undefined}
          onChange={handleInputChange}
        />
        {cvcError && (
          <p id="cvc-error" className={errorClass}>
            {cvcError}
          </p>
        )}
      </>
    );
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      {cardholderName()}
      {cardNumber()}
      {expDate()}
      {cvcField()}
      <Btn className={s.btn} type="submit">
        Confirm
      </Btn>
    </form>
  );
};

CardForm.propTypes = {
  cardholderText: PropTypes.string.isRequired,
  cardholderError: PropTypes.string,
  numberText: PropTypes.string.isRequired,
  numberError: PropTypes.string,
  monthText: PropTypes.string.isRequired,
  monthError: PropTypes.string,
  yearText: PropTypes.string.isRequired,
  yearError: PropTypes.string,
  cvcText: PropTypes.string.isRequired,
  cvcError: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
