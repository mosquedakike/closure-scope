//variabkles

var a; //declarando
var b = 'b' // declaramos y asignamos
b = 'bb'; //reasignacion
var a = 'aa' //redeclaracion

// Global Scope
var fruit = 'Apple'; //global

console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = "Mexico"; //asignamos una variable sin declararla por lo que se convierte en global
    console.log(country);
}

countries();
console.log(country);