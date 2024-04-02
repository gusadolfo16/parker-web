import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithGoogleRedirect } from "firebase/auth";
import { auth } from "../firebase";

const Auth = ({ isLogin, onToggleAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.error(error);
      // Handle errors appropriately (e.g., display error messages)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for email and password */}
      <button type="submit">{isLogin ? "Login" : "Register"}</button>
      <button onClick={onToggleAuth}>
        {isLogin ? "Need to register?" : "Already have an account?"}
      </button>
      {isLogin && <button onClick={signInWithGoogleRedirect}>Login with Google</button>}
    </form>
  );
};

export default Auth;
