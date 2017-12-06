
const usdoctors = require('./usdoctors.json');
const fs = require('fs');
//let geocodeddoctors = [];
fs.readFile('./udoctors_geocodio_0836a6db8b8738874024a02ca533573e57848b17.csv', { encoding: 'UTF-8' }, (err, data) => {
    if (err) console.error(err);
    const csv = data.split('\n');
    const headers = csv.shift();
    const doctorlist = csv.map(item => {
        const line = item.split(',');
        
        let doc = usdoctors.filter(i => i.cloaId.toString() === line[0]);
        if (doc[0]) {
            doc[0].latitude = line[6];
            doc[0].longitude = line[7];
        }
        return doc[0];    
    });
    fs.writeFile('./geocodeddoctors.json', JSON.stringify(doctorlist));
});
