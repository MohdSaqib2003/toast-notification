import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContextProvider } from './hooks/useToast';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToastContextProvider >
    <App />
  </ToastContextProvider>
);