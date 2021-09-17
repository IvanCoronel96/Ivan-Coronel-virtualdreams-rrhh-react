function validar() {
    var error = false;
    var mensajesError = "";

    var nombre = document.getElementById("nombre").value;
    var asunto  =document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    var email = document.getElementById("email").value;

    if(nombre == ''){
        error = true;
        mensajesError+="<p>Debe escribir su nombre.</p>";
    }

    if(email.length==0){
        error = true;
        mensajesError+="<p>El campo e-mail es obligatorio</p>";
    }else{
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
            error = true;
            mensajesError+="<p>Por favor ingrese en el campo de email con formato tuemail@gmail.com</p>";
        }  
    }

    if(asunto == ''){
        error = true;
        mensajesError+="<p>El asunto esta incompleto.</p>";
    }

    if(mensaje == ''){
        error = true;
        mensajesError+="<p>Debe explicar el motivo de su contacto.</p>";
    }

    if(error){
        document.getElementById("error-datos").innerHTML=mensajesError;
        return false;
    }else{
        return true;
    }

}