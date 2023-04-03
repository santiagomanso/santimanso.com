import React, { useEffect, useState } from 'react'

const ThemeSwitcher = ({ setOpen }: ThemeSwitcherProps) => {
  const [isSelected, setIsSelected] = useState('dark')
  const handleSelect = () => {
    if (setOpen) {
      setOpen(false)
    }
    isSelected === 'dark' ? setIsSelected('light') : setIsSelected('dark')
  }

  useEffect(() => {
    isSelected === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [isSelected])

  return (
    <div
      onClick={handleSelect}
      className='flex w-20 h-10 bg-gray-200 dark:bg-purple-700 outline outline-1 transition-colors  rounded-full'
    >
      <div
        className={`${
          isSelected === 'dark'
            ? 'translate-x-full text-purple-600'
            : 'translate-x-0 text-yellow-600'
        } transition-all ease-in-out duration-300 w-10 bg-gray-200 border border-gray-700 dark:border-secondary dark:bg-gray-800 rounded-full flex justify-center items-center`}
      >
        <i
          className={`${
            isSelected === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'
          } text-2xl`}
        ></i>
      </div>
    </div>
  )
}

export default ThemeSwitcher
