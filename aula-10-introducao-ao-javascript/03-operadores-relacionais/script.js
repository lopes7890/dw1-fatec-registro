// JAVASCRIPT

const nome = window.prompt("Digite seu nome: ");
const idade = Number(window.prompt("Digite sua idade: "));
const hobby = window.prompt("Digite seu hobby: ");

document.writeln(`Olá ${nome}!`);

// OPERADOR TERNÁRIO
const resultado = idade < 18 ? 'menor' : 'maior'


document.writeln(` <br> Você é <strong> ${resultado} </strong> de idade`);

