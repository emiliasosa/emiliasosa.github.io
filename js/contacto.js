const divError = document.getElementById("form__error")
const divCorrecto = document.getElementById("datos")
const contactForm = document.getElementById("form")


contactForm.onsubmit = (e)=>{
    e.preventDefault()

    let nombre = e.target.nombre.value
    let email = e.target.email.value
    let asunto = e.target.asunto.value
    let mensaje = e.target.mensaje.value

    console.log(nombre, email, asunto, mensaje)

    if(nombre == "" || email  == "" || asunto == "" || mensaje == ""){
        divError.innerHTML = `
        <div>
            <p class="error">No ingresaste correctamente los datos</p>
        </div>`
    }else{
        mensajeAgradecimiento.style.visibility = 'visible'
        divCorrecto.innerHTML = `
        <div >
            <p class="correcto">Gracias por contactarte!</p>
        </div>`
        e.target.submit()
        setTimeout(()=>{location.href = "index.html";},600)
    }
 
}

const mensajeAgradecimiento = document.getElementById("form__datosCorrecto")
mensajeAgradecimiento.addEventListener('click', ()=>{
    location.href = "index.html";
})