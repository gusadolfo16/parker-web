import { auth } from '../firebase';

export const register = async (email, password) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    // Handle successful registration (e.g., redirect to login)
  } catch (error) {
    console.error('Registration error:', error);
    // Handle registration errors (e.g., display error message to user)
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    // Handle successful login (e.g., redirect to gallery)
  } catch (error) {
    console.error('Login error:', error);
    // Handle login errors (e.g., display error message to user)
  }
};

export const googleLogin = async () => {
  const provider = new auth.GoogleAuthProvider();
  try {
    const result = await auth.signInWithPopup(provider);
    // Handle successful Google login (e.g., redirect to gallery)
  } catch (error) {
    console.error('Google login error:', error);
    // Handle Google login errors (e.g., display error message to user)
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
    // Handle successful logout (e.g., redirect to login)
  } catch (error) {
    console.error('Logout error:', error);
    // Handle logout errors (e.g., display error message to user)
  }
};
