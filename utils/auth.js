import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithGoogleRedirect, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Return the logged-in user object
  } catch (error) {
    console.error("Login error:", error);
    throw error; // Re-throw the error for handling in the calling component
  }
};

const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Return the created user object
  } catch (error) {
    console.error("Registration error:", error);
    throw error; // Re-throw the error for handling in the calling component
  }
};

const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithGoogleRedirect(auth, provider);
    return result.user; // Return the logged-in user object
  } catch (error) {
    console.error("Google Login error:", error);
    throw error; // Re-throw the error for handling in the calling component
  }
};

export default { login, register, googleLogin };
