// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const findMinimumFlips = arr => {
  let sum1 = 0,
    sum2 = 0;
  arr.forEach((val, index) => {
    if (index % 2 === 0) {
      if (0 !== val) {
        sum1++;
      }
      if (1 !== val) {
        sum2++;
      }
    } else {
      if (1 !== val) {
        sum1++;
      }
      if (0 !== val) {
        sum2++;
      }
    }
  });
  return sum1 < sum2 ? sum1 : sum2;
};

console.log(findMinimumFlips([1, 1, 0, 1, 0, 0]));
console.log(findMinimumFlips([0, 0, 1]));
console.log(findMinimumFlips([1, 1, 1, 0, 0, 1, 0, 1, 1]));
