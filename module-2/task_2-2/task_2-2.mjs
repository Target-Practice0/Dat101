"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let a =2 + 3 * (2 - 4) * 6 
 
printOut(a);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
let b = 2.54 * 2534
printOut(b + " Inches");
printOut(newLine); 

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let c = 3 * 24 + 12
let d = c * 60 + 14.75


printOut(d + " minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
let e = (6332.52 / 60) / 24
printOut(e + " days");
let f = (0.397583333333333 * 24)
printOut(f + " hours");
let g = 0.541999999999993 * 60
printOut(g + " minutes");
let h = 0.519999999999584 * 60
printOut(h + " seconds");
printOut(newLine);
printOut("4 days, 9 hours, 32 minutes, 31 seconds");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
let i = (76 / 8.6) * 54
printOut(Math.round (i) + " Kroner");
let j = (8.6 / 76) * 477.2093023255814 
printOut(j + " Dollars");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
let org = "There is much between heaven and earth that we do not understand."
printOut(org.length);
printOut(org.charAt(18));
printOut(org.substring(35, 43));
printOut(org.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");


printOut("all statements are true, except the 2nd last");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
let hundre = 100
let femti = 50
let tjue = 20
let sju = 7
let fem = 5
let fire = 4
let to = 2
let KommaTjuetre = 0.23
let o = to * hundre + femti + fire
let p = femti + sju +KommaTjuetre
let q = tjue + fem
printOut(o);
printOut(p);
printOut(q + " kroner");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let r = Math.floor(Math.random() * 360 ) + 1;
printOut(r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
let s = 131
let t = 7
let u = s % t
let v = (s - u) / t
printOut(v + " uker");   
printOut(u + " dager");
printOut(newLine);