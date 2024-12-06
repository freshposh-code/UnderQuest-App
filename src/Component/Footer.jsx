import React from 'react'
import styles from '../Style'
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { footer, footerIcon } from '../constant/data';

const Footer = () => {
  return (
   <>
   <section id='community' className={`${styles.paddingY} ${styles.paddingX} flex md:flex-row flex-col justify-between`}>
    <div>
    <div className='flex items-center gap-2'>
    <Diversity2Icon className='explore p-2 rounded-md' style={{fontSize:"3rem"}}/>
    <hi className="text-gradient text-[1.5rem] capitalize font-extrabold">unda quest</hi>
    </div>
    <p className={`text-slate-500 md:text-base text-xs max-w-[600px] leading-[30px] mt-4`}>
 <span className="text-gradient text-xl">Unda Quest</span> introduces <span className="font-bold">PLASMA MAZE</span>,
     a fast-paced competitive Unreal Engine based game where you can test your skill
     against other players. Customize your Ready Player Me Avatar as you jump right into the action
      straight from your browser!
    </p>
    </div>
    <div className='flex flex-wrap sm:gap-32 gap-16 sm:mt-0 mt-6'>
        {footer.map((item)=> (
            <div className="text-slate-300">
                <h2 className=''>
                    {item.head}
                </h2>
                <ul>
                    {item.link.map((items, index)=> (
                    <li className={`${ index !== item.length -1 ? "mt-5" : "mb-0"} text-slate-400 cursor-pointer hover:text-red-500 duration-300 md:text-base text-xs`}>
                        {items.links}
                    </li>
                ))}
                </ul>
            </div>
        ))} 
        
    </div>
   </section>
   <div className={`${styles.paddingX} text-white flex xm:flex-row flex-col justify-center sm:gap-10 gap-4 items-center`}>
    <div className='gap-4 flex'>
    {footerIcon.map((element) => (
        <h1>
            {element.icon}
        </h1>
    ))}
        </div>
        
        <p className='text-slate-400 sm:text-[16px] text-[10px]'>
            <sup className="text-slate-400 text-[1.2rem]">c</sup> 2023. All Rights Reserved.</p>
    </div>
   </>
  )
}

export default Footer