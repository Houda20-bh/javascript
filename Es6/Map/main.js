let swappingCases = "elAMIgo";

let invertedNumbers = [1, -10, -20, 15, 100, -30];

let ignoreNumbers = "EL123AMI567GO";

let swap= swappingCases.split("").map(function (letter) {
   return letter===letter.toUpperCase()?letter.toLowerCase():letter.toUpperCase();
}).join("");
console.log(swap);