

        

function validarformulario(){
    
    const msg=document.getElementById("mensaje");
    const nombre = document.getElementById("name").value;
    const ndoc=document.getElementsByName("dni")[0].value;
    const apel = document.getElementById("lastname").value;

    if (ndoc < 10 || ndoc == null) {
        
        msg.innerHTML="Verifique el DNI ingresado";

    } else if(nombre.length < 2) {
        
        msg.innerHTML="Verifique el nombre ingresado";
    } else  {
        msg.innerHTML="Bienvenid@ " + nombre + " " + apel;

    }
      
    

}

