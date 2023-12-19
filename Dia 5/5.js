// CRIANDO VARIÁVEIS

let valor
let quantidade
let opcao = prompt("Seja bem vindo ao posto Matias, O que deseja: " + 
"\n1 - Abastecer com gasolina; \n2 - abastecer com álcool; \n3 - Calibrar os pneus;")

// CRIANDO SWITCHCASE

switch(opcao){
    case "1":
        valor = parseInt(prompt("Insira o valor que deseja abastecer"))
        quantidade = valor / 5
        console.log("Foi abastecido " + quantidade + " L de gasolina")
        break;
    case "2":
        valor = parseInt(prompt("Insira o valor que deseja abastecer"))
        quantidade = valor / 3
        console.log("Foi abastecido " + quantidade + " L de álcool")
        break;
    default:
        console.log("pneus calibrados com sucesso")
        break;
}