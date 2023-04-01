import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimationContext } from '../context/animationContext'
import { headerInterface } from '../interfaces/headerInterface'
import TypeWriterEfffect from 'react-typewriter-effect'

const Header = ({ title, subtitle, typeWriterText }: headerInterface) => {
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

  return (
    <section
      className={` ${animation1} w-full flex flex-col tracking-wider select-none header__welcome`}
    >
      <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl'>{title}</h1>
            <TypeWriterEfffect
              textStyle={{
                fontFamily: 'Staatliches', //chooose your font
                fontWeight: 100,
                color: 'gray',
              }}
              cursorColor='#3F3D56'
              multiText={typeWriterText} //comes from props
              multiTextDelay={1000}
              typeSpeed={30}
              multiTextLoop
            />
          </div>
          <div className='hidden lg:flex flex-col items-center pr-[0.20rem] '>
            <a
              href='https://www.linkedin.com/in/santimanso/'
              target='_blank'
              rel='noreferrer'
              className=' flex items-baseline opacity-30 hover:opacity-100 gap-1 text-2xl group'
            >
              <label className='cursor-pointer scale-0 group-hover:scale-100 transition-all duration-[400ms] translate-x-14 group-hover:-translate-x-2 '>
                linked
              </label>
              <i className='cursor-pointer  text-white group-hover:text-[#0A66C2]  fa-brands fa-linkedin-in text-3xl group-hover:-rotate-[20deg] group-hover:scale-[1.5] transition-all ease-in duration-300 '></i>
            </a>
            <a
              href='https://github.com/santiagomanso'
              target='_blank'
              rel='noreferrer'
              className='flex items-center opacity-30 hover:opacity-100 gap-1 text-2xl group'
            >
              <label className='cursor-pointer scale-0 group-hover:scale-100 transition-all duration-[400ms] translate-x-14 group-hover:-translate-x-2 '>
                github
              </label>
              <i className='cursor-pointer text-white group-hover:text-[#fafafa]  fa-brands fa-github text-3xl group-hover:-rotate-[20deg] group-hover:scale-[1.5] transition-all ease-in duration-300'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row lg:items-center justify-between gap-3  text-4xl select-none '>
        <div
          onClick={handlerNavigate}
          className='flex justify-center mt-5 md:mt-0 items-center gap-3 group  transition-all ease-in-out duration-300 hover:cursor-pointer cta__home'
        >
          <span className='text-xl lg:text-3xl bg-purple-500/80 text-white/60 group-hover:text-white tracking-wide scale-100 group-hover:-translate-x-6 group-hover:scale-[1.2] group-hover:-translate-y-2 transition-all ease-in-out duration-300   px-8 py-2 rounded-lg'>
            my work
          </span>
          <i className='hidden md:inline fa-solid fa-display text-3xl text-white/60 group-hover:text-purple-500/80 group group-hover:rotate-[20deg] group-hover:scale-[1.5] transition-all ease-in duration-300 '></i>
        </div>
      </div>
    </section>
  )
}

export default Header
