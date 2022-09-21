import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js';
// import { firebaseConfig } from './config.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAHVluY138pnk8PKOw2nuTGMcEEkV4dpLY',
  authDomain: 'social-network-d51cd.firebaseapp.com',
  projectId: 'social-network-d51cd',
  storageBucket: 'social-network-d51cd.appspot.com',
  messagingSenderId: '447408493171',
  appId: '1:447408493171:web:221c363b010259179b9006',
  measurementId: 'G-19TVG0TJQD',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app.name);
