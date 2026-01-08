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
let message3 = "";
let imagesize = Math.floor(Math.random() * 9) + 1;
if (imagesize >= 4) { message3 = "Thank you"; }
else { message3 = "The image is too small"; }
printOut(imagesize + "MP");
printOut(message3)
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let message4 = "";
if (imagesize >= 4 && imagesize < 6) { message4 = "Thank you"; }
else if (imagesize >= 6) { message4 = "The image is too big"; }
else { message4 = "The image is too small"; }
printOut(imagesize + "MP");
printOut(message4);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
if (monthName == "September" || monthName == "October" || monthName == "November" || monthName == "December" || monthName == "January" || monthName == "February" || monthName == "Mars" || monthName == "April") {
  printOut(`${monthName} contains the letter "r". You must take vitamin D`);
}
else  printOut(`${monthName} does not contain the letter "r". You do not need to take vitamin D`);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
if (monthName == "January" || monthName == "Mars" || monthName == "May" || monthName == "July" || monthName == "August" || monthName == "October" || monthName == "December") { printOut(`${monthName} has 31 days.`); }
else if (monthName == "April" || monthName == "June" || monthName == "September" || monthName == "November") { printOut(`${monthName} has 30 days.`); }
else { printOut(`${monthName} has 28 days.`); }
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
if (monthName === "Mars" || monthName === "May") {
    printOut("The art gallery is closed for refurbishment.");
} else if (monthName === "April") {
    printOut("The art gallery is open in temporary premises next door.");
} else {
    printOut("The art gallery is open as usual.");
}
printOut(newLine);
