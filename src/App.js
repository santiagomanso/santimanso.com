import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from './components/Container'
import Nav from './components/Nav'

import { AnimationProvider } from './context/animationContext'
import { ModalProvider } from './context/ModalContext'
import HomeScreen from './screens/HomeScreen'
import PortfolioScreen from './screens/PortfolioScreen'

function App() {
  return (
    <AnimationProvider>
      <ModalProvider>
        <BrowserRouter>
          <Container>
            <Nav />
            <Routes>
              <Route exact path='/' element={<HomeScreen />} />
              <Route path='/portfolio' element={<PortfolioScreen />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ModalProvider>
    </AnimationProvider>
  )
}

export default App
