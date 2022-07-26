/**
 * TODO: Código para generar un password aleatorio
 * * @author: kevinluisfl
 */
/**
 * ? @pass es una variable que almacena todo lo que se concatene antes de mezclar
 */
let pass = "";
let mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let minus = "abcdefghijklmnopqrstuvwxyz";
let characts = "!#$%&/()=?¡|@^_-+*}{][<>:;";

/**
 * ? Input donde se mostrará la password generada
 */
let password = document.getElementById("password");

/**
 * ? Los 4 checks disponibles, 1 por cada string declarado anteriormente
 */
let checkMayus = document.getElementById("mayus");
let checkNumber = document.getElementById("number");
let checkMinus = document.getElementById("minus");
let checkCharact = document.getElementById("simbol");

/**
 * ? Cantidad de caracteres que define el usuario para el password
 */
let sizepass = document.getElementById("sizepass");

/**
 * ? Botones para ejecutar la generacion del password y copiarla respectivamente
 */
let btnGenerar = document.getElementById("generar");
let btnCopiar = document.getElementById("copiar");

/**
 * ? Funcion que mezcla los items de un array de forma aleatoria
 * @param {*} arr es el array que se quiere mezclar
 */
function ordenAleatorio(arr){
    for(let i =arr.length-1 ; i>0 ;i--){
        let j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }
}

/**
 * ? Evento para generar password al dar click en el boton "Generar"
 */
btnGenerar.addEventListener("click",()=>{
    /**
     * ?Valido que el tamaño del password sea apropiado
     */
    if(sizepass.value < 6){
        alert("minimo 6 caracteres para la password")
    }else if (sizepass.value > 30){
        alert("maximo 30 caracteres para la password")
    }else {
        /**
         * ? Cuando hay un check activo se concatena a @pass
         */
        if(checkMayus.checked) pass += mayus;
        if(checkNumber.checked) pass += numbers;
        if(checkMinus.checked) pass += minus;
        if(checkCharact.checked) pass += characts;

        /**
         * ? Se crea un array del string concatenado
         */
        let passArr = pass.split('');

        /**
         * ? Se usa la funcion que va mezclar los items
         */
        ordenAleatorio(passArr);

        /**
         * * Ejemplo de 2 formas para cortar el array
         */
        //**2 pasos, se corta el array de tamaño length igual al size**//
        /* passArr.length = sizepass.value;
        let newpass = passArr.join(''); */
        //**1 paso**//
        /**
         * ? Una vez cortado se devuelve a string, para asignar y mostrar resultado
         */
        let newpass = passArr.slice(0,sizepass.value).join('');
        password.value = newpass;
        pass = "";
    }
})

/**
 * ? Evento para copiar password al dar click en el boton "Copiar"
 */
btnCopiar.addEventListener("click", ()=>{
    console.log("copiar: ", password.value);
})