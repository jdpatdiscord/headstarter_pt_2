// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4UoPUbjcjQLYu96TOuCRA-hZoHnXbQFg",
  authDomain: "headstarter-week-2.firebaseapp.com",
  projectId: "headstarter-week-2",
  storageBucket: "headstarter-week-2.appspot.com",
  messagingSenderId: "514837686614",
  appId: "1:514837686614:web:7a559b8e1e723518e14ef7",
  measurementId: "G-1GQS297L16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);