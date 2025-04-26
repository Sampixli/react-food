import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='footer bg-white dark:bg-black text-black dark:text-white' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>{t("Footer.description")}</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>{t("Footer.companyTitle")}</h2>
          <ul>
            <li>{t("Navbar.Home")}</li>
            <li>{t("Footer.aboutUs")}</li>
            <li>{t("Footer.delivery")}</li>
            <li>{t("Footer.privacyPolicy")}</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>{t("Footer.getInTouch")}</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        {t("Footer.copyright")}
      </p>
    </div>
  );
};

export default Footer;
