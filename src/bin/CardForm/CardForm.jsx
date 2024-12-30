import { InputGroup } from "./InputGroup";

import s from "./CardForm.module.scss";

export const CardForm = () => {
  return (
    <div className={s["card-form"]}>
      <InputGroup
        id="name"
        label="cardholder name"
        placeholder="e.g Jane Appleseed"
      />
      <InputGroup
        id="number"
        label="card number"
        placeholder="e.g. 1234 5678 9123 0000"
        errorMessage="Wrong format, numbers only"
      />
      <InputGroup id="mm" label="exp. date (mm/yy)" placeholder="MM" />
      <InputGroup id="cvc" label="cvc" placeholder="e.g. 123" />
      <button className={s.btn}>Confirm</button>
    </div>
  );
};
