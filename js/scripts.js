function evalNumerals(input) {
  const ivxlcdmValues = {i: 1,v: 5,x: 10,l: 50, c: 100,d: 500, m: 1000}
  let numberTotal = 0;
  let errorCounter = 0;
  let recentErrorMessage = "";
  input = input.toLowerCase();

  if (!input.match(/^[ivxlcdm]+$/i)) {
    return "Invalid Roman numerals detected. Please check your input and try again."
  } else if (input.includes("vv")) {
    return "Invalid input. Numeral V should only occur once per input."
  } else if (input.includes("ll")) {
    return "Invalid input. Numeral L should only occur once per input."
  } else if (input.includes("dd")) { 
    return "Invalid input. Numeral D should only occur once per input."
  }

  const numeralsList = input.split("");

  const duplicateVLDValuesCheck = ["v", "l", "d"]
  for (let i = 0; i < numeralsList.length; i++) {
    if (numeralsList[i] === "") {

    }
  }

  numeralsList.forEach(function (letter, pos) {
    if (["i", "x", "c", "m"].includes(letter)) {
      // Test Line Below, remove later
      numberTotal += "This number is ixcm: " + pos + ". ";

      
    } else if (["v", "l", "d"].includes(letter)) {
      let charBefore = numeralsList[pos - 1];
      let charAfter = numeralsList[pos + 1];
      // After and before equal the same thing AND are not undefined
      if ((charAfter === charBefore) && (charBefore != undefined) && (charAfter != undefined)) {
        errorCounter += 1;
        recentErrorMessage += "Error " + errorCounter + ": Invalid input. Numeral " + letter.toUpperCase() + " should never be surrounded by two of the same numerals. "
      } 
      // After and before are both undefined
      else if ((charBefore === undefined) && (charAfter === undefined)) {
        numberTotal += ivxlcdmValues[letter];
      }
      // After and before are greater than
      else if ((ivxlcdmValues[charBefore] > ivxlcdmValues[letter]) && (ivxlcdmValues[charAfter] > ivxlcdmValues[letter]) ) {
        numberTotal -= ivxlcdmValues[letter];
      } 
      // (Before is greater than OR before is undefined) AND (after is less than OR after is undefined)
      else if (((ivxlcdmValues[charBefore] > ivxlcdmValues[letter]) || (charBefore === undefined)) && ((ivxlcdmValues[charAfter] < ivxlcdmValues[letter]) || (charAfter === undefined)) ) {
        numberTotal += ivxlcdmValues[letter];
      } 
      // After is greater than
      else if ((ivxlcdmValues[charAfter] > ivxlcdmValues[letter])) {
        numberTotal -= ivxlcdmValues[letter];
      }
    }
  })

  if (errorCounter === 0) {
    return numberTotal;
  } else {
    return recentErrorMessage;
  }
}