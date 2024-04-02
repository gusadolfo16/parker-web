// login.js
import React from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={() => signIn()}>
        {/* Login form fields (email, password) */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

// register.js (similar structure with registration form fields)
