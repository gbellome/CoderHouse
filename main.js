// PROYECTO FINAL

// Descripcion del proyecto
/*
    Va a ser una aplicacion web, destinada a manejar la temperatura de una ducha. 

    Se podrá setear la temperatura deseada.
    Tambien se guardará un registro de las temp utilizadas por el usuario, asi cuando se tenga una buena muestra poder predecir la temp deseada.

    En una pequeña distribucion de pantallas, se accedera a traves de un menú principal a estas 3 opciones:
        Ducha segun un usuario
        Ducha rapida ( como una version incognito )
        Registros

    En la pantalla de operación, se visualizará los siguientes datos:
        Temperatura del agua Fria
        Temperatura del agua Caliente
        Usuario activo
        Temperatura de salida
        Duracion de la ducha actual
        Tiempo estimado de temperatura constante
        Hora actual

    Y los botones de acciones serian los siguientes:
        Subir Temperatura
        Bajar Temperatura

    En un instante cero, el usuario deberá ingresar la temp deseada y apretar cualquier boton de modificacion 

    ** Para obtener un comportamiento "REAL", se crearán funciones que vayan enfriando el agua asi vemos como se autoajusta el valor de salida
    ** Se predecirá el tiempo en que el agua se mantendrá a la temperatura deseada, teniendo en cuenta este valor decreciente con el tiempo
*/

// Init
const USERS = new Users()
USERS.initUsersStorage()
const ducha = new DuchaAutomatica(1, 4, 55)
ducha.initTemp()