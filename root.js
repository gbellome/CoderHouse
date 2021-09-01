// Root Page

function ocultarVistas(vistaActual, vistaAMostrar) {
    if (vistaActual == 'all') { 
        let sections = document.getElementsByTagName('section')
        for (const section of sections) {
            section.className = 'hidden'
        }
     }
    else { document.getElementById(vistaActual).className = 'hidden' }
    document.getElementById(vistaAMostrar).className = '';
}

document.getElementById('btnEncender').addEventListener('click', () => {
    ocultarVistas('start', 'home')
})
document.getElementById('btnIngresar').addEventListener('click', () => {
    ocultarVistas('home', 'users')
})
document.getElementById('btnDuchaRapida').addEventListener('click', () => {
    ocultarVistas('home', 'principal');
    ducha.procedimientoCompleto()
    initTimer()
    document.getElementById('lblUser').getElementsByTagName('label')[0].innerText = 'Incognito';
})
document.getElementById('btnRegistros').addEventListener('click', () => {
    ocultarVistas('home', 'register')
})
document.getElementById('backUsers').addEventListener('click', () => {
    ocultarVistas('users', 'home')
})
document.getElementById('backRegister').addEventListener('click', () => {
    ocultarVistas('register', 'home')
})
document.getElementById('backPrincipal').addEventListener('click', () => {
    ocultarVistas('principal', 'home')
})
document.getElementById('btnHelp').addEventListener('click', () => {
    ocultarVistas('all', 'help')
})
document.getElementById('btnApagar').addEventListener('click', () => {
    ocultarVistas('home', 'start')
})