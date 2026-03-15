document.getElementById("numerologyForm").addEventListener("submit", function(e){

e.preventDefault();

let birthdate = document.getElementById("birthdate").value;

let numbers = birthdate.replaceAll("-","").split("");

let sum = 0;

numbers.forEach(function(n){
sum += parseInt(n);
});

while(sum > 9){
sum = sum.toString().split("").reduce(function(a,b){
return parseInt(a) + parseInt(b);
});
}

localStorage.setItem("lifePath", sum);

window.location.href = "result.html";

});
