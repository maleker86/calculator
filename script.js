let operand1 = "";
let operand2 = "";
let operator = "";
const operands = [];
const operators = [];

//array.unshift() is opposite of array.push()

//event listeners & button functions
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.className === "operand") {
      if (!operator) {
        if (!operand1) {
          operand1 = button.textContent;
          console.log(`o1 is ${operand1}`);
        } else {
          operand1 += button.textContent;
          console.log(`o1 is ${operand1}`);
        }
      } else {
        if (!operand2) {
          operand2 = button.textContent;
          console.log(`o2 is ${operand2}`);
        } else {
          operand2 += button.textContent;
          console.log(`o2 is ${operand2}`);
        }
      }
    }
    if (button.className === "operator") {
      if (!operator) {
        operator = button.textContent;
        console.log(`o3 is ${operator}`);
      } else {
        return;
      }
    }
  });
});