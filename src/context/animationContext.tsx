import { ReactNode } from 'react'
import { createContext, useState } from 'react'

interface AnimationContextI {
  animationSwipe: string
  animationFade: string
  setAnimationSwipe: (animation: string) => void
  setAnimationFade: (animation: string) => void
}

const initContext: AnimationContextI = {
  animationSwipe: '',
  animationFade: '',
  setAnimationSwipe: () => console.log('Not initialized'),
  setAnimationFade: () => console.log('Not initialized'),
}

export const AnimationContext = createContext<AnimationContextI>(initContext)

type Props = {
  children: ReactNode
}

export const AnimationProvider = ({ children }: Props) => {
  const [animationSwipe, setAnimationSwipe] = useState(
    'animate__animated animate__fadeInUp',
  )
  const [animationFade, setAnimationFade] = useState(
    'animate__animated animate__fadeIn',
  )

  const data = {
    animationSwipe,
    animationFade,
    setAnimationSwipe,
    setAnimationFade,
  }

  return (
    <AnimationContext.Provider value={data}>
      {children}
    </AnimationContext.Provider>
  )
}
