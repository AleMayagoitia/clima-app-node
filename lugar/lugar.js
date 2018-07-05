const axios = require("axios");


const getLugarLatLng = async(direccion) => {


    let encodedURL = encodeURI(direccion);

    // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    //     .then(respuesta => {
    //         //console.log(JSON.stringify(respuesta.data, undefined, 2));

    //         let location = respuesta.data.results[0].formatted_address;
    //         let lat = respuesta.data.results[0].geometry.location.lat;
    //         let lon = respuesta.data.results[0].geometry.location.lng;
    //         console.log(location, "\n LAT ", lat, "\n LNG ", lon);
    //     })
    //     .catch(e => console.log("¡¡ERROR!! : ", e));

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (respuesta.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    //console.log(JSON.stringify(respuesta.data, undefined, 2));

    let location = respuesta.data.results[0].formatted_address;
    let lat = respuesta.data.results[0].geometry.location.lat;
    let lon = respuesta.data.results[0].geometry.location.lng;

    return {
        direccion: location,
        lat: lat,
        lng: lon
    }

}

module.exports = {
    getLugarLatLng
}