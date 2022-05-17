
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'grey';
    pincel.fillRect(0, 0, 600, 400);

    var cor = ['blue', 'red','green'];
    var indiceCor = 0;
    var raio = 10;
    function desenhaCirculo(evento) {

        
        
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        pincel.fillStyle = cor[indiceCor];
        pincel.beginPath();
        if(evento.shiftKey){

            raio += 10;

            if(raio > 40){
                raio = 40;
            }
        }
        if(evento.altKey){
            raio -= 5;

            if(raio < 10){
                raio = 10;
            }
        }
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();
        console.log(x + ',' + y);
    }

    tela.onclick = desenhaCirculo;

    function mudaCor() {
              
    indiceCor++;
    if(indiceCor > 2){
        indiceCor = 0;
    }    

    return false;
        
    }

    tela.oncontextmenu = mudaCor;
