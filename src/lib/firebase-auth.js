import { auth, createUserWithEmailAndPassword } from './index.js';

const register = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error.message;
  }
};

export { register };
