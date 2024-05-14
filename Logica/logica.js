import niveles from './Arrays.js';

// eventos
document.getElementById("empezar").addEventListener("click", empezar_Juego);
document.getElementById("op1").addEventListener("click", verificar);
document.getElementById("op2").addEventListener("click", verificar);
//variables globales
var nivel_Actual = 0;
var subnivel_Actual = 0;
var texto_Aleatorio = null;
var txt= null;

function mostrar_Texto_Aletorio() {
    var probable=niveles[nivel_Actual].length;
    var pro = probable * Math.random();
    txt = niveles[nivel_Actual][Math.floor(pro)];
    // guardar en una variable
    texto_Aleatorio = niveles[nivel_Actual][Math.floor(pro)]['texto'];
    // mostrar elemento 
    var parrafo = document.getElementById("Parrafo");
    parrafo.textContent = texto_Aleatorio;
    mostrar_Opciones(Math.floor(pro));
}

// inicio del juego
function empezar_Juego() {
    nivel_Actual = 0;
    subnivel_Actual = 0;
    mostrar_Texto_Aletorio();
    document.getElementById("empezar").classList.add("disabled");
}
/*botones*/
function mostrar_Opciones(pro){
    var opciones = niveles[nivel_Actual][pro]['opciones'];
    var opcion1 = document.getElementById("op1");
    var opcion2 = document.getElementById("op2");
    opcion1.textContent = opciones[0];
    opcion2.textContent = opciones[1];
    var botones=document.getElementById("cotener_Botones");
    document.getElementById("probar").classList.add("flex-column");
    botones.style.display="";
    botones.style.marginLeft="auto";
    botones.style.marginRight="auto";
}
/*validar respuestas*/
function verificar(event){
    // determinar elemento seleccionado
    var dt_opcion = event.target.id;
    //frase 

    console.log(txt.opciones[1]);
}
