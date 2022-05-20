var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

function desenhaBolinha(x, y, raio){

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();

}

function limpaTela() {
    pincel.clearRect(0,0,600, 400);
}
var x = 20;
var mover = 1;
var raio = 10;
function moveBolinha(){
    limpaTela();
    desenhaBolinha(x, 20, raio);
    x += mover;
    if(x + raio == 600 || x -raio == 0){
        mover = mover * -1;
    }
    
}

setInterval(moveBolinha, 5);