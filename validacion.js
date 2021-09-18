function validar() {
    var error = false;
    var mensajeNombre = "";
    var mensajeEmail = "";
    var mensajeAsunto = "";
    var mensajeMensaje = "";

    var nombre = document.getElementById("nombre").value;
    var asunto  =document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    var email = document.getElementById("correo").value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let regexNombre = /^[a-z ,.'-]+$/i;

    if(nombre.length===0){
        error = true;
        mensajeNombre+="<p>Debe escribir su nombre.</p>";
    }else{
        if( !(regexNombre.test(nombre)) ){
            error = true;
            mensajeNombre+="<p>Escriba solo letras.</p>";
        }  
    }

    if(email.length===0){
        error = true;
        mensajeEmail+="<p>El campo e-mail es obligatorio.</p>";
    }else{
        if( !(regexEmail.test(email)) ){
            error = true;
            mensajeEmail+="<p>Su email debe tener formato tuemail@gmail.com</p>";
        }  
    }

    if(asunto == ''){
        error = true;
        mensajeAsunto+="<p>El asunto esta incompleto.</p>";
    }

    if(mensaje == ''){
        error = true;
        mensajeMensaje+="<p>Debe explicar el motivo de su contacto.</p>";
    }

    if(error){
        document.getElementById("error-nombre").innerHTML=mensajeNombre;
        document.getElementById("error-email").innerHTML=mensajeEmail;
        document.getElementById("error-asunto").innerHTML=mensajeAsunto;
        document.getElementById("error-mensaje").innerHTML=mensajeMensaje;
        return false;
    }else{
        return true;
    }

}