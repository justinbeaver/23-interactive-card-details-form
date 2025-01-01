import { stripSpaces, containsNonDigits } from "@/utils/utils";

const wrongFormatError = "Wrong format, numbers only";
const emptyFieldError = "Can't be blank";

export const validateEmptyField = (value) => {
  if (value === "") {
    return emptyFieldError;
  } else {
    return "";
  }
};

export const validateNumberFiled = (value) => {
  if (containsNonDigits(stripSpaces(value))) {
    return wrongFormatError;
  } else {
    return "";
  }
};
