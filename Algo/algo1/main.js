let countChar;
let countwords;
let countVowels=0;
let str ="You are the best.";

function countString(str)
{    // count number of characters
    countChar=str.length;
    console.log(`the sentence length is ${ countChar}`);
    // count number of words 
    countwords= str.split(' ').length;
    console.log(`the number of words in this sentence is ${ countwords}`);
      // for loop to count vowels
      let str1= str.toLowerCase();
    for (let i = 0; i <= str1.length - 1; i++) {

          if (str1[i] == "a" || str1[i] == "e" ||str1[i] == "i" ||str1[i] == "o" || str1[i]== "u"||str1[i] == "y") {
            countVowels += 1;
          }
        }
        console.log(`the number of vowels in this sentence is ${countVowels}`);
}
let str2="you are my best friend.";
console.log(countString(str2));
