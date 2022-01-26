// Criacao de array com todas as informacoes necessarias do jogo
var arrJogo = [];



// Criacao de variaveis necessarias para o site
let recorde = 0;
let pontos = 0;
let tentativas = 0;
let nomeDeUsuario = "";
// let dificuldade = "";
let tamDoArr = 164;
let tempo = 500;
let idTempo = "";
// let modoDeJogo = "";
let result = "";
let vidas = 3;
const botao1 = document.getElementById("btn1");
const botao2 = document.getElementById("btn2");
const botao3 = document.getElementById("btn3");
const botao4 = document.getElementById("btn4");
const timerDoJogo = document.getElementById("timer");
const img = document.getElementById("img1");
// const btnFacil = document.getElementById("facil");
// const btnMedio = document.getElementById("medio");
// const btnDificil = document.getElementById("dificil");
// const btnBandeiras = document.getElementById("bandeiras");
// const btnCapitais = document.getElementById("capitais");
// const btnInvertido  = document.getElementById("invertido");
const btnJogar = document.getElementById("jogar");
const tela1 = document.getElementById("tela1");
const tela2 = document.getElementById("tela2");
const tela3 = document.getElementById("tela3");
const voltar = document.getElementById("return");
const voltar2 = document.getElementById("return2");
const pontuacao = document.getElementById("pontuacao");
const numDeVidas = document.getElementById("vidas");
const recordeHtml = document.getElementById("recorde");
const tentativasHtml = document.getElementById("try")


// Logica dos botoes de escolha de tipo de jogo e de dificuldade


// function selecionadoDificuldade(botao){
//     btnFacil.classList.remove("selected");
//     btnMedio.classList.remove("selected");
//     btnDificil.classList.remove("selected");
//     botao.classList.add("selected");
//     if(botao.innerText === "Facil"){
//         tamDoArr = 20;
//         console.log(tamDoArr)
//     }
//     else if(botao.innerText === "Medio"){
//         tamDoArr = 80;
//         console.log(tamDoArr)
//     }
//     else{
//         tamDoArr = 164;
//         console.log(tamDoArr)
//     }
// }
// selecionadoDificuldade(btnFacil);

// function selecionadoTipo (botao){
//     btnCapitais.classList.remove("selected");
//     btnBandeiras.classList.remove("selected");
//     btnInvertido.classList.remove("selected");
//     botao.classList.add("selected");
//     if(botao.innerText === "JOGO DAS BANDEIRAS"){
//         modoDeJogo = 0;
//     }
//     if(botao.innerText === "JOGO DAS CAPITAIS"){
//         modoDeJogo = 1;
//     }
//     else{
//         modoDeJogo = 2;
//     }
// }
// selecionadoTipo(btnBandeiras);


//BOTOES FUNCIONANDO


// btnDificil.addEventListener('click', () => {
//     selecionadoDificuldade(btnDificil);
// });
// btnFacil.addEventListener('click', () => {
//     selecionadoDificuldade(btnFacil);
// });
// btnMedio.addEventListener('click', () => {
//     selecionadoDificuldade(btnMedio);  
// });
// btnInvertido.addEventListener('click', () => {
//     selecionadoTipo(btnInvertido);  
// });
// btnBandeiras.addEventListener('click', () => {
//     selecionadoTipo(btnBandeiras);  
// });
// btnCapitais.addEventListener('click', () => {
//     selecionadoTipo(btnCapitais);  
// });

//funcao criar arrayJogo

function criarArrJogo(){
    arrJogo = []
    for(let i = 0; i<capital.length;i++){
        arrJogo.push(new Pais(nome[i],bandeira[i],capital[i]));
    }
}

// Funcao para conseguir um numero aleatorio 


function numAleatorio(tam){
    return Math.floor(Math.random() * tam);
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
            timerDoJogo.classList.remove("timer_expirando")
        }

        else if(tempo === 150){
            timerDoJogo.classList.add("timer_expirando")
        }   

    }, 10);    
}


// funcao que diz que o jogo terminou


function termino(){
    tela1.classList.add("no_show");
    tela2.classList.add("no_show");
    tela3.classList.remove("no_show");
}


/* O jogo escolhe sempre 4 paises aleatorios, 1 vai ser o certo, e 3 serao errados.
O numero aleatorio deve servir de base para a escolha dos numeros, o total de numeros para o calculo do numero aleatorio deve ser decrescido de "1" a cada escolha de um pais aleatorio
*/


