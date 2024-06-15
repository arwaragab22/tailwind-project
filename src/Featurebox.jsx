import React from 'react'

export default function Featurebox({ item } ) {
    console.log(item)
  return (
    <div className="text-white  elements-center object-contain p-5 md:p-0">
      <img className='mb-1 w-[80px] h-[80px]'
    src={`assets/${item.icon}`}
        alt="icon-img"
      />
      <h4 className="mb-1 font-bold text-[20px]">{item.title}</h4>
      <p className="">{item.desc}</p>
    </div>
  )
}
