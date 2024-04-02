import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext(null);

const MyApp = ({ Component, pageProps }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => setCurrentUser(user));
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
};

export default MyApp;
