export function capitalizeFirstLetter(str) {
  return str
    .trimStart() // Remove leading spaces
    .replace(/\s+/g, " ") // Normalize multiple spaces to a single space
    .split(" ") // Split the string into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter
    .join(" "); // Join the words back into a single string
}

export function formatCreditCard(cardNumber) {
  // Remove anything that is not a number or a letter
  cardNumber = cardNumber.replace(/[^a-zA-Z0-9]/g, ""); // Keep only letters and digits

  cardNumber = cardNumber.slice(0, 16);

  // Format the number by adding spaces after every 4 characters
  return cardNumber.replace(/(.{4})(?=.)/g, "$1 "); // Adds a space after every 4 characters
}

export function stripSpaces(str) {
  return str.replace(/\s+/g, "");
}

export function containsNonDigits(str) {
  // \D matches any character that is NOT a digit
  return /\D/.test(str);
}
