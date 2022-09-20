import { auth, createUser } from './firebase.js';

const register = async (email, password) => {
  try {
    await createUser(auth, email, password);
  } catch (error) {
    throw error.message;
  }
};

export { register };