function selecionarPaises(){
    const arrPaises = [];
    let tam = 1;
    arrPaises.push(arrJogo.splice(numAleatorio(tamDoArr),1)[0]);
    
    console.log(arrPaises)

    tamDoArr -= 1;

    console.log(arrJogo)
    
    let num1,num2,num3
    num1 = numAleatorio(tamDoArr);
    num2 = numAleatorio(tamDoArr);
    num3 = numAleatorio(tamDoArr);
    
    while(num1 === num3){
        num1 = numAleatorio(tamDoArr);
    }
    while(num1 === num2){
        num1 = numAleatorio(tamDoArr);
    }
    while(num3 === num2){
        num2 = numAleatorio(tamDoArr);
    }
    console.log(num1,num2,num3)

    arrPaises.push(arrJogo[num1])
    arrPaises.push(arrJogo[num2])
    arrPaises.push(arrJogo[num3])

    console.log(arrPaises);

    return arrPaises
}

//funcao anti erro para bug do undefined


// funcao que monta o tabuleiro

function montar(arr){
    img.src = `${arr[0].bandeira}`;
    result = arr[0].nome;
    console.log(result)
    let bt1,bt2,bt3,bt4;
    
    bt1 = arr.splice(numAleatorio(4),1);
    bt2 = arr.splice(numAleatorio(3),1);
    bt3 = arr.splice(numAleatorio(2),1);
    bt4 = arr.splice(0,1);

    console.log(bt1)
    console.log(bt2)
    console.log(bt3)
    console.log(bt4)

    botao1.innerText = bt1[0].nome;
    botao2.innerText = bt2[0].nome;
    botao3.innerText = bt3[0].nome;
    botao4.innerText = bt4[0].nome;
    
    botao1.classList.remove("vermelho","verde");
    botao2.classList.remove("vermelho","verde");
    botao3.classList.remove("vermelho","verde");
    botao4.classList.remove("vermelho","verde");
}


//funcao montar pais selecionados


function tabuleiro(){
    timerDoJogo.classList.remove("timer_vazio");
    timerDoJogo.classList.remove("timer_expirando");
    montar(selecionarPaises());
    tempo = 500;   
}


// funcao dos botoes de jogo


function botaoJogo(botaox){
    if(botaox.innerText === result){

        pontos ++;
        botaox.classList.add("verde")
        timerDoJogo.classList.add("timer_vazio")
        var audio = new Audio('../SONS/CERTO.mp3');
        audio.play();
        pontuacao.innerText = `PONTUACAO: ${pontos}`
        tempo = 300
        setTimeout(tabuleiro,1000)
        
    }
    else{

        vidas -= 1;
        numDeVidas.innerText = `VIDAS: ${vidas}`
        botaox.classList.add("vermelho")

        if(vidas>0){
            var audio = new Audio('../SONS/ERRADO.mp3');
            audio.play();
        }

    }
    if(vidas === 0){

        var audio = new Audio('../SONS/DERROTA.mp3');
            audio.play();
        termino()

    }
    
}

// Funcao jogar

function comecarJogo(){
    criarArrJogo()
    tela1.classList.add("no_show");
    tela2.classList.remove("no_show");
    timer()
    numDeVidas.innerText = `VIDAS : ${vidas}`
    montar(selecionarPaises())
}

// funcao que volta para a tela inicial


function resetAll(){
    // selecionadoDificuldade(btnFacil)
    clearInterval(idTempo);
    tempo = 500;
    criarArrJogo()
    vidas = 3;
    tamDoArr = 164
    if(recorde<pontos){
        recorde = pontos
    }
    recordeHtml.innerText = `RECORDE : ${recorde}`;
    tentativas ++;
    tentativasHtml.innerText = `TENTATIVAS : ${tentativas}`;
    pontos = 0;
    tela2.classList.add("no_show");
    tela3.classList.add("no_show");
    tela1.classList.remove("no_show");
  
    
}


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


// Botao jogar


btnJogar.addEventListener('click', () => {
    comecarJogo() 
});


//botoes de retorno


voltar.addEventListener('click', () => {
    resetAll()
});
voltar2.addEventListener('click', () => {
    resetAll()
});



