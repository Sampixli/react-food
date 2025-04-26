import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next'; // Хук для перевода
import './Fooddisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const { t } = useTranslation(); // Получаем функцию перевода

  return (
    <div className='food-display bg-white dark:bg-black text-black dark:text-black' id='food-display'>
      <h2>{t('Fooddisplay.topDishes')}</h2> {/* Используем перевод для заголовка */}
      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} 
              />
            );
          }
          return null; 
        })}
      </div>
    </div>
  );
};

export default Fooddisplay;

