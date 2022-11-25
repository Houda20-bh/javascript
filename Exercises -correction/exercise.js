function redundant(str) {
    function fun() {
        return str;
    }
    return fun();
}
console.log(redundant("Houda"));
const arrayOfMultiples = (a , b) => {
    let arr = [];
    for (let i = 1; i <= b; i++) {
      arr.push(a * i);
    }
    return arr;
  };
  console.log(arrayOfMultiples(5,7));
  const keysAndValues = (obj) => {
    let a = Object.keys(obj);
    let b = Object.values(obj);
    let c = [a, b];
    return c;
  };
  console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
  /*function  keysAndValues(obj)
  {
    let a = Object.keys(obj);
    let b = Object.values(obj);
    let c = [a, b];
    return c;
  }
  console.log(keysAndValues({ a: 1, b: 2, c: 3 }));*/
  const int = (n, a, b) => {
    if (n === parseInt(n) && n >= a && n < b) {
      return true;
    } return false;
  };
  console.log(int(5,4,6));
  function removeFalsey(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
      if (Boolean(arr[i]) === true) {
        output.push(arr[i]);
      }
    }
    return output;
  }
  console.log(removeFalsey([23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""]));
  
  /*function checkEquals(arr1, arr2) {
    if (arr1.join()=== arr2.join()) {
      return true 
  } else {
      return false
  }
}*/
function checkEquals(arr1, arr2) {
    let arry1 = arr1.toString();
   let arry2 = arr2.toString();
    if (arry1 === arry2) 
      {return true;}
  else 
      {return false;}
  }
console.log(checkEquals([1,3],[1,3])); 
function flatten(arr) {
    array1= [];
    for (let i = 0; i < arr.length; i++) {
      array1= array1.concat(arr[i]);
    }
    return array1; 
  }
  console.log(flatten([[1,2],[3,5]])); 
  function reverseWords(s) {
    return s.split(" ").reverse().join(" ");
}
console.log(reverseWords("Hello world")); 
function calculator(num1, operator, num2) {
    if(operator == '+') return num1+num2;
    if(operator == '-') return num1-num2;
    if(operator == '*') return num1*num2;
    if(operator == '/' && num2 != 0) return num1/num2;
    else 
    return "Can't divide by 0!";
}
console.log(calculator(2,"*",2)); 
console.log(calculator(1,'+',7)); 
console.log(calculator(10,'-',7)); 
console.log(calculator(14,'/',7)); 
console.log(calculator(8,'/',0)); 
function findNemo(sentence) {
    let newSentence = sentence.split(" ");
    for(let i = 0; i < newSentence.length; ++i){
        if(newSentence[i] === "Nemo") {
            return `I found Nemo at ${i + 1}!`;
        }
    }
    return "I can't find Nemo :(";
}
console.log(findNemo("You are the best ever wow!")); 
const assignPersonToJob = (pa, ja) => {
    let res = {};
    console.log(typeof res) ;
       for (let i = 0; i < pa.length; i++) {
        res[pa[i]] = ja[i];
        console.log (pa[i],ja[i]);
        }
    return res;
}
const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"]
const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

console.log(assignPersonToJob(names, jobs));/*➞ {
  Dennis: "Butcher",
  Vera: "Programmer",
  Mabel: "Doctor",
  Annette: "Teacher",
  Sussan: "Lecturer"
}*/
