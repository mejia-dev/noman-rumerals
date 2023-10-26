define evalNumerals()

//// General Rules
Test: "It will only accept input of letters I,V,X,L,C,D,M and will give an error if not accepted"
Code: evalNumerals("h")
Expected Output: "Invalid Roman Numerals detected. Please check your input and try again"

Test: "It will convert all accepted uppercase letters to lowercase letters before evaluating to numbers."
Code: evalNumerals("III")
Use .toLowerCase to turn into "iii" before evaluating.
Expected Output: 3

Test: "It will split the inputted string into an array before evaluating to numbers."
Code: evalNumerals("III")
Use .split to turn "III" into ["I","I","I"] after converting to lowercase, before evaluating.
Expected Output: 3

Test: "It will define the empty function-scoped numeralTotal variable"
Code: let numeralTotal = "";

Test: "It will interate through a foreach loop on each numeral, evaluate the numeral using the word rules below, then append output to numeralTotal"
Code: evalNumerals("III")
After converting to lowercase, after splitting: 
["i","i","i"].forEach(function(letter) {
  *run rules, return "resultNumber"*
  numeralTotal.append(resultNumber + " + ");
})

Test: "It will evaluate numeralTotal and return result"
Code: eval(numeralTotal)
 *for testing, let numeralTotal = "1 + -1 + 2"*
Expected Output: 2


//// Rules for I
Test: "It will evaluate any I without a character after it to equal 1"
Code: evalNumerals("i")
Expected Output: 1

Test: "It will evaluate any I with another I after it to equal 2"
Code: evalNumerals("ii")
Expected Output: 2

Test: "It will evaluate any I with two I's after it to equal 3"
Code: evalNumerals("iii")
Expected Output: 3

Test: "It will reject the entire input if the number of I's in a row is greater than 3 and will display an error"
Code: evalNumerals("iiii")
Expected Output: "Invalid input. More than three occurences of I in a row detected."

Test: "It will evaluate any I with a non-I character after it to equal -1"
Code: evalNumerals("iv");
Expected Output: -1

Test: "It will reject the entire input if the number of I's in a row BEFORE another numeral is greater than 1 and will display an error"
Code: evalNumerals("iix")
Expected Output: "Invalid input. Too many occurences of I in a row before another numeral."


//// Rules for V
Test: "It will evaluate V to equal 5"
Code: evalNumerals("V")
Expected Output: 5

Test: "It will reject the entire input if the number of V's is greater than 1 and will display an error"
Code: evalNumerals("VIV")
Expected Output: "Invalid input. Numeral V should only occur once per input"

Test: "It will evaluate 
Code:
Expected Output:

Test: "It will evaluate 
Code:
Expected Output:

Test: "It will evaluate 
Code:
Expected Output:

Test: "It will evaluate 
Code:
Expected Output:

Test: "It will evaluate 
Code:
Expected Output: