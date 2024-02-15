import React from 'react'
import Upload from '../components/Upload'
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
    <div className='bg-gradient-to-b from-[#aad0f5] via-[#c4def9] to-white flex justify-center items-center'>
    <img src={"/AssetsHome/bg-image.png"} className='absolute w-[50rem]' alt="bg-img" />
    <Upload/>
    <img src={"/AssetsHome/Chatbot.svg"} alt="chatbot" className='w-28 z-50 absolute bottom-3 right-3 sm:bottom-10 sm:right-10'/>
    <div className='absolute top-16 right-10 z-50 hidden lg:block font-medium'>
      <span className='border-r border-black px-3 hover:underline hover:underline-offset-4'>Consult Doctor</span>
      <span className='ml-4 hover:underline hover:underline-offset-4'><NavLink to={"/queries"}>Talk with Bot</NavLink></span>
    </div>
    </div>
    </>
  )
}