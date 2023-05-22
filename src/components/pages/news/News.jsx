import React from 'react'
import './News.css'
import commingUpImage from '../../../assets/images/comming_up.png';
import commingSoonImage from '../../../assets/images/comming_soon.png';

const News = () => {
  return (
    <div className='flex justify-center items-center '>
      <img className="w-auto h-auto" src={commingUpImage} alt="comming up soon"/>
      <img className="w-auto h-auto" src={commingSoonImage} alt="comming soon"/>
    </div>
  )
}

export default News