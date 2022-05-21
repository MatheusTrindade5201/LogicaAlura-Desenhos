var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

function desenhaBolinha(x, y, raio){

    pincel.fillStyle = 'lightgreen';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();

}

function limpaTela() {
    pincel.clearRect(0,0,600, 400);
}
var x = 20;
var pulsar = 1;
var raio = 20;
function pulsarBolinha(){
    limpaTela();
    desenhaBolinha(300, 200, raio);
    raio += pulsar;
    if(raio == 30 || raio == 20){
        pulsar = pulsar * -1;
    }
    
}

setInterval(pulsarBolinha, 50);