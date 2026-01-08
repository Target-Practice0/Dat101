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
