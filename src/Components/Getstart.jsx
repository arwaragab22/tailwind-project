import React from 'react';
import "../index.css"
export default function Getstart() {
  return (
      <section>
      <div className="h-[200px] bg-[#0c1524]">
        <div className="relative">
          <div className=" bg-[#1c2230] absolute left-[50%] translate-x-[-50%] translate-y-[-50%]  top-[-50%] text-white p-[60px] text-center rounded-lg ">
            <h3 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">
              Get early access today
            </h3>
            <p >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
              tempore? Vero adipisci eveniet voluptatibus cupiditate!
            </p>
            <form  className='flex flex-col md:flex-row gap-[25px] mt-4'>
              <input className=' placeholder:italic placeholder:text-slate-400 flex-1 pl-[40px] rounded-[30px] p-[10px] outline-none border-none '
                type="email"
                placeholder="eamil@example.com"
              />
              <button 
                
                type="submit"
                className="bg-[#42b0d1] text-white rounded-[30px] hover:bg-[#8cdae4] transition-all duration-200 w-full   h-[44px] md:w-[200px] "
              >
                Get Started For Free
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
