import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import { ModalProvider } from './context/ModalContext'

import HomeScreen from './screens/HomeScreen'
import PortfolioScreen from './screens/PortfolioScreen'

function App() {
  return (
    <div className='w-screen h-screen flex justify-center  app'>
      <ModalProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route path='/portfolio' element={<PortfolioScreen />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </div>
  )
}

export default App
