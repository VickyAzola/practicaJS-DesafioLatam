let resultado = document.querySelector(".resultado")

let btnSuma = document.getElementById("btn-sumar")
let btnResta = document.getElementById("btn-restar")

function sumar(valor1, valor2) {
  let suma = valor1 + valor2
  return suma
}

function restar(valor1, valor2) {
  let resta = valor1 - valor2 
  if (resta < 0) {
    resta = 0;
  }
  return resta
}

btnSuma.addEventListener("click", () => {
  let num1 = parseInt(document.getElementById("valor1").value);
  let num2 = parseInt(document.getElementById("valor2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Debes ingresar los 2 valores")
  } else {
    resultado.textContent = sumar(num1, num2)
  }
  
})

btnResta.addEventListener("click", () => {
  let num1 = parseInt(document.getElementById("valor1").value);
  let num2 = parseInt(document.getElementById("valor2").value);

  if (isNaN(num1) || isNaN(num2))  {
    alert("Debes ingresar los 2 valores")
  } else {
    resultado.textContent = restar(num1, num2)
  }
  
})

//¿Cómo podria resumir los listners para no repetir tanto código?