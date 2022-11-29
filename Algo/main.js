let countChar;
let countwords;
let countVowels=0;
let str ="you are the best.";

function countString(str)
{    // count number of characters
    countChar=str.length;
    console.log(`the sentence length is ${ countChar}`);
    // count number of words 
    countwords= str.split(' ').length;
    console.log(`the number of words in this sentence is ${ countwords}`);
      // for loop to count vowels
    for (let i = 0; i <= str.length - 1; i++) {

          if (str[i] == "a" || str[i] == "e" ||str[i] == "i" ||str[i] == "o" || str[i]== "u"||str[i] == "y") {
            countVowels += 1;
          }
        }
        console.log(`the number of vowels in this sentence is ${countVowels}`);
}
console.log(countString(str));
