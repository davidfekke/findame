const doctors = require('./doctor.json');
const NodeGeocoder = require('node-geocoder');
<<<<<<< HEAD

const options = {
 provider: 'google',

 // Optional depending on the providers
 httpAdapter: 'https', // Default
 apiKey: 'API_KEY', // for Mapquest, OpenCage, Google Premier
 formatter: null         // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

async function getDoctorLatLong(doctors) {
    let doctorlatlong = [];    
    const jaxDoctors = doctors.tableData.filter(r => r.city.toUpperCase() === 'Jacksonville'.toUpperCase());
    for (let doctor of jaxDoctors) {
        //console.log(doctor);
        try {
            const geo = await geocoder.geocode(doctor.fullAddress);
            doctor.latitude = geo[0].latitude;
            doctor.longitude = geo[0].longitude
            doctorlatlong.push(doctor);
        } catch (err) {
            doctorlatlong.push(doctor);
        }
    }
    return doctorlatlong;
}

const doctorLatLong = getDoctorLatLong(doctors);

console.log(doctorLatLong);
=======
const fs = require('fs');
const promisify = require('util').promisify;
const writeFileAsync = promisify(fs.writeFile);

let geoDoctors = [];
const options = {
    provider: 'google',
    httpAdapter: 'https', 
    apiKey: 'AIzaSyBV9EuRsK_Eg7rzF-zA4ARVrNyPsfKOV_s', // AIzaSyAjLzvn8sFNP3OzyKtcQ_L3mvhSlHU1JEU 
    formatter: null         // 'gpx', 'string', ...
};


const geocoder = NodeGeocoder(options);
// const jaxDoctors = doctors.tableData.filter(r => r.city.toUpperCase() === 'Jacksonville'.toUpperCase());
const jaxDoctors = doctors.tableData; // .filter(r => r.city.toUpperCase() === 'Jacksonville'.toUpperCase());

const requests = jaxDoctors.map(doctor => { 
    return geocoder.geocode(doctor.fullAddress)
        .then(geo => {
            doctor.latitude = geo[0].latitude;
            doctor.longitude = geo[0].longitude;
            return doctor;
        }).catch(err => console.error(err));
});

Promise.all(requests).then(res => { 
    geoDoctors.push(...res);
    fs.writeFile('./doctorlatnlong.json', JSON.stringify(geoDoctors), (err, result) => {
        if (err) console.error(err);
        console.log(result);
    });
    //console.log(geoDoctors);
});
//console.log(jaxDoctors);
>>>>>>> origin/master
