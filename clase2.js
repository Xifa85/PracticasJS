// Entrega 02
let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingresar tu apellido");
if ((nombre !="") && (apellido !="")) {
    alert("tu nombre es "+ nombre + "\ntu apellido es " + apellido + "\nok para continuar");
}

let superHeroes = prompt("como murio iron man");
if ((superHeroes !="") && (superHeroes == "las gemas del infinito")) {
    alert("repsuesta correcta");
}
else if (superHeroes !="") {
    alert("mirate las peliculas")
}

else  {alert("respuesta incorrecta");
}









//ejercicios de practica


//condicional true
/* if(true) {
    console.log("se va a ver en pantalla");
}

if(false) {
    console.log("no se vera en pantalla");
} */

//ejemplo if else
/* let usuario = prompt("adivina mi nombre");
if(usuario == "pedro") {
    alert("hola "+ usuario);
}
else {
    alert("segui participando");
} */

//secuencia anidada
//si en vez de usar prompt para que el usuario ingrese la variable, y pongo yo la variable el alert sale automatico
/* let color = prompt("de que color tiene la piel hulk");
if (color == "rojo") {
    alert("ese es flash, y no es su piel es su traje");
}
else if (color == "azul y rojo") {
    alert("ese es capital america");
}
else alert("siga participando");
 */

//con variable fija
/* let pais = "";
if (pais == "argentina") {
    alert("estas en en peligro");
}
else if (pais == "venezuela") {
    alert ("sali corriendo");
}
else if (pais == "estados unidos") {
    alert ("dormi un poco mas tranquilo");
}
else {
    alert("dale que so vo");
} */



//condicional con &&
/* let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");

if ((nombre != "") && (apellido != "")) {
    alert("tu nombre es " + nombre + "\ntu apellido es " + apellido);
}
else {
    alert("error ingresar nombre y apellido");
} */

//condicional ||
/* let usuario = prompt("ingrese la palabra clave");

if ((usuario == "pelado") || (usuario == "PELADO") || (usuario == "Pelado")) {
    alert("exacto eres un pelado");
}
else {
    alert("le erraste pichon");
} */

//condicionales convinados
/* let nombre = prompt("ingrese su nombre");
if ( (nombre !="") && ((nombre == "pablo") || (nombre == "Pablo") || (nombre == "PABLO")) ) {
    alert("correcto")
}
else {
    alert("incorrecto")
} */


//SWITCH
/* let puntaje = "";
switch(puntaje) {
    case 1:
        console.log('muy bajo');
        break;
    case 2:
        console.log('intermedio');
        break;
    case 3:
        console.log('un poco alto');
        break;
    default:
        console.log('creo que alto');
} */
