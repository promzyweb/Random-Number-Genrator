const randomNumber = document.querySelector(".number");
const button = document.querySelector(".generate");

button.addEventListener("click",function(){
  randomNumber.innerHTML = Math.floor(Math.random() * 10 + 1)
})