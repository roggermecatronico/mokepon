const sectionInvisible2 = document.getElementById ("seleccionar-ataque")
const sectionInvisible1 = document.getElementById ("seleccionar-mascota-enemigo")
const sectionInvisible3 = document.getElementById ("reiniciar")
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonMascotaEnemigo = document.getElementById('boton-mascota-enemigo')
const botonAtaqueFuego = document.getElementById('boton-fuego')
const botonAtaqueAgua = document.getElementById('boton-agua')
const botonAtaqueTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
const spanMascotaJugador = document.getElementById("mascota-jugador")


const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
var numeroMascota

const sectionInvisible4 = document.getElementById ("seleccionar-mascota")

var numeroAleatorio

const sectionResultado = document.getElementById('resultado')
const divAtaquesDelJugado = document.getElementById('ataques-del-jugador')
const divAtaquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const spanVidaMaquina = document.getElementById("vidaMascotaEnemigo")
const spanVidaJugador = document.getElementById("vidaMiMascota")




let ataqueJugador //globales
let ataqueMaquina

let duelo
let vidasJugador=3
let vidasMaquina=3

let mokepones = []//array
let opcionDeMokepones
let contenedorTarjetas = document.getElementById('contenedor-tarjetas')

class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon("Hipodoge", './assets/hipodoge.png', 5)
// console.log(hipodoge)
let capipepo = new Mokepon("Capipepo", './assets/capipepo.png', 5)
let ratigueya = new Mokepon("Ratigueya", './assets/ratigueyaia.png', 5)

//arreglos o array
//metodo .push para agregar o empujar
// Mokepones.push(hipodoge,capipepo,ratigueya)
// console.log(Mokepones)

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
    )

capipepo.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
    )

ratigueya.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
    )

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {//esta funcion se ejecuta cuando se acaba de cargar el html
         
    sectionInvisible1.style.display = "none"
    sectionInvisible2.style.display = "none"
    sectionInvisible3.style.display = "none"

    mokepones.forEach((mokepon) => {
        //templates literarios, ` comilla invertida
        opcionDeMokepones = `<input type="radio" name="mascota" id=${mokepon.nombre} style="width: 250px;
        margin: 20px;"/>
        <label for="${mokepon.nombre}" class="tarjeta-de-mokepon">
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt="${mokepon.nombre} va aqui">
        </label>`
        contenedorTarjetas.innerHTML += opcionDeMokepones

        
        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
    })
    

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)//el listener para cuando el jugador selecciona a su mascota
    botonMascotaEnemigo.addEventListener('click', seleccionarMascotaEnemigo)//listener para seleccionar la mascota de enemigo
    //if (vidasJugador>0 && vidasMaquina>0){
               //listener para el ataque que elijamos
    botonAtaqueFuego.addEventListener('click', ataqueFuego)
    botonAtaqueAgua.addEventListener('click', ataqueAgua)
    botonAtaqueTierra.addEventListener('click', ataqueTierra)
    //}
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador() {
    //alert('SELECCIONASTE TU MASCOTA')
    //let auxMascotaMaquina
    if (inputHipodoge.checked == true) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        //auxMascotaMaquina = 0
        mostrarMascotaEnemigo()
    } else if (inputCapipepo.checked == true) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        //auxMascotaMaquina = 0
        mostrarMascotaEnemigo()
    } else if (inputRatigueya.checked == true) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        //auxMascotaMaquina = 0
        mostrarMascotaEnemigo()
    } else {
        // auxMascotaMaquina = 1
        alert('No te olvides de selecccionar tu mokepon')
    }

}

function mostrarMascotaEnemigo(){
    sectionInvisible1.style.display = "block"
    sectionInvisible1.style.display = "inline"
}

