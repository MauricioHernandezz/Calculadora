function sumar(){
   var n1 = parseFloat(document.getElementById('numero1').value);
   var n2= parseFloat(document.getElementById('numero2').value);;
    var res = n1+n2;
     document.getElementById('resultado').value = res;
}
function restar(){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2= parseFloat(document.getElementById('numero2').value);;
     var res = n1-n2;
      document.getElementById('resultado').value = res;
 }
 function multiplicar(){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2= parseFloat(document.getElementById('numero2').value);;
     var res = n1*n2;
      document.getElementById('resultado').value = res;
 }
 function dividir(){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2= parseFloat(document.getElementById('numero2').value);;
     var res = n1/n2;
      document.getElementById('resultado').value = res;
 }
function limpiar(){
    document.getElementById('miformulario').reset();
}