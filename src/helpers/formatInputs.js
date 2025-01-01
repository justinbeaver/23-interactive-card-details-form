import { capitalizeFirstLetter, formatCreditCard } from "@/utils/utils";

export const formatCardholder = (text) => {
  return capitalizeFirstLetter(text);
};

export const formatNumber = (text) => {
  return formatCreditCard(text).toUpperCase();
};

export const formatMonth = (text) => {
  return text
    .replace(/\s+/g, "") // Removes all spaces
    .slice(0, 2)
    .toUpperCase();
};

export const formatYear = (text) => {
  return text
    .replace(/\s+/g, "") // Removes all spaces
    .slice(0, 2)
    .toUpperCase();
};

export const formatCvc = (text) => {
  return text
    .replace(/\s+/g, "") // Removes all spaces
    .slice(0, 3)
    .toUpperCase();
};
