import React from 'react'
import img1 from '../../../../assets/images/photo_polaroid.png'
import img2 from '../../../../assets/images/water_splash.png'

const CourseCarousel = ({ title, courses }) => {
  return (
    <div className='my-8'>
      <h2 className='text-lg font-bold uppercase mx-8'>{title}</h2>
      <div className='flex overflow-x-auto mt-4 p-4'>
        {courses.map((course) => (
          <img className='m-2 w-40 transition-all transition-200 hover:scale-[1.09]'
            key={course.id}
            src={img1}
            alt={course.name}
          />
        ))}
      </div>
    </div>
  )
}

export default CourseCarousel