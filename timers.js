// Timers

let timerDuracion = false

window.setInterval(() => {
    let horaActual = new Date();
    document.getElementById('relojActual').innerText = `${("0" + horaActual.getHours()).slice(-2)}:${("0" + horaActual.getMinutes()).slice(-2)}:${("0" + horaActual.getSeconds()).slice(-2)}`;
}, 1000)

function initTimer() {
    let horaInicio = new Date()
    const MILLISECONDS_OF_A_SECOND = 1000,
        MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60,
        MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    if (timerDuracion) { clearInterval(timerDuracion) }
    timerDuracion = window.setInterval(() => {
        let horaActual = new Date(),
            diferencia = horaActual - horaInicio,
            minutos = Math.floor((diferencia % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE),
            segundos = Math.floor((diferencia % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND)
        document.getElementById('relojDuracion').innerText = `${("0" + minutos).slice(-2)}:${("0" + segundos).slice(-2)}`;
    }, 1000)
}

function initTimeOut(USERS) {
    window.setTimeout(() => {
        USERS.setRegisterStorage()
    }, 5000)
}