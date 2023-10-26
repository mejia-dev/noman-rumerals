function evalNumerals(input) {
  if (!input.match(/^[ivxlcdm]+$/i)) {
    return "Invalid Roman numerals detected. Please check your input and try again."
  }
  input = input.toLowerCase();
  const numeralsList = input.split("");
  let numberTotal = "";
  let errorCounter = 0;
  let recentErrorMessage = "";

  numeralsList.forEach(function (letter, pos) {
    if (["i", "x", "c", "m"].includes(letter)) {
      // Test Line Below, remove later
      const ixcmValues = { i: 1, x: 10, c: 100, m: 1000 };

      numberTotal += "This number is ixcm: " + pos + ". ";
    } else if (["v", "l", "d"].includes(letter)) {
      const vldValues = { v: 5, l: 50, d: 500 };
      let charBefore = numeralsList[pos - 1];
      let charAfter = numeralsList[pos + 1];
      if ((charAfter === charBefore) && (charBefore != undefined) && (charAfter != undefined)) {
        errorCounter += 1;
        recentErrorMessage = "Invalid input. Numeral " + letter.toUpperCase() +" should never be surrounded by two of the same numerals"
      } else {
        numberTotal += vldValues[letter];
      }
    }
  })

  if (errorCounter === 0) {
    return numberTotal;
  } else {
    return recentErrorMessage;
  }
}