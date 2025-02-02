// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBE5xPSwUzwnc0t6ARUt93_HrQZKYCY7I",
  authDomain: "cucuridu21.firebaseapp.com",
  databaseURL: "https://cucuridu21-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cucuridu21",
  storageBucket: "cucuridu21.firebasestorage.app",
  messagingSenderId: "758833698280",
  appId: "1:758833698280:web:1b1c765dc6255ac967c05d",
  measurementId: "G-ZY1S1KPQCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);