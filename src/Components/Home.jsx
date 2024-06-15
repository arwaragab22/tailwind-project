import "../index.css";

export default function Home() {
  return (
    <div className="bg-customcolorbg pt-[100px]">
        <div className='container text-white m-auto elements-center '>
          <div><img src="assets/landing-img.png"  className=" object-contain w-[600px]  h-[500px] max-w-full mb-3"/></div>
          <div className="max-w-[700px]">
          <h2 className="text-[25px]  md:text-[40px]   font-bold  mb-[10px]">All your files in one secure location,
accessible anywhere.</h2>
          <p className="px-3 font-normmal  md:px-[90px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam nulla impedit commodi.</p>
         <button className="bg-secondcolor  rounded-[30px] max-w-full w-[170px]  sm:w-[280px] h-[60px] cursor-pointer m-4 hover:bg-white text-gray-900">Get Started</button>
         
          </div>
      
      </div>
    <div className="w-full h-[200px]">
     <img src="assets/bg-curvy-desktop.svg" className="w-full  h-full"/></div>
    </div>
  
  )
}
