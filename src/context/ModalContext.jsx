import { createContext, useState } from 'react'

export const ModalContext = createContext()

export const ModalProvider = (props) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <ModalContext.Provider value={[openModal, setOpenModal]}>
      {props.children}
    </ModalContext.Provider>
  )
}
