/*1- Write a function redundant that takes in a string str and returns a function that returns str.
2-Create a function that takes two numbers as arguments (num, length) and
returns an array of multiples of num until the array length reaches
length.
Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
-----------------------------------------
3-Return the Objects Keys and Values
Create a function that takes an object and returns the keys and
values as separate arrays. Return the keys sorted alphabetically, 
and their corresponding values in the same order.

try to use Object.keys(obj) and Object.values(obj)
Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]*/
function redundant(str)
{
    function fun()
    {
   return str;
    }
    return fun();
}
 console.log(redundant("Daddou"));
function multiple(num,length)
{
    let result=[];
    for(i=1; i<= length;i++)
    {
        result.push(i*num);
    }
    return result;
}
console.log(multiple(5,8));

function convertArray(obj) {
    let arr1 = Object.keys(obj);
    let arr2 = Object.values(obj);
    let arr3 = [arr1, arr2];
    return arr3;
  }
  console.log(convertArray({ a: "Apple", b: "Microsoft", c: "Google" }));
  /*4-Integer in Range?
Create a function that validates whether a number n is within
the bounds of lower and upper. Return false if n is not an integer.
Examples
intWithinBounds(3, 1, 9) ➞ true
intWithinBounds(6, 1, 6) ➞ false
intWithinBounds(4.5, 3, 8) ➞ false
Notes
The term "within bounds" means a number is considered equal or 
greater than a lower bound and lesser (but not equal) to an upper 
bound, (see example #2).
Bounds will be always given as integers.*/
function IntegRange(n,num1,num2)
{
        if (Number.isInteger(n)&& n >= num1 && n < num2)
         {return true;} 
        else {return false;}
      }
console.log(IntegRange(3, 1, 9));
console.log(IntegRange(6, 1, 6)); 
console.log(IntegRange(4.5, 3, 8));
/*According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.
let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];*/
function removeFalsy(array)
{
   let arr=[];
   for ( let i=0; i< array.length;i++)
   {
   if ( array[i]===0 || array[i]=== null || array[i]===undefined|| array[i] === false || isNaN(array[i]))
    { continue;}
    else {
        arr.push (array[i]);
    } 
}
    return arr;
}
console.log(removeFalsy([23, 0, "gfg", false,null,true, NaN, 12, "hi", undefined, [], ""]));
function checkEquals(array1, array2) {
    if (array1.length != array2.length)  
        { return false;}
        for (let i=0; i<array1.length; i++)
        {  
         if(array1[i]!=array2[i])
        {  array1.sort();
            array2.sort();
            return false;}
    }
    return true;
  }

   console.log( checkEquals([1, 2], [1, 3]));
   console.log( checkEquals([1, 2], [1, 2]));
   console.log( checkEquals([4, 5, 6], [4, 5, 6]));
   console.log( checkEquals([4, 7, 6], [4, 5, 6]));
   console.log( checkEquals([4, 7, 6], [4, 6, 7]));
   
   
function flatten(arr) {
   let array =arr.join();
   console.log (array)
   let array1= array.split(',');
   return array1;
  }
  console.log(flatten([[1, 2], [3, 4]]) );// Expected: [1, 2, 3, 4]
  
  console.log(flatten([["a", "b"], ["c", "d"]]) );// Expected: ["a", "b", "c", "d"]
  
  console.log(flatten([[true, false], [false, false]]) );// [true, false, false, false]
  function flatten1(ary) {
    let result = [];
    for(let i = 0; i < ary.length; i++)
     {
        if(Array.isArray(ary[i])) {
            result =result.concat(ary[i]);
        } else {
            result.push(ary[i]);
        }
    }
    return result;
}
console.log(flatten1([[1, 2], [3, 4]]) );// Expected: [1, 2, 3, 4]
  
  console.log(flatten1([["a", "b"], ["c", "d"]]) );// Expected: ["a", "b", "c", "d"]
  
  console.log(flatten1([[true, false], [false, false]]) );// [true, false, false, false]
  
  function reverseWords(str)
  {  let splitStr= str.split(" "); //Use the split()to return a new array
    console.log (splitStr);
    let reverseArray = splitStr.reverse();//Use the reverse()to reverse the new array
    console.log (reverseArray);
    let joinArray = reverseArray.join(" ");//Use the join()to join all elements to a string
    console.log (joinArray);
return joinArray;
  }
  console.log(reverseWords(" the sky is blue"));// ➞ "blue is sky the"

  console.log(reverseWords("hello   world!  ")); //➞ "world! hello"

  console.log(reverseWords("a good example"));// ➞ "example good a"
  
  function reverseString(str) {
    return str.split(" ").reverse().join(" ");
}
console.log(reverseString("a good student"));
function calculator( a,b,c)
{
    let result;

    switch(b)
    {
        case b='+':
        result = a+c;
        break;
        case b='-':
        result = a-c;
        break;
        case b='/':
        result = a/c;
        break;
        case b='*':
            result = a*c;
            break;
      default: 
      break;
    }
    return result;}
    console.log (calculator(2, "+", 2));// ➞ 4
    console.log (calculator(2, "*", 2));// ➞ 4
    console.log (calculator(4, "-", 2));// ➞ 2
    console.log (calculator(4, "/", 2));// ➞ 2
    function dis(num,per)
    {     //Percentage formula = (Value/Total value) × 100
        //P% of Number = X
        //Let 10% of 80 = X//10/100 * 80 = X//X = 8
       
        let x= (per/100)*num;
        return num- x;
    }
   console.log( dis(1500, 50));// ➞ 750
   console.log( dis(89, 20));// ➞ 71.2
   console.log( dis(100, 75));// ➞25

function findNemo (str) {
    let word="Nemo";
    let array= str.split(" ");
    console.log (array);
    for(let i=1; i<= array.length ;i++)
    { if(array.includes(word) ==true)
   { return console.log("I am finding Nemo ! at" + i);}
  
      else { return console.log("I can't find Nemo");}
    }
      
    }
console.log(findNemo("I am finding Nemo !")); //➞ "I found Nemo at 4!"
console.log(findNemo("Nemo is me")); //➞ "I found Nemo at 1!"
console.log(findNemo("I Nemo am")); //➞ "I found Nemo at 2!"
console.log(findNemo("I am")); //➞ 
function objOfMatches(array1, array2) {
    //create obj
    var obj = {}
    //loop thru first array
    for(let i = 0; i < array1.length; i++) {
        for (let j =0; j < array2.length;j++) {
            obj[array1[i]] = array2[j];
            }
     
        }
        return obj; 
    }
    

let names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"]
let jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

console.log(objOfMatches(names, jobs));
/*
function convertToObj(a, b){
    if(a.length != b.length || a.length == 0 || b.length == 0){
     return null;
    }
    let obj = {};
     
  // Using the foreach method
    a.forEach((k, i) => {obj[k] = b[i]})
    return obj;
  }
  let names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"]
let jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

console.log(convertToObj(names, jobs));*/



