import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyD0kyIXeiQx5uYcEYnpD6erL36s5JbPwJw',
  authDomain: 'ciclapp-social-network.firebaseapp.com',
  projectId: 'ciclapp-social-network',
  storageBucket: 'ciclapp-social-network.appspot.com',
  messagingSenderId: '1075759403358',
  appId: '1:1075759403358:web:86753e14470c54d0f0bfcf',
  measurementId: 'G-H4B00TESF0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { app, analytics };
