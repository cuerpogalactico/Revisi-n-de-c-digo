var formulario = document.querySelector(".formulario"); // Agrega un punto antes de "formulario" para seleccionar por clase

formulario.onsubmit = function(e) { // Cambia ".prevent()" a ".preventDefault()"
  e.preventDefault();
  
  var n = formulario.elements[0];
  var eEdad = formulario.elements[1]; // Cambia el nombre de la variable para evitar conflicto de nombres
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = parseInt(eEdad.value); // Convierte el valor de edad a un número

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    eEdad.classList.add("error");
  }

  if (edad > 18 && edad < 120) { // Corrige la condición y el comentario
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

var botonBorrarGlobal = document.createElement("button"); // Cambia el nombre de la variable para evitar redefinición
botonBorrarGlobal.textContent = "Eliminar invitado";
botonBorrarGlobal.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrarGlobal);

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); // Corrige el método de añadir clase

  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrarLocal = document.createElement("button"); // Cambia el nombre de la variable para evitar redefinición
  botonBorrarLocal.textContent = "Eliminar invitado";
  botonBorrarLocal.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrarLocal);

  botonBorrarLocal.onclick = function() {
    this.parentNode.remove(); // Cambia "botonBorrar.parentNode.remove()" a "this.parentNode.remove()"
  };
}