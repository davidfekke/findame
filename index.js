const doctors = require('./doctor.json');
const NodeGeocoder = require('node-geocoder');

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
