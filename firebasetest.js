
//const firebase = require('firebase'); 
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database'); // Initialize Firebase

const config = {
    apiKey: "AIzaSyDSdtEIxpdnmwF8EDme278orpf7nF-5GQg",
    authDomain: "findame-6e149.firebaseapp.com",
    databaseURL: "https://findame-6e149.firebaseio.com",
    projectId: "findame-6e149",
    storageBucket: "findame-6e149.appspot.com",
    messagingSenderId: "700651069050"
};
const defaultApp = firebase.initializeApp(config);
let database = defaultApp.database();

database.ref('/100').once('value').then(function(snapshot) {
  var doc = snapshot.val() || 'Anonymous';
  console.log(doc.fullAddress);
  // ...
});