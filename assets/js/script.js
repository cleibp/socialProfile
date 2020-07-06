window.onload = function() {
    document.body.classList.remove('is-preload');
}
window.ontouchmove = function() {
    return false;
}
window.onorientationchange = function() {
    document.body.scrollTop = 0;
}


function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i) {

        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 200 * i)

    });
}
const titulo = document.querySelector('.label-occupation');
typeWrite(titulo);


const currentYear = document.querySelector('.current-Year');
currentYear.innerHTML = new Date().getFullYear();

var Elem = document.getElementById("clock");

function Horario() {
    var Hoje = new Date();
    var Horas = Hoje.getHours();
    if (Horas < 10) {
        Horas = "0" + Horas;
    }
    var Minutos = Hoje.getMinutes();
    if (Minutos < 10) {
        Minutos = "0" + Minutos;
    }
    var Segundos = Hoje.getSeconds();
    if (Segundos < 10) {
        Segundos = "0" + Segundos;
    }
    Elem.innerHTML = Horas + ":" + Minutos + ":" + Segundos;
}
window.setInterval("Horario()", 1000)