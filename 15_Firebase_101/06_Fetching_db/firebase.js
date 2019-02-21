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
const refX = database.ref()

// SUSCRIPCION A CADA CAMBIO EN LA REFERENCIAX, EN ESTE CASO TODA LA DB
const funcA = refX.on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
})

// OTRA SUSCRIPCION
const funcB = refX.on('value', (snapshot) => {
  console.log(`Hola`);
})

// UNSUSCRIBE DE UNA SOLA FUNCION DE VARIAS SUSCRITAS
refX.off(funcA);

