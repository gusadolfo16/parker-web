import React from 'react';
import { signIn } from 'next-auth/react';

const Register = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await signIn('email', {
        redirect: false, // Prevent automatic redirection
        email,
        password,
      });
      // Handle successful registration (e.g., redirect to login)
      console.log('Registration successful:', result);
    } catch (error) {
      console.error('Registration error:', error);
      // Handle registration errors (e.g., display error message)
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
