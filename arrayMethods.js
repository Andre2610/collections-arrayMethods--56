// filter
// find
// map

const array = [11, 65, 10, 63, 47, 73, 2, 6, 87];

const numbersBiggerThan25 = array.filter((eachIndex) => {
  const biggerThan25 = eachIndex > 100;
  //   console.log(biggerThan25);
  return biggerThan25;
});

// console.log('Bigger than 25', numbersBiggerThan25);
// number bigger than 25
// true or false
const patients = require('./patients');

// console.log('patients', patients);

const femalePatients = patients.filter((patient) => {
  //   console.log('each patient', patient);
  //   if (patient.gender === 'f') {
  //     return true;
  //   } else {
  //     return false;
  //   }

  //   return patient.gender === 'f' ? true : false;

  return patient.gender === 'f';
});

// console.log('female patients filter', femalePatients);
const patientById = patients.find((patient) => {
  // 2418
  console.log('Each patient before it finds the target');
  return patient.firstName === 'Hasheem';
});

const patientByName = patients.filter((patient) => {
  console.log('Each patient in the filter');
  console.log(patient.firstName === 'Hasheem');
  return patient.firstName === 'Hasheem';
});

// console.log('patient by id', patientByName);
// .map

const updatedPatientList = patients.map((patient) => {
  //   console.log('patient in the map', patient);
  if (patient.id === 2402) {
    return { ...patient, weight: 78, height: 1.78, address: 'new address' };
  } else {
    return patient;
  }
});

console.log('the email list', updatedPatientList);
// console.log('the patients', patients);
