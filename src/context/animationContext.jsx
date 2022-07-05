import { createContext, useState } from 'react'

export const AnimationContext = createContext()

export const AnimationProvider = (props) => {
  const [animation1, setAnimation1] = useState(
    'animate__animated animate__fadeInLeft'
  )
  const [animation2, setAnimation2] = useState(
    'animate__animated animate__fadeInLeft'
  )
  const [animation3, setAnimation3] = useState(
    'animate__animated animate__slideInRight'
  )
  return (
    <AnimationContext.Provider
      value={[
        animation1,
        animation2,
        animation3,
        setAnimation1,
        setAnimation2,
        setAnimation3,
      ]}
    >
      {props.children}
    </AnimationContext.Provider>
  )
}
