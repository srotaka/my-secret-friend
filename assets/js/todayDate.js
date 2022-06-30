var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Deciembre",
];
var today = new Date();
document.getElementById("spanDate").innerHTML =
  today.getDate() +
  " de " +
  months[today.getMonth()] +
  ", " +
  today.getFullYear();
