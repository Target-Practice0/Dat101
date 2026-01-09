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

let n = 18;
let x = 0;
while (n !== x) {
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
let text = "";
for (let i = 1; i < 200; i++) {
  let j = i - 1;
  let prime = true;
  while (j > 1 && prime) {
    let rest = i % j;
    prime = rest != 0;
    j--;
  }       
  if (prime) { 
    text +=  " " + i;
  }
  }
printOut(text);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
let textp5 = "";
for (let row = 1 ; row <= 7; row++) {
  let line = "";
  for (let col = 1; col <= 9 ; col++) {
    line += "k" + col + "r" + row + " ";
  }
  textp5 += line + newLine;
}
printOut(textp5);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
const students = 5;
let grade1 = (Math.ceil(Math.random() * 236) / 236) * 100;
let grade2 = (Math.ceil(Math.random() * 236) / 236) * 100;
let grade3 = (Math.ceil(Math.random() * 236) / 236) * 100;
let grade4 = (Math.ceil(Math.random() * 236) / 236) * 100;
let grade5 = (Math.ceil(Math.random() * 236) / 236) * 100;

let textPart6 = "Student 1: ";
if (grade1 >= 89) {
  textPart6 += grade1.toFixed(2) + "% - A";
} else if (grade1 >= 77) {
  textPart6 += grade1.toFixed(2) + "% - B";
} else if (grade1 >= 65) {
  textPart6 += grade1.toFixed(2) + "% - C";
} else if (grade1 >= 53) {
  textPart6 += grade1.toFixed(2) + "% - D";
} else if (grade1 >= 41) {
  textPart6 += grade1.toFixed(2) + "% - E";
} else {
  textPart6 += grade1.toFixed(2) + "% - F";
}
printOut(textPart6);
textPart6 = "Student 2: ";
if (grade2 >= 89) {
  textPart6 += grade2.toFixed(2) + "% - A";
} else if (grade2 >= 77) {
  textPart6 += grade2.toFixed(2) + "% - B";
} else if (grade2 >= 65) {
  textPart6 += grade2.toFixed(2) + "% - C";
} else if (grade2 >= 53) {
  textPart6 += grade2.toFixed(2) + "% - D";
} else if (grade2 >= 41) {
  textPart6 += grade2.toFixed(2) + "% - E";
} else {
  textPart6 += grade2.toFixed(2) + "% - F";
}
printOut(textPart6);
textPart6 = "Student 3: ";
if (grade3 >= 89) {
  textPart6 += grade3.toFixed(2) + "% - A";
} else if (grade3 >= 77) {
  textPart6 += grade3.toFixed(2) + "% - B";
} else if (grade3 >= 65) {
  textPart6 += grade3.toFixed(2) + "% - C";
} else if (grade3 >= 53) {
  textPart6 += grade3.toFixed(2) + "% - D";
} else if (grade3 >= 41) {
  textPart6 += grade3.toFixed(2) + "% - E";
} else {
  textPart6 += grade3.toFixed(2) + "% - F";
}
printOut(textPart6);

textPart6 = "Student 4: ";
if (grade4 >= 89) {
  textPart6 += grade4.toFixed(2) + "% - A";
} else if (grade4 >= 77) {
  textPart6 += grade4.toFixed(2) + "% - B";
} else if (grade4 >= 65) {
  textPart6 += grade4.toFixed(2) + "% - C";
} else if (grade4 >= 53) {
  textPart6 += grade4.toFixed(2) + "% - D";
} else if (grade4 >= 41) {
  textPart6 += grade4.toFixed(2) + "% - E";
} else {
  textPart6 += grade4.toFixed(2) + "% - F";
}
printOut(textPart6);

textPart6 = "Student 5: ";
if (grade5 >= 89) {
  textPart6 += grade5.toFixed(2) + "% - A";
} else if (grade5 >= 77) {
  textPart6 += grade5.toFixed(2) + "% - B";
} else if (grade5 >= 65) {
  textPart6 += grade5.toFixed(2) + "% - C";
} else if (grade5 >= 53) {
  textPart6 += grade5.toFixed(2) + "% - D";
} else if (grade5 >= 41) {
  textPart6 += grade5.toFixed(2) + "% - E";
} else {
  textPart6 += grade5.toFixed(2) + "% - F";
}
printOut(textPart6);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
function matchString(aString, aNumber) {
  let count = 0;
  for (let i = 0; i < aString.length; i++) {
    if (parseInt(aString.charAt(i), 10) === aNumber) {
      count++;
    }
  }
  return count;
}

let throws = 0; 
let fullStraight = false; 
let yahtzee = false; 
let tower = false; 
let threePairs = false; 
do {
  const d1 = Math.ceil(Math.random() * 6); 
  const d2 = Math.ceil(Math.random() * 6); 
  const d3 = Math.ceil(Math.random() * 6); 
  const d4 = Math.ceil(Math.random() * 6); 
  const d5 = Math.ceil(Math.random() * 6); 
  const d6 = Math.ceil(Math.random() * 6); 
  throws++;

  let c1, c2, c3, c4, c5, c6;
   const diceString = "" + d1 + d2 + d3 + d4 + d5 + d6;
    c1 = matchString(diceString, 1);
    c2 = matchString(diceString, 2);
    c3 = matchString(diceString, 3);
    c4 = matchString(diceString, 4);
    c5 = matchString(diceString, 5);
    c6 = matchString(diceString, 6);

    let cm1, cm2, cm4, cm6;
     const matchingString = "" + c1 + c2 + c3 + c4 + c5 + c6;
    cm1 = matchString(matchingString, 1);
    cm2 = matchString(matchingString, 2);
    cm4 = matchString(matchingString, 4);
    cm6 = matchString(matchingString, 6);

    if (cm1 === 6 && !fullStraight) {
    fullStraight = true;
    printOut(`Full straight: ${d1}${d2}${d3}${d4}${d5}${d6} (throws: ${throws})`);
  }
  if (cm6 === 1 && !yahtzee) {
    yahtzee = true;
    printOut(`Yahtzee: ${d1}${d2}${d3}${d4}${d5}${d6} (throws: ${throws})`);
  }
  if (cm4 === 1 && cm2 === 1 && !tower) {
    tower = true;
    printOut(`Tower: ${d1}${d2}${d3}${d4}${d5}${d6} (throws: ${throws})`);
  }
  if (cm2 === 3 && !threePairs) {
    threePairs = true;
    printOut(`Three pairs: ${d1}${d2}${d3}${d4}${d5}${d6} (throws: ${throws})`);
  }
} while (!fullStraight || !yahtzee || !tower || !threePairs);
printOut(newLine);
