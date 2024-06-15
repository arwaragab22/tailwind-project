import React, { useState } from 'react';
import Testimonialsbox from './Testimonialsbox';

export default function Testimonials() {
    const [testData, setTestData] = useState([
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
            image: "profile-1.jpg",
            position: "Founder & CEO, Huddle",
            name: "Ahmed",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
            image: "profile-2.jpg",
            position: "Founder & CEO, Huddle",
            name: "Mohamed",
        },
        {
            id: 3,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
            image: "profile-3.jpg",
            position: "Founder & CEO, Huddle",
            name: "Eman",
        },
    ]);
    return (
        <div className='bg-[#181e2a ]    container gap-[30px] m-auto relative mt-[200px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[300px]'>
<div className='absolute top-[-80px] z-0 left-[10px] md:left-0 '><img src="assets/bg-quotes.png" /></div>

            {testData.map((item) => {
                return <Testimonialsbox item={item} key={item.desc } className="z-50 relative"/>
            })}</div>
    )
}
