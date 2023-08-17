import React from 'react'
import styles from '../Style'
import Resource from './Resource'
import { resource } from '../constant/data'


const GetStarted = () => {
  return (
    <>
    <section id='resources' className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className='bg-red-500 rounded-3xl text-center md:p-[5rem] p-[10px]'>
<h1 className="sm:text-[3rem] text-[2rem] bold">
    Get started with UNDA.Quest
</h1>
  <p className="font-medium capitalize max-w-[750px] m-auto">
  Ultimate season with UNDA.Quest to get all METAVERSE analysis with the aim of creating a new world. Create your land
  Inside the metaverse avatars, NFTs, games,<br className='md:flex hidden' /> videos, and other assets.
  </p>
  <button className="bg-black text-red-500 rounded-2xl px-10 py-4 m-4">
    Get Started
  </button>
        </div>
    </section>
    <div className='flex justify-between md:flex-row flex-col'>
       {resource.map((items)=> (
      <Resource key={items} {...items}/>
       ))} 
    </div>
    </>
  )
}

export default GetStarted