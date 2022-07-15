let id_registro = 1;
let boton = document.getElementById("txt-estadisticas");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let datos = document.getElementById("datos");
let crearli = document.getElementById("contactos");
let contactos = new Array();

function validarCamposIngreso(name, surname, datos) {
  if (name.value == "") {
    name.setCustomValidity("Complete el nombre por favor");    
    name.style.border = "1px solid red";
  } else if (surname.value == "") {
    surname.setCustomValidity("Complete el apellido por favor");
    surname.style.border = "1px solid red";
    name.setCustomValidity("");
    name.style.border = "none";
    name.style.border = "1px solid #ccc";
  } else if (datos.value == "") {
    datos.setCustomValidity('Por favor cuéntenos algo sobre');
    datos.style.border = "1px solid red";
    name.setCustomValidity("");
    name.style.border = "none";
    name.style.border = "1px solid #ccc";
    surname.setCustomValidity("");
    surname.style.border = "none";
    surname.style.border = "1px solid #ccc";
  } else {
    name.setCustomValidity("");
    name.style.border = "none";
    name.style.border = "1px solid #ccc";
    surname.setCustomValidity("");
    surname.style.border = "none";
    surname.style.border = "1px solid #ccc";
    datos.setCustomValidity("");
    datos.style.border = "none";
    datos.style.border = "1px solid #ccc";
  }
}

function agregarParticipante(id, name, surname, datos) {
  let participante = [id, name + " " + surname, datos];

  let nuevoParticipante = document.createElement("ul");

  for (let i = 0; i < participante.length; i++) {
    let nuevaColumna = document.createElement("li");
    nuevoParticipante.appendChild(nuevaColumna);
    let info = document.createTextNode(participante[i]);

    nuevaColumna.appendChild(info);
    crearli.insertBefore(nuevoParticipante, crearli.lastChild);
  }

  id_registro++;

  swal({
    title: "¡Listo!",
    text: "Se ha agregado nuestro participante correctamente.",
    icon: "success",
    button: "Aceptar",
  });
}

function limpiarRegistros() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("datos").value = "";
}

document.addEventListener(
  "focusout",
  function () {
    validarCamposIngreso(nombre, apellido, datos);
  },
  false
);

boton.addEventListener("click", function (e) {
  if (nombre.value == "" || apellido.value == "" || datos == "") {
    validarCamposIngreso(nombre, apellido, datos);
  } else {
    e.preventDefault();
    agregarParticipante(id_registro, nombre.value, apellido.value, datos.value);
    limpiarRegistros();
  }
});
