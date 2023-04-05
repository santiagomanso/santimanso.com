import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ModalProvider } from './context/ModalContext'
import HomeScreen from './pages/HomeScreen'
import PortfolioScreen from './pages/PortfolioScreen'
import AppContainer from './components/containers/AppContainer'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import { AnimationProvider } from './context/animationContext'
import About from './pages/About'

function App() {
  return (
    <AnimationProvider>
      <ModalProvider>
        <AppContainer>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/about' element={<About />} />
              <Route path='/portfolio' element={<PortfolioScreen />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </AppContainer>
      </ModalProvider>
    </AnimationProvider>
  )
}

export default App
