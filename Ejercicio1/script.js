
//seleccioanr mensajes de error
let errFullName = document.querySelector(".errorNombre")
let errAsunto = document.querySelector(".errorAsunto")
let errMensaje = document.querySelector(".errorMensaje")

//seleccionar resultado exito
let resultado = document.querySelector(".resultado")

//seleccionar el formulario y agregar el evento submit
let form = document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault()

  //seleccionar inputs
  let fullName = document.getElementById("fullName").value
  let asunto = document.getElementById("asunto").value
  let mensaje = document.getElementById("mensaje").value

  //guardar el resultado de la funcion en un variable
  let validacion = formValidation(fullName, asunto, mensaje)

  //verificar que sea true y mostrar resultado
  if (validacion) {
    resultado.textContent = "Mensaje enviado con exito !!!!"
  }
})

//funcion de validacion toma parametros que se entregaran al hacer submit
function formValidation(fullName, asunto, mensaje) {
  //regex para verificar que los campos usen solo el alfabeto
  let regex = /^[a-zA-Z]+$/

  //variable boolena para determinar si el form es valido o no
  let formValid = true

  //validacion con regex
  if (!regex.test(fullName)) {
    errFullName.textContent = "El nombre es requerido"
    formValid = false
  } else {
    errFullName.textContent = ""
  }

  if (!regex.test(asunto)) {
    errAsunto.textContent = "El asunto es requerido"
    formValid = false
  } else {
    errAsunto.textContent = ""
  }

  if (!regex.test(mensaje)) {
    errMensaje.textContent = "El mensaje es requerido"
    formValid = false
  } else {
    errMensaje.textContent = ""
  }

  return formValid
}
