import { createContext, useState } from 'react'

export const ModalContext = createContext()

export const ModalProvider = (props) => {
  const [animation1, setAnimation1] = useState(false)

  return (
    <ModalContext.Provider value={[animation1, setAnimation1]}>
      {props.children}
    </ModalContext.Provider>
  )
}
