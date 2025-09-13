const resultado=document.getElementById("txtresultado");

function mensaje(texto)
{
    console.log(texto);
    alert(texto);
    const resultado=document.getElementById("txtresultado");

resultado.textContent =texto;

}
function Agregar(palabra)
{
    resultado.textContent =palabra;

}

function Mostrar(palabra)
{

}

function modificar(palabra)
{

}

      
function eliminar(palabra)
{

}


const btnAgregar=document.getElementById("btnAgregar");

const btnMostrar=document.getElementById("btnMostrar");

const btnmodificar=document.getElementById("btnmodificar");

const btneliminar=document.getElementById("btneliminar");

btnAgregar.addeventlistener("click",agregar('klk'));

btnMostrar.addeventlistener("click",mostrar('klk'));

btnmodificar.addeventlistener("click",modificar('klk'));

btneliminar.addeventlistener("click",eliminar('klk'));
