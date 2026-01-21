import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Детальное логирование для отладки
console.log('[INIT] Starting app initialization...');
console.log('[INIT] Document ready state:', document.readyState);
console.log('[INIT] Window loaded:', typeof window !== 'undefined');

// Простая и надежная инициализация
try {
  console.log('[INIT] Looking for root element...');
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  console.log('[INIT] Root element found');

  // Удаляем встроенный лоадер перед монтированием React
  const initialLoader = document.querySelector('.initial-loader');
  if (initialLoader) {
    console.log('[INIT] Removing initial loader');
    initialLoader.remove();
  }

  console.log('[INIT] Creating React root...');
  const root = ReactDOM.createRoot(rootElement);
  console.log('[INIT] Rendering App component...');
  root.render(<App />);
  console.log('[INIT] App rendered successfully');
} catch (error) {
  console.error('[ERROR] Error initializing app:', error);
  console.error('[ERROR] Error stack:', error instanceof Error ? error.stack : 'No stack');
  // Fallback: показываем базовый контент
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    rootElement.innerHTML = `
      <div style="padding: 2rem; text-align: center; background: #FFFACD; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <h1 style="color: #000; font-size: 2rem; margin-bottom: 1rem;">Matreshki&Co</h1>
        <p style="color: #B83D3F; margin-bottom: 0.5rem; font-weight: bold;">Ошибка при загрузке:</p>
        <p style="color: #000; margin-bottom: 1rem; font-size: 0.9rem; word-break: break-word;">${errorMessage}</p>
        <button onclick="location.reload()" style="padding: 0.75rem 1.5rem; background: #B83D3F; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem;">
          Перезагрузить страницу
        </button>
      </div>
    `;
  }
}