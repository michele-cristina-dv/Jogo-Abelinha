var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;
var criaAbelhaTempo = 1500
var nivel = window.location.search

nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500
    criaAbelhaTempo = 1500
}else if(nivel === 'medio'){
    //1000
    criaAbelhaTempo = 1200
}else if (nivel === 'dificil'){
    //750
    criaAbelhaTempo = 950
}



function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;     
    largura = window.innerWidth;
    console.log(largura, altura); 
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function(){
   tempo -= 1
   if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'

   }else{
    document.getElementById('cronometro').innerHTML = tempo 
   }
}, 1000)

function posicaoRandomica(){

         if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
    
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
         }else {
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
                vidas++
         }}
    // Gera coordenadas aleatórias dentro do tamanho da janela
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    // Trata posições negativas (quando o mosquito fica fora da janela)
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    // Cria um elemento img para o mosquito
    var abelinha = document.createElement('img');
    abelinha.src = 'imagens/abelinha.png';
    abelinha.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    abelinha.style.left = posicaoX + 'px';
    abelinha.style.top = posicaoY + 'px';
    abelinha.style.position = 'absolute';
    abelinha.id = 'mosquito';
    abelinha.onclick = function() {
        this.remove();
    };

    document.body.appendChild(abelinha);
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);
    switch(classe) {
        case 0:
            return 'abelinha1';
        case 1:
            return 'abelinha2';
        case 2:
            return 'abelinha3';
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);
    switch(classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}