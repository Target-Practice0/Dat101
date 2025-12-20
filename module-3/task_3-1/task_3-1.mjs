"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");

let message = "";
let wakeUpTime = Math.floor(Math.random() * 4) + 6; 
if (wakeUpTime == 7) { message = "I reached the buss in time"; }
else if (wakeUpTime == 8) { message = "I missed the buss and have to take the train"; }
else if (wakeUpTime > 8) { message = "I missed the buss and train, so i have to drive."; }
else { message = "I am still sleeping."; }

printOut(wakeUpTime);
printOut(message);
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
let message2 = "";
let number = Math.floor(Math.random() * 100) - 50;
if (number < 0) { message2 = "The number is negative."; }
else if (number > 0) { message2 = "The number is positive."; }
else { message2 = "The number is zero."; }

printOut(number + " " + message2);
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
