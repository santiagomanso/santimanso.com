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
       from-gray-200 via-gray-300 to-gray-500  lg:rounded-sm  transition-colors ease-in-out duration-500  dark:from-zinc-900/70 dark:to-neutral-700 flex flex-col   h-full lg:h-3/4 lg:p-0 -z-1 overflow-auto items-center
       ${padding ? padding : 'px-2 py-5 lg:px-5 lg:py-4'}
      ${border ? 'border border-neutral-900 dark:border-neutral-700' : ''}
      ${gap ? gap : 'gap-10'}
      ${justifyCenter ? ' justify-center' : 'justify-start'}
      `}
    >
      {children}
    </section>
  )
}

export default MainContainer
