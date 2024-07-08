let prompt = require('prompt-sync')();
let busca = require('./busca.js');

let numero = prompt('digite um numero: ');

busca.sequencial(numero)
busca.binaria(numero)