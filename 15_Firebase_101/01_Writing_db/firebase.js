import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAapA5P8gWC83aHK26xgDDMzIBC4dw914w",
  authDomain: "expensify-a13e6.firebaseapp.com",
  databaseURL: "https://expensify-a13e6.firebaseio.com",
  projectId: "expensify-a13e6",
  storageBucket: "expensify-a13e6.appspot.com",
  messagingSenderId: "124728096317"
};

firebase.initializeApp(config);

const database = firebase.database();

// REF() SIN PARAMETROS HACE REFERENCIA AL ROOT DE LA BASE DE DATOS
database.ref().set({
  name: 'Andrew Mead',
  age: 26,
  isSingle: false,
  location: {
    city: 'Philadelphia',
    country: 'United States'
  }
});


/*
  ESTO BORRARIA TODA LA DB Y SOLO EXISTIERA 'AGE'
  database.ref().set({ age: 27}); 
*/

// ESTO SOLO CAMBIA EL VALOR DE 'AGE' A 27
database.ref('age').set(27);

// ESTO SOLO CAMBIA EL VALOR DE 'location.city' A 'New York'
database.ref('location/city').set('New York');

// ESTO CREA UN NUEVO ATRIBUTO LLAMADO 'attributes' SIN BORRAR EL RESTO DE LAS COSAS EN DB
database.ref('attributes').set({
  height: 73,
  weight: 150
});

console.log('I made a request to change the data.');
