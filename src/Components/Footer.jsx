import React, { useState } from 'react';

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    const [contact, setContact] = useState([
        { icon: "icon-phone.svg", text: "+20121212121" },
        { icon: "icon-email.svg", text: "example@fylo.com" },
    ]);
    const [links, setLinks] = useState([
        "About Us",
        "Contact Us",
        "Jobs",
        "Terms",
        "Press",
        "Privacy",
        "Blog",
    ]);
    const [socialIcons, setSocialIcons] = useState([
        "facebook",
        "twitter",
        "instagram",
    ]);
    return (
        <div className='bg-[#0c1524] mt-[200px] md:mt-0'>
            <div className='container m-auto text-white p-5 md:p-0'>
                <div to="/">
                    <img
                        src="assets/logo.svg"
                        alt="logo-img"
                        className="w-[175px] h-[66px] object-contain"
                    />
                </div>
                <div className=' flex flex-col md:flex-row justify-center  gap-[30px] max-w-full pt-[20px] pb-[100px]'>
                        <div className="flex items-start gap-[15px] flex-1">
            <img
              src="assets/icon-location.svg"
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className=" font-normal text-sm tracking-[0.8px] max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              nisi dignissimos unde ipsam modi facilis nam magni, assumenda ad
              fuga.
            </p>
                    </div>
                    <div className='flex-1 '>
                        {contact.map((item) => (
                            <div className='flex gap-[10px] justify-start items-center mb-2 last-of-type:mb-0'
                                key={item.text}>
                
              
                                <img
                                    src={`assets/${item.icon}`}
                                    alt="icon"
                                    className="w-[18px] h-[18px] object-contain"
                                />
                                <p>{item.text}</p>
                            </div>
                        ))
                        }
                    
                    
                    </div>
                    <ul className='flex-1 grid grid-cols-1 md:grid-cols-2 '>
                          {links.map((item) => (
              <li key={item}>
                <span
                 
                  className="hover:text-secondcolor transition-all duration-200 cursor-pointer"
                >
                  {item}
                </span>
              </li>
            ))}
                    </ul>
                            <ul className='flex-1  flex flex-col md:flex-row gap-[20px]'>
                        {socialIcons.map((item) => {
                             return (item == "facebook" ?
                                <li className='w-[40px] h-[40px] rounded-[50%] cursor-pointer hover:text-secondcolor border-2 border-white elements-center transition-all duration-200 mb-4'>
                                    <FaFacebookF></FaFacebookF>
                                </li> : item == "twitter" ? <li className='w-[40px] h-[40px] rounded-[50%] cursor-pointer hover:text-secondcolor border-2 border-white elements-center transition-all duration-200 mb-4'><FaTwitter></FaTwitter></li>:<li className='w-[40px] h-[40px] rounded-[50%] cursor-pointer hover:text-secondcolor border-2 border-white elements-center transition-all duration-200 mb-4'><FaInstagram></FaInstagram></li>)
                            
                    })}
                    </ul>
                </div>
            </div>



        </div>
    )
}
