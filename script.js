const min = 1;
const max = 50;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(answer);

let attempt = 0;
let prediction;
let running = true;

while (running) {
  prediction = window.prompt(`Enter number between ${min} and ${max}`);
  prediction = Number(prediction);

  if (isNaN(prediction)) {
    window.alert("Enter a valid number");
  } else if (prediction > max || prediction < min) {
    window.alert(`Enter a number between ${min} and ${max}`);
  } else {
    attempt++;
    if (prediction === answer) {
      window.alert("You won");
      running = false; // Stop the loop if the answer is correct
    } else {
      window.alert("Try Again!!");
    }
  }
}
