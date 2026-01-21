import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Убеждаемся, что DOM готов
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  try {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      console.error("Root element not found");
      return;
    }

    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  } catch (error) {
    console.error('Error initializing app:', error);
    // Fallback: показываем базовый контент
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 2rem; text-align: center; background: #FFFACD; min-height: 100vh;">
          <h1 style="color: #000; font-size: 2rem; margin-bottom: 1rem;">Matreshki&Co</h1>
          <p style="color: #000;">Загрузка...</p>
        </div>
      `;
    }
  }
}