import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA__DTLHWuSTHEIvZPaT1YsTVPBBi0eRrU",
    authDomain: "nwitter-a3890.firebaseapp.com",
    databaseURL: "https://nwitter-a3890.firebaseio.com",
    projectId: "nwitter-a3890",
    storageBucket: "nwitter-a3890.appspot.com",
    messagingSenderId: "646400093626",
    appId: "1:646400093626:web:4b718533000c98cde80183"
};

export default firebase.initializeApp(firebaseConfig);