let inputCash = document.getElementById("inputCash");
let choiceCurrency = document.getElementById("choiceCurrency");
let tenge = document.getElementById("tenge").innerHTML;
let dollar = document.getElementById("dollar").innerHTML;
let euro = document.getElementById("euro").innerHTML;
function change(){
if(choiceCurrency.value=="KZT"){
dollar = inputCash.value/431;
euro = inputCash.value/509;
document.getElementById("dollar").innerHTML = dollar.toFixed(2);
document.getElementById("euro").innerHTML = euro.toFixed(2);
document.getElementById("tenge").innerHTML = "-";
}

else if(choiceCurrency.value=="USD"){
tenge = inputCash.value*429;
euro = inputCash.value*0.92;
document.getElementById("tenge").innerHTML = tenge.toFixed(2);
document.getElementById("euro").innerHTML = euro.toFixed(2);
document.getElementById("dollar").innerHTML = "-";
}

else if(choiceCurrency.value=="EUR"){
dollar = inputCash.value*1.09;
tenge = inputCash.value*507;
document.getElementById("dollar").innerHTML = dollar.toFixed(2);
document.getElementById("tenge").innerHTML = tenge.toFixed(2);
document.getElementById("euro").innerHTML = "-";
}
}