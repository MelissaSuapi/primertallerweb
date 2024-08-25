let dia =7;

let dsemana;

switch (true)
{
    case (dia ===1):
        dsemana = "LUNES";
    break; 
    case(dia ===2):
        dsemana = "MARTES";
    break;
    case(dia ===3):
        dsemana = "MIERCOLES";
    break;
    case(dia ===4):
        dsemana = "JUEVES";
    break;
    case(dia ===5):
        dsemana = "VIERNES";
    break;
    case(dia ===6):
        dsemana = "SABADO";
    break;
    case(dia ===7):
        dsemana = "DOMINGO";
    break;
    default:
        dsemana = "DIA INVALIDO"
    break;
}
console.log(dsemana);