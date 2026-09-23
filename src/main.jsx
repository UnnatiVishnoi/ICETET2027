import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Reuse the exact legacy design system — no visual changes.
import '../assets/css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
