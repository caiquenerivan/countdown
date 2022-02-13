let id_dia = document.getElementById("dia");
let id_hora = document.getElementById("hora");
let id_minuto = document.getElementById("minuto");
let id_segundo = document.getElementById("segundo");

console.log(`${id_dia.innerText} : ${id_hora.innerText} : ${id_minuto.innerText} : ${id_segundo.innerText}`);


let countDownDate = new Date("Mar 5, 2022 13:37:25").getTime();

let x = setInterval(function(){

    let now = new Date().getTime();

    let distancia = countDownDate - now;

    let dd = Math.floor(distancia/(1000*60*60*24));
    let hh = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mm = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    let ss = Math.floor((distancia % (1000 * 60)) / 1000);

    id_dia.innerText=dd;
    id_hora.innerText=hh;
    id_minuto.innerText=mm;
    id_segundo.innerText=ss;
    console.log(`${dd} : ${hh} : ${mm} : ${ss}`);

    if(distancia<0){
        clearInterval(x);
    }
}, 1000);