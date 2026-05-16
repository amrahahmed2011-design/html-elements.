var choice = prompt("WELCOME TO AREA CALCULATOR. \n PLEASE ENTER YOUR CHOICE. \n1 AREA OF RECTANGLE..\n2 AREA OF TRIANGLE. \n. AREA OF CIRCLE .\n. AREA OF PARALELLOGRAM.");
if (choice == "1"){
var l =  prompt("ENTER THE LENGTH")
var b =  prompt("ENTER THE Bredth")
var result = Number(l) * Number(b)
alert ( "THE AREA IS"+ result)
};
if (choice == "2"){
var h =  prompt("ENTER THE height")
var b =  prompt("ENTER THE Bredth")
var result = Number(l) * Number(b) /2
alert ( "THE AREA IS"+ result)
};
if (choice == "3"){
var r =  prompt("ENTER THE height")
var result = 3.14* Number(r) * Number(r) 
alert ( "THE AREA IS"+ result)
};
if (choice == "4"){
var h =  prompt("ENTER THE height")
var cb = prompt("ENTER THE CORRESPONDING BASE")
var result =  Number(h) * Number(cb) 
alert ( "THE AREA IS"+ result)
};