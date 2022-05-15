var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'darkgreen';
/*Cabeça*/
pincel.fillRect(125, 50, 350, 300);
pincel.fillStyle = 'black';
/*Olhos*/
pincel.fillRect(175, 110, 90, 90);
pincel.fillRect(335, 110, 90, 90);
/*Nariz*/
pincel.fillRect(265, 200, 70, 100);
/*Boca/barba*/
pincel.fillRect(225, 240, 40, 110);
pincel.fillRect(335, 240, 40, 110);