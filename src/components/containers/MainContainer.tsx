import { useContext } from 'react'
import { AnimationContext } from '../../context/animationContext'
import { mainContainerProps } from '../../interfaces/mainContainerInterface'

const MainContainer = ({ children, border }: mainContainerProps) => {
  const { animationFade } = useContext(AnimationContext)
  return (
    <section
      className={` ${animationFade} bg-gradient-to-tl
       from-gray-200 via-gray-300 to-gray-500 lg:rounded-md   transition-colors ease-in-out duration-500  dark:from-zinc-900/70 dark:to-neutral-700 flex flex-col items-center justify-center px-5 py-4 h-full lg:h-3/4 lg:p-0 gap-10
      ${border ? 'border border-black dark:border-neutral-900' : ''}
      `}
    >
      {children}
    </section>
  )
}

export default MainContainer
