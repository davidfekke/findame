
const usdoctors = require('./usdoctors.json');
const fs = require('fs');

let feed = 'id,name,address,zip_code,city,state\n';
const doctors = usdoctors.map(doc => {
    let line = '';
    line += doc.cloaId + ',';
    
    line += doc.fullName + ',';
    line += doc.addressline1.replace(',', '') + ',';
    line += doc.postalCode + ',';
    line += doc.city + ',';
    line += doc.state;
    return line;
}).join('\n');

fs.writeFile('./udoctors.csv', feed+doctors, (err, results) => {
    if (err) console.error(err);
});
