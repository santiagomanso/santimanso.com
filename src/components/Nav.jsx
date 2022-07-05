import React from 'react'

const Nav = () => {
  return (
    <nav className='hidden lg:flex flex-col fixed h-screen justify-center -left-36  select-none gap-3 z-20'>
      <div className='flex w-52 h-20 justify-end items-center bg-black/50 px-4 rounded-tr-2xl rounded-br-2xl hover:translate-x-36 transition-all duration-1000'>
        <span className='text-white text-2xl tracking-widest'>
          HOME
          <i className='ml-3 pl-2 fa-solid fa-house text-white text-3xl'></i>
        </span>
      </div>
      <div className='flex w-52 h-20 justify-end items-center bg-black/50 px-4 rounded-tr-2xl rounded-br-2xl hover:translate-x-36 transition-all duration-1000'>
        <span className='text-white text-2xl tracking-widest'>
          LINKED
          <i className='ml-3 pl-2 fab fa-linkedin text-white text-3xl'></i>
        </span>
      </div>
      <div className='flex w-52 h-20 justify-end items-center bg-black/50 px-4 rounded-tr-2xl rounded-br-2xl hover:translate-x-36 transition-all duration-1000'>
        <span className='text-white text-2xl tracking-widest'>
          GITHUB
          <i className='ml-3 pl-2 fab fa-github text-white text-3xl'></i>
        </span>
      </div>
      <div className='flex w-52 h-20 justify-end items-center bg-black/50 px-4 rounded-tr-2xl rounded-br-2xl hover:translate-x-36 transition-all duration-1000'>
        <span className='text-white text-2xl tracking-widest'>
          CURRICULUM
          <i className='ml-3 pl-2 fa-solid fa-file text-white text-3xl'></i>
        </span>
      </div>
    </nav>
  )
}

export default Nav
