import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { AppContext } from "../components/Context"
import { useRouter } from 'next/router'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const {setCurrentUser} = useContext(AppContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password)
      // await signInWithEmailAndPassword(auth, email, password);
      //setCurrentUser({user: email})
      router.push('/')
    } catch (error) {
      console.error(error);
      // Handle errors appropriately (e.g., display error messages)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
