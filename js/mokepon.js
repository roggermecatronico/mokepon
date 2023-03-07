const sectionSeleccionarAtaque = document.getElementById ("seleccionar-ataque")
const sectionInvisible1 = document.getElementById ("seleccionar-mascota-enemigo")
const sectionInvisible3 = document.getElementById ("reiniciar")
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonMascotaEnemigo = document.getElementById('boton-mascota-enemigo')

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

let botonAtaqueFuego 
let botonAtaqueAgua 
let botonAtaqueTierra






let ataqueJugador //globales
let ataqueMaquina

let duelo
let vidasJugador=3
let vidasMaquina=3

let mokepones = []//array
let opcionDeMokepones
let contenedorTarjetas = document.getElementById('contenedor-tarjetas')

let ataquesMokepon
let botonesAtaques = document.getElementById('div-botones-ataques')

let mascotaJugador
let mascotaEnemigo
let botones = []
let ataqueJugadorBotones= []
let ataqueMaquinaEnfrentar = []
let ataqueMaquinaPalabra = []

let ataquesJugador

let ganoJugador =0
let ganoMaquina =0

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")
let lienzo = mapa.getContext("2d")//obtener el lienzo para dibujar

let intervalo


class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 30
        this.ancho =60
        this.alto =60
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this. velocidadX =0
        this.velocidadY =0
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
    {nombre: '💧', id: 'boton-agua1'},
    {nombre: '💧', id: 'boton-agua2'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
    )

capipepo.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego1'},
    {nombre: '🔥', id: 'boton-fuego2'},
    {nombre: '🌱', id: 'boton-tierra'}
    )

ratigueya.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra1'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra2'}
    )

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {//esta funcion se ejecuta cuando se acaba de cargar el html
         
    sectionInvisible1.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none"
    sectionInvisible3.style.display = "none"
    sectionVerMapa.style.display = "none"

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
    
    //}
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador() {//funcion para que el jugador selecciones su mascota
    //alert('SELECCIONASTE TU MASCOTA')
    //let auxMascotaMaquina
    if (inputHipodoge.checked == true) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
        //auxMascotaMaquina = 0
        inputHipodoge.disabled = true
        inputCapipepo.disabled = true
        inputRatigueya.disabled = true

        mostrarMascotaEnemigo()
    } else if (inputCapipepo.checked == true) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
        //auxMascotaMaquina = 0
        inputHipodoge.disabled = true
        inputCapipepo.disabled = true
        inputRatigueya.disabled = true
        mostrarMascotaEnemigo()
    } else if (inputRatigueya.checked == true) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
        inputHipodoge.disabled = true
        inputCapipepo.disabled = true
        inputRatigueya.disabled = true
        //auxMascotaMaquina = 0
        mostrarMascotaEnemigo()
    } else {
        // auxMascotaMaquina = 1
        alert('No te olvides de selecccionar tu mokepon')
    }

    extraerAtaques(mascotaJugador)

}

function extraerAtaques(mascotaJugador){
    
    for (let i = 0; i < mokepones.length; i++) {
        if (mokepones[i].nombre === mascotaJugador){
            ataquesJugador = mokepones[i].ataques
        }
        
    }
    // console.log(ataquesJugador)
    mostrarAtaques(ataquesJugador)
}

function mostrarAtaques(ataquesJugador){
    ataquesJugador.forEach((ataque) => {
        ataquesMokepon= `<button id=${ataque.id} class ="boton-de-ataque BAtaque">${ataque.nombre}</button>`
        botonesAtaques.innerHTML += ataquesMokepon

    })

    botonAtaqueFuego = document.getElementById('boton-fuego')
    botonAtaqueAgua = document.getElementById('boton-agua')
    botonAtaqueTierra = document.getElementById('boton-tierra')
    //selecciona a todos los elementos que contengan algo
    //si hay elementos que se repites seleecionarlos con clase no con id
    botones = document.querySelectorAll('.BAtaque')
   
    // console.log(botones)

    secuenciaAtaque(botones)

    // botonAtaqueFuego.addEventListener('click', ataqueFuego) 
    // botonAtaqueAgua.addEventListener('click', ataqueAgua)
    // botonAtaqueTierra.addEventListener('click', ataqueTierra)
}

