// Definicion de clases

class DuchaAutomatica {

    constructor(Id, Fria, Caliente) {
        this.id = Id;
        this.fria = Fria;
        this.caliente = Caliente;
    }

    pedirTemperaturaDeseada() {
        const DatoIngresado = parseInt(prompt('Ingrese la temperatura deseada por favor \n[Debe ser mayor a ' + this.fria + ' y menor a ' + this.caliente + ']'));

        if (isNaN(DatoIngresado) || DatoIngresado < this.fria || DatoIngresado > this.caliente) {
            this.pedirTemperaturaDeseada()
        } else {
            this.deseada = DatoIngresado;
            document.getElementById('resume').getElementsByTagName('label')[0].innerText = `${DatoIngresado} °C`
        }
    }
    obtenerTemperaturaActual() {
        this.deseada = (document.getElementById('resume').getElementsByTagName('label')[0].innerText).split(' ')[0];
        return this.deseada
    }
    calcularPorcentaje() {
        this.porcentaje = parseFloat(((this.deseada - this.fria) / (this.caliente - this.fria)) * 100)
    }
    mostrarPorcentajes() {
        console.log('Tengo que abrir la caliente un ' + this.porcentaje.toFixed(2) + '%');
        console.log('Y tengo que abrir la fria un ' + (100 - this.porcentaje.toFixed(2)) + '%');
        console.log(' '); // Espacio en blanco para mejorar la legibilidad en la consola
        document.getElementById('Hot').innerText = this.porcentaje.toFixed(2) + '%';
        document.getElementById('Cold').innerText = (100 - this.porcentaje.toFixed(2)) + '%';
    }
    procedimientoCompleto() {
        this.pedirTemperaturaDeseada()
        this.calcularPorcentaje()
        this.mostrarPorcentajes()
    }
    procedimientoParcial() {
        this.obtenerTemperaturaActual()
        this.calcularPorcentaje()
        this.mostrarPorcentajes()
    }
    initTemp() {
        document.getElementById('lblCold').getElementsByTagName('label')[0].innerText = `${this.fria}°C`;
        document.getElementById('lblHot').getElementsByTagName('label')[0].innerText = `${this.caliente}°C`;
    }
}

class Users {
    
    initUsersStorage() {
        if (!this.getUsersStorage('User 1')) {
            for (let u = 1; u < 8; u++) {
                this.setUsersStorage(('User ' + u), JSON.stringify([]))
            }
        }
    }
    getUsersStorage(user) {
        return JSON.parse(localStorage.getItem(user))
    }
    getUsersActive() {
        return sessionStorage.getItem('Active')
    }
    getRegisterStorage(user) {
        return JSON.parse(localStorage.getItem(user))
    }
    setUsersStorage(user, array_user) {
        localStorage.setItem(user, array_user)
    }
    setActiveUser(user) {
        sessionStorage.setItem('Active', user)
    }
    setRegisterStorage() {
        const Registros = {
            fria: ducha.fria,
            caliente: ducha.caliente,
            deseada: parseInt(ducha.obtenerTemperaturaActual())
        }
        let register = this.getUsersStorage(this.getUsersActive());
        if (register.length == 5) { register.shift() }
        register.push(Registros)
        localStorage.setItem(this.getUsersActive(), JSON.stringify(register))
        console.log('Registro guardado!')
    }
}