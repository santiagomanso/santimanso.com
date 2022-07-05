import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center items-center '>
      <div className='flex flex-col items-center text-center gap-4 select-none p-4 sm:p-0'>
        <h1 className='text-white text-6xl lg:text-8xl tracking-wide'>
          hi, it's santiago manso castro
        </h1>
        <h2 className='text-secondary text-3xl lg:text-4xl tracking-wider'>
          berlin based web developer and designer
        </h2>
        <h2 className='text-secondary text-3xl lg:text-4xl tracking-wider'>
          let's do something special. hit me up
        </h2>
        <a
          href='/portfolio'
          className='mt-5 px-12 py-5 rounded-md border-solid border-2 border-white text-3xl text-white tracking-widest cta'
        >
          portfolio
        </a>
      </div>
    </div>
  )
}

export default Header