function seleccionarMascotaEnemigo() {
    //if (auxMascotaMaquina==0){
    numeroMascota = aleatorio(0, mokepones.length-1)
    spanMascotaEnemigo.innerHTML = mokepones[numeroMascota].nombre
    // spanMascotaEnemigo = mokepones[numeroMascota]

    // if (numeroMascota == 1) {
    //     spanMascotaEnemigo.innerHTML = "Hipodoge"
    // } else if (numeroMascota == 2) {
    //     spanMascotaEnemigo.innerHTML = "Capipepo"
    // } else if (numeroMascota == 3) {
    //     spanMascotaEnemigo.innerHTML = "Ratigueya"
    // }
    //}    
    sectionInvisible2.style.display = "block"   
    sectionInvisible1.style.display = "none"    
    sectionInvisible4.style.display = "none"
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueFuego(){
    ataqueJugador = "FUEGO" 
    ataqueMaquinaF()  
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueMaquinaF()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueMaquinaF()
}

function ataqueMaquinaF (){    
    numeroAleatorio = aleatorio(1,3)
    if (numeroAleatorio == 1) {
        ataqueMaquina = "FUEGO"
    } else if (numeroAleatorio == 2) {
        ataqueMaquina = "AGUA"
    } else if (numeroAleatorio == 3) {
        ataqueMaquina = "TIERRA"
    }
    //alert("La Maquina eligio "+ ataqueMaquina)
    evaluacion()   
}

function evaluacion(){
    if (ataqueJugador == ataqueMaquina ) {
        duelo = "EMPATE"
    } else if (ataqueJugador == "FUEGO" && ataqueMaquina == "TIERRA") {
        duelo = "GANASTE"
    } else if (ataqueJugador == "AGUA" && ataqueMaquina == "FUEGO") {
        duelo = "GANASTE"
    } else if (ataqueJugador == "TIERRA" && ataqueMaquina == "AGUA") {
        duelo = "GANASTE"
    } else {
        duelo = "PERDISTE"
    }
    vida()
}

function crearMensaje(){
    //creteElement para crear en HTML
    // let parrafoResultado = document.createElement('p')
    let parrafoAtaqueJugador = document.createElement('p')
    let parrafoAtaqueEnemigo = document.createElement('p')
    //inner contenido interno
    // parrafoResultado.innerHTML = ("Tu mascota ataco con " + ataqueJugador + " ,la mascota del enemigo ataco con " + ataqueMaquina+ " "+duelo)
    sectionResultado.innerHTML = (duelo)
    parrafoAtaqueJugador.innerHTML = (ataqueJugador)
    parrafoAtaqueEnemigo.innerHTML = (ataqueMaquina)
    //Metodo de manipulacion del DOM appendChild
    //Nos ayuda a agarrar elementos que ya hayamos creado en js para insertarlo en HTML
    // sectionResultado.appendChild(parrafoResultado)
    divAtaquesDelJugado.appendChild(parrafoAtaqueJugador)
    divAtaquesDelEnemigo.appendChild(parrafoAtaqueEnemigo)
}



function vida(){
    if (duelo=="GANASTE"){
        vidasMaquina = vidasMaquina-1        
    }else if (duelo=="PERDISTE"){
        vidasJugador = vidasJugador-1
    }
    spanVidaMaquina.innerHTML = vidasMaquina
    spanVidaJugador.innerHTML = vidasJugador
    crearMensaje()
    revisarVidas()
}

function revisarVidas(){
    if (vidasJugador==0){
        crearMensajeFinal("Lo siento, Perdiste")
    } else if (vidasMaquina==0){//
        crearMensajeFinal("🥳 Felicitaciones Ganaste")
    } 
}

function crearMensajeFinal(resultado){    
    //creteElement para crear en HTML
    // let parrafo = document.createElement('p')
    //inner contenido interno
    sectionResultado.innerHTML = resultado
    //Metodo de manipulacion del DOM appendChild
    //Nos ayuda a agarrar elementos que ya hayamos creado en js para insertarlo en HTML
    // sectionResultado.appendChild(sectionResultado)
    //listener para el ataque que elijamos
    botonAtaqueFuego.disabled = true    
    botonAtaqueAgua.disabled = true    
    botonAtaqueTierra.disabled = true    
    sectionInvisible3.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
    //recargar la ruta de location, la paguina
}

window.addEventListener('load', iniciarJuego)//instrucion para llamar a la clase iniciar juego cuando ya se termino de cargar el HTML
