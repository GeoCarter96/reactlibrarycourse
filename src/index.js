import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {library} from '@fortawesome/fontawesome-svg-core'
import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft  } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
    // server.js (example)
    const express = require('express');
    const path = require('path');
    const app = express();
    const port = process.env.PORT || 5000;

    // Serve static files from the React build folder
    app.use(express.static(path.join(__dirname, 'client/build'))); // Assuming 'client' is your CRA folder

    // Handle any requests that don't match the static files
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
