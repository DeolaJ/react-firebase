import firebase from '@firebase/app';
import '@firebase/functions';

// Firebase config from env
// const config = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)
const config = {
    apiKey: "AIzaSyCH1FWTusammkxpKrjtn7J-j06mi8i1l9U",
    authDomain: "connect-e2fba.firebaseapp.com",
    databaseURL: "https://connect-e2fba.firebaseio.com",
    projectId: "connect-e2fba",
    storageBucket: "connect-e2fba.appspot.com",
    messagingSenderId: "1000958282595",
    appId: "1:1000958282595:web:70596df8574494a77de156",
    measurementId: "G-K4BMMQJ3XX"
  }

const reactFirebase = firebase.initializeApp(config)
export default reactFirebase