//First time setup:
//  npm init -y
//  npm create vite@latest ./ (select React & JavaScript)
//  npm install (whatever module required; if no argument, only package.json is created)
//  npm install wouter (simplify routing to HomePage, etc.)
//  npm install formik (handle forms in RegisterPage.jsx)
//  npm install yup (validate user input in RegisterPage.jsx)
//  npm install axios
//  npm install jotai (flashing messages)
//  npm install seamless-immutable (state updates for CartStore.js)
//Subsequent re-start:
//  npm run dev

import React, { useEffect } from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import RegisterPage from './RegisterPage';
import { Route, Switch } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';

function App() {
  const { getMessage, clearMessage } = useFlashMessage();
  const flashMessage = getMessage();

  useEffect(() => {

    const timer = setTimeout(() => {
      clearMessage();
    }
      , 3000);
    return () => {
      clearTimeout(timer);
    };
  }
    , [flashMessage]);

  return (
    <>
      <Navbar />
      {flashMessage.message && (
        <div className={`alert alert-${flashMessage.type} text-center flash-alert`} role="alert">
          {flashMessage.message}
        </div>
      )}
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>Sam Tan 2024</p>
        </div>
      </footer>
    </>
  );
}

/* Replace with Jotai flash message
return (
  <>
    <Navbar />
    
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/register" component={RegisterPage} />
    </Switch>

    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 E-Shop. All rights reserved.</p>
      </div>
    </footer>
  </>
);
}
*/

export default App;