import lodash from "https://cdn.jsdelivr.net/npm/lodash@4.17.23/+esm";

const buttonElement = document.getElementById("counterButton");
const counterValueElement = document.getElementById("counterValue");
let counterValue = lodash.toNumber(counterValueElement.textContent);

buttonElement.addEventListener("click", () => {
  counterValue++;
  counterValueElement.textContent = counterValue;
});
