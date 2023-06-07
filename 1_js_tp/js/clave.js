/*Generador de contraseñas: Desarrolla una aplicación que genere contraseñas seguras. Puedes permitir al usuario especificar la longitud y los criterios de seguridad (números, letras mayúsculas, caracteres especiales, etc.) y utilizar JavaScript para generar una contraseña aleatoria que cumpla con esos requisitos.*/ 

let clave_generada = '';//genero variable que va a contener la clave.
/*Si no se cumplen las conficiones en la función VALIDAR_LONGITUD, no se ejecuta la función 'generarCadenaAleatoria'
Entonces, no devuelve una clave y la variable sigue vacía.*/
do {
    let longitud_clave = prompt('Ingrese logitud de clave, mínimo 7 máximo 20');//Longitud de la clave
    console.log(validar_longitud(longitud_clave));  
} while (clave_generada == '');
   
   
/*INICIO DE FUNCIONES ---------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------*/
//función para generar cadena random. Recibe como parametro la longitud de la clave.
//3)
function generarCadenaAleatoria(longitud) {
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&/()';//Caracteres que pueden estar disponible en la generación de clave.
    let cadenaAleatoria = '';//declaro la cadena que se va a generar.
    
    //el ver va desde 0 hasta que i sea menor a longitud.
    for (let i = 0; i < longitud; i++) {
        let indice = Math.floor(Math.random() * (caracteres.length - 1));//va de 0 al largo de la longitud -1
        cadenaAleatoria += caracteres.charAt(indice);//charAt devuelve el caracter e indice le dice el número random generado. Lo voy concatenando a cadenaAleatoria.
    }    
    return cadenaAleatoria;
}
// Fin funcion cadena aleatoria --------------------------------------------------------------------------------------------------.

//Funcion para validar longitud longitud_clave(parametro)no tiene que tener necesariamente el mismo nombre a la variable recibida.
//1)
function validar_longitud(longitud_clave){
    //!validarNumeroEntero (negar) = no es número entero.
    if ((!validarNumeroEntero(longitud_clave)) || longitud_clave == '' || !Number(longitud_clave)) {
        if (longitud_clave == ''){
            console.log('El campo no puede estar vacío. ');    
        }else if(!validarNumeroEntero(longitud_clave)){
            console.log(`No es un número entero, digitó: '${longitud_clave}'`);
        }
    }
    //Si se cumplen las conficiones anteriores, validarNumeroEntero = entero, clave != '' y clave = número.
    else if (longitud_clave<7 || longitud_clave>20){
        console.log(`La longitud '${longitud_clave}' no cumple los requisitos.`);
    }
    else{
        //Acá está ok, se cumplen todas las conficiones, la longitud y el valor. Generó la nueva clave.
        console.log(`La longitud es de ${longitud_clave} caracteres.`);
        clave_generada = generarCadenaAleatoria(longitud_clave);//llamo función, genero clave y la almaceno en clave_generada.
        console.log(`Clave generada: ${clave_generada}`);
    }
}
//Fin funcion validar longitud -------------------------------------------------------------------------------------------------------.
//Función que valida si el número es entero con una expresión regular (regex = /^\d+$/)
//2)
function validarNumeroEntero(valor) {
    let regex = /^\d+$/;//regEx de número entero.
    return regex.test(valor);
}
//fin función validar n° entero con REGEX.