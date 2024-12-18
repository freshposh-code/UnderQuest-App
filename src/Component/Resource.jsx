import React from 'react'
import styles from '../Style'

const Resource = ({Title, Desc, icon, Guide}) => {
  return (
    <>
    <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className="bg-red-500 p-3 rounded-3xl">
            <h1 className='md:text-[1.5em] text-[1rem] font-extrabold p-4'>
            {Title}
            </h1>
            <p className='font-medium p-3 max-w-[530px] md:text-base text-xs'> 
                {Desc}
            </p>
            <div className="flex items-center">
            <button className='font-[600] border border-black p-4 m-3 hover:bg-black hover:text-red-500 duration-200 rounded-[33px] md:text-base text-xs'>
                {Guide}
            </button>
            {icon}
            </div>
        </div>
    </section>
    </>
  )
}
export default Resource