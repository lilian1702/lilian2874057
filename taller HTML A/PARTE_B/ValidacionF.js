var nombre= document.getElementById("nombre");
var correo= document.getElementById("email");
var error=document.getElementById("error");

//function Enviar (){
    //console.log("enviando mensaje...");

    //var mensajesError=[];

    //if(nombre.value === nul || nombre.value ===""){
        //mensajesError.push("ingresa tu nombre");

    //if(email.value === nul || email.value ===""){
        //mensajesError.push("ingresa tu email")

    //}


    //error.innerHTML=  mensajesError.join(",");


    //return false;
//}

var form= document.getElementById("formulario");
    form.addEventListener("submit",function(event){
        event.preventDefault();
        var mensajesError=[];

    if(nombre.value === nul || nombre.value ===""){
        //mensajesError.push("ingresa tu nombre");
    }

    if(email.value === nul || email.value ===""){
        //mensajesError.push("ingresa tu email")

    }


    error.innerHTML=  mensajesError.join(",");


    });




