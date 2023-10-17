/** Clase 12: Bucles en js */

// let frutas = [
//     "Manzana",
//     "Pera",
//     "Frutilla",
//     "Pera",
//     "Mora",
//     "Limón",
//     "Kiwi"
//     ];


// frutas[0].length;
// frutas[1].length;
// frutas[2].length;
// frutas[3].length;
// frutas[4].length;
// frutas[5].length;
// frutas[6].length;

//While

//Incremento
/* let i = 0;
while (i <= 15){
    console.log('El valor de i: ' + i);
    i = i + 1;

}

//Decremento

let numero = 100;

while (numero > 0 ){
    document.write("Te queda de saldo ", numero,'<br>')
    numero = numero - 5;
}

// Do While

let i = 0; 
do {
console.log("Valor de i: ", i);
i = i + 1; 
} while (i < 5);

// Practica while

let pasos = 100;
while (pasos > 0){
    if (pasos === 1){
        document.write(" Solo faltan ", pasos, " paso por caminar. ", "<br>")
    } else{
        document.write(" Solo faltan ", pasos, " pasos por caminar. ", "<br>")

    }
    pasos = pasos -1;
}



// Ciclo FOR 

for( let i = 0; i <= 10; i++){
    alert(i)
}



for (let i = 1; i <= 5; i++ ){

    // Solicitar en cada repeticion un nombre
    let ingresarNombre = prompt('Ingrese un nombre');
    
    // Informar el turno asiganado
        alert ("Turno nro " + i + " Nombre: " +ingresarNombre);
    }

*/
// Propiedad LENGTH del array
/*


let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limón",
    "Kiwi"
];

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    console.log(fruta + ' tiene ' + fruta.length + ' letras');
}


let objetosMagicos = ["Varita", "Libro", "Lechuza", "Caldero"];
objetosMagicos.forEach(function (objetosMagicos) {
    console.log("Objeto con ForEach es: ", objetosMagicos);
})


objetosMagicos.forEach((objetosMagicos) =>
    console.log("Objeto con ForEach con funcion flecha: ", objetosMagicos))


// Map 
objetosMagicos.map(objeto => {
    console.log("Objeto con map: " + objeto)
});


//Map 
const numeros = [1, 2, 3, 4, 5, 6, 10];
const porDos = numeros.map((x) => x * 2);
const porCien = numeros.map((x) => x * 100);


console.log("Por dos ", porDos);
console.log("Por cien ", porCien);

/* El forEach se utiliza para iterar y realizar acciones en los elementos 
del array original.
El map generar un nuevo array basado en las transformaciones de los elementos 
del array original*/

/*
//FIND

const encontrado = numeros.find(elemento => elemento > 4);
console.log(encontrado);

const nombres = ["Ana", "Ema", "Juan"];

const nombreEncontrado = nombres.find((elemento) => elemento === "Ana");

console.log("El nombre encontrado es", nombreEncontrado);





//FILTER

const numMayoresCinco = numeros.filter((n) =>
    n >= 5);
console.log(numMayoresCinco);

const palabras = ["manzanas", "banana", "uva", "frutillas", "naranja"];

const palabraBuscada = "na";

const palabrasClave = palabras.filter(
    (palabra) => palabra.includes(palabraBuscada)
)

console.log(palabrasClave);



// El método 'includes' verifica si una subcadena o elemento está presente 
// en una cadena o un array. En este caso, se usa para comprobar si "na" 
// está dentro de cada palabra del array 'palabras', y así filtrar las 
// palabras que contienen "na".

*/

/*Crear una función que tome un array de arrays de 
dos números y me devuelva la suma total de la 
multiplicación de los dos números.

const numero = [5, 10];
const suma = numero.map((x) => x + x);
document.write(suma);


const numero = [5, 10]
 let suma = (numero[0] + numero[1]);
document.write ("La suma es: " + suma);



let suma = 0;
const numeros = [5, 10];

numeros.forEach ((i)  =>
(suma += i));

document.write("La suma es :  " + suma);*/

/* Recorrer un array de números con el 
método .map() y crear un nuevo array que 
indique el número y si el número es par o 
impar */
/* 

const numeros = [5, 10, 25, 83, 28, 58, 1503, 0];
   
numeros.map (numero => {
    if (numero % 2 == 0) {
        document.write ("El numero " + numero + " es par" + "<br>")
    
    }else {

    document.write ( "El numero " + numero + " es impar " + "<br>");
}}
    );


let pares = numeros.filter( (val) => val%2==0);
let impares = numeros.filter( (val) => val%2!=0);

 */
   /*  Crea un array de strings con nombres y 
    luego guardá en una variable nombresCortos 
    un nuevo array con los nombres que tengan 5 
    0 menos letras */
/* 
    let frutas = [
        "Manzana",
        "Pera",
        "Frutilla",
        "Pera",
        "Mora",
        "Limón",
        "Kiwi"
    ];
 
    

     frutas.forEach (elementos => { 
        if (elementos.length <= 5) {

          document.write (elementos + " cumple la condicion"  + "<br>")
        }
    
    }); 



   
let nombresCortos= frutas.filter ((elementos) => elementos.length <= 5)
      document.write ("Cumplen la condicion: " + nombresCortos)
    
 */
/* Crear una función que tome un array de arrays de 
dos números y me devuelva la suma total de la 
multiplicación de los dos números.
 *//* 
const numero = [5, 10];
const suma = numero.map((x) => x + x);
document.write(suma);*/


//const numero = [5, 10]
// let suma = (numero[0] + numero[1]);
//document.write ("La suma es: " + suma); 


//let numeros = [[2, 3], [2, 8], [5, 3], [2, 7], [1, 3]];
//let multiplicacion = numeros.map(numero1[0],numero2[1]) => (numero1 + numero2);
//document.write(multiplicacion);