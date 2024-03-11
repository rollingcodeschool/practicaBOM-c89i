// window.alert('un mensaje nuevo')

//setTimeout

function comenzarJuego(){
    document.write(`<p>Comenzando la partida de LOL... Num: ${contador}</p>`);
    //preguntar si ya se ejecuto 6 veces la funcion
    if(contador === 6){
        //detener el setInterval
        return clearInterval(idInterval)
    }
    contador++;
}

// window.setTimeout(comenzarJuego, 5000);
// setTimeout(()=>{
//     document.write('<p>Finalizo la partida </p>')
// },3000);

//setInterval
const idInterval = setInterval(comenzarJuego, 3000);
console.log(idInterval)
let contador = 1;
