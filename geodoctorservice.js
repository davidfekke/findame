
const usdoctors = require('./geocodeddoctors.json');

const mockLatnLong = { latitude: 30.270759, longitude: -81.456372 };

const earthRadius = 6371000; //Assuming northern europe 

function toRad(x) {
    return x * Math.PI / 180;
}

function getDistance(a, b) {
    a.lat = a.lat || a.latitude || a.Latitude;
    a.long = a.long || a.longitude || a.Longitude;
    b.lat = b.lat || b.latitude || b.Latitude;
    b.long = b.long || b.longitude || b.Longitude;

    //Haversine formula
    const dLat = toRad(b.lat - a.lat);
    const dLong = toRad(b.long - a.long);

    const x = Math.pow(Math.sin(dLat / 2), 2) +
        Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) *
        Math.pow(Math.sin(dLong / 2), 2);

        const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
    return c * earthRadius;
}

const distancetodoc = usdoctors.map(doc => {
    if (doc && doc.latitude !== NaN && doc.longitude !== NaN) {
        //console.log(doc);
        const dist = getDistance(doc, mockLatnLong);
        doc.distance = getDistance(doc, mockLatnLong);
        //console.log(doc);
    } else {
        if (doc) {
            doc.distance = 300000000;
        }
    }
}) 
const sorteddoctor = distancetodoc.filter(m => { 
    if (m) {
        return m.latitude !== null
    } else {
        return false;
    }
}).sort(function (a, b) {
     return a.distance - b.distance;
});
console.log(distancetodoc.slice(0, 100));
//console.log(usdoctors.slice(0, 10));
