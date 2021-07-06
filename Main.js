function calcularD() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var operacion = document.getElementById("operacion").value;
  var result = eval(num1 + operacion + num2);
  alert(result);
}

function jubil() {
  if (formu2.jubi[0].checked) {
    // document.getElementById("siv") ahora funciona de las 2 maneras
    formu2.edad.disabled = false;
  } else {
    formu2.edad.disabled = true;
    formu2.edad.value = "";
  }
}

function valideKey(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;

  if (code == 8) {
    // backspace.
    return true;
  } else if (code >= 48 && code <= 57) {
    // is a number.
    return true;
  } else {
    // other keys.
    return false;
  }
}

function verificarchkb() {
  var botonchk = document.getElementsByName("buttoncheck");
  var mensaje = "";

  for (let index = 0; index < botonchk.length; index++) {
    if (botonchk[index].checked) {
      mensaje = mensaje + botonchk[index].value + " ";
    }
  }
  if (mensaje === "") {
    mensaje = "No ha seleccionado ninguna casilla";
  }
  alert("Las casillas apretadas son: " + mensaje);
}

function verificarRadio() {
  var radioB = document.getElementsByName("radioNum");
  var mensajeR = "";
  for (let index = 0; index < radioB.length; index++) {
    if (radioB[index].checked) {
      mensajeR = mensajeR + radioB[index].value;
    }
  }
  alert("El RadioButton apretado es: " + mensajeR)
}

function calcular() {
  var total = 0;
  var destino = document.getElementById("desti").value;
  var desayuno = document.getElementsByName("desayuno");
  var paquetes = document.getElementsByName("paquetes");
  var jubilado = document.getElementsByName("jubi");
  var Edad = document.getElementById("age").value;

  total += parseInt(destino);

  for (let index = 0; index < desayuno.length; index++) {
    if (desayuno[index].checked) {
      total = total + parseInt(desayuno[index].value);
    }
  }
  for (let index = 0; index < paquetes.length; index++) {
    if (paquetes[index].checked) {
      total = total + parseInt(paquetes[index].value);
    }
  }

  if (jubilado[0].checked) {
    if (Edad > 60 && Edad < 80) {
      total = total - (total * 30) / 100;
    }
    if (Edad > 80) {
      total = total - (total * 40) / 100;
    }
  }
  alert("Su total es: " + total);
}


function mOver(col) {
  document.getElementById("divis").style.backgroundColor = col;
}

function mOut(cole) {
  document.getElementById("divis").style.backgroundColor = cole;
}
