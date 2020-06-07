import firebase from '@firebase/app';
import '@firebase/functions';

// Firebase config from env
const config = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)

const reactFirebase = firebase.initializeApp(config)
export default reactFirebase