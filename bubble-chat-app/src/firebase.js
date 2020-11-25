import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    //snippet for my firebase Config object from app settings.
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyCi0x993teNtdEBgpGPmS4XLeg-YM620lA",
    authDomain: "bubble-chat-46510.firebaseapp.com",
    databaseURL: "https://bubble-chat-46510.firebaseio.com",
    projectId: "bubble-chat-46510",
    storageBucket: "bubble-chat-46510.appspot.com",
    messagingSenderId: "536395112788",
    appId: "1:536395112788:web:96a1fea15b28850599e8c1",
    measurementId: "G-1K7R64HGXH"
});

const db = firebaseApp.firestore();

export default db;
    
