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
    
    //corregir los numeros de un digito
    const segundosModificada = fechaActual.getSeconds().toString().padStart(2, '0')
    const minutosModificada = fechaActual.getMinutes().toString().padStart(2, '0')
    const horaModificada = fechaActual.getHours().toString().padStart(2, '0')

    horaActual.innerHTML=`${horaModificada}:${minutosModificada}:${segundosModificada}`
}


setInterval(obtenerFecha, 1000)