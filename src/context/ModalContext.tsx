import { ReactNode, createContext, useState } from 'react'

interface ModalContextI {
  openModal: boolean
  setOpenModal: (bool: boolean) => void
}

const initContext: ModalContextI = {
  openModal: false,
  setOpenModal: () => console.log('Modal context not initialized'),
}

export const ModalContext = createContext<ModalContextI>(null!)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [openModal, setOpenModal] = useState(false)

  const data = {
    openModal,
    setOpenModal,
  }

  if (!data) {
    throw new Error('Modal context not initialized')
  } else {
    return (
      <ModalContext.Provider value={data}>{children}</ModalContext.Provider>
    )
  }
}
