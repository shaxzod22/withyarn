import React from 'react'
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import Logo from './../assets/img/logo.svg'

const Header = () => {
  const [isOpen,setIsOpen] = useState(true)
  return (
    <header className='bg-[#28293E] text-white relative w-full'>
      <div className= "container flex items-center justify-between   py-4">
        <a href="/">
          <img src={Logo} alt="logo" width={152} height={48} />
        </a>

        <ul className={`absolute md:p-0 md:top-0 top-full right-0 md:flex-row flex-col items-start md:items-center gap-0 md:bg-transparent bg-slate-400 rounded-md md:text-white text-black  w-2/3 pl-4 pt-4 md:w-auto text-2xl md:flex md:h-auto md:static h-screen ${isOpen?'flex':'hidden'}  md:gap-16 lg:gap-24`}>
          <li><a href="/a">About</a></li>
          <li><a href="/s">Services</a></li>
          <li><a href="/p">Pricing</a></li>
          <li><a href="/b">Blog</a></li>
          <li><button className='lg:ml-[92px] bg-[#28293E] md:bg-transparent mt-4 md:mt-0  text-xl md:text-2xl  ml-0 md:ml-[-10px] w-[130px]  text-white border-zinc-300 uppercase font-extrabold border md:w-[138px] md:h-[48px] h-[40px] rounded-md'>Contact</button></li>
        </ul>

        <button onClick={()=>setIsOpen(!isOpen)} className='md:hidden border p-2 rounded-md'>{isOpen?<IoCloseSharp className='scale-125' />:<AiOutlineMenu className='scale-125' />}</button>
      </div>
    </header>
  )
}

export default React.memo(Header)
