//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100

miFormulario = []

function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")

    let eEdad = document.getElementById("edad")
    let vEdad = eEdad.value
    let eErrorEdad = document.getElementById("erroredad")
    
    let rNombre = validardatos(eNombre, vNombre,eErrorNombre)
    let rEdad = validaredad(eEdad, vEdad, eErrorEdad)
    if(rNombre === "valido" && rEdad ==="valido"){
        let regis = {
            nombre: vNombre,
            edad: vEdad
        };
        miFormulario.push(regis);
        console.log(Registro);
        eNombre.value="";
        eEdad.value="";
        subirDatos();
    }
}

function validardatos(val,eError){
    const Letras = /^[A-Za-z]+$/;
    if (val.length > 0 && !Letras.test(val)) {
        console.log("son solo letras")
        alert("Debes ingresar solo letras")
        eError.innerText = "Debes ingresar solo letras!"

        return "error"
    }else{
        console.log("registrado")
        eError.innerText = ""
        return "valido"
    }
}

function validaredad(){
    if (vEdad || vEdad <= 18 || vEdad > 100) {
        console.log("debes tener entre 18 y 100")
        alert("Debes tener la edad pedida (18-100) ")
        eErrorEdad.innerText = "Tienes que tener al menos 18 años o menos de 100"
        return "fallo"
    }else{
        console.log("registrado")
        eError.innerText = "";
        return "valido"
    }
}
