
/* Para Guardar el nombre del estudiante */
var Estudiante = document.getElementById("NombreEstudiante");

Estudiante.innerHTML = prompt("Ingrese Nombre Estudiante" ) ;

var ramo = document.getElementById("ramoHTML");
var nota1= document.getElementById("nota1HTML");
var nota2= document.getElementById("nota2HTML");
var nota3= document.getElementById("nota3HTML");
var promedio  = document.getElementById("promedioHTML");


ramo.innerHTML = "HTML";
nota1.innerHTML = prompt("Para Curso" +ramo.innerHTML + " Ingrese Nota1" ) ;
nota2.innerHTML = prompt("Para Curso" +ramo.innerHTML + " Ingrese Nota2" ) ;
nota3.innerHTML = prompt("Para Curso" +ramo.innerHTML + " Ingrese Nota3" ) ;

/* Calculo el promedio pasando cada elemento a html a numerico, ya que viene en string */
var promedioInterno  = (parseFloat(nota1.innerHTML) + parseFloat(nota2.innerHTML) + parseFloat(nota3.innerHTML) ) / 3;

/* Le paso el valor calculado a la etiqueta html en cuestion */
promedio.innerHTML = promedioInterno;

/* uso las mismas variables para hacer el calculo de los otros ramos, pero haciendo referencia a su ID respectivo del RAMO */

ramo = document.getElementById("ramoCSS");
nota1= document.getElementById("nota1CSS");
nota2= document.getElementById("nota2CSS");
nota3= document.getElementById("nota3CSS");
promedio  = document.getElementById("promedioCSS");

ramo.innerHTML = "CSS";
nota1.innerHTML = prompt("Para Curso" +ramo.innerHTML + " Ingrese Nota1" ) ;
nota2.innerHTML = prompt("Para Curso" +ramo.innerHTML + " Ingrese Nota2" ) ;
nota3.innerHTML = prompt("Para Curso" +ramo.innerHTML + " Ingrese Nota3" ) ;

/* Calculo el promedio pasando cada elemento a html a numerico, ya que viene en string */
var promedioInterno  = (parseFloat(nota1.innerHTML) + parseFloat(nota2.innerHTML) + parseFloat(nota3.innerHTML) ) / 3;

/* Le paso el valor calculado a la etiqueta html en cuestion */
promedio.innerHTML = promedioInterno;

ramo = document.getElementById("ramoJS");
nota1= document.getElementById("nota1JS");
nota2= document.getElementById("nota2JS");
nota3= document.getElementById("nota3JS");
promedio  = document.getElementById("promedioJS");

ramo.innerHTML = "JAVASCRIPT";
nota1.innerHTML = prompt("Para Curso" +ramo.innerHTML + " Ingrese Nota1" ) ;
nota2.innerHTML = prompt("Para Curso" +ramo.innerHTML + " Ingrese Nota2" ) ;
nota3.innerHTML = prompt("Para Curso" +ramo.innerHTML + " Ingrese Nota3" ) ;

/* Calculo el promedio pasando cada elemento a html a numerico, ya que viene en string */
var promedioInterno  = (parseFloat(nota1.innerHTML) + parseFloat(nota2.innerHTML) + parseFloat(nota3.innerHTML) ) / 3;

/* Le paso el valor calculado a la etiqueta html en cuestion */
promedio.innerHTML = promedioInterno;


