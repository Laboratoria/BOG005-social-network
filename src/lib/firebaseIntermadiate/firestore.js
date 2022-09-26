import { getFirestore, collection, addDoc, getDocs, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { app } from '../../firebase/configFirabese.js';

const db = getFirestore(app);
// console.log('firestone',db)


export { collection, addDoc, getDocs, onSnapshot, db } 