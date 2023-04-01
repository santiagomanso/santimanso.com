import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import { AnimationProvider } from './context/animationContext'
import { ModalProvider } from './context/ModalContext'
import { NavProvider } from './context/NavContext'
import HomeScreen from './pages/HomeScreen'
import PortfolioScreen from './pages/PortfolioScreen'
import SkillsScreen from './pages/SkillsScreen'
import CurriculumScreen from './pages/CurriculumScreen'
import AppContainer from './components/containers/AppContainer'
import Footer from './components/footer/Footer'

function App() {
  return (
    <AnimationProvider>
      <ModalProvider>
        <NavProvider>
          <AppContainer>
            <BrowserRouter>
              <Nav />
              <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/portfolio' element={<PortfolioScreen />} />
                <Route path='/skills' element={<SkillsScreen />} />
                <Route path='/curriculum' element={<CurriculumScreen />} />
              </Routes>
            </BrowserRouter>
            <Footer />
          </AppContainer>
        </NavProvider>
      </ModalProvider>
    </AnimationProvider>
  )
}

export default App