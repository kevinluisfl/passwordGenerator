

let pass = "";
let mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let minus = "abcdefghijklmnopqrstuvwxyz";
let characts = "!#$%&/()=?¡|@^_-+*}{][<>.,:;";
let numbers = "1234567890";

let checkMayus = document.getElementById("mayus");
let checkMinus = document.getElementById("minus");
let checkNumber = document.getElementById("number");
let checkCharact = document.getElementById("simbol");

let sizepass = document.getElementById("sizepass");

checkMayus.addEventListener("change",()=>{
    // let isCheckedMa = checkMayus.checked;
    // let check = checkMayus.spellcheck;
    // console.log(checkMayus.toggleAttribute("checked"));
    let check = checkMayus.toggleAttribute("checked");
    console.log(check);
    if(check) {
        pass += mayus;
    }else{
        pass = "";
    }
    console.log(pass);
})

checkMinus.addEventListener("change",()=>{
    let isChecked = checkMinus.checked;
    if(isChecked){
        pass += minus;
    }
    console.log(pass);
})

checkMayus.addEventListener("change",()=>{
    let isChecked = checkMayus.checked;
    if(isChecked){
        pass += mayus;
    }
    console.log(pass);
})

checkNumber.addEventListener("change",()=>{
    let isChecked = checkNumber.checked;
    if(isChecked){
        pass += numbers;
    }
    console.log(pass);
})

checkCharact.addEventListener("change",()=>{
    let isChecked = checkCharact.checked;
    if(isChecked){
        pass += characts;
    }
    console.log(pass);
})

