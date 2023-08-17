import React, { useState } from 'react'
import styles from '../Style'
import Accordion from "./Acoordion"
import { accord } from '../constant/data'

const Development = () => {
  const [open, setOpen] = useState(false)

  const toggle = (index) => {
if (open === index) {
  return setOpen(null)
}
setOpen(index)
}
  return (
    <div id='Ourproject' className={`${styles.paddingX} ${styles.paddingY} sm:mt-0 mt-4 flex md:flex-row flex-col justify-around ss:gap-28 gap-10`}>
        <div className='relative'>
            <img className='sm:w-[240px] w-[100px] sm:h-[150px] h-[80px]  object-cover borderTK rounded-tl-[35%] rounded-br-[35%] absolute right-[25px] sm:top-[-85px] top-[-45px]' 
            src="https://i.pinimg.com/564x/8b/2a/29/8b2a298c485b8a37b6087e208fe01540.jpg" alt="" />

            
            <img className='flex-1 object-cover borderTK rounded-tr-[15%] p-[6px] rounded-bl-[15%]' src="https://i.pinimg.com/564x/6b/66/f5/6b66f5609207e64b487e61bee1d08158.jpg" alt="" />
          

        </div>
        <div>
     <h1 className={`${styles.heading2}`}>
    Commitment <br className='sm:flex hidden'/> In Our <span className='text-red-500'>Development</span> 
    </h1>  
    <p className={`${styles.paragraph} max-w-[750px]`}>
      The metaverse is the emerging 3-D-enabled digital space that uses virtual reality,
    augmented reality, and other advanced internet and semiconductor technology to allow people to have life like personal and business experiences online.
   </p>
  
<div>
  {accord.map((items, index)=> (
  <Accordion key={index} open={index === open} Title={items.Title} Desc={items.Desc} icon={items.icon} toggle={()=>toggle(index)}/>
  ))}
</div>

</div>
        </div>
  )

  }
export default Development