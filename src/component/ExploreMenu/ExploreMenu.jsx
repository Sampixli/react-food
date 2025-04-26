import React from 'react';
import { useTranslation } from 'react-i18next'; // Хук для перевода
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  const { t } = useTranslation(); // Получаем функцию перевода

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>{t('ExploreMenu.title')}</h1> {/* Используем перевод */}
      <p className='explore-menu-text'>
        {t('ExploreMenu.description')} 
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))
              }
              key={index}
              className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""} bg-white dark:bg-black text-black dark:text-white`}
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
