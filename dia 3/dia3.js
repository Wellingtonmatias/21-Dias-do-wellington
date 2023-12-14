// CRIANDO VARIÁVEIS 

let nome;
let idade;
let altura; 
let peso;

// SOLICITANDO INFORMAÇÕES AO USUÁRIO

nome = prompt("Insira seu nome : ");
idade = Number(prompt("Insira a sua idade : "));
altura = Number(prompt("Insira a sua altura : "));
peso = parseInt(prompt("Insira o seu peso : "));

// CALCULANDO IDADE E IMC DO USUÁRIO

let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

// EXIBINDO INFORMAÇÕES NO CONSOLE

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + ", e tem " + altura + " de altura, pesando " + peso + " kg/m², e seu imc é de " + imc)