function secuenciaAtaque(botones){
    botones.forEach((boton)=>{
        boton.addEventListener('click', (e)=>{
            // console.log(e)
            if (e.target.textContent == '🔥'){
                ataqueJugadorBotones.push('FUEGO')
                // console.log(ataqueJugadorBotones)
                boton.disabled = true //desactivar los botones luego de pulsar
                boton.style.background = '#112f58'
            }else if(e.target.textContent == '💧'){
                ataqueJugadorBotones.push('AGUA')
                boton.disabled = true
                // console.log(ataqueJugadorBotones)
                boton.style.background = '#112f58'
            }else if(e.target.textContent == '🌱'){
                ataqueJugadorBotones.push('TIERRA')
                boton.disabled = true
                // console.log(ataqueJugadorBotones)
                boton.style.background = '#112f58'
            }
            if (ataqueJugadorBotones.length === mascotaEnemigo.ataques.length){
                ataqueMaquinaF ()
            }
        })
        
    })
    

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
    mascotaEnemigo = mokepones[numeroMascota]

    // if (numeroMascota == 1) {
    //     spanMascotaEnemigo.innerHTML = "Hipodoge"
    // } else if (numeroMascota == 2) {
    //     spanMascotaEnemigo.innerHTML = "Capipepo"
    // } else if (numeroMascota == 3) {
    //     spanMascotaEnemigo.innerHTML = "Ratigueya"
    // }
    //}    
    // sectionSeleccionarAtaque.style.display = "block"   
    sectionInvisible1.style.display = "none"    
    sectionInvisible4.style.display = "none"

    sectionVerMapa.style.display = 'flex'
    // let imagenDeCapipepo = new Image()
    // imagenDeCapipepo.src = capipepo.foto
    // lienzo.fillRect(15,45,12,69)
    intervalo = setInterval(pintarPersonaje, 50 )

    

    
    
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// function ataqueFuego(){
//     ataqueJugador = "FUEGO" 
//     ataqueMaquinaF()  
// }

// function ataqueAgua(){
//     ataqueJugador = "AGUA"
//     ataqueMaquinaF()
// }

// function ataqueTierra(){
//     ataqueJugador = "TIERRA"
//     ataqueMaquinaF()
// }

function ataqueMaquinaF (){    //seleccion aleatoria de los ataques
    
    let ataque0
    let ataque1
    let ataque2
    let ataque3
    let ataque4
    while (ataqueMaquinaEnfrentar.length < mascotaEnemigo.ataques.length) {

        numeroAleatorio = aleatorio(0,mascotaEnemigo.ataques.length-1)

        if ( ataque0 == undefined){
            ataqueMaquinaEnfrentar.push(mascotaEnemigo.ataques[numeroAleatorio])
            ataque0 = numeroAleatorio; 
            
        }else if(ataque1 == undefined && ataque0 != numeroAleatorio){
            ataqueMaquinaEnfrentar.push(mascotaEnemigo.ataques[numeroAleatorio])
            ataque1 = numeroAleatorio;
            
        }else if(ataque2 == undefined && ataque0 != numeroAleatorio && ataque1 != numeroAleatorio){
            ataqueMaquinaEnfrentar.push(mascotaEnemigo.ataques[numeroAleatorio])
            ataque2 = numeroAleatorio;
        }else if(ataque3 == undefined && ataque0 != numeroAleatorio && ataque1 != numeroAleatorio && ataque2 != numeroAleatorio){
            ataqueMaquinaEnfrentar.push(mascotaEnemigo.ataques[numeroAleatorio])
            ataque3 = numeroAleatorio;
        }else if(ataque4 == undefined && ataque0 != numeroAleatorio && ataque1 != numeroAleatorio && ataque2 != numeroAleatorio && ataque3 != numeroAleatorio){
            ataqueMaquinaEnfrentar.push(mascotaEnemigo.ataques[numeroAleatorio])
            ataque4 = numeroAleatorio; 
            // break;
            // debugger       
        }

        
    }
    transformarEmojiPalabra()
    
   

    // if (numeroAleatorio == 0 && ataque0!=1) {
    //     mascotaEnemigo.ataque[0]
    //     ataqueMaquina = "FUEGO"
    // } else if (numeroAleatorio == 2) {
    //     ataqueMaquina = "AGUA"
    // } else if (numeroAleatorio == 3) {
    //     ataqueMaquina = "TIERRA"
    // }
    //alert("La Maquina eligio "+ ataqueMaquina)
     
}

function transformarEmojiPalabra(){//funcion para transformar los ataques de mokepon para poder comparar
    ataqueMaquinaEnfrentar.forEach((elemento) => {
        if (elemento.nombre == '🔥'){
            ataqueMaquinaPalabra.push('FUEGO')
            // console.log(ataqueJugadorBotones)
        }else if(elemento.nombre == '💧'){
            ataqueMaquinaPalabra.push('AGUA')
        }else if(elemento.nombre == '🌱'){
            ataqueMaquinaPalabra.push('TIERRA')        
        }

    })
    evaluacion()

}

function evaluacion(){

    for(let i =0 ; i<ataqueJugadorBotones.length;i++){
        if (ataqueJugadorBotones[i] == ataqueMaquinaPalabra[i]) {
            duelo = "EMPATE"
            // console.log(duelo)
        } else if (ataqueJugadorBotones[i] == "FUEGO" && ataqueMaquinaPalabra[i] == "TIERRA") {
            duelo = "GANASTE"
            ganoJugador += 1 
        } else if (ataqueJugadorBotones[i] == "AGUA" && ataqueMaquinaPalabra[i] == "FUEGO") {
            duelo = "GANASTE"
            ganoJugador += 1 
        } else if (ataqueJugadorBotones[i] == "TIERRA" && ataqueMaquinaPalabra[i] == "AGUA") {
            duelo = "GANASTE"
            ganoJugador += 1 
        } else {
            duelo = "PERDISTE"
            ganoMaquina += 1
        }
    }
    vida()
}

function crearMensaje(){
    //creteElement para crear en HTML
    // let parrafoResultado = document.createElement('p')
    
    //inner contenido interno
    // parrafoResultado.innerHTML = ("Tu mascota ataco con " + ataqueJugador + " ,la mascota del enemigo ataco con " + ataqueMaquina+ " "+duelo)
    sectionResultado.innerHTML = (duelo)

    for(let i =0 ; i<ataqueJugadorBotones.length;i++){
    let parrafoAtaqueJugador = document.createElement('p')
    let parrafoAtaqueEnemigo = document.createElement('p')
    parrafoAtaqueJugador.innerHTML = (ataqueJugadorBotones[i])
    parrafoAtaqueEnemigo.innerHTML = (ataqueMaquinaPalabra[i])
    //Metodo de manipulacion del DOM appendChild
    //Nos ayuda a agarrar elementos que ya hayamos creado en js para insertarlo en HTML
    // sectionResultado.appendChild(parrafoResultado)
    divAtaquesDelJugado.appendChild(parrafoAtaqueJugador)
    divAtaquesDelEnemigo.appendChild(parrafoAtaqueEnemigo)
    }
}



function vida(){

    if (ganoJugador == ganoMaquina) {
        duelo = "EMPATE"
    } else if (ganoJugador > ganoMaquina ) {
        duelo = "GANASTE"
    } else if (ganoJugador < ganoMaquina) {
        duelo = "PERDISTE"
    }
    
    // if (duelo=="GANASTE"){
    //     vidasMaquina = vidasMaquina-1        
    // }else if (duelo=="PERDISTE"){
    //     vidasJugador = vidasJugador-1
    // }
    spanVidaMaquina.innerHTML = ganoMaquina
    spanVidaJugador.innerHTML = ganoJugador
    crearMensaje()
    revisarVidas(duelo)
}

function revisarVidas(){
    if (duelo == "EMPATE"){
        crearMensajeFinal("Empate")
    } else if (duelo == "GANASTE"){//
        crearMensajeFinal("🥳 Felicitaciones Ganaste")
    } else if (duelo = "PERDISTE"){//
        crearMensajeFinal("sorry perdiste")
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
    // botonAtaqueFuego.disabled = true    //desactivar el boton
    // botonAtaqueAgua.disabled = true    
    // botonAtaqueTierra.disabled = true    
    sectionInvisible3.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
    //recargar la ruta de location, la paguina
}

function pintarPersonaje(){

    capipepo.x = capipepo.x + capipepo.velocidadX
    capipepo.y = capipepo.y + capipepo.velocidadY

    lienzo.clearRect(0,0,mapa.width, mapa.height)
    lienzo.drawImage(
        capipepo.mapaFoto,
        capipepo.x,
        capipepo.y,
        capipepo.ancho,
        capipepo.alto

    )
    
}

function moverDerecha(){
    capipepo.velocidadX = 5

}

function moverAbajo(){
    capipepo.velocidadY = 5

}
function moverIzquierda(){
    capipepo.velocidadX = -5

}

function moverArriba(){
    capipepo.velocidadY = -5

}

function detenerMovimiento(){
    capipepo.velocidadX = 0
    capipepo.velocidadY = 0

}

window.addEventListener('load', iniciarJuego)//instrucion para llamar a la clase iniciar juego cuando ya se termino de cargar el HTML
