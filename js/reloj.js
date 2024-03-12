function obtenerFecha (){
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
    const horaActual = document.querySelector('#hora');
    
    fecha.innerHTML = `${diasDeLaSemana[fechaActual.getDay()]} ${fechaActual.getDate()} de ${mesesDelAnio[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
    
    horaActual.innerHTML=`${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`
}


setInterval(obtenerFecha, 1000)