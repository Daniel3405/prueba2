//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100

let miFormulario = []

function validar(){

    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")
    let btn = document.getElementById("enviar")
    let eEdad = document.getElementById("edad")
    let vEdad = eEdad.value
    let eErrorEdad = document.getElementById("errorEdad")
    
    let rNombre = validardatos(eNombre, vNombre, eErrorNombre)
    let rEdad = validardatos(eEdad, vEdad, eErrorEdad)
    if(rNombre === "valido" && rEdad ==="valido"){
        let regis = {
            nombre: vNombre,
            edad: vEdad
        };
        miFormulario.push(regis);
        console.log(miFormulario);
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

function validardatos( eError, val) {
    const Edad = parseInt(val);
    if (isNaN(Edad) || Edad < 18 || Edad > 100) {
        console.log("registro")
        alert("registrado ")
        errorEdad.innerText = "usuario cumple los requisitos"
        return "valido"
    }else{
        console.log("tienes que tener entre 18 - 100")
        eError.innerText = "";
        return "fallo"
    }
}

function subirDatos() {
    console.log("verificando...")
    let mapmiFormulario = miFormulario.map((regis, index) => {
        return `<tr>
            <td>${regis.nombre}</td>
            <td>${regis.edad}</td>
            <td>
                <button onclick='actualForm(${index})'>Actualizar</button>
            </td>
        </tr>`;
    });

    let cuerpoTabla = document.getElementById("cuerpoTabla");
    let strmiFormulario = mapmiFormulario.join("");
    cuerpoTabla.innerHTML = strmiFormulario

subirDatos();
console.log(miFormulario)
}
function actualForm(indice){
    let eNombre = document.getElementById("nombre")
    let eEdad = document.getElementById("edad")
    let regis = miFormulario.filter((regis,index)=>{
        if(index == indice){
            return regis
        }
    })
    console.log(regis)
    eNombre.value = regis[0].nombre
    eEdad.value = regis[0].edad
    let btnActualizar = document.getElementById("btnActualizar")
    btnActualizar.value = indice
}

function actualizar(indice){
    let eNombre = document.getElementById("nombre");
    let vNombre = eNombre.value;

    let eEdad = document.getElementById("edad");
    let vEdad = eEdad.value;

    let btnActualizar = document.getElementById("btnActualizar")
    btnActualizar.value = indice
    miFormulario = miFormulario.map((regis,index)=>{
        if(index == indice){
            return {
                nombre:vNombre,
                edad:vEdad
            }
        }else{
            return regis
        }
    })
    subirDatos()
}
