import PropTypes from "prop-types";

import s from "./InputGroup.module.scss";

export const InputGroup = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  errorMessage,
  onChange,
}) => {
  const inputGroupClass = `${s["input-group"]} ${
    errorMessage && s["input-group--error"]
  }`;

  return (
    // <div className={inputGroupClass}>
    <>
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        className={s.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <p className={s.error}>{errorMessage}</p>
    </>
    // </div>
  );
};

InputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
