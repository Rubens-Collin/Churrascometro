
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2 * criancas);
    let local = parseInt(adultos) + parseInt(criancas);
    let salao = qtdpessoas(local);
    
    
    resultado.innerHTML = `<p><b>${qtdTotalCarne / 1000}:KG de carne </b></p>`
    resultado.innerHTML += `<p><b>${Math.ceil(qtdTotalCerveja/350)}:Latas de cerveja</b></p>`
    resultado.innerHTML += `<p><b>${Math.ceil(qtdTotalBebidas/2000)}:Litros de refri</b></p>`
    resultado.innerHTML += `<p><b>${salao}</b></p>`

console.log(local);
console.log(salao);

}


function carnePP(duracao){
    if(duracao >= 6){
       return 650
    } else{
        return 400
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
       return 2000
    } else{
        return 1200
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
       return 1500
    } else{
        return 1000
    }
}

function qtdpessoas(local){
    if(local >= 10){
        return "Salão grande"
    } else{
        return "Salão pequeno"
    }
}