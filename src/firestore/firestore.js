import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { app } from '../config/configFireBase.js';

export const db = getFirestore(app);

