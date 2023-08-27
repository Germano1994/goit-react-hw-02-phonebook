import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; 
import App from './components/App';
import './index.css';


const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootInstance = createRoot(root);
rootInstance.render(rootElement);
