import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';
import { I18nextProvider } from 'react-i18next';  // Импортируем I18nextProvider
import i18n from '../i18n.js';  // Импортируем настройки i18n

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        {/* Оборачиваем приложение в I18nextProvider */}
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </StoreContextProvider>
    </BrowserRouter>
  </StrictMode>
);
