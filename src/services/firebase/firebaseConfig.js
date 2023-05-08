import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// Load environment variables from .env file
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_ID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_MID,
  appId: process.env.REACT_APP_APPID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);