import { useContext } from 'react'
import { AnimationContext } from '../../context/animationContext'
import { mainContainerProps } from '../../interfaces/mainContainerInterface'

const MainContainer = ({
  children,
  border,
  gap,
  justifyCenter,
  padding,
}: mainContainerProps) => {
  const { animationFade } = useContext(AnimationContext)
  return (
    <section
      className={` ${animationFade} bg-gradient-to-tl
       from-gray-200 via-gray-300 to-gray-500  lg:rounded-sm  transition-colors ease-in-out duration-500  dark:from-zinc-900/70 dark:to-neutral-700 flex flex-col   h-full lg:h-3/4 lg:p-0 $ overflow-auto items-center
       ${padding ? padding : 'px-5 py-4'}
      ${border ? 'border border-black dark:border-neutral-900' : ''}
      ${gap ? gap : 'gap-10'}
      ${justifyCenter ? ' justify-center' : 'justify-start'}
      `}
    >
      {children}
    </section>
  )
}

export default MainContainer
