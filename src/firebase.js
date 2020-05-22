import firebase from '@firebase/app';
import '@firebase/functions';

const config = {
    apiKey: "AIzaSyAGI7qcMw_LD732pHPa_NwxSB7WDu7Zvyk",
    authDomain: "react-firebase-19.firebaseapp.com",
    databaseURL: "https://react-firebase-19.firebaseio.com",
    projectId: "react-firebase-19",
    storageBucket: "react-firebase-19.appspot.com",
    messagingSenderId: "678670197094",
    appId: "1:678670197094:web:8cc78c9613f551ee8628a7"
}

const reactFirebase = firebase.initializeApp(config)
export default reactFirebase