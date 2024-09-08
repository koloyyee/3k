// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPrQ6lpAdigcYdOc-0jnrXTiQ_fu83xlM",
  authDomain: "firebasic-8e41a.firebaseapp.com",
  databaseURL: "https://firebasic-8e41a-default-rtdb.firebaseio.com",
  projectId: "firebasic-8e41a",
  storageBucket: "firebasic-8e41a.appspot.com",
  messagingSenderId: "347572472246",
  appId: "1:347572472246:web:169f3a2392d3952e171917",
  measurementId: "G-SH4W2HQSYE"
};

// Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);
  export const auth = getAuth(app);