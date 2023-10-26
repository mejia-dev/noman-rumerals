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
      if ((charAfter === charBefore) && (charBefore != undefined) && (charAfter != undefined)) {
        errorCounter += 1;
        recentErrorMessage += "Error " + errorCounter + ": Invalid input. Numeral " + letter.toUpperCase() + " should never be surrounded by two of the same numerals. "
      } else {
        numberTotal += ivxlcdmValues[letter];
      }
    }
  })

  if (errorCounter === 0) {
    return numberTotal;
  } else {
    return recentErrorMessage;
  }
}