//Condicionales


//IF
/*
let numero = 8;

if (numero > 3) {
    console.log("El número es mayor a 3");
} else if (numero === 3) {
    console.log("El número es igual a 3");
}
else {
    console.log("El número es menor a 3");
}

//Ternario

/*let edad = 19

if (edad > 18) {
    esMayorEdad = true;
} else {
    esMayorEdad = false;
}
console.log ("Es mayor de edad" + esMayorEdad)*/

/*
let esMayorEdad = edad > 18 ? true : false;
console.log ("Es mayor de edad" + esMayorEdad);

*//*
 let nombre = "Pablo";
 let edad = 16;

 edad >= 18 
 ?console.log (nombre + " es mayor de eada") 
 :console.log (nombre + " no es mayor de edad");


 let diaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
 console.log(diasSemana);*/
/*
 let nombres = [ "Sebas" , "Pablo", "Miguel" , "Jose"]
 console.log(nombres.length);
 console.log(nombres[0]);

 */
/*
 let numero = parseInt (prompt ( "Ingrese numero"));

 if (numero > 1000) {
    alert ("El numero es mayor a 1000");

 } else 
 {
 alert ("El numero es menor a 1000");
}

let saludo = prompt("Ingresa Hola" );
if (saludo == "hola")
{
      console.log(saludo)
}

let nuemro1 = prompt("ingresa un número" );
if(nuemro1 > 10 && nuemro1 < 50)
{
    alert("tu numero es entre 10 y 50")
}
 */

//SWITCH
/*
const powerRanger = "Red";
switch (powerRanger) {
    case "Red":
        console.log("Red Ranger! Jason");
        break;
    case "Blue":
        console.log("Blue Ranger! Billy");
        break;
    case "Black":
        console.log("Black Ranger! Zack");
        break;
    case "Pink":
        console.log("Pink Ranger! Kimberly");
        break;
    case "Yellow":
        console.log("Yellow Ranger! Trini");
        break;
    default:
        console.log("No sosPower Ranger");

}
*/

/*
console.log (new Date().getDay());*/

/*
let diaSemana = new Date().getDay();

switch (diaSemana) {
    case 0:
    dia = " hoy es domingo";
        break;   
    case 1:
        dia  =" hoy es lunes";
        break;
    case 2:
        dia = " hoy es martes";
        break;
    case 3:
        dia = " hoy es miercoles";
        break;
    case 4:
        dia = " hoy es jueves";
        break;
    case 5:
        dia = " hoy es viernes";
        break;
    default:
        dia =" hoy es sabado";               

}
console.log (dia)*/


/*
let numeroUsuario = parseInt(prompt("Ingresa un numero (determinaremos si es mayoy, igual o menor a 10)"));

if (numeroUsuario == 10) {
    document.write("El número ingresado es igual a 10")
} else if (numeroUsuario <= 10) {
    document.write("El número ingresado es menor a 10")
} else if (numeroUsuario > 10) {
    document.write("El número ingresado es mayor a 10")
} else {
    document.write("ERROR! no ha ingresado un número")
}
*/




let numeroIngresado = parseInt(prompt("Ingresa tu numero"));

if (numeroIngresado > 0) {
    if (numeroIngresado % 2 == 0 || numeroIngresado % 3 == 0) {
        if (numeroIngresado !== 15) {

            document.write(numeroIngresado + " Es el numero de la suerte")
        }

    }

} else {

    document.write(numeroIngresado + " No es el numero de la suerte")
}




/*
let numero =  parseInt (prompt ("Ingrese un numero"));

if ( numero > 0 && numero !=15 && ( numero % 2 == 0 || numero % 3 == 0)){
    document.write (numero + " es el numero de la suerte")
}else {
    document.write (numero + " no es el numero de la suerte")
}*/













