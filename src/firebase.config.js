// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_CODROP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_CODROP_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_CODROP_DATABASE_URL}`,
  projectId: `${process.env.REACT_APP_CODROP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_CODROP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_CODROP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_CODROP_APP_ID}`,
  measurementId: `${process.env.REACT_APP_CODROP_MEASUREMENT_ID}`
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app , firestore , storage };