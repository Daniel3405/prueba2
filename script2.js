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
    if(elemento,valor,error){
        console.log("Solo letras")
        alert("Debes ingresar solo letras")
        eError.innerText = "Debes ingresar solo letras!"
        
        
        return "falla"
    }else{
        console.log("Todo bien")
        eError.innerText = ""
        return "exito"
    }
}


