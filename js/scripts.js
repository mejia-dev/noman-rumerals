function evalNumerals(input) {
  if (!input.match(/^[ivxlcdm]+$/i)) {
    return "Invalid Roman numerals detected. Please check your input and try again."
  }
  input = input.toLowerCase();
  const numeralsList = input.split("");
  let numberTotal = "";

  numeralsList.forEach(function(letter, pos) {
    if (["i","x","c","m"].includes(letter)) {
      const ixcmValues = {i:1,x:10,c:100,m:1000};
      numberTotal += "This number is ixcm: " + pos + ". ";
    } else if (["v","l","d"].includes(letter)) {
      numberTotal += "This number is vld: " + pos + ". ";
    } else {
      return "Unknown error"
    }



    

  })

  return numberTotal;
}