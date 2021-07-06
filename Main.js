function calcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operacion = document.getElementById("operacion").value;
    var result = eval(num1 + operacion + num2)
    alert(result)
}

function jubil() {
    if (forms.jubi[0].checked) { // document.getElementById("siv") ahora funciona de las 2 maneras
        forms.edad.disabled = false;
    } else {
        forms.edad.disabled = true;
    }
}


function valideKey(evt){
			
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
}




