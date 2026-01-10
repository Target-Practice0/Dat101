"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

function printOutToday() {
const DateToday = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
let txtPrintValue = DateToday. toLocaleDateString("no-NB", options);
return txtPrintValue;
}
let txtPrintValue = printOutToday()
printOut(`Today is: ${txtPrintValue}`);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
function countdownTo(targetISO) {
  const now = new Date();
  const target = new Date(targetISO);
  let diff = target.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const MS_PER_SEC = 1000;
  const MS_PER_MIN = MS_PER_SEC * 60;
  const MS_PER_HOUR = MS_PER_MIN * 60;
  const MS_PER_DAY = MS_PER_HOUR * 24;

  const days = Math.floor(diff / MS_PER_DAY);
  diff -= days * MS_PER_DAY;
  const hours = Math.floor(diff / MS_PER_HOUR);
  diff -= hours * MS_PER_HOUR;
  const minutes = Math.floor(diff / MS_PER_MIN);
  diff -= minutes * MS_PER_MIN;
  const seconds = Math.floor(diff / MS_PER_SEC);

  return { days, hours, minutes, seconds };
}

const toFeb272026 = countdownTo("2026-02-27T00:00:00");
printOut(
  `Countdown to Resident Evil Requiem: ${toFeb272026.days} days, ${toFeb272026.hours} hours, ${toFeb272026.minutes} minutes, ${toFeb272026.seconds} seconds to release!`
);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

function findcircleArea(radius) {
  const area = Math.PI * radius * radius;
  return area;
}
let radius = 7;
let area = findcircleArea(radius);

printOut(`The area of a circle with radius ${radius} is ${area.toFixed(2)}`);
printOut(`the diameter is ${2 * radius}`);
printOut(`and the circumference is ${(2 * Math.PI * radius).toFixed(2)}`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

function findrectangleArea(length, width) {
  const area = length * width;
  return area;
}
let length = 10;
let width = 5;
let rectangleArea = findrectangleArea(length, width);

printOut(`The area of a rectangle with length ${length} and width ${width} is ${rectangleArea}`);
printOut(`the circumference is ${2 * (length + width)}`);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

function ConvertFahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}

function ConvertKelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return celsius;
}

function ConvertKelvinToFahrenheit(kelvin) {
  const fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
  return fahrenheit;
} 
printOut(`500k is equal to ${ConvertKelvinToFahrenheit(500).toFixed(0)}°F`);
printOut(`300K is equal to ${ConvertKelvinToCelsius(300).toFixed(0)}°C`);
printOut(`32°F is equal to ${ConvertFahrenheitToCelsius(32).toFixed(0)}°C`);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
function Part6Calculate(aGrossAmount, aTaxGroup) {
  const taxGroup = aTaxGroup.toLowerCase();
  let taxRate = 0;
  switch (taxGroup) {
    case "normal":
      taxRate = 25;
      break;
    case "food":
      taxRate = 15;
      break;
    case "hotel":
    case "transport":
    case "cinema":
      taxRate = 10;
      break;
    default:
      printOut("Error: Unknown tax group!");
      return;
  }
  const netAmount = (100 * aGrossAmount) / (taxRate + 100);
  printOut(`Gross amount: ${aGrossAmount.toFixed(2)}`);
  printOut(`Tax group: ${aTaxGroup}, Tax rate: ${taxRate}%`);
  printOut(`Net amount: ${netAmount.toFixed(2)}`);
  printOut("");
}

Part6Calculate(100, "Normal");
Part6Calculate(100, "Food");
Part6Calculate(100, "Hotel");
Part6Calculate(100, "Transport");
Part6Calculate(100, "Cinema");
Part6Calculate(100, "Car");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
function Part7Calculate(aspeed, adistance, atime) {
  if (aspeed !== null && adistance !== null) {
    const time = adistance * aspeed;
    printOut(`Time: ${time.toFixed(2)} time units`);
  }
    else if (adistance !== null && atime !== null) {
    const speed = adistance / atime;
    printOut(`Speed: ${speed.toFixed(2)} units/time`);
  } else if (aspeed !== null && atime !== null) {
    const distance = aspeed * atime;
    printOut(`Distance: ${distance.toFixed(2)} units`);
  } else {
    printOut("Error: At least two parameters must be provided.");
    }
}
Part7Calculate(80, 40, null); // Calculate time
Part7Calculate(null, 150, 3); // Calculate speed
Part7Calculate(60, null, 2); // Calculate distance
Part7Calculate(null, null, 5); // Error case
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
function Part8AdjustString(aText, aMaxSize, aChar, aInsertAtEnd) {
  let adjustedText = aText;
  let length = aText.length;
  while (length < aMaxSize) {
    if (aInsertAtEnd) {
      adjustedText += aChar;
    } else {
      adjustedText = aChar + adjustedText;
    }
    length++;
  }
  printOut(`Adjusted String: "${adjustedText}"`);
  return adjustedText;
}
Part8AdjustString("Hello", 30, "*", true); // Insert at end
Part8AdjustString("This is a right aligned text.", 50, "&nbsp;", false); // Right align with spaces
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
function Part9TestMathExpression(aLines) {
  let currentNumber = 1;
  for (let line = 1; line <= aLines; line++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < line + 1; i++) {
      leftSum += currentNumber++;
    }
    for (let i = 0; i < line; i++) {
      rightSum += currentNumber++;
    }
    if (leftSum !== rightSum) {
      printOut(`Test failed at line ${line}: Left sum (${leftSum}) != Right sum (${rightSum})`);
      return;
    }
  }
  printOut("Maths fun!");
}
Part9TestMathExpression(200);
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
let Part10IntermediateSteps = "";
let Part10Step = 0;
function Part10Factorial(aNumber) {
  if (aNumber <= 1) {
    return 1;
  } else {
    const result = aNumber * Part10Factorial(aNumber - 1);
    Part10Step++;
    Part10IntermediateSteps += `Step ${Part10Step}: ${aNumber} * Factorial(${aNumber - 1}) = ${result}<br>`;
    return result;
  }
}
const numberForFactorial = 5;
const factorialResult = Part10Factorial(numberForFactorial);
printOut(`Factorial of ${numberForFactorial} is ${factorialResult}`);
printOut("Intermediate Steps:<br>" + Part10IntermediateSteps);
printOut(newLine);
