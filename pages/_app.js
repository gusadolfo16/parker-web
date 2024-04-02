import React from 'react';
import '../styles/global.css'; // Import your global styles
import { Provider } from 'next-auth/react'; // For NextAuth.js

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>  {/* Pass session to components */}
      <div className="app">
        <header>
          {/* Add your header component or navigation */}
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer>
          {/* Add your footer component */}
        </footer>
      </div>
    </Provider>
  );
}

export default MyApp;
