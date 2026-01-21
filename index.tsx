import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Простая и надежная инициализация
try {
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
} catch (error) {
  console.error('Error initializing app:', error);
  // Fallback: показываем базовый контент
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 2rem; text-align: center; background: #FFFACD; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <h1 style="color: #000; font-size: 2rem; margin-bottom: 1rem;">Matreshki&Co</h1>
        <p style="color: #000; margin-bottom: 1rem;">Произошла ошибка при загрузке</p>
        <button onclick="location.reload()" style="padding: 0.75rem 1.5rem; background: #B83D3F; color: white; border: none; border-radius: 8px; cursor: pointer;">
          Перезагрузить страницу
        </button>
      </div>
    `;
  }
}