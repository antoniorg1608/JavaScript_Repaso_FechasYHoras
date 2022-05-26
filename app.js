// Ejercicio de Fecha Actual en formato d/m/año

var date = new Date();

var anio = date.getFullYear();
var mes = date.getMonth();
var dia = date.getDate();
var mesActual = (mes+1);
console.log(dia);
console.log(mes+1);
console.log(anio);

// Solución
console.log("Hola hoy es el dia " + dia + " del mes " + mesActual +" del año "+ anio);



// Ejercicio de Hora actual en formato HH:MM:SS

var horaActual = new Date();
var hora = horaActual.getHours();
var minuto = horaActual.getMinutes();
var segundo = horaActual.getSeconds();

console.log(hora);
console.log(minuto);
console.log(segundo);

// Solución
console.log("Hola son las " + hora + " horas " + minuto + " minutos y " + segundo + " segundos");

