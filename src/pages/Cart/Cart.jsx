import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Cart = () => {
  const { t } = useTranslation();
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart bg-white dark:bg-black text-black dark:text-white'>
      <div className='cart-items'>
        <div className="cart-items-title">
          <p>{t("Cart.Item")}</p>
          <p>{t("Cart.Title")}</p>
          <p>{t("Cart.Price")}</p>
          <p>{t("Cart.Quantity")}</p>
          <p>{t("Cart.Total")}</p>
          <p>{t("Cart.Remove")}</p>
        </div>
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className='cart-total'>
          <h2>{t("Cart.CartTotals")}</h2>
          <div>
            <div className="cart-totals-details">
              <p>{t("Cart.Subtotal")}</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <div className="cart-totals-details">
              <p>{t("Cart.DeliveryFee")}</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>

            <div className="cart-totals-details">
              <b>{t("Cart.Total")}</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>{t("Cart.Proceed")}</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>{t("Cart.PromoText")}</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder={t("Cart.PromoPlaceholder")} />
              <button>{t("Cart.Submit")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
