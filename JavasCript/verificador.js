const nombre = document.getElementById("nombre");
const apellido  = document.getElementById("apellido");
const telefono= document.getElementById("telefono");
const form = document.getElementById("form");
const mail = document.getElementById("correo");
const alerta = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    alerta.innerHTML = "";
    if(nombre.value.length <4){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(apellido.value.length <6){
        warnings += `El apellido no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(mail.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(telefono.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        alerta.innerHTML = warnings
    }else{
        alerta.innerHTML = "Enviado"
    }
})