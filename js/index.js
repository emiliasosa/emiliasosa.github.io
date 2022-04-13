let portfolioLetras = (letra, color, escalaPosicion)=>{
    letra.style.transform = escalaPosicion
    letra.style.color = color
    letra.style.transition = '0.5s'

    setTimeout(()=>{
        letra.style.transform = 'scale(1)'
        letra.style.color = 'transparent'
        letra.style.transition = '0.5s'
    }, 800);
}

let letra1 = document.getElementById("ttl--1")
let letra2 = document.getElementById("ttl--2")
let letra3 = document.getElementById("ttl--3")
let letra4 = document.getElementById("ttl--4")
let letra5 = document.getElementById("ttl--5")
let letra6 = document.getElementById("ttl--6")
let letra7 = document.getElementById("ttl--7")
let letra8 = document.getElementById("ttl--8")
let letra9 = document.getElementById("ttl--9")

letra1.addEventListener('mouseover', ()=>{portfolioLetras(letra1, '#f4e25d', 'scale(1.1) translateX(1rem)')})
letra2.addEventListener('mouseover', ()=>{portfolioLetras(letra2, '#fff', 'scale(1.1) translateX(-0.3rem)  translateY(-0.3rem)')})
letra3.addEventListener('mouseover', ()=>{portfolioLetras(letra3, '#fe9180', 'scale(1.1) translateX(-1rem) translateY(1rem)')})
letra4.addEventListener('mouseover', ()=>{portfolioLetras(letra4, '#fe9180', 'scale(1.3)')})
letra5.addEventListener('mouseover', ()=>{portfolioLetras(letra5, '#f4e25d', 'scale(1.1) translateX(0.5rem) translateY(0.3rem)')})
letra6.addEventListener('mouseover', ()=>{portfolioLetras(letra6, '#fff', 'scale(1.1) translateX(1rem) translateY(1rem)')})
letra7.addEventListener('mouseover', ()=>{portfolioLetras(letra7, '#fff', 'scale(1.1) translateX(0.2rem) translateY(-0.2rem)')})
letra8.addEventListener('mouseover', ()=>{portfolioLetras(letra8, '#f4e25d', 'scale(1.1) translateX(-1rem) translateY(0.5rem)')})
letra9.addEventListener('mouseover', ()=>{portfolioLetras(letra9, '#fe9180', 'scale(1.1) translateX(-0.8rem) translateY(-0.8rem)')})


let ilustracion = document.getElementById("main__ilustracion__img")
ilustracion.addEventListener('mouseover', ()=>{mostrarDescripcion('3.5vh', 'visible')})
ilustracion.addEventListener('mouseout', ()=>{mostrarDescripcion('0vh', 'hidden')})


let mostrarDescripcion = (posicion, visibilidad) =>{
    let contenedor = document.getElementById('main__ilustracion__descripcion')
    let texto =  document.getElementById('descripcion__ilustracion')

    contenedor.style.height = posicion
    texto.style.visibility = visibilidad
}



let hiddenSaludo = ()=>{
    let clickSaludo = document.getElementById('body__saludo')
    let botonSaludo = document.getElementById('saludo__circulo')

    botonSaludo.style.visibility = 'hidden'
    clickSaludo.style.visibility = 'hidden'
}


setTimeout(()=>{
    hiddenSaludo()
}, 3500);


