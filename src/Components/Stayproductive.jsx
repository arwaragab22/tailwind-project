import React from 'react';
import "../index.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Stayproductive() {
  return (
    <div className='container gap-[20px] m-auto text-white grid grid-cols-1 md:grid-cols-2 mt-[150px] items-center'>
      
          <div><img src="/assets/illustration-stay-productive.png" className='object-contain'></img></div>
        
          <div className='p-3'>
          <h3 className="font-simibold  text-[25px] md:text-[35px]">
            Stay productive,
            <br />
            wherever you are
          </h3>
          <div className=''>
            <p className="mb-[15px] tracking-[.8] leading-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              excepturi incidunt quo deserunt quidem accusamus iure ab earum
              reprehenderit debitis!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              excepturi incidunt quo deserunt quidem accusamus iure ab earum
              reprehenderit debitis!
            </p>
          </div>
              <a className='text-secondcolor group flex gap-[10px] items-center w-fit transition-all duration-200
           border-b-2 pb-1 border-secondcolor cursor-pointer mt-4 mb-4 hover:border-gray-300'
            to="/"
              >
                  <span className='group-hover:text-gray-300 capitalize'>            See how Fylo works
</span>
            <FaArrowAltCircleRight className="animate-[move_1s_ease-in-out_infinite]"/>

          </a>
        </div>
      </div>
  )
}
