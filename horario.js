(function(){

    var Xmas95 = new Date();
    var day = Xmas95.getDay();
    var hora = Xmas95.getHours();
    var clase5;
    var dia5;

    console.log("hoy es " + day); 

    // al ultimo no se hizo
    /*if (hora >12){
        hora = hora -12;
    } */

    //console.log(hora);
    
    // lunes 
    if (day == 1){

        dia5 = "lunes";
        switch (hora) {
            case 7:
                clase5 = "algebra";
              break;
            case 8:
                clase5 = "algebra";
                break;
            case 9:
                clase5 = "fundamentos de gramatica";
                break;
            case 10:
                clase5 = "biologia";
                break;
            case 11:
                clase5 = "biologia";
                break;
            case 12:
                clase5 = "historia universal";
                break;
            default:
                clase5 = "ya no hay clases";
          }

    }

    // martes
    if (day == 2){

        dia5 = "martes"
        switch (hora) {
            case 7:
                clase5 = "algebra";
              break;
            case 8:
                clase5 = "no hay clase";
                break;
            case 9:
                clase5 = "biologia";
                break;
            case 10:
                clase5 = "derechos humanos y edo";
                break;
            case 11:
                clase5 = "lit. universal";
                break;
            case 12:
                clase5 = "lit. universal";
                break;
            default:
                clase5 = "ya no hay clases";
          }

    }

    // miercoles
    if(day == 3){

        dia5 = "miercoles";
        switch (hora) {
            case 7:
                clase5 = "algebra";
              break;
            case 8:
                clase5 = "logica";
                break;
            case 9:
                clase5 = "no hay clase";
                break;
            case 10:
                clase5 = "fundamentos de gramatica";
                break;
            case 11:
                clase5 = "no hay clase";
                break;
            case 12:
                clase5 = "derechos humanos y edo";
                break;
            case 16:
                clase5 = "educacion fisica";
                break;
            default:
                clase5 = "ya no hay clases";
          }

    }

    // jueves 
    if(day == 4){

        dia5 = "jueves"
        switch (hora) {
            case 7:
                clase5 = "lit. universal";
              break;
            case 8:
                clase5 = "historia universal";
                break;
            case 9:
                clase5 = "biologia";
                break;
            case 10:
                clase5 = "fundamentos de gramatica";
                break;
            case 11:
                clase5 = "logica";
                break;
            case 12:
                clase5 = "logica";
                break;
            default:
                clase5 = "ya no hay clases";
          }

    }

    // viernes 
    if(day == 5){

        dia5 = "viernes"
        switch (hora) {
            case 7:
                clase5 = "lit. universal";
              break;
            case 8:
                clase5 = "historia universal";
                break;
            case 9:
                clase5 = "historia universal";
                break;
            case 10:
                clase5 = "herramienta educativas";
                break;
            case 11:
                clase5 = "herramientas educativas";
                break;
            case 12:
                clase5 = "derechos humanos y edo";
                break;
            default:
                clase5 = "ya no hay clases";
          }

    }

    // fin de semana
    if(day >= 6){
        dia5 = "fin de semana"
        clase5 = "no hay clases";
    }

    clases12.textContent = "hoy es: " + dia5 + " te toca: " + clase5; 
    
    //             experimentos "pruebas"
    //clase5.textContent = "hoy es: " + dia5 + "te toca: " + clase5;
    //console.log( "hoy es: " + dia5 + " te toca: " + clase5);

}())