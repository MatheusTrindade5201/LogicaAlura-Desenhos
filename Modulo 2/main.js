
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'grey';
    pincel.fillRect(0, 0, 600, 400);

    var cor = document.getElementById('cor');
    var indiceCor = 0;
    var raio = 10;
    var desenha = false;

    function desenhoLigado(){
        desenha = true;
    }

    function desenhoDesligado(){
        desenha = false;
    }

    tela.onmousedown = desenhoLigado;
    
    tela.onmouseup = desenhoDesligado;


    function desenhaCirculo(evento) {

        
        
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        if(desenha){
            pincel.fillStyle = cor.value;
            pincel.beginPath();
            pincel.arc(x, y, raio, 0, 2 * 3.14);
            pincel.fill();
        }
        
    }
    
    
    tela.onmousemove = desenhaCirculo;

    /*function mudaCor() {
              
    indiceCor++;
    if(indiceCor > 2){
        indiceCor = 0;
    }    

    return false;

          
    }

    tela.oncontextmenu = mudaCor;*/
