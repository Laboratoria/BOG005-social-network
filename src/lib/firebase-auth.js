import { auth, createUserWithEmailAndPassword } from './firebase.js';

const register = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error.message;
  }
};

export { register };
