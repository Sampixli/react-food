import React from 'react';
import { useTranslation } from 'react-i18next'; // Хук для перевода
import './Header.css';

const Header = () => {
  const { t } = useTranslation(); // Получаем функцию перевода

  return (
    <div className='header bg-white dark:bg-black text-black dark:text-white'>
      <div className="header-content">
        <h2>{t('Header.orderYourFood')}</h2> {/* Перевод для заголовка */}
        <p>{t('Header.description')}</p> {/* Перевод для описания */}
        <button>{t('Header.viewMenu')}</button> {/* Перевод для кнопки */}
      </div>
    </div>
  );
}

export default Header;
