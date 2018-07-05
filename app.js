const argv = require("./config/yargs").argv;
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
const colors = require("colors");

// lugar.getLugarLatLng(argv.direccion)
//     .then(respuesta => console.log(respuesta))
//     .catch(e => console.log(e));

// clima.getClima(9.9280694, -84.0907246)
//     .then(respuesta => console.log(respuesta))
//     .catch(e => console.log(e));


let getInfo = async(direccion) => {

    try {
        let respuesta = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(respuesta.lat, respuesta.lng);

        return `El clima en ${respuesta.direccion} es ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion).then(respuesta => console.log(respuesta)).catch(e => console.log(e));


//api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=f369635965b00ad16ced5da4da4b9f3b