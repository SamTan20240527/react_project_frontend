# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


===========
REACT LAB 1
===========
Must create project folder in Linux files to avoid permission errors
==================================================
Part 1 - Using JSX to Create the Header and Footer
==================================================
npm create vite@latest ./
npm install
npm run dev
Open http://localhost:5173/ to confirm Vite+React is ready

Create index.html in JSX:
Delete all the existing code in `src/App.jsx`
Delete the file `App.css`
Delete all the lines in `index.css`

Copy/modify <nav>, <header> & <footer>of before_index.html into App.jsx
Add bootstrap link to index.html

npm run dev
VITE v5.4.10  ready in 657 ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
  press r + enter to restart the server
  press u + enter to show server url
  press o + enter to open in browser
  press c + enter to clear console
  press q + enter to quit

=========================================
Part 2 - Using Components for the Product
=========================================
Create ProductCard.jsx and add product cards

=================================================
Part 3: Event Listeners and Conditional Rendering
=================================================
Add event listener to <Add to Card> button
Refer: https://github.com/kunxin-chor/sctp-react-ecommerce-frontend/tree/03-events

==================================
Part 4: Side Effects and useEffect
==================================
A “side effect” refers to an event that happens outside of React’s control and purview. 
Create the useEffect hook.

========================
Part 5: Routing in React
========================
npm install wouter
Extract <Navbar> to Navbar.jsx
Extract header & main to HomePage.jsx

Update App.jsx to use Navbar.jsx & HomePage.jsx:
import Navbar from './Navbar';
import HomePage from './HomePage';
import { Route, Switch } from 'wouter';

Update Navbar.jsx to link Home, Products & Register pages

==============================
Part 6: Create a Register Form
==============================
Handle forms easily in React, add it as a dependency to our package.json:
npm install formik

Add in validation using the yup library:
npm install yup

Add the validationSchema prop to the Formik component to display error messages.

Add .env to root directory
Add Axios to React application: npm install axios
Add to RegisterPage.jsx: import axios from 'axios';
Updated handleSubmit function to use Axios to send a POST request to backend server.
Create a backend MySQL.
When using .env files in React, the variables must begin with VITE if you are using Vite to create your React applications.

Redirect to the home page using wouter and a Bootstrap component:
import React, {useState} from 'react';
import { useLocation } from 'wouter';
...
const [, setLocation] = useLocation();
const [showSuccess, setShowSuccess] = useState(false);

Create another project for MySQL backend to save registered users

================================================
Part 7: Creating the Catalog with List Rendering
================================================
Create featured.json & products.json in public folder, read with useEfect & axios
- featured.json: for loop to render
- products.json: map

===========================================
Part 8: Flash Messages and State Management
===========================================
To achieve state that are shared across different React components, we will need a state management system, eg. Jotai (https://jotai.org/) state management library.

























Refere finished code: https://github.com/kunxin-chor/sctp-react-ecommerce-frontend/tree/01-jsx


