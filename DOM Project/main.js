
var totalprice = document.getElementById("totalp");
var sum = 0;
console.log("hello");// to check 
// adding function
function adding(id) {
  console.log(id);
    let quantity = document.querySelector("#q"+id[1]);
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
    let total = document.getElementById("t"+id[1]);
    let price = document.getElementById("s"+id[1]);
    total.innerHTML = parseInt(total.innerHTML) + parseInt(price.innerHTML);
    sum = parseInt(price.innerHTML) + sum;
    totalprice.innerHTML = sum;
  }
  // substration function
function  substract(id) {
  console.log(id);
    let quantity = document.querySelector("#q"+id[1]);
    if(parseInt(quantity.innerHTML)> 0){
    quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
    let total = document.getElementById("t"+id[1]);
    let price = document.getElementById("s"+id[1]);
    total.innerHTML = parseInt(total.innerHTML) - parseInt(price.innerHTML);
    sum =sum- parseInt(price.innerHTML);
    totalprice.innerHTML = sum;}
  }

// remove items
let delB = document.getElementsByClassName("delete-btn");
for (let i = 0; i <  delB.length; i++) {
  delB[i].onclick = function () {
    delB[i].parentElement.remove();
  };
}
// Heart
let heartBtn = document.getElementsByClassName("fas fa-heart");

for (let i = 0; i < heartBtn.length; i++) {
  heartBtn[i].onclick = function () {
    heartBtn[i].classList.toggle("pink");
  };
}