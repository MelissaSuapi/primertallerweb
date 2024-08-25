let operacion = prompt("¿Que operacion Matematica desea realizar?: ");
let num1 = parseInt(prompt("ingrese el primer numero: "));
let num2 = parseInt(prompt("ingrese el segundo numero: "));


let resultado; 

switch (operacion)
{
    case "suma":
    resultado = num1+num2;
    break;

    case "resta":
    resultado = num1-num2;
    break;

    case "multiplicacion":
    resultado = num1*num2;
    break;

    case "division":
    resultado = num1/num2;
    break;

    default:
        resultado= "operacion invalida"
    break;
    
    }
    console.log(resultado);
    alert(resultado);
    
    