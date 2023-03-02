let ataqueJugador //globales
let ataqueMaquina

let duelo
let vidasJugador=3
let vidasMaquina=3


function iniciarJuego() {//esta funcion se ejecuta cuando se acaba de cargar el html
     
    let sectionInvisible1 = document.getElementById ("seleccionar-mascotaenemigo")
    sectionInvisible1.style.display = "none"
    let sectionInvisible2 = document.getElementById ("seleccionar-ataque")
    sectionInvisible2.style.display = "none"
    let sectionInvisible3 = document.getElementById ("reiniciar")
    sectionInvisible3.style.display = "none"
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)//el listener para cuando el jugador selecciona a su mascota

    let botonMascotaEnemigo = document.getElementById('boton-mascota-enemigo')
    botonMascotaEnemigo.addEventListener('click', seleccionarMascotaEnemigo)//listener para seleccionar la mascota de enemigo

    //if (vidasJugador>0 && vidasMaquina>0){
    let botonAtaqueFuego = document.getElementById('boton-fuego')           //listener para el ataque que elijamos
    botonAtaqueFuego.addEventListener('click', ataqueFuego)
    let botonAtaqueAgua = document.getElementById('boton-agua')
    botonAtaqueAgua.addEventListener('click', ataqueAgua)
    let botonAtaqueTierra = document.getElementById('boton-tierra')
    botonAtaqueTierra.addEventListener('click', ataqueTierra)
    //}
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador() {
    //alert('SELECCIONASTE TU MASCOTA')
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    //let auxMascotaMaquina


    if (inputHipodoge.checked == true) {
        spanMascotaJugador.innerHTML = "Hipodoge"
        //auxMascotaMaquina = 0
        mostrarMascotaEnemigo()
    } else if (inputCapipepo.checked == true) {
        spanMascotaJugador.innerHTML = "Capipepo"
        //auxMascotaMaquina = 0
        mostrarMascotaEnemigo()
    } else if (inputRatigueya.checked == true) {
        spanMascotaJugador.innerHTML = "Ratigueya"
        //auxMascotaMaquina = 0
        mostrarMascotaEnemigo()
    } else {
        // auxMascotaMaquina = 1
        alert('No te olvides de selecccionar tu mokepon')
    }

}
function mostrarMascotaEnemigo(){
    let sectionInvisible1 = document.getElementById ("seleccionar-mascotaenemigo")
        sectionInvisible1.style.display = "block"
        sectionInvisible1.style,display = "inline"
}

function seleccionarMascotaEnemigo() {
    //if (auxMascotaMaquina==0){
        
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    let numeroMascota
    numeroMascota = aleatorio(1, 3)
    if (numeroMascota == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (numeroMascota == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else if (numeroMascota == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
    //}

    let sectionInvisible2 = document.getElementById ("seleccionar-ataque")
    sectionInvisible2.style.display = "block"

    let sectionInvisible1 = document.getElementById ("seleccionar-mascotaenemigo")
    sectionInvisible1.style.display = "none"
    
    let sectionInvisible4 = document.getElementById ("seleccionar-mascota")
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
    let numeroAleatorio
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

function crearMensaje(){
    let sectionMensajes = document.getElementById('mensajes')
    //creteElement para crear en HTML
    let parrafo = document.createElement('p')
    //inner contenido interno
    parrafo.innerHTML = ("Tu mascota ataco con " + ataqueJugador + " ,la mascota del enemigo ataco con " + ataqueMaquina+ " "+duelo)
    //Metodo de manipulacion del DOM appendChild
    //Nos ayuda a agarrar elementos que ya hayamos creado en js para insertarlo en HTML
    sectionMensajes.appendChild(parrafo)
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

function vida(){

    let spanVidaMaquina = document.getElementById("vidaMiMascota")
    let spanVidaJugador = document.getElementById("vidaMascotaEnemigo")

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
    let sectionFinal = document.getElementById('final')
    //creteElement para crear en HTML
    let parrafo = document.createElement('p')
    //inner contenido interno
    parrafo.innerHTML = resultado
    //Metodo de manipulacion del DOM appendChild
    //Nos ayuda a agarrar elementos que ya hayamos creado en js para insertarlo en HTML
    sectionFinal.appendChild(parrafo)

    let botonAtaqueFuego = document.getElementById('boton-fuego')           //listener para el ataque que elijamos
    botonAtaqueFuego.disabled = true
    let botonAtaqueAgua = document.getElementById('boton-agua')
    botonAtaqueAgua.disabled = true
    let botonAtaqueTierra = document.getElementById('boton-tierra')
    botonAtaqueTierra.disabled = true

    let sectionInvisible3 = document.getElementById ("reiniciar")
    sectionInvisible3.style.display = "block"
}
function reiniciarJuego(){
    location.reload()
    //recargar la ruta de location, la paguina
}

window.addEventListener('load', iniciarJuego)//instrucion para llamar a la clase iniciar juego cuando ya se termino de cargar el HTML
