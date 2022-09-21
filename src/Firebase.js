
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsh9OveDgWEyIJ9C7aRhBc0eiX6QIFhhg",
  authDomain: "explore-america.firebaseapp.com",
  projectId: "explore-america",
  storageBucket: "explore-america.appspot.com",
  messagingSenderId: "514570248401",
  appId: "1:514570248401:web:613248624d1932c2e165f0",
  measurementId: "G-S2FL00JQ20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
