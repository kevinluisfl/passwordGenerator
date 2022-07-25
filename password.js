

let pass = "";
let mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let minus = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let characts = "!#$%&/()=?¡|@^_-+*}{][<>.,:;";

let password = document.getElementById("password");

let checkMayus = document.getElementById("mayus");
let checkMinus = document.getElementById("minus");
let checkNumber = document.getElementById("number");
let checkCharact = document.getElementById("simbol");

let sizepass = document.getElementById("sizepass");

let btnGenerar = document.getElementById("generar");

btnGenerar.addEventListener("click",()=>{
    // let isCheckedMa = checkMayus.checked;
    if(sizepass.value < 6){
        alert("minimo 6 caracteres para la password")
    }else if (sizepass.value > 30){
        alert("maximo 30 caracteres para la password")
    }

    if(checkMayus.checked) pass += mayus;
    if(checkMinus.checked) pass += minus;
    if(checkNumber.checked) pass += numbers;
    if(checkCharact.checked) pass += characts;
    console.log(sizepass.value);
    console.log(pass);

    console.log(pass.split(''));
    let passArr = pass.split('');

    function ordenAleatorio(arr){
        for(let i =arr.length-1 ; i>0 ;i--){
            let j = Math.floor( Math.random() * (i + 1) ); //random index
            [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
        }
    }
    ordenAleatorio(passArr);
    passArr.length = sizepass.value;
    let newpass = passArr.join('');
    console.log(newpass);
    password.value = newpass;
    pass = "";
})




