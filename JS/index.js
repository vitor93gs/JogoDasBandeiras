// Criacao de array com todas as informacoes necessarias do jogo
const arrJogo = [];
for(let i = 0; i<capital.length;i++){
    arrJogo.push(new Pais(nome[i],bandeira[i],capital[i]));
}

// Cricao do array variavel de cada jogo
var arrVar = arrJogo;

// Criacao de variaveis necessarias para o site
let recorde = 0;
let pontos = 0;
let tentativas = 0;
let nomeDeUsuario = "";
let dificuldade = "";
let tamDoArr = 20;
let tempo = 500;
let idTempo = "";
let modoDeJogo = "";
let result = "";
let vidas = 3;
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
const tela3 = document.getElementById("tela3");
const voltar = document.getElementById("return");
const voltar2 = document.getElementById("return2");
const pontuacao = document.getElementById("pontuacao");
const numDeVidas = document.getElementById("vidas")


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
    if(botao.innerText === "JOGO DAS BANDEIRAS"){
        modoDeJogo = 0;
    }
    if(botao.innerText === "JOGO DAS CAPITAIS"){
        modoDeJogo = 1;
    }
    else{
        modoDeJogo = 2;
    }
}
selecionadoTipo(btnBandeiras);


//BOTOES FUNCIONANDO


btnDificil.addEventListener('click', () => {
    selecionadoDificuldade(btnDificil);
});
btnFacil.addEventListener('click', () => {
    selecionadoDificuldade(btnFacil);
});
btnMedio.addEventListener('click', () => {
    selecionadoDificuldade(btnMedio);  
});
btnInvertido.addEventListener('click', () => {
    selecionadoTipo(btnInvertido);  
});
btnBandeiras.addEventListener('click', () => {
    selecionadoTipo(btnBandeiras);  
});
btnCapitais.addEventListener('click', () => {
    selecionadoTipo(btnCapitais);  
});


// Funcao para conseguir um numero aleatorio dentro do array


function numAleatorio(tam){
    return Math.floor(Math.random() * tam);
}


/* O jogo escolhe sempre 4 paises aleatorios, 1 vai ser o certo, e 3 serao errados.
O numero aleatorio deve servir de base para a escolha dos numeros, o total de numeros para o calculo do numero aleatorio deve ser decrescido de "1" a cada escolha de um pais aleatorio
*/


function selecionarPaises(){
    const arrPaises = [];
    let tam = 0;
    arrPaises.push(arrVar.splice(numAleatorio(tamDoArr-tam),1))
    const arrJogoIn = arrVar;
    while(tam<3){
        arrPaises.push(arrJogoIn.splice(numAleatorio(tamDoArr-tam),1));
        tam++;
    }
    return arrPaises
}


// funcao timer de 5 segundos para o jogo


function timer(){
    idTempo = setInterval(() => { 
        tempo --;
        timerDoJogo.innerText = tempo;
        if(tempo === 0){
            clearInterval(idTempo);
            tempo = 500;
            termino();
            vidas = 3;
        }    
    }, 10);    
}


// funcao que diz que o jogo terminou


function termino(){
    tela1.classList.remove("show");
    tela1.classList.add("no_show");
    tela2.classList.remove("show");
    tela2.classList.add("no_show");
    tela3.classList.remove("no_show");
    tela3.classList.add("show");
}

// funcao que monta o tabuleiro

function montar(arr){
    img.src = `${arr[0][0].bandeira}`;
    let bt1,bt2,bt3,bt4;
    result = arr[0][0].nome
    bt1 = arr.splice(numAleatorio(4),1)
    bt2 = arr.splice(numAleatorio(3),1)
    bt3 = arr.splice(numAleatorio(2),1)
    bt4 = arr.splice(0,1)
    
    botao1.innerText = bt1[0][0].nome;
    botao2.innerText = bt2[0][0].nome;
    botao3.innerText = bt3[0][0].nome;
    botao4.innerText = bt4[0][0].nome;
    
}

// funcao dos botoes de jogo


function botaoJogo(botaox){
    if(botaox.innerText === result){
        pontos ++;
        pontuacao.innerText = `${pontos}`
        const arrJogo1 = selecionarPaises()
        montar(arrJogo1)
        tempo = 500;
    }
    else{
        vidas -= 1;
        numDeVidas.innerText = `${vidas}`
    }
    if(vidas === 0){
        termino()
    }
    
}
// BOTAO JOGAR


btnJogar.addEventListener('click', () => {
    tela1.classList.remove("show");
    tela1.classList.add("no_show");
    tela2.classList.remove("no_show");
    tela2.classList.remove("show");
    timer()
    numDeVidas.innerText = `${vidas}`
    const arrJogo1 = selecionarPaises()
    montar(arrJogo1)
});

// BOTOES DO JOGO


botao1.addEventListener('click', () => {
    botaoJogo(botao1);
})
botao2.addEventListener('click', () => {
    botaoJogo(botao2);
})
botao3.addEventListener('click', () => {
    botaoJogo(botao3);
})
botao4.addEventListener('click', () => {
    botaoJogo(botao4);
})


// funcao que volta para a tela inicial
function resetAll(){
    tamDoArr = 20;
    clearInterval(idTempo);
    tempo = 500;
    arrVar = arrJogo;
    vidas = 3;
    pontos = 0;
    tela2.classList.remove("show");
    tela2.classList.add("no_show");
    tela3.classList.remove("show");
    tela3.classList.add("no_show");
    tela1.classList.remove("no_show");
    tela1.classList.add("show");
}

//botoes de retorno
voltar.addEventListener('click', () => {
    resetAll()
});
voltar2.addEventListener('click', () => {
    resetAll()
});


console.log(selecionarPaises()[0][0].nome);
