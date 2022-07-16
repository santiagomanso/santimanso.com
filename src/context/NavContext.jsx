import { createContext, useState } from 'react'

export const NavContext = createContext()

export const NavProvider = (props) => {
  const [openNav, setOpenNav] = useState(false)
  const [showNav, setShowNav] = useState(true)

  return (
    <NavContext.Provider value={[openNav, showNav, setOpenNav, setShowNav]}>
      {props.children}
    </NavContext.Provider>
  )
}
