'use strict'

//traer lo selementos con document.querySelector
//crear las variables
//constantes
const select = document.querySelector('.js_select');
const input = document.querySelector('.js_input');
const btn = document.querySelector('.js_btn');
const message = document.querySelector('.js_msg');
//condicionales, funciones

//si el select coincide con el numero random entonces al hacer click en el bton "jugar" se muestra mensaje "has ganado..." en message.

function getRandomNumber(max) {
    return Math.ceil(Math.random()* max);
}

//listener y eventos
//btn Jugar evento click
function play() {
    const randomNumber = getRandomNumber(6); 
if (randomNumber === select) {
    message.innerHTML = "Has ganado el doble de lo apostado"
}else{
    message.innerHTML = "Has perdido lo apostado"
}

}