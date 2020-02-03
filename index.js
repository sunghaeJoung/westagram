const form = document.querySelector(".loginBox"),
    input = form.querySelector("input"),
    button = form.querySelector(".js-button"),
    inputID = document.querySelector(".name"),
    inputPW = document.querySelector(".password");

function buttonAct() {
  
}

function loginAct() {
  const name = inputID.value;
  const password = inputPW.value;
  //console.log(document.getElementsByClassName(".name"));
  if (name.length !== 0 && password.length !== 0) {
    button.style.opacity = 1;
    form.addEventListener("click", buttonAct);
  } else if (name.length === 0 || password.length === 0) {
    button.style.opacity = 0.3;
   // button.preventDefault();
  }
}

function init() {
  form.addEventListener("keyup", loginAct)
}

init();
