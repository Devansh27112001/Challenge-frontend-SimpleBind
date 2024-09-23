export const getHeader = (data) => {
  const headers = Object.keys(data[0]).map((key) => {
    return {
      label: key,
      key,
    };
  });

  return headers;
};

export const exportInJSON = (data) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "books.json";
  link.click();
};
export const isIsbnNumber = (number) => {
  let isbn = `${number}`;
  isbn = isbn.replace(/[\s-]/g, "");

  // Check if the length is 10 or 13
  if (isbn.length === 10) {
    return isValidISBN10(isbn);
  } else if (isbn.length === 13) {
    return isValidISBN13(isbn);
  } else {
    return false;
  }
};

function isValidISBN10(isbn) {
  let sum = 0;

  // Loop through the first 9 digits
  for (let i = 0; i < 9; i++) {
    // Check if the character is a digit
    if (!/^\d$/.test(isbn[i])) {
      return false; // Invalid character found
    }
    sum += (i + 1) * parseInt(isbn[i], 10);
  }
  // Handle the last character, which could be a digit or 'X'
  let lastChar = isbn[9];
  if (lastChar === "X") {
    sum += 10 * 10; // 'X' is equal to 10
  } else if (/^\d$/.test(lastChar)) {
    sum += 10 * parseInt(lastChar, 10); // Regular digit in the last position
  } else {
    return false; // Invalid character in the last position
  }
  // Valid if the sum is divisible by 11
  return sum % 11 === 0;
}

function isValidISBN13(isbn) {
  let sum = 0;

  // Loop through all 13 digits
  for (let i = 0; i < 13; i++) {
    // Check if the character is a digit
    if (!/^\d$/.test(isbn[i])) {
      return false;
    }
    const digit = parseInt(isbn[i], 10);
    // Multiply every second digit by 3
    sum += i % 2 === 0 ? digit : digit * 3;
  }

  // Valid if the sum is divisible by 10
  return sum % 10 === 0;
}
