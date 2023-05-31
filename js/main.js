'use strict'

//traer lo selementos con document.querySelector
//crear las variables
//constantes
const select = document.querySelector('.js_select');
const input = document.querySelector('.js_input');
const btn = document.querySelector('.js_btn');
const message = document.querySelector('.js_msg');
const balance = document.querySelector('.js_balance');
//condicionales, funciones

//si el select coincide con el numero random entonces al hacer click en el btn "jugar" se muestra mensaje "has ganado..." en message.

function getRandomNumber(max) {
    return Math.ceil(Math.random()* max);
}

function play() {
    const randomNumber = getRandomNumber(6);
    const valueSelect = parseInt(select.value);
    console.log(valueSelect);
if (randomNumber === valueSelect) {
    message.innerHTML = "Has ganado el doble de lo apostado";
    //balance.innterHTML = innnerHTML + (input.value * 2);
    console.log(randomNumber);
}else{
    message.innerHTML = "Has perdido lo apostado";
    console.log(randomNumber);
}

}
//mostrar en saldo
function result () {
    
}
//eventos
//btn Jugar evento click


function handleClickBtn(event) {
    event.preventDefault();
    play();

}

//listener
btn.addEventListener("click", handleClickBtn);