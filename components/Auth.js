import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Auth = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        Logged in as {session.user.email}
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => signIn()}>Login</button>
      <Link href="/register">Register</Link>
    </div>
  );
};

export default Auth;
