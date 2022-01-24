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
let tempo = 500;
let idTempo = "";
let modoDeJogo = "";
const botao1 = document.getElementById("btn1");
const botao2 = document.getElementById("btn2");
const botao3 = document.getElementById("btn3");
const botao4 = document.getElementById("btn4");
const timerDoJogo = document.getElementById("timer");
const img = document.getElementById("img1");
const btnFacil = document.getElementById("facil");
const btnMedio = document.getElementById("medio");
const btnDificil = document.getElementById("dificil");
const btnBandeiras = document.getElementById("bandeiras");
const btnCapitais = document.getElementById("capitais");
const btnInvertido  = document.getElementById("invertido");
const btnJogar = document.getElementById("jogar");
const tela1 = document.getElementById("tela1");
const tela2 = document.getElementById("tela2");
const voltar = document.getElementById("return");

// Logica dos botoes de escolha de tipo de jogo e de dificuldade
function selecionadoDificuldade(botao){
    btnFacil.classList.remove("selected");
    btnMedio.classList.remove("selected");
    btnDificil.classList.remove("selected");
    botao.classList.add("selected");
    if(botao.innerText === "Facil"){
        tamDoArr = 20;
    }
    if(botao.innerText === "Medio"){
        tamDoArr = 80;
    }
    else{
        tamDoArr = 164;
    }
}
selecionadoDificuldade(btnFacil);

function selecionadoTipo (botao){
    btnCapitais.classList.remove("selected");
    btnBandeiras.classList.remove("selected");
    btnInvertido.classList.remove("selected");
    botao.classList.add("selected");
    // if(botao.innerText === "Facil"){
    //     tamDoArr = 20;
    // }
    // if(botao.innerText === "Medio"){
    //     tamDoArr = 80;
    // }
    // else{
    //     tamDoArr = 164;
    // }
}
selecionadoTipo(btnBandeiras);

//BOTOES FUNCIONANDO

btnDificil.addEventListener('click', () => {
    selecionadoDificuldade(btnDificil)  
});
btnFacil.addEventListener('click', () => {
    selecionadoDificuldade(btnFacil)  
});
btnMedio.addEventListener('click', () => {
    selecionadoDificuldade(btnMedio)  
});
btnInvertido.addEventListener('click', () => {
    selecionadoTipo(btnInvertido)  
});
btnBandeiras.addEventListener('click', () => {
    selecionadoTipo(btnBandeiras)  
});
btnCapitais.addEventListener('click', () => {
    selecionadoTipo(btnCapitais)  
});
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

// funcao timer de 5 segundos para o jogo
function timer(){
    idTempo = setInterval(() => { 
        tempo --;
        timerDoJogo.innerText = tempo;
        if(tempo === 0){
            clearInterval(idTempo);
            tempo = 500;
        }    
    }, 10);    
}

//funcao que comeca o jogo

btnJogar.addEventListener('click', () => {
    tela1.classList.remove("show");
    tela1.classList.add("no_show");
    tela2.classList.remove("no_show");
    tela2.classList.remove("show");
});

// funcao que volta para a tela inicial
function resetAll(){
    tamDoArr = 164;
    tempo = 500;
    tela2.classList.remove("show");
    tela2.classList.add("no_show");
    tela1.classList.remove("no_show");
    tela1.classList.remove("show");
}

//botoes de retorno
voltar.addEventListener('click', () => {
    resetAll()
});




img.src = arrJogo[1].bandeira
console.log(arrJogo[1].bandeira)

