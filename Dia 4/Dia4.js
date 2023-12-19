// SOLICITANDO INFORMAÇÕES AO USUÁRIO

let temFome = prompt("você está com fome ? (s/n)");
let temDinheiro = prompt("você tem dinheiro ? (s/n)");
let restauranteAberto = prompt("o restaurante está aberto ? (s/n)");

// CONDIÇÕES IF E ELSE

if(temFome === "n" || temDinheiro == "n"){
    console.log("Hoje jantaremos em casa");

}else if(temDinheiro === "s" && restauranteAberto == "s"){
    console.log("Hoje jantaremos fora");

}else{
    console.log("peça um delivery");
}


