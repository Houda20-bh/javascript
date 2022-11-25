let plus=document.querySelector("#plus");
let minus=document.querySelector("#minus");
var totalprice = document.getElementById("totalp");
var sum = 0;
console.log("hello");// to check 
plus.addEventListener("click",function plus(id) {
    let quantity = document.querySelector("#q"+id[1]);
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
    let total = document.getElementById("t"+id[1]);
    let price = document.getElementById("s"+id[1]);
    total.innerHTML = parseInt(total.innerHTML) + parseInt(price.innerHTML);
    sum = parseInt(price.innerHTML) + sum;
    totalprice.innerHTML = sum;
  });
  minus.addEventListener("click",function  minus(id) {
  
    let quantity = document.querySelector("#q"+id[1]);
    if(parseInt(quantity.innerHTML)> 0){
    quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
    let total = document.getElementById("t"+id[1]);
    let price = document.getElementById("s"+id[1]);
    total.innerHTML = parseInt(total.innerHTML) - parseInt(price.innerHTML);
    sum =sum- parseInt(price.innerHTML);
    totalprice.innerHTML = sum;}
  });

