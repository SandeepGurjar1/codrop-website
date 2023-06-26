// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClF9PKF-nvfdWFv6PYhz1A0u8reQ3smkg",
  authDomain: "codrop-website.firebaseapp.com",
  databaseURL: "https://codrop-website-default-rtdb.firebaseio.com",
  projectId: "codrop-website",
  storageBucket: "codrop-website.appspot.com",
  messagingSenderId: "736719390343",
  appId: "1:736719390343:web:3c1e5942b2a9b2dd655a22",
  measurementId: "G-C7DB5M48LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);