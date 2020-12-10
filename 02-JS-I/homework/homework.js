// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Alex";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 55;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
    return str;
}

function suma(x, y) {
    return x + y;
}

function resta(x, y) {
    return x - y;
}

function multiplica(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function sonIguales(x, y) {
    return x == y;
}

function tienenMismaLongitud(str1, str2) {
    return str1.length == str2.length;
}

function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    return num < 90;
}

function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    return num > 50;
}

function obtenerResto(x, y) {
    return x % y;
}

function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    return (num % 2) == 0;
}

function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    return (num % 2) != 0;
}

function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    return Math.pow(num, 2);
}

function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    return Math.pow(num, 3);
}

function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    return Math.pow(num, exponent);
}

function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    return Math.round(num);
}

function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    return Math.ceil(num);
}

function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    return str + "!";
}

function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    return nombre + " " + apellido;
}

function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    return "Hola " + nombre + "!";
}

function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    return alto * ancho;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    nuevaString,
    nuevoNum,
    nuevoBool,
    nuevaResta,
    nuevaMultiplicacion,
    nuevoModulo,
    devolverString,
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    suma,
    resta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevarAlCuadrado,
    elevarAlCubo,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    agregarSimboloExclamacion,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
};