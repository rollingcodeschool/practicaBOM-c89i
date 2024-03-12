const fechaActual = new Date();

const diasDeLaSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const mesesDelAnio = [
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
  "Diciembre",
];

const fecha = document.querySelector('#fecha');

fecha.innerHTML = `${diasDeLaSemana[fechaActual.getDay()]} ${fechaActual.getDate()} de ${mesesDelAnio[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
// console.log(fechaActual);
// console.log(fechaActual.getMonth());
// console.log(mesesDelAnio[fechaActual.getMonth()]);
// console.log(fechaActual.getDate());
// console.log(fechaActual.getDay());
// console.log(diasDeLaSemana[fechaActual.getDay()]);