import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimationContext } from '../context/animationContext'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Header = () => {
  const [
    animation1,
    animation2,
    animation3,
    setAnimation1,
    setAnimation2,
    setAnimation3,
  ] = useContext(AnimationContext)

  const navigate = useNavigate()

  const handlerNavigate = () => {
    setAnimation1('animate__animated animate__backOutRight')
    setAnimation2('animate__animated animate__fadeOutLeft')
    setTimeout(() => {
      navigate('/portfolio')
      setAnimation1('animate__animated animate__fadeInLeft')
      setAnimation2('animate__animated animate__fadeInLeft')
    }, 1500)
  }
  const { text } = useTypewriter({
    words: ['Web Developer', 'Student'],
    loop: false, // Infinit
    delaySpeed: 2000,
    typeSpeed: 200,
    deleteSpeed: 90,
  })

  return (
    <div className={`${animation1}  `}>
      <div className=' bg-blue-500/50 hidden'>
        <h1>santiago manso castro</h1>
        <h2>
          <span className='text-white italic tracking-wide'>
            {text}
            <Cursor cursorStyle={'_'} />
          </span>
        </h2>
        <h2>
          let's <span>create</span> something special
        </h2>
        <button
          onClick={handlerNavigate}
          className='py-3  rounded-md border-solid border-2 border-white text-3xl text-white tracking-widest cta'
        >
          portfolio
        </button>
      </div>
    </div>
  )
}

export default Header
