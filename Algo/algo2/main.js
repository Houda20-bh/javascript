let arr1 = [12, 13, 6, 10];
let arr2 = [13, 10, 16, 15];
let sumDif = 0;
let sumEqual = 0;
let equal =false;
let  array = arr1.concat(arr2)


for(let i =0; i<array.length;i++){
   equal= false;
    for (let j=0;j<array.length;j++){
        if(array[i] == array[j] && i!=j){
            equal=true;
            sumEqual += array[i];
        }
    }
    if(equal==false){
        sumDif += array [i];
    }
}
console.log( sumEqual );
console.log( sumDif );

