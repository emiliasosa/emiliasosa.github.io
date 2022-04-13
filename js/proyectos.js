
let proyectosMostrar1 = document.getElementById('proyecto--1')
proyectosMostrar1.addEventListener('mouseover', ()=>{mostrarDescripcionProyecto('proyecto--1--mostrar', 'translateY(0rem)')})
proyectosMostrar1.addEventListener('mouseout', ()=>{mostrarDescripcionProyecto('proyecto--1--mostrar', 'translateY(20rem)')})

let proyectosMostrar2 = document.getElementById('proyecto--2')
proyectosMostrar2.addEventListener('mouseover', ()=>{mostrarDescripcionProyecto('proyecto--2--mostrar', 'translateY(0rem)')})
proyectosMostrar2.addEventListener('mouseout', ()=>{mostrarDescripcionProyecto('proyecto--2--mostrar', 'translateY(20rem)')})

let proyectosMostrar3 = document.getElementById('proyecto--3')
proyectosMostrar3.addEventListener('mouseover', ()=>{mostrarDescripcionProyecto('proyecto--3--mostrar', 'translateY(0rem)')})
proyectosMostrar3.addEventListener('mouseout', ()=>{mostrarDescripcionProyecto('proyecto--3--mostrar', 'translateY(20rem)')})

let proyectosMostrar4 = document.getElementById('proyecto--4')
proyectosMostrar4.addEventListener('mouseover', ()=>{mostrarDescripcionProyecto('proyecto--4--mostrar', 'translateY(0rem)')})
proyectosMostrar4.addEventListener('mouseout', ()=>{mostrarDescripcionProyecto('proyecto--4--mostrar', 'translateY(20rem)')})

let proyectosMostrar5 = document.getElementById('proyecto--5')
proyectosMostrar5.addEventListener('mouseover', ()=>{mostrarDescripcionProyecto('proyecto--5--mostrar', 'translateY(0rem)')})
proyectosMostrar5.addEventListener('mouseout', ()=>{mostrarDescripcionProyecto('proyecto--5--mostrar', 'translateY(20rem)')})

let proyectosMostrar6 = document.getElementById('proyecto--6')
proyectosMostrar6.addEventListener('mouseover', ()=>{mostrarDescripcionProyecto('proyecto--6--mostrar', 'translateY(0rem)')})
proyectosMostrar6.addEventListener('mouseout', ()=>{mostrarDescripcionProyecto('proyecto--6--mostrar', 'translateY(20rem)')})

let proyectosMostrar7 = document.getElementById('proyecto--7')
proyectosMostrar7.addEventListener('mouseover', ()=>{mostrarDescripcionProyecto('proyecto--7--mostrar', 'translateY(0rem)')})
proyectosMostrar7.addEventListener('mouseout', ()=>{mostrarDescripcionProyecto('proyecto--7--mostrar', 'translateY(20rem)')})

let mostrarDescripcionProyecto = (div, translate)=>{
    let descripcion = document.getElementById(div)
    
    descripcion.style.transform = translate
    descripcion.style.transition = '1s'
}

let mostrarUnProyecto = (video)=>{
    let mostrar = document.getElementById('main__mostrarUnProyecto')
    mostrar.style.visibility = 'visible'
    console.log(video)

    mostrar.innerHTML = `
    <div class="contenedor__unproyecto">
    <video src="${video}" width="1080" height="720" autoplay></video>
    </div>`
}

let eliminarVideo = document.getElementById('main__mostrarUnProyecto')
eliminarVideo.addEventListener('click', ()=>{
    let mostrar = document.getElementById('main__mostrarUnProyecto')
    mostrar.style.visibility = 'hidden'
})