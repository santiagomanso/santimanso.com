import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from './components/Container'
import Nav from './components/Nav'

import { AnimationProvider } from './context/animationContext'
import { ModalProvider } from './context/ModalContext'
import HomeScreen from './screens/HomeScreen'
import PortfolioScreen from './screens/PortfolioScreen'
import SkillsScreen from './screens/SkillsScreen'

function App() {
  return (
    <AnimationProvider>
      <ModalProvider>
        <BrowserRouter>
          <Container>
            <Routes>
              <Route exact path='/' element={<HomeScreen />} />
              <Route path='/portfolio' element={<PortfolioScreen />} />
              <Route path='/skills' element={<SkillsScreen />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ModalProvider>
    </AnimationProvider>
  )
}

export default App
