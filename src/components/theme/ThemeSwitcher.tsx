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
      className='flex transition-colors cursor-pointer rounded-full'
    >
      <div
        className={`${
          isSelected === 'dark' ? 'translate-x-full ' : 'translate-x-0 '
        } transition-all ease-in-out duration-300 flex justify-center items-center`}
      >
        <i
          className={`${
            isSelected === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'
          }  text-xl`}
        ></i>
      </div>
    </div>
  )
}

export default ThemeSwitcher
