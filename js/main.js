'use strict'

//traer lo selementos con document.querySelector
//crear las variables
//constantes
const select = document.querySelector('.js_select');
const input = document.querySelector('.js_input');
const btn = document.querySelector('.js_btn');

//condicionales, funciones

function getRandomNumber(max) {
    return Math.ceil(Math.random()* max);
}

//listener y eventos
//btn Jugar evento click