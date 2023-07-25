import React from 'react'
import styles from '../Style'
import { context } from '../constant/data'


const Context = () => {
  return (
    <>
    <section className={`${styles.paddingX} ${styles.marginY} flex justify-between md:flex-row flex-col`}>
    <div>
        <h1 className={`${styles.heading2}`}>
            Create your own  <span className='text-red-500 font-extrabold'>World</span> <br className='md:flex hidden' /> now
        </h1>
        <p className={`${styles.paragraph} max-w-[750px]`}>
        Successful completion of this certification will enable you to comprehend Metaverse in
         a more effective manner, giving you a significant advantage in the newly emerging digital world.
         Overall, you will gain insights and following key points
        </p>
        <div className="flex ss:gap-9 gap-2 flex-wrap ss:justify-normal justify-center">
            {context.map((item)=>(
                <div className="group">
         <div className='flex flex-col items-center create3 bg-slate-800/20 group-hover:bg-red-500
         py-[4.5rem] px-6 rounded-md duration-300 border border-gray-700 mt-5'>
                {item.icon}
            <p className="text-gray-400 font-bold group-hover:text-black">
            {item.Desc}
            </p>
        </div>
        </div>
            ))}
        </div>
    </div>
    <div className="sm:mt-0 mt-6 h-[100%] relative">
        <img className='create4 rounded-tr-[15%] rounded-bl-[15%] p-[6px]' src="https://i.pinimg.com/564x/fe/ac/e6/feace61fce9f1e269df056af4b8eaa31.jpg" alt="" />

         <img className='sm:w-[240px] w-[100px] sm:h-[150px] h-[80px] object-cover borderTK rounded-tr-[35%] rounded-bl-[35%] absolute sm:right-[-50px] right-[-20px] sm:bottom-[-50px] bottom-[-35px]' 
            src="https://i.pinimg.com/564x/2f/fa/dc/2ffadccf60c242e4dbe71034cb7fe892.jpg" alt="" />

    </div>
</section>
    </>
  )
  
}

export default Context