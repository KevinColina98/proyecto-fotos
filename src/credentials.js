// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_pD57k8e2WaUTXk5_5bVVTUWd2yNdUvY",
  authDomain: "pryectofotos.firebaseapp.com",
  projectId: "pryectofotos",
  storageBucket: "pryectofotos.appspot.com",
  messagingSenderId: "300574079112",
  appId: "1:300574079112:web:795c82606e6e24d924c73d"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export {appFirebase}