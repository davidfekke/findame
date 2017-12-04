const doctors = require('./doctor.json');

const jaxDoctors = doctors.tableData.filter(r => r.city.toUpperCase() === 'Jacksonville'.toUpperCase());

console.log(jaxDoctors.length);
