import React from 'react';
import './AppDownolod.css';
import { assets } from '../../assets/assets';
import { useTranslation } from 'react-i18next';

const AppDownolod = () => {
  const { t } = useTranslation();

  return (
    <div className='app-downoload bg-white dark:bg-black text-black dark:text-white' id='app-downoload'>
      <p>{t("AppDownload.text")}</p>
      <div className="app-downoload-platfour">
        <img src={assets.play_store} alt="play store" />
        <img src={assets.app_store} alt="app store" />
      </div>
    </div>
  );
};

export default AppDownolod;
