// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/messaging";
// import { getAnalytics } from "firebase/analytics";
// import fm from 'firebase/messaging';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.ALFRED_FIREBASE_API_KEY,
    authDomain: process.env.ALFRED_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.ALFRED_FIREBASE_PROJECT_ID,
    storageBucket: process.env.ALFRED_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.ALFRED_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.ALFRED_FIREBASE_APP_ID,
    measurementId: process.env.ALFRED_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const messaging = firebase.messaging();

export default messaging;
