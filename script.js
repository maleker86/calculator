let operator = "";
let currentNumber = [];
let equation = [];
let solution;

//press numbers
//add numbers to currentNumber
//press + etc
//add numbers to equation, joined
//remove numbers from currentNumber
//press numbers
//add numbers to currentNumber
//press =
//add numbers to equation, joined
//remove numbers from currentNumber
//equate them
//show a solution
//add solution to equation
//clear to clear the number

//array.unshift() is opposite of array.push()

//event listeners & button functions
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.className === "operand") {
      let number = Number(button.textContent);
      currentNumber.push(number);
    //  console.log(typeof currentNumber[0]);
      console.log("current number is: ");
      console.table(currentNumber);
    }
    if (button.className === "operator") {
      operator = button.textContent;
      console.log(`operator is ${operator}`);
      
      if (currentNumber.length !== 0) {
        getCurrentNumber();
      }
      }
    if (button.className === "operate") {
      getCurrentNumber();
      if (operator) {
        operate();
        clearEquation();
        console.log("equation is:");
        console.table(equation);
        equation.push(solution);
        console.log("equation is now:");
        console.table(equation);
        solution = "";
        console.log("solution is:");
        console.log(solution);

        operator = "";
        console.log("operator is:");
        console.log(operator);
      } else {
        console.log("no operator selected");
      }
    }
    //if (button.className === "clear") {
    //  clearAll();
    //}
  });
});

function getCurrentNumber() {
  equation.push(Number(currentNumber.join("")));
  console.log("equation is:");
  console.table(equation);
  // console.log(typeof equation[0]);
  currentNumber = [];
  console.log("currentnumber is:");
  console.table(currentNumber);
}

function operate() {
  switch (true) {
    case operator === "+":
      solution = equation[0] + equation[1];
      solution = Math.round(solution * 100) / 100;
      break;
    case operator === "-":
      solution = equation[0] - equation[1];
      solution = Math.round(solution * 100) / 100;
      break;
    case operator === "/":
      if (equation[1] === 0) {
          console.log("No");
          clearAll();
          return;
        } 

      solution = equation[0] / equation[1];
      solution = Math.round(solution * 100) / 100;
      break;
    case operator === "*":
      solution = equation[0] * equation[1];
      solution = Math.round(solution * 100) / 100;
      break;
    default:
      console.log("no operator");
      break;
  }
  console.log(`solution is: ${solution}`);
  return solution; 
  //console.log(typeof solution);
}

function clearEquation() {
  equation = [];
  console.log("equation is:");
  console.table(equation);
}

function clearAll() {
  operator = "";
  number = "";
  currentNumber = [];
  equation = [];
  solution = "";
}