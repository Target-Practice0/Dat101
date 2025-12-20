"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

let out = "";
for (let i = 1; i <= 10; i++) {
  out += i + " ";
}
printOut(out.trim());
let out2 = "";
for (let i = 10; i >= 1; i--) {
  out2 += i + " ";
}
printOut(out2.trim());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

let i = 18;
let x = 0;
while (i !== x) {
  x = Math.floor(Math.random() * 60) + 1;
}
printOut(`The number is: ${x}!`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let y = 18;
let z = 0;
let c = 0; 
const t0 = (typeof performance !== "undefined") ? performance.now() : Date.now();
while (y !== z) {
  z = Math.floor(Math.random() * 1000000) + 1;
  c=c+1;
}
const t1 = (typeof performance !== "undefined") ? performance.now() : Date.now();
printOut(`Total attempts: ${c}`);
printOut(`The number is: ${z}!`);
printOut(`Elapsed: ${(t1 - t0).toFixed(3)} ms`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
