import { useState } from "react";

import { CardFront } from "@/components/CardFront/CardFront";
import { CardBack } from "@/components/CardBack/CardBack";
import { CardForm } from "@/components/CardForm/CardForm";
import { InputGroup } from "@/components/InputGroup/InputGroup";
import { Btn } from "@/components/Btn/Btn";

import IconCompleteSvg from "@/assets/images/icon-complete.svg?react";

import s from "./Page.module.scss";

const wrongFormatError = "Wrong format, numbers only";
const emptyFieldError = "Can't be blank";

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

  const handleValidateForm = (event) => {
    event.preventDefault();

    const currentErrors = { ...formErrors };

    for (const [name, value] of Object.entries(formData)) {
      if (value === "") {
        currentErrors[name] = emptyFieldError;
      }
    }

    setFormErrors(currentErrors);
  };

  const handleInputChange = (event) => {
    const name = event.target.name;

    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setFormData((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const cardsBlock = () => {
    const { cardholder, number, month, year, cvc } = formData;

    return (
      <div className={s["cards-block"]}>
        <div className={s.cards}>
          <CardBack cvc={cvc} />
          <CardFront
            cardholder={cardholder}
            number={number}
            month={month}
            year={year}
          />
        </div>
      </div>
    );
  };

  // const cardForm = () => {
  //   const { cardholder, number, month, year, cvc } = formData;

  //   return (
  //     <form className={s["card-form"]} onSubmit={handleValidateForm}>
  //       <InputGroup
  //         id="cardholder"
  //         name="cardholder"
  //         label="cardholder name"
  //         placeholder="e.g Jane Appleseed"
  //         value={cardholder}
  //         errorMessage={formErrors.cardholder}
  //         onChange={handleInputChange}
  //       />
  //       <InputGroup
  //         id="number"
  //         name="number"
  //         label="card number"
  //         placeholder="e.g. 1234 5678 9123 0000"
  //         value={number}
  //         errorMessage={formErrors.number}
  //         onChange={handleInputChange}
  //       />

  //       <InputGroup
  //         id="mm"
  //         name="month"
  //         label="exp. date (mm/yy)"
  //         placeholder="MM"
  //         value={month}
  //         errorMessage={formErrors.month}
  //         onChange={handleInputChange}
  //       />
  //       <InputGroup
  //         id="yy"
  //         name="year"
  //         label="yy"
  //         placeholder="YY"
  //         value={year}
  //         errorMessage={formErrors.year}
  //         onChange={handleInputChange}
  //       />
  //       <InputGroup
  //         id="cvc"
  //         name="cvc"
  //         label="cvc"
  //         placeholder="e.g. 123"
  //         value={cvc}
  //         errorMessage={formErrors.cvc}
  //         onChange={handleInputChange}
  //       />

  //       <Btn type="submit">Confirm</Btn>
  //     </form>
  //   );
  // };

  const formFeedback = () => {
    return (
      <div>
        <IconCompleteSvg />
        <h2>THANK YOU!</h2>
        <p>We&apos;ve added your card details</p>
        <Btn>Continue</Btn>
      </div>
    );
  };

  return (
    <div className={s.page}>
      {cardsBlock()}
      <div className={s["form-block"]}>
        {/* {cardForm()} */}
        {/* {formFeedback()} */}
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
      </div>
    </div>
  );
};
