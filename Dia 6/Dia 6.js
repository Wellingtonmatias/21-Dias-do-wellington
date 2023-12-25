// CRIANDO TABUADA COM O FOR

let numero = Number(prompt("Insira o número da tabuada que deseja: "))

for(let contador = 0; contador <= numero; contador++){
    console.log("Tabuada do " + contador + ":")

for(let j = 0; j <= 10; j++){
    console.log(contador + "x" + j + "=" + (contador * j))
}
}