function calcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operacion = document.getElementById("operacion").value;
    var result = eval(num1 + operacion + num2)
    alert(result)
}

function jubil() {
    if (forms.jubi[0].checked) {
        forms.edad.disabled = false;
    } else {
        forms.edad.disabled = true;
    }
}



