//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100

Registro = []

function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value()
    let errorNombre = document.getElementById("Error Nombre")

    let eEdad = document.getElementById("edad")
    let vEdad = eEdad.value()
    let errorEdad = document.getElementById("Error edad")
}

function validarcarateres(){
    if(str){
        console.log("Solo letras")
        alert("Debes ingresar solo letras")
        eError.innerText = "Debes ingresar solo letras!"
    
        return "fallo"
    }else{
        console.log("registrado")
        eError.innerText = ""
        return "ingresando"
    }
}

function validaredad(){
    if (vEdad >18){
        console.log("debes ser mayor ")
        alert("Debes ser mayo de edad ")
        eError.innerText("tienes que tener 18")

        return "fallo"
    }else{
        console.log("registrado")
        eError.innerText =""
        return "ingresando"

        
    }
    
}




