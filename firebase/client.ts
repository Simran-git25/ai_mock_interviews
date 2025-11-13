// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyCBSQ1FdlfltjUZUearyargypy9T2TFKa0",
  authDomain:"prepwise-dea56.firebaseapp.com",
  projectId:"prepwise-dea56",
  storageBucket:"prepwise-dea56.firebasestorage.app",
  messagingSenderId:"878244617083",
  appId:"1:878244617083:web:2618e20e68977e13e53bde",
  measurementId:"G-S8XX7VNMND"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
