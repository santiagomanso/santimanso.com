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
        </div>
      </div>
    </section>
  )
}

export default Header
