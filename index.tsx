import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Простая и надежная инициализация
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

// Удаляем встроенный лоадер перед монтированием React
const initialLoader = document.querySelector('.initial-loader');
if (initialLoader) {
  initialLoader.remove();
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);