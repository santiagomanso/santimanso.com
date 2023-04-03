import { useContext } from 'react'
import { headerInterface } from '../interfaces/headerInterface'
import TypeWriterEfffect from 'react-typewriter-effect'
import { AnimationContext } from '../context/animationContext'

const Header = ({ title, typeWriterText }: headerInterface) => {
  const { animationSwipe } = useContext(AnimationContext)
  return (
    <section
      className={` ${animationSwipe} flex flex-col tracking-wider select-none header__welcome`}
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
                textAlign: 'center',
              }}
              cursorColor='#3F3D56'
              multiText={typeWriterText} //comes from props
              multiTextDelay={8000}
              typeSpeed={80}
              changeDeleteSpeed={2000}
              multiTextLoop
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
