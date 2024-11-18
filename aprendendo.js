function calcular() {
    
    let num1 = parseFloat(document.getElementById('numero1').value);
    let operador = document.getElementById('operador').value;
    let num2 = parseFloat(document.getElementById('numero2').value);
  
    
    if (isNaN(num1) || isNaN(num2))   
   {
      document.getElementById('resultado').innerHTML = "Por favor, insira apenas números.";
      return;
    }
  
    
    let resultado;
    switch (operador) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case   '/':
        if (num2 === 0) 
            {
          resultado = "Divisão por zero não é permitida.";
        }
         else
         {
          resultado = num1 / num2;
        }
        break;
      default:
        resultado = "Operador inválido.";
    }
  
    
    document.getElementById('resultado').innerHTML = resultado;
  }