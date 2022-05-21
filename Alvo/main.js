var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;
var xAleatorio;
var yAleatorio;

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function desenhaAlvoAleatorio(){

    limpaTela();

    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    xAleatorio = Math.floor(Math.random()*600);
    yAleatorio = Math.floor(Math.random()*400);

    desenhaCirculo(xAleatorio, yAleatorio, raio + 20, 'red');
    desenhaCirculo(xAleatorio, yAleatorio, raio + 10, 'white');
    desenhaCirculo(xAleatorio, yAleatorio, raio, 'red');

}

setInterval(desenhaAlvoAleatorio, 1000);


function dispara(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if(x >= xAleatorio - raio && x <= xAleatorio + raio && y >= yAleatorio - raio && y <= yAleatorio + raio){
        alert("Você acertou o alvo!");
    }
}

function limpaTela(){
    pincel.clearRect(0,0,600,400);
}

tela.onclick = dispara;

