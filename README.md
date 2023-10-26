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

Test: "It will define the empty function-scoped numberTotal variable"
Code: let numberTotal = "";

Test: "It will interate through a foreach loop on each numeral, evaluate the numeral using the word rules below, then append output to numberTotal"
Code: evalNumerals("III")
After converting to lowercase, after splitting: 
["i","i","i"].forEach(function(letter) {
  *run rules, return "resultNumber"*
  numberTotal.append(resultNumber + " + ");
})
Expected Output: 3

Test: "It will evaluate numberTotal and return result"
Code: eval(numberTotal)
 *for testing, let numberTotal = "1 + -1 + 2"*
Expected Output: 2


//// Rules for I
Test: "It will evaluate any I without a character after it to equal 1"
Code: evalNumerals("I")
Expected Output: 1

Test: "It will evaluate any I with another I after it to equal 2"
Code: evalNumerals("II")
Expected Output: 2

Test: "It will evaluate any I with two I's after it to equal 3"
Code: evalNumerals("III")
Expected Output: 3

Test: "It will reject the entire input if the number of I's in a row is greater than 3 and will display an error"
Code: evalNumerals("IIII")
Expected Output: "Invalid input. More than three occurences of I in a row detected."

Test: "It will evaluate any I with a non-I character after it to equal -1"
Code: evalNumerals("IV");
Expected Output: -1

Test: "It will reject the entire input if the number of I's in a row BEFORE another numeral is greater than 1 and will display an error"
Code: evalNumerals("IIX")
Expected Output: "Invalid input. Too many occurences of I in a row before another numeral."


//// Rules for V
Test: "It will evaluate V to equal 5"
Code: evalNumerals("V")
Expected Output: 5

Test: "It will reject the entire input if the number of V's is greater than 1 and will display an error"
Code: evalNumerals("VIV")
Expected Output: "Invalid input. Numeral V should only occur once per input"

Test: "It will reject the entire input if V is surrounded by two matching characters"
Code: evalNumerals("IVI")
Expected Output: "Invalid input. Numeral V should never be surrounded by two of the same numerals"


//// Rules for X
Test: "It will evaluate any X without a character after it to equal 10"
Code: evalNumerals(X)
Expected Output: 10

Test: "It will evaluate any X with another X after it to equal 20"
Code: evalNumerals("XX")
Expected Output: 20

Test: "It will evaluate any X with two X's after it to equal 30"
Code: evalNumerals("XXX")
Expected Output: 30

Test: "It will reject the entire input if the number of X's in a row is greater than 3 and will display an error"
Code: evalNumerals("XXXX")
Expected Output: "Invalid input. More than three occurences of X in a row detected."

Test: "It will evaluate any X with a non-X,V,or I character after it to equal -10"
Code: evalNumerals("XL");
Expected Output: -10

Test: "It will evaluate any X with a V or I character after it to equal 10"
Code: evalNumerals("XI");
Expected Output: 11

Test: "It will reject the entire input if X is surrounded by two matching non-X characters"
Code: evalNumerals("IXI")
Expected Output: "Invalid input. Numeral X should never be surrounded by two of the same non-X numerals"


//// Rules for L
Test: "It will evaluate L to equal 50"
Code: evalNumerals("L")
Expected Output: 50

Test: "It will reject the entire input if the number of L's is greater than 1 and will display an error"
Code: evalNumerals("LL")
Expected Output: "Invalid input. Numeral L should only occur once per input"

Test: "It will reject the entire input if L is surrounded by two matching characters"
Code: evalNumerals("CLC")
Expected Output: "Invalid input. Numeral L should never be surrounded by two of the same numerals"


//// Rules for C
Test: "It will evaluate any C without a character after it to equal 100"
Code: evalNumerals(C)
Expected Output: 100

Test: "It will evaluate any C with another C after it to equal 200"
Code: evalNumerals("CC")
Expected Output: 200

Test: "It will evaluate any C with two C's after it to equal 300"
Code: evalNumerals("CCC")
Expected Output: 300

Test: "It will reject the entire input if the number of C's in a row is greater than 3 and will display an error"
Code: evalNumerals("CCCC")
Expected Output: "Invalid input. More than three occurences of C in a row detected."

Test: "It will evaluate any C with a non-C,X,V,or I character after it to equal -100"
Code: evalNumerals("CD");
Expected Output: -100

Test: "It will evaluate any C with a L,X,V,or I character after it to equal 100"
Code: evalNumerals("CI");
Expected Output: 101

Test: "It will reject the entire input if C is surrounded by two matching non-C characters"
Code: evalNumerals("ICI")
Expected Output: "Invalid input. Numeral C should never be surrounded by two of the same non-C numerals"


//// Rules for D
Test: "It will evaluate D to equal 500"
Code: evalNumerals("D")
Expected Output: 500

Test: "It will reject the entire input if the number of D's is greater than 1 and will display an error"
Code: evalNumerals("DD")
Expected Output: "Invalid input. Numeral D should only occur once per input"

Test: "It will reject the entire input if L is surrounded by two matching characters"
Code: evalNumerals("CLC")
Expected Output: "Invalid input. Numeral L should never be surrounded by two of the same numerals"


//// Rules for M
Test: "It will evaluate any M without a character after it to equal 1000"
Code: evalNumerals("M")
Expected Output: 1000

Test: "It will evaluate any M with another M after it to equal 2000"
Code: evalNumerals("MM")
Expected Output: 2000

Test: "It will evaluate any M with two M's after it to equal 3000"
Code: evalNumerals("MMM")
Expected Output: 3000

Test: "It will reject the entire input if the number of M's in a row is greater than 3 and will display an error"
Code: evalNumerals("MMMM")
Expected Output: "Invalid input. More than three occurences of M in a row detected."

Test: "It will evaluate any M with another character after it to equal 1000"
Code: evalNumerals("MI");
Expected Output: 1001

Test: "It will reject the entire input if M is surrounded by two matching non-M characters"
Code: evalNumerals("IMI")
Expected Output: "Invalid input. Numeral M should never be surrounded by two of the same non-M numerals"

Test: "It will reject the entire input if the total number of M's is greater than 4 and will display an error"
Code: evalNumerals("MMMM")
Expected Output: "Invalid input. More than three occurences of M in a row detected."