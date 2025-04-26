import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import Fooddisplay from '../../component/Fooddisplay/Fooddisplay'
import AppDownolod from '../../component/AppDownolod/AppDownolod'


const Home = () => {

    const[category,setCategory] =useState('All')

  return (
    <div className='bg-white dark:bg-black text-black dark:text-white'>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <Fooddisplay category={category}/>
    <AppDownolod/>
    </div>
  )
}

export default Home