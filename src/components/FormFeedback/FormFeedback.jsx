import PropTypes from "prop-types";

import { Btn } from "@/components/Btn/Btn";

import IconCompleteSvg from "@/assets/images/icon-complete.svg?react";

import s from "./FormFeedback.module.scss";

export const FormFeedback = ({ handleResetData }) => {
  return (
    <div className={s.feedback}>
      <IconCompleteSvg />
      <h2 className={s.title}>THANK YOU!</h2>
      <p className={s.description}>We&apos;ve added your card details</p>
      <Btn onClick={handleResetData}>Continue</Btn>
    </div>
  );
};

FormFeedback.propTypes = {
  handleResetData: PropTypes.func.isRequired,
};
