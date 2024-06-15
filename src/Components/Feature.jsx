import React, { useState } from 'react';
import Featurebox from '../Featurebox';

export default function Feature() {
      const [items, setItems] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Acces your files,anywhere",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
      ]);
    
    
    
  return (
      <div>
          <div className='w-[850px] max-w-full m-auto grid grid-cols-1 md:grid-cols-2 gap-[50px]'>
         {items.map((item) => {
             return <Featurebox item={item} key={item.icon} />
    })}
          </div>
      
      </div>
  )
}
