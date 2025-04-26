import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useTranslation } from 'react-i18next'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  const { t } = useTranslation()

  return (
    <form className='place-order bg-white dark:bg-black text-black dark:text-white'>
      <div className="place-order-left">
        <p className="title">{t("PlaceOrder.DeliveryInformation")}</p>
        <div className="milti-fiels">
          <input type="text" placeholder={t("PlaceOrder.FirstName")} />
          <input type="text" placeholder={t("PlaceOrder.LastName")} />
        </div>
        <input type="text" placeholder={t("PlaceOrder.Email")} />
        <input type="text" placeholder={t("PlaceOrder.Street")} />
        <div className="milti-fiels">
          <input type="text" placeholder={t("PlaceOrder.City")} />
          <input type="text" placeholder={t("PlaceOrder.State")} />
        </div>
        <div className="milti-fiels">
          <input type="text" placeholder={t("PlaceOrder.Zip")} />
          <input type="text" placeholder={t("PlaceOrder.Country")} />
        </div>
        <input type="text" placeholder={t("PlaceOrder.Phone")} />
      </div>

      <div className="place-order-right">
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
          <button>{t("PlaceOrder.ProceedToPayment")}</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
