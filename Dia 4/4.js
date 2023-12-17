// SOLICITANDO INFORMAÇÕES AO USUÁRIO

let nome = prompt("Insira seu nome :");
let idade = Number(prompt("Insira a sua idade :"));
let temCarta = prompt("você possui carteira de motorista ? (s/n)");
let temCarro = prompt("você possui algum carro");

// CONDIÇÕES IF E ELSE

if(idade < 18 && temCarta === "n"){
    console.log(nome)
    console.log(idade)
    console.log(nome + ", você não pode dirigir")

}else if(idade >= 18 && temCarta === "s" && temCarro === "n"){
    console.log(nome)
    console.log(idade)
    console.log(nome + ", você pode dirigir mas, não possui um carro")
}else{
    console.log(nome)
    console.log(idade)
    console.log(nome + ", você será o motorista")
}