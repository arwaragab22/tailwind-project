import React from 'react'

export default function Testimonialsbox({item}) {
  return (
  <div className='text-white bg-[rgb(33 41 60 / .1)]
 p-4 shadow-[8px_8px_1px_8px_#1c202c]  '>
      <p >
        {item.desc}
      </p>
      <div className='flex gap-[20px] items-center cursor-pointer mt-2 mb-2'>
        <img
          src={`assets/${item.image}`}
         className='rounded-[50%] object-contain w-[70px] h-[70px]' 
        />
        <div>
          <strong >{item.name}</strong>
          <p >{item.position}</p>
        </div>
      </div>
    </div>
  )
}
