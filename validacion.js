function validar() {
    var error=false;
    var mensajesError="";

    var nombre = document.getElementById("nombre").value;
    var asunto  =document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    if(nombre==''){
        error=true;
        mensajesError+="<p>Debe escribir su nombre.</p>";
    }

    if(asunto==''){
        error=true;
        mensajesError+="<p>El asunto esta incompleto.</p>";
    }

    if(mensaje==''){
        error=true;
        mensajesError+="<p>Debe explicar el motivo de su contacto.</p>";
    }

    if(error){
        document.getElementById("error-datos").innerHTML=mensajesError;
        return false;
    }else{
        return true;
    }

}