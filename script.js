function acenderLampada() {
    
    document.getElementById('lampada').src = 'img/lampada_acesa.png';
}

function apagarLampada() {

    document.getElementById('lampada').src = 'img/lampada_apagada.png';
}


function mudarBackground(cor) {
    document.body.style.backgroundColor = cor;
}


function mudarBotao(cor){
    var botoes = document.querySelectorAll('.lampada button')
        botoes.forEach(function(botao){
            botao.style.backgroundColor = cor;
        })
}