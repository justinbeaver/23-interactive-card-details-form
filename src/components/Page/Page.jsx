import { useState } from "react";

import { CardsBlock } from "@/components/CardsBlock/CardsBlock";
import { CardForm } from "@/components/CardForm/CardForm";
import { FormFeedback } from "@/components/FormFeedback/FormFeedback";

import bgMobile from "@/assets/images/bg-main-mobile.png";

import {
  formatCardholder,
  formatNumber,
  formatMonth,
  formatYear,
  formatCvc,
} from "@/helpers/formatInputs";
import {
  validateEmptyField,
  validateNumberFiled,
} from "@/helpers/validateFields";

import s from "./Page.module.scss";

const emptyFormData = {
  cardholder: "",
  number: "",
  month: "",
  year: "",
  cvc: "",
};

const emptyFormErrors = {
  cardholder: "",
  number: "",
  month: "",
  year: "",
  cvc: "",
};

export const Page = () => {
  const [formData, setFormData] = useState(emptyFormData);
  const [formErrors, setFormErrors] = useState(emptyFormErrors);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleValidateForm = (event) => {
    event.preventDefault();

    const currentErrors = { ...formErrors };

    for (const [name, value] of Object.entries(formData)) {
      currentErrors[name] = validateEmptyField(value);

      if (name === "number") {
        if (!currentErrors[name]) {
          currentErrors[name] = validateNumberFiled(value);
        }
      }
    }

    const hasErrors = Object.values(currentErrors).find(
      (error) => error !== ""
    );

    if (hasErrors) {
      setFormErrors(currentErrors);
    } else {
      setIsFormSubmitted(true);
    }
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let formattedValue = "";

    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (name === "cardholder") {
      formattedValue = formatCardholder(value);
    } else if (name === "number") {
      formattedValue = formatNumber(value);
    } else if (name === "month") {
      formattedValue = formatMonth(value);
    } else if (name === "year") {
      formattedValue = formatYear(value);
    } else if (name === "cvc") {
      formattedValue = formatCvc(value);
    }

    if (formattedValue !== formData[name]) {
      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    }
  };

  const handleResetData = () => {
    setFormData({ ...emptyFormData });
    setFormErrors({ ...emptyFormErrors });
    setIsFormSubmitted(false);
  };

  return (
    <div className={s.page}>
      <div className={s["cards-block"]}>
        <picture className={s.bg}>
          <img src={bgMobile} alt="" />
        </picture>
        <CardsBlock
          cardholder={formData.cardholder}
          number={formData.number}
          month={formData.month}
          year={formData.year}
          cvc={formData.cvc}
        />
      </div>
      <div className={s["form-block"]}>
        {isFormSubmitted ? (
          <FormFeedback handleResetData={handleResetData} />
        ) : (
          <CardForm
            cardholderText={formData.cardholder}
            cardholderError={formErrors.cardholder}
            numberText={formData.number}
            numberError={formErrors.number}
            monthText={formData.month}
            monthError={formErrors.month}
            yearText={formData.year}
            yearError={formErrors.year}
            cvcText={formData.cvc}
            cvcError={formErrors.cvc}
            handleInputChange={handleInputChange}
            onSubmit={handleValidateForm}
          />
        )}
      </div>
    </div>
  );
};
