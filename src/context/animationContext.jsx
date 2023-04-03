import { createContext, useState } from 'react'

export const AnimationContext = createContext()

export const AnimationProvider = ({ children }) => {
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
