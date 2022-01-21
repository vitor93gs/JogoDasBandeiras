// Criacao de array com todas as informacoes necessarias do jogo
const arrJogo = []
for(let i = 0; i<capital.length;i++){
    arrJogo.push(new Pais(nome[i],bandeira[i],capital[i]))
}

// Criacao de variaveis necessarias para o site
let recorde = 0;
let tentativas = 0;
let nomeDeUsuario = "";
let dificuldade = "";
let tamDoArr = 164;
const botao1 = document.getElementById("btn1");
const botao2 = document.getElementById("btn2");
const botao3 = document.getElementById("btn3");
const botao4 = document.getElementById("btn4");
const img = document.getElementById("img1");

// Funcao para conseguir um numero aleatorio dentro do array

function numAleatorio(tam){
    return Math.floor(Math.random() * tam);
}

/* O jogo escolhe sempre 4 paises aleatorios, 1 vai ser o certo, e 3 serao errados.
O numero aleatorio deve servir de base para a escolha dos numeros, o total de numeros para o calculo do numero aleatorio deve ser decrescido de "1" a cada escolha de um pais aleatorio
*/
function selecionarPaises(){
    const arrJogoIn = arrJogo;
    const arrPaises = [];
    let tam = 0;
    while(tam<4){
        arrPaises.push(arrJogoIn.splice(numAleatorio(tamDoArr-tam),1));
        tam++;
    }
    return arrPaises
}
const arrJogo1 = selecionarPaises()

console.log(arrJogo[1].bandeira)

