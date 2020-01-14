var array = new Array();

function reset() {
  var valor = document.querySelector("#valor");
  valor.value = "0";
  localStorage.removeItem("operador");
}

function obtenerNumero(element) {
  var numero = element.getAttribute("data-value");
  var valor = document.querySelector("#valor");
  if (valor.value == 0) {
    valor.value = "";
    valor.value += numero;
  } else {
    valor.value += numero;
  }
}

function obtenerOperador(operador) {
  if (localStorage.getItem("operador")) {
    alert("Solo puede hacer operaciones entre 2 numeros");
  } else {
    num = document.querySelector("#valor").value;
    operador = operador.getAttribute("data-value");
    localStorage.setItem("operador", operador);
    document.querySelector("#valor").value += operador;
  }
}

function obtenerResultado() {
  var resultado = 0;

  operacion = document.querySelector("#valor").value;
  operador = localStorage.getItem("operador");
  array = operacion.split(operador);

  resultado = generarResultado(array);
  document.querySelector("#valor").value = resultado;
}

function generarResultado(array) {
  num1 = parseFloat(array[0]);
  num2 = parseFloat(array[1]);

  operador = localStorage.getItem("operador");

  var botonesOperador = document.querySelector(".btn-danger");
  botonesOperador.removeAttribute("disabled");

  switch (operador) {
    case "+":
      localStorage.removeItem("operador");
      return num1 + num2;
    case "-":
      localStorage.removeItem("operador");
      return num1 - num2;
    case "*":
      localStorage.removeItem("operador");
      return num1 * num2;
    case "/":
      localStorage.removeItem("operador");
      return num1 / num2;
    default:
      return "0";
  }
}
